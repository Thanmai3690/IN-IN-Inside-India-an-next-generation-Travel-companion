import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { useState } from "react";
import {
  MapPin,
  Search,
  Hospital,
  AlertCircle,
  Phone,
  Hotel,
  Utensils,
  ShoppingBag,
  Navigation,
  Coffee,
} from "lucide-react";
import { toast } from "sonner";

interface LiveMapProps {
  destination: string;
}

export function LiveMap({ destination }: LiveMapProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "emergency", label: "Emergency", icon: AlertCircle, color: "text-red-500" },
    { id: "hospital", label: "Hospitals", icon: Hospital, color: "text-blue-500" },
    { id: "police", label: "Police", icon: Phone, color: "text-indigo-500" },
    { id: "hotels", label: "Hotels", icon: Hotel, color: "text-purple-500" },
    { id: "restaurants", label: "Restaurants", icon: Utensils, color: "text-orange-500" },
    { id: "shopping", label: "Shopping", icon: ShoppingBag, color: "text-pink-500" },
    { id: "cafes", label: "Cafes", icon: Coffee, color: "text-amber-500" },
  ];

  const nearbyPlaces = {
    emergency: [
      { name: "Emergency Helpline", phone: "112", distance: "Available 24/7" },
      { name: "Tourist Police", phone: "1091", distance: "Available 24/7" },
      { name: "Ambulance", phone: "108", distance: "Available 24/7" },
    ],
    hospital: [
      { name: "City General Hospital", phone: "+91 1234567890", distance: "2.3 km" },
      { name: "Apollo Hospital", phone: "+91 1234567891", distance: "3.5 km" },
      { name: "Max Healthcare", phone: "+91 1234567892", distance: "4.1 km" },
    ],
    police: [
      { name: "City Police Station", phone: "100", distance: "1.8 km" },
      { name: "Tourist Police", phone: "1091", distance: "2.5 km" },
    ],
    hotels: [
      { name: "Luxury Hotel", phone: "+91 1234567893", distance: "1.2 km" },
      { name: "Mid-Range Inn", phone: "+91 1234567894", distance: "2.0 km" },
      { name: "Budget Stay", phone: "+91 1234567895", distance: "1.5 km" },
    ],
    restaurants: [
      { name: "Local Cuisine Restaurant", phone: "+91 1234567896", distance: "0.8 km" },
      { name: "Multi-Cuisine Diner", phone: "+91 1234567897", distance: "1.5 km" },
      { name: "Street Food Hub", phone: "+91 1234567898", distance: "0.5 km" },
    ],
    shopping: [
      { name: "Local Market", phone: "+91 1234567899", distance: "1.0 km" },
      { name: "Shopping Mall", phone: "+91 1234567800", distance: "2.5 km" },
      { name: "Handicrafts Store", phone: "+91 1234567801", distance: "1.3 km" },
    ],
    cafes: [
      { name: "Coffee House", phone: "+91 1234567802", distance: "0.6 km" },
      { name: "Artisan Cafe", phone: "+91 1234567803", distance: "1.1 km" },
      { name: "Rooftop Cafe", phone: "+91 1234567804", distance: "1.8 km" },
    ],
  };

  const handleCall = (phone: string, name: string) => {
    window.open(`tel:${phone}`);
    toast.success(`Calling ${name}...`);
  };

  const handleNavigate = (name: string) => {
    toast.success(`Opening navigation to ${name}...`);
    // In a real app, this would open Google Maps
  };

  const displayedPlaces = selectedCategory ? nearbyPlaces[selectedCategory as keyof typeof nearbyPlaces] : [];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-blue-500" />
          Live Map & Nearby Services
        </h3>
        <p className="text-gray-600">
          Find emergency services, hotels, restaurants, and more near you
        </p>
      </div>

      {/* Map Placeholder */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-80 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-32 h-32 text-blue-600" />
            </div>
          </div>
          <div className="text-center z-10">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
            <p className="text-2xl font-bold text-gray-700 mb-2">{destination}</p>
            <p className="text-gray-600">Select a category to explore nearby places</p>
            <Badge className="mt-4 bg-green-500">📍 Live Location Active</Badge>
          </div>
        </div>
      </Card>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search for places, services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
              selectedCategory === category.id
                ? "border-2 border-blue-500 bg-blue-50"
                : "hover:border-blue-300"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="text-center">
              <category.icon className={`w-8 h-8 mx-auto mb-2 ${category.color}`} />
              <p className="text-xs font-medium">{category.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Results */}
      {selectedCategory && (
        <div>
          <h4 className="text-lg font-bold mb-4">
            Nearby {categories.find(c => c.id === selectedCategory)?.label}
          </h4>
          <div className="space-y-3">
            {displayedPlaces.map((place, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-bold mb-1">{place.name}</h5>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {place.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {place.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCall(place.phone, place.name)}
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleNavigate(place.name)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Navigate
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Emergency Banner */}
      <Card className="p-4 bg-red-50 border-2 border-red-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-900 mb-2">Emergency Numbers</h4>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div>
                <p className="font-medium">Emergency</p>
                <a href="tel:112" className="text-red-600 font-bold">112</a>
              </div>
              <div>
                <p className="font-medium">Ambulance</p>
                <a href="tel:108" className="text-red-600 font-bold">108</a>
              </div>
              <div>
                <p className="font-medium">Tourist Police</p>
                <a href="tel:1091" className="text-red-600 font-bold">1091</a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
