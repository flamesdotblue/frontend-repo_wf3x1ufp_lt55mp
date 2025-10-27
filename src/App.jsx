import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessDirectory from './components/BusinessDirectory'
import Events from './components/Events'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To empower local businesses through advocacy, resources, and
                  connection—building a thriving, inclusive economy for all.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">What We Do</h3>
                <p className="mt-2 text-gray-600">
                  We offer networking events, educational programs, marketing
                  exposure, and a supportive community dedicated to growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Who We Serve</h3>
                <p className="mt-2 text-gray-600">
                  From startups to industry leaders, we support organizations of
                  every size across every sector in our region.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BusinessDirectory />
        <Events />
        <section id="join" className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold">Ready to grow with us?</h2>
            <p className="mt-3 text-gray-600">
              Join hundreds of members collaborating to strengthen our local economy.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700"
              >
                Become a Member
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50"
              >
                See Upcoming Events
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} City Chamber of Commerce. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
