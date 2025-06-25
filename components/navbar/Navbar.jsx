"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919876543210", "_self")
  }

  const navItems = [
    { label: "Home", href: "hero" },
    { label: "Why Choose Us", href: "why-choose" },
    { label: "Services", href: "services" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image
            src={'/logo/logo.svg'}
            width={100}
            height={100}
            alt="logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 hover:text-brand-purple transition-colors duration-200 font-medium group px-2 py-1"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/20 px-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">Call Us</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 px-3"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100/50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white/98 backdrop-blur-md border-t overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-purple hover:bg-brand-purple/5 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 w-full space-y-3 pb-2">
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 font-medium"
                style={{width: "6rem"}}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all duration-300 font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}