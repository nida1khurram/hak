import { NextResponse } from 'next/server'
import Shippo from 'shippo'

const shippo = Shippo(process.env.SHIPPO_API_KEY!)

export async function POST(request: Request) {
  const { rateId, address } = await request.json()

  try {
    const transaction = await shippo.transaction.create({
      rate: rateId,
      label_file_type: 'PDF',
      async: false,
    })

    if (transaction.status !== 'SUCCESS') {
      throw new Error('Failed to create shipment')
    }

    return NextResponse.json({ trackingNumber: transaction.tracking_number })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

