import Navbar from './components/Navbar'
import BrandMarquee from './components/BrandMarquee'

import Home from './pages/Home'
import About from './pages/About'
import Popular from './pages/Popular'

export default function App() {
  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">

      <Navbar />
      
      <main>
        <Home />
        <Popular />
        <BrandMarquee />
        <About />
      </main>

    </div>
  )
}