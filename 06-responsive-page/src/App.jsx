import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Analytics from "./components/Analytics"
import Newsletter from "./components/Newsletter"

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero className="w-50% h-50%"/>
      <Analytics/>
      <Newsletter/>
    </div>
  )
}

export default App