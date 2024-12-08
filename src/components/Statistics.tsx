import { ChefHatIcon as Chef, Utensils, Clock, Users } from 'lucide-react'

const stats = [
  { icon: Chef, value: 420, label: 'Professional Chefs' },
  { icon: Utensils, value: 320, label: 'Items Of Food' },
  { icon: Clock, value: 30, label: 'Years Of Experienced' },
  { icon: Users, value: 220, label: 'Happy Customers' },
]

export default function Statistics() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6 bg-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <stat.icon className="w-12 h-12 text-orange-500 mb-2" />
            <span className="text-3xl font-bold">{stat.value}{stat.label === 'Years Of Experienced' && '+'}</span>
            <span className="text-sm text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

