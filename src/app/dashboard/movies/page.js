import CardContent from '@/components/CardContent'
import { ALLOWED_PERIODS, IGNORED_FOR_RATINGS } from '@/utils/constants'
import fetchTautulli from '@/utils/fetchTautulli'
import fetchTmdb from '@/utils/fetchTmdb'
import { bytesToSize, removeAfterMinutes } from '@/utils/formatting'

async function getMovies(period) {
  const moviesData = await fetchTautulli('get_home_stats', {
    stat_id: 'top_movies',
    stats_count: 6,
    stats_type: 'duration',
    time_range: period,
  })
  const movies = moviesData.response?.data?.rows

  let ratingKeys = []
  movies.map((movie) => {
    ratingKeys.push(movie.rating_key)
  })
  const additionalData = await Promise.all(
    ratingKeys.map(async (key, i) => {
      let movie = await fetchTautulli('get_metadata', {
        rating_key: key,
      })
      const data = movie.response?.data
      let rating = data.audience_rating

      // WORKAROUND: Tautulli not properly rating for deleted items
      if (!rating && !IGNORED_FOR_RATINGS.includes(movies[i].title)) {
        movie = await fetchTmdb('search/movie', {
          query: movies[i].title,
          first_air_date_year: movies[i].year,
        })
        rating = movie.results[0].vote_average
      }

      return {
        isDeleted: Object.keys(data).length === 0,
        rating: parseFloat(rating).toFixed(1),
      }
    })
  )

  movies.map((movie, i) => {
    movie.isDeleted = additionalData[i].isDeleted
    movie.rating = additionalData[i].rating
  })

  return movies
}

async function getTotalDuration(period) {
  const totalDuration = await fetchTautulli('get_history', {
    section_id: 3,
    after: period,
    length: 0,
  })

  return removeAfterMinutes(totalDuration.response?.data?.total_duration)
}

async function getTotalSize() {
  const totalSize = await fetchTautulli('get_library_media_info', {
    section_id: 3,
    length: 0,
  })

  return bytesToSize(totalSize.response?.data.total_file_size)
}

export default async function Movies({ searchParams }) {
  let period = ALLOWED_PERIODS['30days']
  if (ALLOWED_PERIODS[searchParams.period]) {
    period = ALLOWED_PERIODS[searchParams.period]
  }

  const [movies, totalDuration, totalSize] = await Promise.all([
    getMovies(period.daysAgo),
    getTotalDuration(period.string),
    getTotalSize(),
  ])

  return (
    <CardContent
      title='Movies'
      items={movies}
      totalDuration={totalDuration}
      totalSize={totalSize}
      prevCard='dashboard/shows'
      nextCard='dashboard/audio'
      page='2 / 4'
      type='movies'
    />
  )
}