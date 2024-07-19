import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"


function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Site Logo */}
<Link href="/">
<h1 className="text-4xl font-semibold">
    Shah<span className="text-accent">.</span></h1></Link>
    {/* Desktop Nav */}
    <div className="hidden xl:flex items-center gap-8">
    <Nav />
    <Link href="/contact">
        <Button>Hire Me</Button>
    </Link>
    </div>

    {/* Mobile Nav */}
    <div className="xl:hidden">
        Mobile Nav
    </div>
        </div>
    </header>
  )
}

export default Header