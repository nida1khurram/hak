import { PHeader } from '@/components/header/t2'
import { TopHeader } from '@/components/header/topHeader'
import ShoppingCart from '@/components/shoppingCart/shoppingCart1'
import React from 'react'

export default function CartPage() {
  return (
    <div>
 {/* import header */}
          <TopHeader />
          <PHeader title='Shopping cart'/>
           {/* import header end*/}
<ShoppingCart />

    </div>
  )
}
