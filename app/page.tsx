"use client"

import type React from "react"
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import axios from 'axios';
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card"
import 'react-toastify/dist/ReactToastify.css';
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
import { toast } from "react-toastify";

export default function ParivarSaathiLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    help: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/consult/send-consult`, formData);
      if (response.status === 201) {
        toast.success("Form submitted successfully! We will contact you soon.");
        setFormData({ name: "", phone: "", help: "" });
        setLoading(false);
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      toast.error("Error Submitting form:");
    }
    console.log("Form submitted:", formData);
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919230965019", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919230965019", "_self")
  }

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-orange-100 to-blue-50 py-12 md:py-20 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="/couple.png"
                  alt="Pixar-style illustration of a couple with a counselor"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg block mx-auto lg:mx-0"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Heart className="text-orange-500 w-6 h-6" />
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Trying to Conceive? Get Trusted Guidance Today
                  </h1>
                </div>
                <p className="text-lg text-gray-600">
                  Parivar Saathi supports your journey to parenthood with the right care, clinics & clarity — without stress or confusion.
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
                    <SelectItem value="IVF Treatment">IVF Treatment</SelectItem>
                    <SelectItem value="Second Opinion">Second Opinion</SelectItem>
                    <SelectItem value="Information Only">Information Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className={`w-full h-12 ${loading ? "opacity-50 cursor-not-allowed" : ""} bg-purple-900 hover:bg-purple-800 text-white font-semibold`}
                  disabled={loading}
                >
                  {loading ? "Sending Enquiry...": "Talk to a Counselor"}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  <Shield className="inline w-4 h-4 mr-1 text-brand-purple" />
                  ✅ 100% Confidential | ✅ First Consultation Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits (Icon Row) */}
      <section id="benefits" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center">
              <div className="w-12 h-12 p-3 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <Headphones className="w-6 h-6 text-orange-500" />
              </div>
              <p className="font-semibold text-gray-800">Free Fertility Counseling</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 p-3 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <UserCheck className="w-6 h-6 text-blue-500" />
              </div>
              <p className="font-semibold text-gray-800">Empaneled with Trusted IVF Clinics</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 p-3 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <p className="font-semibold text-gray-800">Transparent, Affordable Treatment</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 p-3 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="font-semibold text-gray-800">1000+ Couples Guided Across India</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              onClick={handleWhatsApp} 
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 h-auto"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Talk to Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works (3-Step Flow) */}
      <section id="how-it-works" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Parivar Saathi Supports You</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">1</span>
                <Calendar className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800">📋 Share your details with us</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</span>
                <MessageCircle className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">💬 Get a call from our trained fertility counselor</h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</span>
                <Stethoscope className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-800">🏥 Visit the most suitable clinic as per your case</h3>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              onClick={handleCall}
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Start with a Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Parivar Saathi */}
      <section id="why-choose" className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Families Trust Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-800">🎯 Personalized guidance for your condition</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800">👩‍⚕️ Only ethical, verified clinics in our network</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-800">💸 No hidden costs — clear explanation before referral</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <HeartHandshake className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-800">🌱 Community-first mission, not commercial push</h3>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button 
              onClick={handleCall}
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Free Counseling Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Real Stories. Real Smiles.</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-xl shadow-md relative">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                   <Image src="/sections/2.png" alt="Quote" width={50} height={50} className="rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Neha & Sumit</h3>
                  <p className="text-gray-600">Delhi</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "After 3 years of confusion, Parivar Saathi gave us clarity and hope. We are finally expecting!"
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl shadow-md relative">
              <div className="flex items-center mb-4">
                 <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                   <Image src="/sections/4.png" alt="Quote" width={50} height={50} className="rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Priya R.</h3>
                  <p className="text-gray-600">Jamshedpur</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "They explained IVF so simply. Not a single clinic had done that before."
              </p>
            </div>
          </div>
{/*           
          <div className="mt-10 text-center">
            <Button 
              onClick={handleCall}
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              I Want to Talk to Someone Who Understands
            </Button>
          </div> */}
        </div>
      </section>

      {/* Clinic Network / Areas We Cover */}
      <section id="regions" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Helping Families Across India</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-orange-500">DL</span>
              </div>
              <h3 className="font-semibold text-gray-800">Delhi</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-yellow-600">PB</span>
              </div>
              <h3 className="font-semibold text-gray-800">Punjab</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-green-500">HR</span>
              </div>
              <h3 className="font-semibold text-gray-800">Haryana</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-500">BH</span>
              </div>
              <h3 className="font-semibold text-gray-800">Bihar</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-purple-500">JH</span>
              </div>
              <h3 className="font-semibold text-gray-800">Jharkhand</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-pink-500">WB</span>
              </div>
              <h3 className="font-semibold text-gray-800">West Bengal</h3>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              onClick={handleCall}
              className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-3 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Find Support Near You
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Your Journey Deserves Clarity, Not Confusion.</h2>
            <p className="text-xl text-gray-600 mb-8">Let us be your Saathi.</p>

            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800 mb-8 relative">
              <div className="absolute -top-10 right-10">
                <Image 
                  src="/sections/counselor.jpg" 
                  alt="Smiling counselor" 
                  width={100} 
                  height={100} 
                  className="rounded-full border-4 border-white shadow-lg" 
                />
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
                    <SelectItem value="IVF Treatment">IVF Treatment</SelectItem>
                    <SelectItem value="Second Opinion">Second Opinion</SelectItem>
                    <SelectItem value="Information Only">Information Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className={`w-full h-12 ${loading ? "opacity-50 cursor-not-allowed" : ""} bg-purple-800 hover:bg-purple-700 text-white font-semibold`}
                  disabled={loading}
                >
                  {loading ? "Sending Enquiry...": "Talk to a Counselor Now"}
                </Button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button onClick={handleCall} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto">
                <Phone className="w-5 h-5" />
                Call Us
              </Button>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-auto">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-gray-100 px-8 py-3 h-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Email Us
              </Button>
            </div>

            <p className="text-gray-500 text-sm">We respond within 1 hour. No spam. No fees.</p>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <div
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full size-14 shadow-lg flex justify-center items-center cursor-pointer"
        >
          <FaWhatsapp size={30} />
        </div>
      </div>

      {/* Add bottom padding for mobile to account for sticky footer */}
      <div className="h-14 md:hidden"></div>
      <ToastContainer />
    </div>
  )
}
