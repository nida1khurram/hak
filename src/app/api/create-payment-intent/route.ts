// import { NextResponse } from 'next/server'
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2022-11-15',
// })

// export async function POST(request: Request) {
//   const { items } = await request.json()

//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   const total = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(total * 100), // Stripe expects amounts in cents
//       currency: 'usd',
//     })

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret })
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }
