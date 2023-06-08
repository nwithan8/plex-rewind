'use client'

import Card from '@/components/Card'
import DashboardNav from '@/components/DashboardNav'
import PageTitle from '@/components/PageTitle'
import PeriodSelect from '@/components/PeriodSelect'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='w-full max-w-2xl xl:max-w-5xl'>
      <PageTitle title='Dashboard' />
      <DashboardNav />
      {/* TODO: Add separate Audiobooks page */}
      <Card className='xl:min-h-[572px]'>{children}</Card>
      <PeriodSelect />
    </div>
  )
}