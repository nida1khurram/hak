// import { NextResponse } from 'next/server'
// import Shippo from 'shippo'

// const shippo = Shippo(process.env.SHIPPO_API_KEY!)

// export async function POST(request: Request) {
//   const { address } = await request.json()

//   try {
//     const shipment = await shippo.shipment.create({
//       address_from: {
//         name: 'Shawn Ippotle',
//         street1: '215 Clayton St.',
//         city: 'San Francisco',
//         state: 'CA',
//         zip: '94117',
//         country: 'US',
//       },
//       address_to: {
//         name: address.name,
//         street1: address.address,
//         city: address.city,
//         state: address.state,
//         zip: address.postcode,
//         country: address.country,
//       },
//       parcels: [{
//         length: '5',
//         width: '5',
//         height: '5',
//         distance_unit: 'in',
//         weight: '2',
//         mass_unit: 'lb',
//       }],
//     })

//     const rates = shipment.rates.map((rate: any) => ({
//       id: rate.object_id,
//       provider: rate.provider,
//       service: rate.servicelevel.name,
//       rate: rate.amount,
//       days: rate.days,
//     }))

//     return NextResponse.json({ rates })
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }

