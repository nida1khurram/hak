
import { TopHeader } from '@/components/header/topHeader'
import { PHeader } from '@/components/header/t2'
import ShippingProcess from '@/components/shipping'

export default function ShippingPage() {
  return (
    <div>
      <TopHeader />
      <PHeader title='Shipping'/>
      <ShippingProcess />
    </div>
  )
}
