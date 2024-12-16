import CheckoutPage from '@/components/checkOut/checkOut'
import { PHeader } from '@/components/header/t2'
import { TopHeader } from '@/components/header/topHeader'
import React from 'react'

export default function Checkout() {
  return (
    <div>
       {/* import header */}
                <TopHeader />
                <PHeader title='Checkout Page'/>
                 {/* import header end*/}
<CheckoutPage />

    </div>
  )
}
