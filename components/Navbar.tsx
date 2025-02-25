import { Download } from "lucide-react"
import Navitem, { navItemInterface } from "./Navitem"

export default function Navbar() {
    const items: navItemInterface[] =[
        {
            url: "#about",
            label:"About Me"
        },
        {
            url: "#skills",
            label:"Experience"
        },
        {
            url: "#projects",
            label:"Projects"
        },
    ]
  return (
    <nav className="fixed text-2xl py-2 w-full z-10 hidden md:block bg-white shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-gray-700">Leonardo Tironi</span>
          </div>
          <div className="flex items-center gap-x-4">
            {items.map((item, index) => (
                <Navitem key ={index} url ={item.url} label = {item.label} />
            ))}
            <a href="/curriculo.pdf" className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

