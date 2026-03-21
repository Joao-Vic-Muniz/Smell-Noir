import Navbar from './components/Navbar'
import BrandMarquee from './components/BrandMarquee'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">

      <Navbar />
      
      <main>
        <Home />
        <Catalog />
        <BrandMarquee />
        <About />
      </main>

    </div>
  )
}