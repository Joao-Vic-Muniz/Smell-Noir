import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">

      <Navbar />
      
      <main>
        <Home />
      </main>

    </div>
  )
}