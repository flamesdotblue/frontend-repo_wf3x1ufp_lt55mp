import { Calendar, MapPin } from 'lucide-react'

const EVENTS = [
  {
    title: 'First Friday Networking Breakfast',
    date: 'Nov 1, 2025',
    time: '8:00 – 9:30 AM',
    location: 'Riverside Hotel Ballroom',
    description: 'Kickstart your month with coffee, connections, and member spotlights.'
  },
  {
    title: 'Small Business Workshop: Marketing on a Budget',
    date: 'Nov 12, 2025',
    time: '5:30 – 7:00 PM',
    location: 'Innovation Hub',
    description: 'Practical tactics for growing your brand with limited resources.'
  },
  {
    title: 'Holiday Charity Gala',
    date: 'Dec 6, 2025',
    time: '6:00 – 10:00 PM',
    location: 'City Arts Center',
    description: 'An evening of celebration and giving back to our community.'
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="mt-2 text-gray-600">
            Learn, connect, and grow with programs designed for all stages of business.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {EVENTS.map((e) => (
            <div key={e.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-700">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-semibold">{e.date} • {e.time}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{e.title}</h3>
              <p className="mt-2 text-gray-600">{e.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4" /> {e.location}
              </div>
              <div className="mt-6">
                <a
                  href="#join"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
