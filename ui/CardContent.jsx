// TODO: Remove this
'use client'

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  MusicalNoteIcon,
  PlayCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { animateSlideUp } from '../utils/motion.js'
import { secondsToTime } from '../utils/time.js'

function CardContent({
  children,
  statTitle,
  statCategory,
  subtitle,
  page,
  prevCard,
  nextCard,
  items,
  users,
  totalDuration,
  ratings,
  type,
}) {
  return (
    <>
      <h2 className="flex items-center mb-1 text-sm font-medium text-black uppercase sm:mb-2 sm:text-xl">
        <span>{statTitle}</span>
        <span className="mx-1 sm:mx-2">-</span>
        <span className="font-bold text-center">{statCategory}</span>
      </h2>

      {totalDuration && (
        <div className="text-xs font-medium uppercase sm:text-sm text-slate-900">
          All <span className="font-bold">{statCategory}</span>
          <span className="mx-1 sm:mx-2">-</span>
          <span className="normal-case">{totalDuration}</span>
        </div>
      )}

      {subtitle && (
        <div className="text-xs font-medium uppercase sm:text-sm text-slate-900">
          {subtitle}
        </div>
      )}

      {children}

      {items && (
        <ul className="mt-4 sm:mt-6">
          {items.map((item, i) => {
            return (
              <motion.li
                key={i}
                className="flex items-center gap-3 mb-3 sm:mb-5 last:mb-0 transiton-all"
                variants={animateSlideUp}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.1, duration: 0.2 }}
              >
                <div className="relative flex-shrink-0 w-20 h-28">
                  <Image
                    fill
                    className="object-cover object-top"
                    alt={users ? item.user + ' avatar' : item.title + ' poster'}
                    src={`${
                      process.env.NEXT_PUBLIC_TAUTULLI_URL
                    }/pms_image_proxy?img=${
                      users ? item.user_thumb : item.thumb
                    }&width=300`}
                    sizes="7rem"
                    priority
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold sm:text-2xl">
                    <span className="mr-2 text-teal-300">#{i + 1}</span>
                    {users ? item.user : item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs italic sm:gap-3 sm:text-base">
                    {item.year && (type === 'movies' || type === 'shows') && (
                      <div className="flex items-center gap-1 sm:gap-2">
                        <CalendarDaysIcon className="w-5 text-slate-900" />
                        {item.year}
                      </div>
                    )}
                    {/* Plays */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      {type === 'music' ? (
                        <MusicalNoteIcon className="w-5 text-slate-900" />
                      ) : (
                        <PlayCircleIcon className="w-5 text-slate-900" />
                      )}
                      <span>{item.total_plays}</span>
                      <span>{item.total_plays === 1 ? 'play' : 'plays'}</span>
                    </div>
                    {/* Duration */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <ClockIcon className="w-5 text-slate-900" />
                      {secondsToTime(item.total_duration)}
                    </div>
                    {/* Ratings */}
                    {ratings && (
                      <>
                        {ratings[i] && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            <StarIcon className="w-5 text-slate-900" />
                            {ratings[i]}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ul>
      )}

      <div className="flex items-center justify-between pt-5 mt-auto text-sm">
        <div className="flex-1">
          {prevCard && (
            <Link href={prevCard} className="block w-5">
              <ArrowLongLeftIcon className="text-teal-300" />
            </Link>
          )}
        </div>
        <span className="flex-1 text-center">{page}</span>
        <div className="flex-1 text-right">
          {nextCard && (
            <Link href={nextCard} className="block w-5 ml-auto">
              <ArrowLongRightIcon className="text-teal-300" />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default CardContent
