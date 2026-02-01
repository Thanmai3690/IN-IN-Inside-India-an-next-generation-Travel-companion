import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Heart,
  Camera,
  Gift,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  MessageSquare,
  Backpack,
  Image,
  ShoppingBag,
  Route,
  Languages,
  Bell,
  Navigation as NavigationIcon,
  Zap,
  CloudRain,
  UserCheck,
} from "lucide-react";

export function HomePage() {
  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "AI Tour Guide Chatbot",
      description:
        "Your personal travel assistant that suggests destinations, budget, and preferences",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      link: "/ai-guide",
    },
    {
      icon: Backpack,
      title: "Packing Assistant",
      description:
        "Smart packing list based on weather, trip duration, and flight rules",
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "/packing",
    },
    {
      icon: Camera,
      title: "Photo & Social Media Tools",
      description:
        "Pose suggestions, perfect timing, auto captions & hashtags",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      link: "/photo-tools",
    },
    {
      icon: Gift,
      title: "Souvenir Smart",
      description:
        "Find perfect gifts with budget filters and marketplace recommendations",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      link: "/souvenir-smart",
    },
    {
      icon: Route,
      title: "Smart Route Planner",
      description:
        "Optimize your itinerary with crowd alerts and time management",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      link: "/route-planner",
    },
    {
      icon: Languages,
      title: "Translation Helper",
      description: "Break language barriers with instant translation support",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      link: "/translator",
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "Nearby hospitals, police stations with live maps",
      color: "text-red-500",
      bgColor: "bg-red-50",
      link: "/emergency",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never forget packing, gifts, or important travel tasks",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      link: "/reminders",
    },
  ];

  const travelFeatures = [
    {
      icon: CloudRain,
      title: "Best Weather Conditions",
      description: "Know exactly when to visit for perfect weather",
      color: "text-sky-500",
    },
    {
      icon: Clock,
      title: "Crowd Smart Alerts",
      description: "Avoid crowds and visit at the best times",
      color: "text-violet-500",
    },
    {
      icon: DollarSign,
      title: "Budget Filters",
      description: "Stay within budget with smart recommendations",
      color: "text-emerald-500",
    },
    {
      icon: MapPin,
      title: "Food Spot Finder",
      description: "Discover authentic local cuisine nearby",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Plans adjust to weather and crowd changes",
      color: "text-yellow-500",
    },
    {
      icon: UserCheck,
      title: "Personalized Preferences",
      description: "Tailored to your travel style and interests",
      color: "text-teal-500",
    },
  ];

  const destinations = [
  {
    state: "goa",
    image: "/images/goa.jpeg",
  },
  {
    state: "rajasthan",
    image: "/images/rajasthan.jpeg",
  },
  {
    state: "himachal-pradesh",
    image: "/images/himachal.jpeg",
  },
  {
    state: "andhra-pradesh",
    image: "/images/andhra.jpeg",
  },
];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Goa Beach Trip",
      text: "This app made my Goa trip unforgettable! The photo spot suggestions were perfect, and I found amazing local souvenirs for my family. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Rajasthan Heritage Tour",
      text: "Exploring Jaipur and Udaipur was magical! The AI chatbot helped me plan everything, and the packing list was spot-on. Best travel companion ever!",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      location: "Himachal Adventure",
      text: "From Manali to Shimla, every moment was captured perfectly. The translation helper was a lifesaver, and crowd alerts saved so much time!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-orange-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm text-rose-700">
                Your Next-Gen Travel Companion
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                Travel Smarter.
              </span>
              <br />
              <span className="text-gray-900">Feel Deeper.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Remember Forever.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Not just a guide ❌ — A travel companion that helps you capture
              perfect moments 📸, discover meaningful souvenirs 🎁, and create
              memories that last a lifetime ❤️
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plan">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-lg px-8"
                >
                  Start Planning Your Trip
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2 border-rose-300 hover:bg-rose-50"
                >
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/img1.jpeg"
              alt="India"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Other Apps vs. IN-IN
            </h2>
            <p className="text-xl text-gray-600">
              We don't just guide you somewhere — we help you feel the place ❤️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-gray-200">
              <div className="text-center">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold mb-4">Other Travel Apps</h3>
                <ul className="space-y-3 text-left text-gray-600">
                  <li className="flex gap-2">
                    <span>✈️</span>
                    <span>Flights and hotels</span>
                  </li>
                  <li className="flex gap-2">
                    <span>📍</span>
                    <span>List of attractions</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🗺️</span>
                    <span>Static guides</span>
                  </li>
                  <li className="flex gap-2">
                    <span>📱</span>
                    <span>Generic recommendations</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-4 text-rose-600">
                  IN-IN
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex gap-2">
                    <span>❤️</span>
                    <span>Emotional connection to places</span>
                  </li>
                  <li className="flex gap-2">
                    <span>📸</span>
                    <span>Perfect photo moments (where & when)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🎁</span>
                    <span>Meaningful souvenirs for loved ones</span>
                  </li>
                  <li className="flex gap-2">
                    <span>🏠</span>
                    <span>Bringing memories home</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✨</span>
                    <span>AI that adapts to real-time conditions</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Complete Travel Companion
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create unforgettable memories
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-6 h-full hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-rose-200 ${feature.bgColor}`}
                >
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button
                      size="sm"
                      className="mt-4 bg-rose-500 text-white hover:bg-rose-600"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Travel Features
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your travel experience with these features
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-rose-200">
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore Dream Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover places that will steal your heart
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/explore">
                  <Card className="overflow-hidden cursor-pointer group">
                    <div className="relative h-64">
                      <img
                        src={destination.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Travel with Heart?
            </h2>
            <p className="text-xl mb-8 text-rose-50">
              Start planning your most memorable journey today. Create moments
              that last forever.
            </p>
            <Link to="/plan">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8"
              >
                Plan Your Dream Trip
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                <span className="text-lg font-bold">IN-IN</span>
              </div>
              <p className="text-gray-400">
                Your companion for meaningful travel experiences.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/explore" className="hover:text-white">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/photo-spots" className="hover:text-white">
                    Photo Spots
                  </Link>
                </li>
                <li>
                  <Link to="/souvenirs" className="hover:text-white">
                    Souvenirs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Plan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/plan" className="hover:text-white">
                    Trip Planner
                  </Link>
                </li>
                <li>
                  <Link to="/itinerary" className="hover:text-white">
                    My Itinerary
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 IN-IN. Travel In. Feel In</p>
          </div>
        </div>
      </footer>
    </div>
  );
}