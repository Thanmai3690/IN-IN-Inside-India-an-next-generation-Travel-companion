
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useState } from "react";
import { motion } from "motion/react";
import { Route, MapPin, Clock, Users, AlertTriangle, Sun, Cloud, Utensils, Camera, Navigation as Nav } from "lucide-react";

export function RoutePlannerPage() {
  const [destination, setDestination] = useState("goa");
  const [days, setDays] = useState("5");

  const sampleItineraries = {
    goa: {
      day1: {
        morning: {
          place: "Baga Beach",
          time: "7:00 AM - 10:00 AM",
          crowd: "Low",
          weather: "Pleasant",
          activities: ["Beach walk", "Water sports", "Breakfast at beach shacks"],
          foodSpot: "Britto's - Famous for breakfast",
          photoTime: "Golden hour - Best at 7-8 AM",
        },
        afternoon: {
          place: "Fort Aguada",
          time: "11:00 AM - 1:00 PM",
          crowd: "Moderate",
          weather: "Hot",
          activities: ["Fort exploration", "Lighthouse visit", "Historic photography"],
          foodSpot: "Nearby Candolim restaurants",
          photoTime: "Avoid harsh noon sun",
        },
        evening: {
          place: "Anjuna Flea Market",
          time: "4:00 PM - 7:00 PM",
          crowd: "High",
          weather: "Pleasant",
          activities: ["Shopping", "Street food", "Live music"],
          foodSpot: "Market stalls - Try Goan sausages",
          photoTime: "Golden hour - 5:30-6:30 PM",
        },
      },
      day2: {
        morning: {
          place: "Old Goa Churches",
          time: "8:00 AM - 11:00 AM",
          crowd: "Low-Moderate",
          weather: "Pleasant",
          activities: ["Basilica of Bom Jesus", "Se Cathedral", "Heritage walk"],
          foodSpot: "Cafe Bodega - Portuguese cuisine",
          photoTime: "Morning light is perfect",
        },
        afternoon: {
          place: "Panjim City Walk",
          time: "12:00 PM - 3:00 PM",
          crowd: "Moderate",
          weather: "Hot",
          activities: ["Fontainhas heritage walk", "Latin Quarter", "Galleries"],
          foodSpot: "Viva Panjim - Authentic Goan food",
          photoTime: "Colorful buildings - any time",
        },
        evening: {
          place: "Miramar Beach Sunset",
          time: "5:30 PM - 7:30 PM",
          crowd: "High",
          weather: "Beautiful",
          activities: ["Sunset viewing", "Beach activities"],
          foodSpot: "Beach shacks for dinner",
          photoTime: "Sunset - 6:15-6:45 PM",
        },
      },
    },
    "himachal-pradesh": {
      day1: {
        morning: {
          place: "Solang Valley",
          time: "7:00 AM - 12:00 PM",
          crowd: "Moderate",
          weather: "Cool",
          activities: ["Cable car ride", "Paragliding", "Mountain views"],
          foodSpot: "Local dhabas on highway",
          photoTime: "Morning light on mountains",
        },
        afternoon: {
          place: "Rohtang Pass (if open)",
          time: "1:00 PM - 4:00 PM",
          crowd: "High (weekends)",
          weather: "Cold",
          activities: ["Snow activities", "Photography", "Yak rides"],
          foodSpot: "Carry packed lunch",
          photoTime: "Afternoon - snow is bright",
        },
        evening: {
          place: "Old Manali",
          time: "5:00 PM - 8:00 PM",
          crowd: "Moderate",
          weather: "Pleasant",
          activities: ["Cafes", "Shopping", "Local culture"],
          foodSpot: "Cafe 1947 - Italian & Continental",
          photoTime: "Evening vibes in cafes",
        },
      },
    },
  };

  const emergencyServices = {
    goa: {
      hospitals: [
        { name: "Goa Medical College", location: "Bambolim", distance: "15 km", phone: "0832-2458700" },
        { name: "Apollo Victor Hospital", location: "Margao", distance: "35 km", phone: "0832-2735800" },
      ],
      police: [
        { name: "Calangute Police Station", location: "Calangute", distance: "5 km", phone: "0832-2277320" },
        { name: "Panjim Police Station", location: "Panjim", distance: "12 km", phone: "0832-2225831" },
      ],
    },
  };

  const itinerary = sampleItineraries[destination]?.day1 || sampleItineraries.goa.day1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Route className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-orange-700 font-medium">
                Smart Route Planner
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Intelligent Route Planner
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Optimized itineraries with crowd alerts and time management
            </p>
          </motion.div>

          {/* Destination Selector */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <label className="block text-sm font-medium mb-2">📍 Select Destination</label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="goa">🏖️ Goa</SelectItem>
                  <SelectItem value="himachal-pradesh">🏔️ Himachal Pradesh</SelectItem>
                  <SelectItem value="rajasthan">🏰 Rajasthan</SelectItem>
                </SelectContent>
              </Select>
            </Card>

            <Card className="p-6">
              <label className="block text-sm font-medium mb-2">📅 Number of Days</label>
              <Select value={days} onValueChange={setDays}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="5">5 days</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          </div>

          {/* Sample Day Itinerary */}
          <h2 className="text-2xl font-bold mb-4">📅 Day 1 - Optimized Itinerary</h2>

          <div className="space-y-6">
            {/* Morning */}
            <Card className="p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Morning</h3>
                </div>
                <Badge className="bg-green-500">{itinerary.morning.crowd} Crowd</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-lg">{itinerary.morning.place}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>{itinerary.morning.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>Crowd: {itinerary.morning.crowd}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-sky-500" />
                    <span>Weather: {itinerary.morning.weather}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-pink-500" />
                      Photo Time
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.morning.photoTime}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-orange-500" />
                      Food Spot
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.morning.foodSpot}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold mb-2">Activities:</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary.morning.activities.map((activity: string, idx: number) => (
                    <Badge key={idx} variant="outline">{activity}</Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Afternoon */}
            <Card className="p-6 border-l-4 border-l-orange-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold">Afternoon</h3>
                </div>
                <Badge className="bg-amber-500">{itinerary.afternoon.crowd} Crowd</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-lg">{itinerary.afternoon.place}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>{itinerary.afternoon.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>Crowd: {itinerary.afternoon.crowd}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-sky-500" />
                    <span>Weather: {itinerary.afternoon.weather}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-pink-500" />
                      Photo Time
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.afternoon.photoTime}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-orange-500" />
                      Food Spot
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.afternoon.foodSpot}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold mb-2">Activities:</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary.afternoon.activities.map((activity: string, idx: number) => (
                    <Badge key={idx} variant="outline">{activity}</Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Evening */}
            <Card className="p-6 border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-bold">Evening</h3>
                </div>
                <Badge className="bg-red-500">{itinerary.evening.crowd} Crowd</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-lg">{itinerary.evening.place}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>{itinerary.evening.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>Crowd: {itinerary.evening.crowd}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-sky-500" />
                    <span>Weather: {itinerary.evening.weather}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-pink-500" />
                      Photo Time
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.evening.photoTime}</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-orange-500" />
                      Food Spot
                    </p>
                    <p className="text-sm text-gray-600">{itinerary.evening.foodSpot}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold mb-2">Activities:</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary.evening.activities.map((activity: string, idx: number) => (
                    <Badge key={idx} variant="outline">{activity}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Crowd Smart Alert */}
          <Card className="p-6 mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold">Crowd Smart Alert 🚨</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Our AI monitors real-time conditions and adjusts your plan automatically:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>☔ Rain Alert: Alternative indoor activities suggested</li>
              <li>👥 High Crowd: Visit timing adjusted to less crowded hours</li>
              <li>🌤️ Weather Change: Best photo timing updated automatically</li>
              <li>🚧 Road Block: Alternative routes provided instantly</li>
            </ul>
          </Card>

          {/* Emergency Services */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">🚨 Emergency Services Nearby</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-3 text-lg flex items-center gap-2">
                  🏥 Hospitals
                </h3>
                <div className="space-y-3">
                  {emergencyServices.goa.hospitals.map((hospital, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold">{hospital.name}</p>
                      <p className="text-sm text-gray-600">{hospital.location} • {hospital.distance}</p>
                      <p className="text-sm text-blue-600">📞 {hospital.phone}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-3 text-lg flex items-center gap-2">
                  👮 Police Stations
                </h3>
                <div className="space-y-3">
                  {emergencyServices.goa.police.map((police, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold">{police.name}</p>
                      <p className="text-sm text-gray-600">{police.location} • {police.distance}</p>
                      <p className="text-sm text-blue-600">📞 {police.phone}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
