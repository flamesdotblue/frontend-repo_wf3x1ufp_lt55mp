import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Empowering Local Business
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Welcome to the City Chamber of Commerce
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We connect entrepreneurs, support small businesses, and champion
              economic growth across our region. Join a vibrant network of
              leaders building a stronger local economy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-blue-700"
              >
                Become a Member
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#directory"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-800 font-semibold hover:bg-gray-50"
              >
                Explore Directory
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 to-indigo-100 blur-3xl opacity-70" />
            <div className="relative rounded-2xl border bg-white shadow-lg p-6">
              <div className="grid grid-cols-3 gap-4">
                {["Networking", "Mentorship", "Advocacy", "Resources", "Events", "Growth"].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg border bg-gray-50 px-3 py-6 text-center text-sm font-semibold text-gray-700"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Chamber membership provides year-round value through programs and
                partnerships tailored to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
