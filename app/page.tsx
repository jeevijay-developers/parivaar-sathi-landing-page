"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Stethoscope,
  Users,
  Phone,
  MessageCircle,
  Shield,
  UserCheck,
  Calendar,
  TestTube,
  HeartHandshake,
  Headphones,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar/Navbar"

export default function ParivarSaathiLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    help: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919876543210", "_self")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-brand-lilac/20 to-brand-yellow/20 py-12 md:py-20 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="/couple.png"
                  alt="Happy Indian couple embracing with hope"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  You're Not Alone in Your Fertility Journey
                </h1>
                <p className="text-lg text-gray-600">
                  Free guidance, ethical referrals, and emotional support for IVF patients.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
                <Input
                  placeholder="Phone/WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
                <Select onValueChange={(value) => setFormData({ ...formData, help: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="What do you need help with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ivf">IVF Treatment</SelectItem>
                    <SelectItem value="second-opinion">Second Opinion</SelectItem>
                    <SelectItem value="information">Information Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="w-full h-12 bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold"
                >
                  Get Free Consultation
                </Button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  <Shield className="inline w-4 h-4 mr-1 text-brand-purple" />
                  100% Confidential | No Charges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Parivar Saathi */}
      <section id="why-choose" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Parivar Saathi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-lilac/30 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Ethical Guidance</h3>
              <p className="text-gray-600">No bias. No pressure.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-yellow/30 rounded-full flex items-center justify-center mx-auto">
                <Stethoscope className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-800">Free IVF Counseling</h3>
              <p className="text-gray-600">Talk to a trained fertility counselor.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange/30 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Verified Clinics</h3>
              <p className="text-gray-600">Based on quality, not profit.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-lilac/30 rounded-full flex items-center justify-center mx-auto">
                <HeartHandshake className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Handholding Support</h3>
              <p className="text-gray-600">From first call to treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Pain Point Section */}
      <section className="py-16 bg-brand-yellow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="text-gray-700 italic">"What if we can't afford IVF?"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="text-gray-700 italic">"How do we know which clinic is best for us?"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="text-gray-700 italic">"We feel lost and confused..."</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let us guide you. Parivar Saathi offers a free, trusted pathway.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Families Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "We didn't know where to start. Parivar Saathi's team patiently explained every step. Today, we feel
                  confident and hopeful."
                </p>
                <div className="font-semibold text-gray-800">– Meera & Raj, Kolkata</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "The emotional support was invaluable. They connected us with the right clinic and guided us
                  throughout our journey."
                </p>
                <div className="font-semibold text-gray-800">– Priya & Amit, Mumbai</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "Free counseling helped us understand our options. No pressure, just genuine care and support."
                </p>
                <div className="font-semibold text-gray-800">– Sunita & Vikash, Delhi</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-brand-lilac/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-lilac/30 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Free IVF Counselling</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-yellow/30 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-800">Ethical Clinic Referral</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange/30 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Follow-up & Appointment Help</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-lilac/30 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Local OPD Camp Support</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-yellow/30 rounded-full flex items-center justify-center mx-auto">
                <TestTube className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-gray-800">Diagnostic Test Referrals</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-lilac/30 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-gray-800">Emotional Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start your journey with confidence.</h2>

            <div className="bg-white p-8 rounded-xl text-gray-800 mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" className="h-12" />
                <Input placeholder="Phone/WhatsApp Number" className="h-12" />
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="What do you need help with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ivf">IVF Treatment</SelectItem>
                    <SelectItem value="second-opinion">Second Opinion</SelectItem>
                    <SelectItem value="information">Information Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="w-full h-12 bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold"
                >
                  Get Free Consultation
                </Button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Counsellor Now
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="bg-white text-brand-purple border-gray-500 hover:bg-gray-100 px-8 py-3 h-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request a Callback
              </Button>
            </div>

            <p className="text-brand-lilac text-sm">We respond within 1 hour. No spam. No fees.</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-40">
        <div className="flex">
          <Button onClick={handleCall} variant="ghost" className="flex-1 h-14 rounded-none">
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="flex-1 h-14 rounded-none bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>

      {/* Add bottom padding for mobile to account for sticky footer */}
      <div className="h-14 md:hidden"></div>
    </div>
  )
}
