import { Currency } from "lucide-react";
import { NextResponse } from "next/server"

const stripe = require('stripe')('sk_test_51QforJHaBmlNnpRW8Iz021v5Nej3LVzc432FUuDoZzAROzaTGLjvinqEe77rYrOimKxN1RKmP7VbGXwEe53qdSN300H0rI1nHe');

export async function GET(){
    
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://example.com/success',
      line_items: [
        {
          price_data: {
                currency: "USD",
                product_data:{
                    name: "Mango ",
                },
                unit_amount: 1000,
          }, 
          quantity: 1,
        },
      ],
      mode: 'payment',
    });

    return NextResponse.json({
        message: session,
    })
}