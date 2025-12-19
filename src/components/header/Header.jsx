import Trips from './Trips'
import Navbar from './Navbar'
import Content from './Content'
import BuilderText from './BuilderText'
import Light from './Light'

function Header() {
  return (
    <header className="min-h-screen overflow-hidden flex flex-col">
      <Trips />
      <Light />
      <Navbar />
      <Content />
      <BuilderText />
    </header>
  )
}

export default Header
