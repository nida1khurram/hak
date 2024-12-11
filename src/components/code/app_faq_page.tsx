'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const questions = [
    {
      id: 1,
      question: 'How we serve food?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    },
    {
      id: 2,
      question: 'How can we get in touch with you?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    },
    {
      id: 3,
      question: 'How is our food quality?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    },
    {
      id: 4,
      question: 'What will be delivered? And When?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    },
    {
      id: 5,
      question: 'How do we give home delivery?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    },
    {
      id: 6,
      question: 'Is this restaurant 24 hours open?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat opto natus sunt delectus assumenda, odit expedicia eos molestiae ipsa totam quidem?'
    }
  ]

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Questions Looks Here</h1>
        <p className="text-center text-gray-600 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>

        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="border rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
              >
                <span className="font-medium">{q.question}</span>
                {openQuestion === q.id ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openQuestion === q.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}