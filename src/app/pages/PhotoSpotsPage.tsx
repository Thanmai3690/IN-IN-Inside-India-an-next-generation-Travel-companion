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
  SunIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function PhotoSpotsPage() {
  const [savedSpots, setSavedSpots] = useState<string[]>([]);

  const photoSpots = [
    {
      id: "1",
      location: "RK-Beach",
      city: "Vizag, Andhra Pradesh",
      image:
        "src/app/pages/rk.jpeg",
      bestTime: "Sunrise",
      timeIcon: Sunrise,
      exactTime: "5:30 AM - 7:00 AM",
      difficulty: " Very Easy",
      crowdLevel: "Moderate",
      tips: [
        "Arrive 30 minutes early to secure the first light over the Bay of Bengal",
        "Best photos near submarine Museum and Dolphin's Noise viewpoint",
        "Bring a wide-angle lens for full beach and horizon shots",
      ],
      whySpecial:
        "The golden hour light creates a magical glow on the waves and coastline.",
      coordinates: "17.7139, 83.3203",
      rating: 4.9,
    },
    {
      id: "2",
      location: "Cabo de Rama Fort",
      city: "South Goa, Goa",
      image:
        "src/app/pages/goafort.jpeg",
      bestTime: "Evening",
      timeIcon: Sunset,
      exactTime: "4:30 PM - 6:00 PM",
      difficulty: "Easy",
      crowdLevel: "Low",
      tips: [
        "Go early to get good place",
        "Take photos during sunset time",
        "Use wide camera mode",
        "Stand safely away from the edge",
      ],
      whySpecial:
        "Sunset light makes the sea and fort look very beautiful.",
      coordinates: "15.0887, 73.9270",
      rating: 5.0,
    },
    {
      id: "3",
      location: "Sam Sand Dunes",
      city: "Jaisalmer, Rajasthan",
      image:
        "src/app/pages/sandraj.jpeg",
      bestTime: "Evening",
      timeIcon: Sunset,
      exactTime: "5:30 PM - 6:45 PM",
      difficulty: "Very Easy",
      crowdLevel: "Moderate",
      tips: [
        "Reach the dunes at least 30 minutes before sunset for best light",
        "Shoot low angles for dramatic foreground textures",
        "Include camel silhouettes for a classic Rajasthan vibe",
      ],
      whySpecial:
        "Iconic desert sundet in Rajastha with golden light, endless sand waves,and camel silhouettes",
      coordinates: "26.9124, 70.9083",
      rating: 4.8,
    },
    {
      id: "4",
      location: "Solang Valley View Point",
      city: "Manali, Shimla",
      image:
        "src/app/pages/solang.jpeg",
      bestTime: "Morning",
      timeIcon: Sun,
      exactTime: "8:00 AM - 10:00 AM",
      difficulty: "Easy",
      crowdLevel: "Moderate",
      tips: [
        "Go early to avoid crowd",
        "Capture photos of mountains and valleys",
        "Use normal or wide camera",
      ],
      whySpecial:
        "Peaceful place with village and mountains views and looks beautiful in winter season.",
      coordinates: "32.2432, 77.1892",
      rating: 5.0,
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
                    <div className="relative h-80 md:h-150">
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
