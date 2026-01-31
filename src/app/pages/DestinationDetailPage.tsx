import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { LiveMap } from "@/app/components/LiveMap";
import { CaptionGenerator } from "@/app/components/CaptionGenerator";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Star,
  Utensils,
  Hotel,
  Camera,
  Gift,
  Heart,
  Clock,
  DollarSign,
  Phone,
  Navigation as NavigationIcon,
  Sparkles,
  ArrowLeft,
  Users,
  Mountain,
  Waves,
  Building2,
  TreePine,
} from "lucide-react";
import { destinationsData } from "@/app/data/destinations";
import { toast } from "sonner";
import { useState } from "react";

export function DestinationDetailPage() {
  const { id } = useParams();
  const [preferences, setPreferences] = useState({
    budget: "mid-range",
    travelStyle: "cultural",
    foodPreference: "local",
    accommodation: "hotel",
  });

  const destination = destinationsData[id as keyof typeof destinationsData];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Destination not found</h2>
          <Link to="/explore">
            <Button className="mt-4">Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  const budgetOptions = [
    { id: "budget", label: "Budget Friendly", icon: "💰" },
    { id: "mid-range", label: "Mid-Range", icon: "💵" },
    { id: "luxury", label: "Luxury", icon: "💎" },
  ];

  const travelStyles = [
    { id: "cultural", label: "Cultural", icon: Building2 },
    { id: "adventure", label: "Adventure", icon: Mountain },
    { id: "relaxation", label: "Relaxation", icon: Waves },
    { id: "nature", label: "Nature", icon: TreePine },
  ];

  const handleBookHotel = (hotelName: string) => {
    toast.success(`Opening booking for ${hotelName}...`);
  };

  const handleBookRestaurant = (restaurantName: string) => {
    toast.success(`Opening reservation for ${restaurantName}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/explore">
              <Button variant="ghost" className="text-white hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Explore
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-yellow-400 text-yellow-900">
                  <Star className="w-4 h-4 mr-1 fill-yellow-900" />
                  {destination.rating}
                </Badge>
                <Badge variant="outline" className="bg-white/20 text-white border-white/40">
                  {destination.state}
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-3">
                {destination.name}
              </h1>
              <p className="text-2xl text-gray-200 mb-6">
                {destination.tagline}
              </p>
              <p className="text-xl text-gray-300 max-w-3xl">
                {destination.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Preferences Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-7 h-7 text-purple-600" />
                Personalize Your Experience
              </h3>

              <div className="space-y-6">
                {/* Budget */}
                <div>
                  <h4 className="font-bold mb-3">Your Budget:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {budgetOptions.map((option) => (
                      <Card
                        key={option.id}
                        className={`p-4 cursor-pointer transition-all ${
                          preferences.budget === option.id
                            ? "border-2 border-purple-500 bg-purple-100"
                            : "hover:border-purple-300"
                        }`}
                        onClick={() => setPreferences({ ...preferences, budget: option.id })}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{option.icon}</div>
                          <p className="text-sm font-medium">{option.label}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Travel Style */}
                <div>
                  <h4 className="font-bold mb-3">Travel Style:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {travelStyles.map((style) => (
                      <Card
                        key={style.id}
                        className={`p-4 cursor-pointer transition-all ${
                          preferences.travelStyle === style.id
                            ? "border-2 border-blue-500 bg-blue-100"
                            : "hover:border-blue-300"
                        }`}
                        onClick={() => setPreferences({ ...preferences, travelStyle: style.id })}
                      >
                        <div className="text-center">
                          <style.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                          <p className="text-sm font-medium">{style.label}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 inline mr-1 text-purple-500" />
                  Based on your preferences, we'll recommend the best hotels, restaurants, and experiences!
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="food" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto gap-2">
              <TabsTrigger value="food" className="flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                <span className="hidden sm:inline">Special Food</span>
                <span className="sm:hidden">Food</span>
              </TabsTrigger>
              <TabsTrigger value="places" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Best Places</span>
                <span className="sm:hidden">Places</span>
              </TabsTrigger>
              <TabsTrigger value="hotels" className="flex items-center gap-2">
                <Hotel className="w-4 h-4" />
                Hotels
              </TabsTrigger>
              <TabsTrigger value="restaurants" className="flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                <span className="hidden sm:inline">Restaurants</span>
                <span className="sm:hidden">Dining</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Live Map
              </TabsTrigger>
              <TabsTrigger value="captions" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Captions
              </TabsTrigger>
            </TabsList>

            {/* Special Food */}
            <TabsContent value="food">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Utensils className="w-7 h-7 text-orange-500" />
                    Must-Try Special Foods
                  </h3>
                  <p className="text-gray-600">Authentic flavors you can't miss in {destination.name}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.specialFood.map((food, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-48">
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-500">
                              {food.price}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-xl font-bold mb-2">{food.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{food.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {food.restaurant}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => handleBookRestaurant(food.restaurant)}
                            >
                              Reserve
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Best Places */}
            <TabsContent value="places">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-7 h-7 text-blue-500" />
                    Top Places to Visit
                  </h3>
                  <p className="text-gray-600">Iconic attractions in {destination.name}</p>
                </div>

                <div className="space-y-4">
                  {destination.bestPlaces.map((place, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-2">{place.name}</h4>
                            <p className="text-gray-600 mb-3">{place.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span>{place.timing}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-green-500" />
                                <span className="font-medium">{place.entry}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() => toast.success("Added to itinerary!")}
                            >
                              <Heart className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button onClick={() => toast.success("Opening navigation...")}>
                              <NavigationIcon className="w-4 h-4 mr-2" />
                              Navigate
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Hotels */}
            <TabsContent value="hotels">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Hotel className="w-7 h-7 text-purple-500" />
                    Recommended Hotels
                  </h3>
                  <p className="text-gray-600">Best places to stay in {destination.name}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline">{hotel.type}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold mb-2">{hotel.name}</h4>
                        <p className="text-xl font-bold text-green-600 mb-4">{hotel.price}</p>
                        
                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-medium">Amenities:</p>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((amenity, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          className="w-full bg-purple-500 hover:bg-purple-600"
                          onClick={() => handleBookHotel(hotel.name)}
                        >
                          <Hotel className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Restaurants */}
            <TabsContent value="restaurants">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Utensils className="w-7 h-7 text-orange-500" />
                    Best Restaurants
                  </h3>
                  <p className="text-gray-600">Top dining experiences in {destination.name}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {destination.restaurants.map((restaurant, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-bold mb-1">{restaurant.name}</h4>
                            <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold">{restaurant.rating}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <Badge variant="outline">{restaurant.price}</Badge>
                        </div>

                        <div className="bg-orange-50 p-3 rounded-lg mb-4">
                          <p className="text-sm font-medium text-orange-900">Specialty:</p>
                          <p className="text-sm text-orange-800">{restaurant.specialty}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1"
                            onClick={() => handleBookRestaurant(restaurant.name)}
                          >
                            Reserve Table
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => toast.success("Opening directions...")}
                          >
                            <NavigationIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Live Map */}
            <TabsContent value="map">
              <LiveMap destination={destination.name} />
            </TabsContent>

            {/* Caption Generator */}
            <TabsContent value="captions">
              <CaptionGenerator destination={destination.name} />
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-rose-100 to-orange-100 border-2 border-rose-200 text-center">
              <Heart className="w-16 h-16 text-rose-600 mx-auto mb-4 fill-rose-600" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore {destination.name}?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Let us create a personalized itinerary with the best photo spots, dining experiences, and cultural insights just for you!
              </p>
              <Link to="/plan">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600"
                >
                  Plan Your {destination.name} Trip
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
