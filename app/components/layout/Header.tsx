"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = {
  ro: [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Despre Noi", href: "/despre" },
    { name: "Contact", href: "/contact" },
  ],
  en: [
    { name: "Home", href: "/en" },
    { name: "Services", href: "/en/services" },
    { name: "About Us", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
  ],
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const currentNav = isEnglish ? navigation.en : navigation.ro

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isEnglish ? "/en" : "/"} className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="True ManPower Logo"
            width={40}
            height={40}
            className="hover-lift"
          />
          <span className="text-xl font-bold text-primary">True ManPower</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {currentNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium ${
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {isEnglish ? "🇬🇧 EN" : "🇷🇴 RO"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={isEnglish ? pathname.replace("/en", "") : `/en${pathname}`}>
                  {isEnglish ? "🇷🇴 Română" : "🇬🇧 English"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="button-gradient">
            {isEnglish ? "Contact Us" : "Contactează-ne"}
          </Button>
        </div>
      </nav>
    </header>
  )
} 