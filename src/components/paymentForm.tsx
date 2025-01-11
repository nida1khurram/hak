'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm() {
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (error) {
        setError(error.message ?? 'An unknown error occurred')
        setProcessing(false)
      } else {
        // Here you would typically send the paymentMethod.id to your server
        // to create a charge or save the payment method for future use
        console.log('PaymentMethod:', paymentMethod)
        setSucceeded(true)
        setProcessing(false)
        router.push('/shipping')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || processing || succeeded}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  )
}

export default function PaymentForm() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Fetch the client secret from your server
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: JSON.parse(localStorage.getItem('cart') || '[]') }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

