"use client""use client"



import { useState } from "react"import { useState } from "react"

import Link from "next/link"import Link from "next/link"

import { usePathname } from "next/navigation"import { usePathname } from "next/navigation"

import { Menu, X, Github } from "lucide-react"import { Menu, X, Github } from "lucide-react"

import { Button } from "@/components/ui/button"import { Button } from "@/components/ui/button"

import { ModeToggle } from "@/components/mode-toggle"import { ModeToggle } from "@/components/mode-toggle"



export function Header() {export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()  const pathname = usePathname()



  const navigation = [  const navigation = [

    { name: "Home", href: "/" },    { name: "Home", href: "/" },

    { name: "Meal Plan", href: "/meal-plan" },    { name: "Meal Plan", href: "/meal-plan" },

    { name: "Digital Twin", href: "/digital-twin" },    { name: "Digital Twin", href: "/digital-twin" },

    { name: "About", href: "/about" },    { name: "About", href: "/about" },

  ]  ]



  const isActive = (path: string) => pathname === path  const isActive = (path: string) => pathname === path



  return (  return (

    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">      <div className="container flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">

        <div className="flex items-center gap-2">        <div className="flex items-center gap-2">

          <Link href="/" className="flex items-center gap-2">          <Link href="/" className="flex items-center gap-2">

            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-500">NutriTwin</span>            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-500">NutriTwin</span>

          </Link>          </Link>

        </div>        </div>



        <nav className="hidden md:flex md:items-center md:gap-6">        {/* Desktop navigation */}

          {navigation.map((item) => (        <nav className="hidden md:flex md:items-center md:gap-6">

            <Link          {navigation.map((item) => (

              key={item.name}            <Link

              href={item.href}              key={item.name}

              className={`text-sm font-medium transition-colors ${              href={item.href}

                isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"              className={	ext-sm font-medium transition-colors }

              }`}            >

            >              {item.name}

              {item.name}            </Link>

            </Link>          ))}

          ))}        </nav>

        </nav>

        <div className="flex items-center gap-2">

        <div className="flex items-center gap-2">          <Button

          <Button            variant="ghost"

            variant="ghost"            size="icon"

            size="icon"            asChild

            asChild            className="hover:bg-emerald-50 dark:hover:bg-emerald-950"

            className="hover:bg-emerald-50 dark:hover:bg-emerald-950"          >

          >            <a

            <a              href="https://github.com/susanth04/Personalised-nutrition-planner"

              href="https://github.com/susanth04/Personalised-nutrition-planner"              target="_blank"

              target="_blank"              rel="noopener noreferrer"

              rel="noopener noreferrer"              aria-label="View source on GitHub"

              aria-label="View source on GitHub"            >

            >              <Github className="w-5 h-5" />

              <Github className="w-5 h-5" />            </a>

            </a>          </Button>

          </Button>          <ModeToggle />

          <ModeToggle />

          {/* Mobile menu button */}

          <Button          <Button

            variant="ghost"            variant="ghost"

            size="icon"            size="icon"

            className="md:hidden"            className="md:hidden"

            onClick={() => setIsMenuOpen(!isMenuOpen)}            onClick={() => setIsMenuOpen(!isMenuOpen)}

            aria-label="Toggle menu"            aria-label="Toggle menu"

          >          >

            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}

          </Button>          </Button>

        </div>        </div>

      </div>      </div>



      {isMenuOpen && (      {/* Mobile navigation */}

        <div className="md:hidden">      {isMenuOpen && (

          <div className="px-2 pt-2 pb-3 space-y-1 border-t">        <div className="md:hidden">

            {navigation.map((item) => (          <div className="px-2 pt-2 pb-3 space-y-1 border-t">

              <Link            {navigation.map((item) => (

                key={item.name}              <Link

                href={item.href}                key={item.name}

                className={`block px-3 py-2 text-base font-medium rounded-md ${                href={item.href}

                  isActive(item.href)                className={lock px-3 py-2 text-base font-medium rounded-md }

                    ? "bg-gray-100 dark:bg-gray-800 text-foreground"                onClick={() => setIsMenuOpen(false)}

                    : "text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-foreground"              >

                }`}                {item.name}

                onClick={() => setIsMenuOpen(false)}              </Link>

              >            ))}

                {item.name}          </div>

              </Link>        </div>

            ))}      )}

          </div>    </header>

        </div>  )

      )}}

    </header>
  )
}
