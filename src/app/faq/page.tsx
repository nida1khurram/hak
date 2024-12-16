import FaqPage from '@/components/faq/faq'
import { PHeader } from '@/components/header/t2'
import { TopHeader } from '@/components/header/topHeader'
import React from 'react'

export default function Faq() {
  return (
    <div>
       {/* import header */}
                <TopHeader />
                <PHeader title='FAQ Page'/>
                 {/* import header end*/}
        <FaqPage />
    </div>
  )
}
