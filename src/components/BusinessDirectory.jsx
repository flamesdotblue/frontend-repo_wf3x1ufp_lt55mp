import { useMemo, useState } from 'react'
import { Building2, MapPin, Search } from 'lucide-react'

const BUSINESSES = [
  {
    name: 'Riverside Cafe',
    category: 'Food & Beverage',
    location: 'Downtown',
    website: 'https://example.com',
    description: 'Artisan coffee, fresh pastries, and community vibes.'
  },
  {
    name: 'Peak Fitness Studio',
    category: 'Health & Wellness',
    location: 'Uptown',
    website: 'https://example.com',
    description: 'Personal training, group classes, and nutrition coaching.'
  },
  {
    name: 'BrightSide Marketing',
    category: 'Professional Services',
    location: 'Midtown',
    website: 'https://example.com',
    description: 'Brand strategy, social media, and creative design.'
  },
  {
    name: 'GreenLeaf Landscaping',
    category: 'Home & Garden',
    location: 'Northside',
    website: 'https://example.com',
    description: 'Sustainable outdoor spaces for homes and businesses.'
  },
  {
    name: 'TechNest IT',
    category: 'Technology',
    location: 'Innovation District',
    website: 'https://example.com',
    description: 'Managed IT services, cloud solutions, and cybersecurity.'
  },
]

export default function BusinessDirectory() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(BUSINESSES.map(b => b.category)))], [])

  const filtered = useMemo(() => {
    return BUSINESSES.filter((b) => {
      const matchesQuery = `${b.name} ${b.category} ${b.location} ${b.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesCategory = category === 'All' || b.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <section id="directory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-end md:justify-between md:gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Business Directory</h2>
            <p className="mt-2 text-gray-600">
              Discover and support local businesses across our community.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, category, or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="sm:w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <a
              key={b.name}
              href={b.website}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-blue-50 text-blue-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-blue-700">
                      {b.name}
                    </h3>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-1">
                      {b.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{b.description}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" /> {b.location}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
