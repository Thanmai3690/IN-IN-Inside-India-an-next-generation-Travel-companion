import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import {
  Camera,
  Clock,
  MapPin,
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Star,
  Heart,
  Bookmark,
  Share2,
  Navigation as NavigationIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function PhotoSpotsPage() {
  const [savedSpots, setSavedSpots] = useState<string[]>([]);

  const photoSpots = [
    {
      id: "1",
      location: "Eiffel Tower - Trocadéro Gardens",
      city: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1658424680194-c50bf5316f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlaWZmZWwlMjB0b3dlciUyMGdvbGRlbiUyMGhvdXIlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4NjMwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bestTime: "Golden Hour",
      timeIcon: Sunset,
      exactTime: "7:30 PM - 8:15 PM",
      difficulty: "Easy",
      crowdLevel: "High",
      tips: [
        "Arrive 30 minutes early to secure your spot",
        "Best photo from the fountains area",
        "Bring a wide-angle lens for full tower view",
      ],
      whySpecial:
        "The golden hour light creates a magical glow on the Eiffel Tower, perfect for romantic shots.",
      coordinates: "48.8629, 2.2877",
      rating: 4.9,
    },
    {
      id: "2",
      location: "Fushimi Inari Shrine - Torii Gates",
      city: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1649727986079-03ba68c5cf57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwdGVtcGxlJTIwamFwYW4lMjBzdW5yaXNlfGVufDF8fHx8MTc2OTg2MzA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bestTime: "Early Morning",
      timeIcon: Sunrise,
      exactTime: "6:00 AM - 7:30 AM",
      difficulty: "Moderate",
      crowdLevel: "Low",
      tips: [
        "Go early to avoid crowds - gates are stunning without people",
        "Walk up to the middle section for dramatic perspective",
        "Wear traditional kimono for authentic photos",
      ],
      whySpecial:
        "Morning mist through the red torii gates creates an ethereal, mystical atmosphere.",
      coordinates: "34.9671, 135.7727",
      rating: 5.0,
    },
    {
      id: "3",
      location: "Blue Dome Church - Oia",
      city: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1719607526486-96f27a995fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBibHVlJTIwZG9tZSUyMHN1bnNldHxlbnwxfHx8fDE3Njk4NjMwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bestTime: "Sunset",
      timeIcon: Sunset,
      exactTime: "7:00 PM - 8:00 PM",
      difficulty: "Easy",
      crowdLevel: "Very High",
      tips: [
        "Book a spot in a nearby café for guaranteed view",
        "Alternative: shoot from the stairs below the church",
        "Blue hour after sunset is equally stunning",
      ],
      whySpecial:
        "The iconic blue dome against the pink and orange sunset sky is pure magic.",
      coordinates: "36.4618, 25.3753",
      rating: 4.8,
    },
    {
      id: "4",
      location: "Grand Canal - Rialto Bridge",
      city: "Venice, Italy",
      image:
        "https://images.unsplash.com/photo-1660648128069-65699b10cd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW5pY2UlMjBjYW5hbCUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzY5ODYzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bestTime: "Blue Hour",
      timeIcon: Moon,
      exactTime: "8:30 PM - 9:15 PM",
      difficulty: "Moderate",
      crowdLevel: "Medium",
      tips: [
        "Shoot from Riva del Vin for best bridge angle",
        "Capture gondolas passing for dynamic shots",
        "Long exposure makes the water look silky",
      ],
      whySpecial:
        "The illuminated bridge and reflections in the canal create a romantic, timeless scene.",
      coordinates: "45.4380, 12.3358",
      rating: 4.7,
    },
  ];

  const toggleSave = (spotId: string) => {
    if (savedSpots.includes(spotId)) {
      setSavedSpots(savedSpots.filter((id) => id !== spotId));
      toast.success("Removed from saved spots");
    } else {
      setSavedSpots([...savedSpots, spotId]);
      toast.success("Saved to your collection! 📸");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Moderate":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCrowdColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "High":
      case "Very High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
              <Camera className="w-4 h-4 text-pink-600" />
              <span className="text-sm text-pink-700">
                Perfect Photo Moments
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Capture the Magic
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We tell you exactly where and when to take breathtaking photos.
              No more guessing - just perfect moments. 📸✨
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2 border-pink-200">
              <Clock className="w-10 h-10 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Exact Timing</h3>
              <p className="text-sm text-gray-600">
                We tell you the precise time for the best light
              </p>
            </Card>
            <Card className="p-6 text-center border-2 border-purple-200">
              <MapPin className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Exact Location</h3>
              <p className="text-sm text-gray-600">
                GPS coordinates to the perfect shooting spot
              </p>
            </Card>
            <Card className="p-6 text-center border-2 border-indigo-200">
              <Camera className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Pro Tips</h3>
              <p className="text-sm text-gray-600">
                Expert advice to make every shot Instagram-worthy
              </p>
            </Card>
          </div>

          {/* Photo Spots Grid */}
          <div className="space-y-8">
            {photoSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto">
                      <img
                        src={spot.image}
                        alt={spot.location}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm"
                          onClick={() => toggleSave(spot.id)}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              savedSpots.includes(spot.id)
                                ? "fill-rose-500 text-rose-500"
                                : ""
                            }`}
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded">
                          <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                          <span className="text-sm font-bold text-yellow-900">
                            {spot.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 md:p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">
                          {spot.location}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {spot.city}
                        </p>
                      </div>

                      {/* Best Time */}
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-lg mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <spot.timeIcon className="w-6 h-6 text-orange-500" />
                          <div>
                            <p className="font-bold text-sm">
                              Best Time: {spot.bestTime}
                            </p>
                            <p className="text-2xl font-bold text-orange-600">
                              {spot.exactTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className={getDifficultyColor(spot.difficulty)}>
                          {spot.difficulty}
                        </Badge>
                        <Badge className={getCrowdColor(spot.crowdLevel)}>
                          Crowd: {spot.crowdLevel}
                        </Badge>
                      </div>

                      {/* Why Special */}
                      <div className="mb-4">
                        <p className="text-gray-700 italic">
                          ""{spot.whySpecial}""
                        </p>
                      </div>

                      {/* Tips */}
                      <div className="mb-4">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Camera className="w-4 h-4 text-pink-500" />
                          Pro Tips:
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {spot.tips.map((tip, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-pink-500">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button
                          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                          onClick={() => {
                            window.open(
                              `https://maps.google.com/?q=${spot.coordinates}`,
                              "_blank"
                            );
                          }}
                        >
                          <NavigationIcon className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            toast.success("Added to your itinerary!")
                          }
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200">
              <Camera className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Want More Photo Spots?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Create your personalized trip plan and we'll show you all the
                best photo opportunities along your route - perfectly timed for
                golden hour! 📸✨
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                Plan My Photo Adventure
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
