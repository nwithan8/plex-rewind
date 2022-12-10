import CardTop from '../../components/CardTop/CardTop'
import fetchStats from '../../utils/fetchStats'

function MostWatchedMovies({ movies }) {
  return (
    <CardTop
      statTitle="Most watched"
      statCategory="movies"
      page="2/4"
      items={movies}
      period="Last 30 days"
      prevCard="/rewind/top-tv"
      nextCard="/rewind/top-artists"
      className="bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800"
    />
  )
}

export async function getStaticProps() {
  let movies = await fetchStats('get_home_stats')

  movies = movies.response.data
    // Get only movies
    .filter((stat) => stat.stat_id === 'top_movies')[0]
    // Keep top 5
    .rows.slice(0, 5)
    // Sort by view duration (desc)
    .sort((a, b) => b.total_duration - a.total_duration)

  return {
    props: {
      movies,
    },
  }
}

export default MostWatchedMovies