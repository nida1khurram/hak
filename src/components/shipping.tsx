'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ShippingRate {
  id: string
  provider: string
  service: string
  rate: string
  days: number
}

export default function ShippingProcess() {
  const [rates, setRates] = useState<ShippingRate[]>([])
  const [selectedRate, setSelectedRate] = useState<string | null>(null)
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Fetch shipping rates from your server (which will use Shippo API)
    fetch('/api/shipping-rates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: JSON.parse(localStorage.getItem('checkoutData') || '{}') }),
    })
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
  }, [])

  const handleShipmentCreation = async () => {
    if (!selectedRate) return

    const response = await fetch('/api/create-shipment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rateId: selectedRate,
        address: JSON.parse(localStorage.getItem('checkoutData') || '{}'),
      }),
    })

    const data = await response.json()
    if (data.trackingNumber) {
      setTrackingNumber(data.trackingNumber)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shipping Options</h1>
      {rates.map((rate) => (
        <div key={rate.id} className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="shippingRate"
              value={rate.id}
              checked={selectedRate === rate.id}
              onChange={() => setSelectedRate(rate.id)}
              className="mr-2"
            />
            <span>
              {rate.provider} - {rate.service} (${rate.rate}) - Estimated {rate.days} days
            </span>
          </label>
        </div>
      ))}
      <button
        onClick={handleShipmentCreation}
        disabled={!selectedRate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Create Shipment
      </button>
      {trackingNumber && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Tracking Information</h2>
          <p>Tracking Number: {trackingNumber}</p>
          {/* You can add a link to track the shipment here */}
        </div>
      )}
    </div>
  )
}

