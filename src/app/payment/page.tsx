import { TopHeader } from '@/components/header/topHeader'
import { PHeader } from '@/components/header/t2'
import PaymentForm from '@/components/paymentForm'

export default function PaymentPage() {
  return (
    <div>
      <TopHeader />
      <PHeader title='Payment'/>
      <PaymentForm />
    </div>
  )
}

