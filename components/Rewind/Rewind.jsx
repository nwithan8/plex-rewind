import { useEffect, useState } from 'react'
import CardHeading from '../CardHeading/CardHeading'
import CardTop from '../CardTop/CardTop'
import RewindTitle from '../RewindTitle/RewindTitle'

function Rewind({ rewind, returnHome }) {
  const [showTotals, setShowTotals] = useState(true)
  const [showTv, setShowTv] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showMusic, setShowMusic] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [showTotals, showTv, showMovies, showMusic])

  return (
    <>
      <RewindTitle returnHome={returnHome} />

      {showTv ? (
        <CardTop
          statTitle="Watch time"
          statCategory="TV Shows"
          page="2 / 4"
          prevCard={() => {
            setShowTv(false)
            setShowTotals(true)
          }}
          nextCard={() => {
            setShowTv(false)
            setShowMovies(true)
          }}
          className="bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800"
          subtitle="Rauno T"
        >
          <div className="flex flex-col justify-center flex-1 pb-12">
            <CardHeading>
              <span className="text-teal-300">TV Shows</span>
              &nbsp;took up&nbsp;
              <span className="inline-block text-3xl font-semibold text-black">
                {rewind.tv.duration}
              </span>
              &nbsp;of that time.
            </CardHeading>
          </div>
        </CardTop>
      ) : showMovies ? (
        <CardTop
          statTitle="Watch time"
          statCategory="Movies"
          page="3 / 4"
          prevCard={() => {
            setShowMovies(false)
            setShowTv(true)
          }}
          nextCard={() => {
            setShowMovies(false)
            setShowMusic(true)
          }}
          className="bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800"
          subtitle="Rauno T"
        >
          <div className="flex flex-col justify-center flex-1 pb-12">
            <CardHeading>
              <span className="inline-block text-3xl font-semibold text-black">
                {rewind.movies.duration}
              </span>
              &nbsp;of your time was spent watching&nbsp;
              <span className="text-teal-300">Movies</span>
              &nbsp;on&nbsp;
              <span className="text-yellow-500">Plex</span>
              &nbsp;this year.
            </CardHeading>
          </div>
        </CardTop>
      ) : showMusic ? (
        <CardTop
          statTitle="Listen time"
          statCategory="Music"
          page="4 / 4"
          prevCard={() => {
            setShowMusic(false)
            setShowMovies(true)
          }}
          className="bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800"
          subtitle="Rauno T"
        >
          <div className="flex flex-col justify-center flex-1 pb-12">
            <CardHeading>
              And to top it all off, you listened to&nbsp;
              <span className="inline-block text-3xl font-semibold text-black">
                {rewind.music.duration}
              </span>
              &nbsp;of&nbsp;
              <span className="text-teal-300">Music</span>
              &nbsp;on&nbsp;
              <span className="text-yellow-500">Plex</span>.
            </CardHeading>
          </div>
        </CardTop>
      ) : (
        <CardTop
          statTitle="Watch time"
          statCategory="Total"
          page="1 / 4"
          nextCard={() => {
            setShowTotals(false)
            setShowTv(true)
          }}
          className="bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800"
          subtitle="Rauno T"
        >
          <div className="flex flex-col justify-center flex-1 pb-12">
            <CardHeading>
              You&apos;ve spent a <span className="text-teal-300">Total</span>
              &nbsp;of&nbsp;
              <span className="inline-block text-3xl font-semibold text-black">
                {rewind.totals.duration}
              </span>
              &nbsp;on&nbsp;
              <span className="text-yellow-500">Plex</span>
              &nbsp;this year!
            </CardHeading>
          </div>
        </CardTop>
      )}
    </>
  )
}

export default Rewind