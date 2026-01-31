import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Clock,
  Camera,
  Gift,
  Utensils,
  CloudRain,
  Sun,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Navigation as NavigationIcon,
  Heart,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ItineraryPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const tripInfo = {
    destination: "Vizag, Andhra pradesh",
    dates: "Feb 10-15, 2026",
    travelers: 2,
    budget: 3000,
    spent: 1250,
  };

  const liveUpdates = [
    {
      type: "weather",
      icon: CloudRain,
      title: "Weather Update",
      message:
        "Light rain expected tomorrow afternoon. We've moved your outdoor activities to morning!",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      type: "crowd",
      icon: Users,
      title: "Crowd Alert",
      message:
        "Simhachalam Temple less crowded at 7 AM. We adjusted your schedule for better photos!",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      type: "opportunity",
      icon: Sparkles,
      title: "New Opportunity",
      message:
        "INS Kurusura submarine museum is closed! Added RK Beach to your itinerary.",
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
  ];

  const itinerary = [
    {
      day: 1,
      date: "Feb 10, 2026",
      title: "Arrival & Traditional Vizag ",
      activities: [
        {
          time: "9:00 AM",
          title: "Arrive at Vishakapatnam Airport",
          type: "travel",
          icon: MapPin,
          duration: "1h",
        },
        {
          time: "12:00 PM",
          title: "Check-in at Hotel",
          type: "accommodation",
          icon: MapPin,
          duration: "30m",
          location: "Vishakapatnam",
        },
        {
          time: "1:30 PM",
          title: "Lunch at Horizon",
          type: "food",
          icon: Utensils,
          duration: "1h",
          cost: "$15",
          tip: "Try the original Andhra Fish Curry - it's amazing!",
        },
        {
          time: "3:00 PM",
          title: "simhachalam Temple Visit",
          type: "attraction",
          icon: MapPin,
          duration: "2h",
          cost: "Free",
          photoSpot: true,
          photoTime: "4:30 PM - Golden Hour",
          tip: "Perfect time for photos of the temple with golden light!",
        },
        {
          time: "5:30 PM",
          title: "RK Beach Stalls",
          type: "shopping",
          icon: Gift,
          duration: "1.5h",
          souvenirAlert:
            "Great place for traditional Handmade Crafts and snacks!",
        },
        {
          time: "7:30 PM",
          title: "Dinner in Araku",
          type: "food",
          icon: Utensils,
          duration: "1.5h",
          cost: "$30",
        },
      ],
      totalCost: "$45",
      highlights: ["First temple visit", "Traditional shopping", "Photo spots"],
    },
    {
      day: 2,
      date: "Feb 11, 2026",
      title: "Araku Shopping",
      activities: [
        {
          time: "9:00 AM",
          title: "Breakfast at Hotel",
          type: "food",
          icon: Utensils,
          duration: "1h",
        },
        {
          time: "10:30 AM",
          title: "Borra caves",
          type: "attraction",
          icon: Camera,
          duration: "1h",
          photoSpot: true,
          photoTime: "Best from Caves",
          tip: "Go to the tree spot for iconic photos!",
        },
        {
          time: "12:00 PM",
          title: "CVR Street",
          type: "shopping",
          icon: Gift,
          duration: "2h",
          souvenirAlert:
            "cute accessories!",
        },
        {
          time: "2:30 PM",
          title: "Lunch at Hill Shine Garden Restaurant",
          type: "food",
          icon: Utensils,
          duration: "1.5h",
          cost: "$25",
          tip: "Instagram-worthy colorful dishes!",
        },
        {
          time: "4:30 PM",
          title: "Boat Ride",
          type: "attraction",
          icon: MapPin,
          duration: "1.5h",
          cost: "Free",
          photoSpot: true,
          aiNote:
            "Adjusted timing due to weather - perfect lighting now!,",
        },
        {
          time: "7:00 PM",
          title: "Travel to Tirupati",
          type: "attraction",
          icon: Camera,
          duration: "8h",
          photoSpot: true,
          photoTime: "Blue hour 7:30-8:00 PM",
        },
      ],
      totalCost: "$25",
      highlights: [
        "Iconic crossing photo",
        "Modern shopping",
        "City night views",
      ],
    },
    {
      day: 3,
      date: "Feb 12, 2026",
      title: "Traditional Crafts & Culture",
      activities: [
        {
          time: "9:00 AM",
          title: "Tirumala Temple",
          type: "attraction",
          icon: MapPin,
          duration: "2h",
          cost: "$7",
        },
        {
          time: "11:30 AM",
          title: "Laddu Counter",
          type: "experience",
          icon: Heart,
          duration: "1.5h",
          cost: "$40",
          tip: "Learn the culture and tradition - unforgettable!",
        },
        {
          time: "1:30 PM",
          title: "Lunch at Minerva Grand",
          type: "food",
          icon: Utensils,
          duration: "1.5h",
          cost: "$35",
        },
        {
          time: "3:30 PM",
          title: "Local markets",
          type: "experience",
          icon: Gift,
          duration: "2h",
          cost: "$60",
          souvenirAlert:
            "Make your own rudraksha Bracelets to bring home - perfect gift!",
        },
        {
          time: "6:00 PM",
          title: "Dinner at Vivaha Bhojanambhu",
          type: "food",
          icon: Utensils,
          duration: "2h",
          cost: "$50",
        },
      ],
      totalCost: "$192",
      highlights: [
        "Cultural experiences",
        "Traditional dining",
      ],
    },
  ];

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const getActivityColor = (type: string) => {
    const colors: Record<string, string> = {
      travel: "bg-blue-100 text-blue-700",
      food: "bg-orange-100 text-orange-700",
      attraction: "bg-purple-100 text-purple-700",
      shopping: "bg-pink-100 text-pink-700",
      accommodation: "bg-green-100 text-green-700",
      experience: "bg-rose-100 text-rose-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Your Smart Itinerary
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  {tripInfo.destination} • {tripInfo.dates}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span>{tripInfo.travelers} travelers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    Live Updates
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Budget Tracker */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Budget Tracker
              </h3>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  ${tripInfo.spent} of ${tripInfo.budget}
                </p>
                <p className="text-xs text-green-600">
                  ${tripInfo.budget - tripInfo.spent} remaining
                </p>
              </div>
            </div>
            <Progress
              value={(tripInfo.spent / tripInfo.budget) * 100}
              className="h-3"
            />
          </Card>

          {/* Live Updates */}
          <div className="mb-8 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              AI Live Updates
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {liveUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-4 border-2 ${update.bg}`}>
                    <div className="flex items-start gap-3">
                      <update.icon className={`w-5 h-5 ${update.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className="font-bold text-sm mb-1">
                          {update.title}
                        </h4>
                        <p className="text-xs text-gray-700">
                          {update.message}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Itinerary Days */}
          <div className="space-y-6">
            {itinerary.map((dayPlan) => (
              <motion.div
                key={dayPlan.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  {/* Day Header */}
                  <div
                    className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:from-indigo-600 hover:to-purple-600 transition-colors"
                    onClick={() => toggleDay(dayPlan.day)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-white text-indigo-600">
                            Day {dayPlan.day}
                          </Badge>
                          <Calendar className="w-5 h-5" />
                          <span className="font-bold">{dayPlan.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{dayPlan.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {dayPlan.highlights.map((highlight, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-white/20 text-white border-white/40"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Total Cost</p>
                        <p className="text-2xl font-bold">{dayPlan.totalCost}</p>
                      </div>
                    </div>
                  </div>

                  {/* Day Activities */}
                  {expandedDay === dayPlan.day && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 space-y-4"
                    >
                      {dayPlan.activities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {/* Timeline */}
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                              <activity.icon className="w-6 h-6" />
                            </div>
                            {index < dayPlan.activities.length - 1 && (
                              <div className="w-1 h-full bg-gradient-to-b from-indigo-200 to-purple-200 my-2" />
                            )}
                          </div>

                          {/* Activity Details */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="font-bold text-indigo-600">
                                    {activity.time}
                                  </span>
                                  <Badge className={getActivityColor(activity.type)}>
                                    {activity.type}
                                  </Badge>
                                  {activity.duration && (
                                    <span className="text-sm text-gray-500">
                                      {activity.duration}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-lg font-bold">
                                  {activity.title}
                                </h4>
                                {activity.location && (
                                  <p className="text-sm text-gray-600 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {activity.location}
                                  </p>
                                )}
                              </div>
                              {activity.cost && (
                                <span className="text-lg font-bold text-green-600">
                                  {activity.cost}
                                </span>
                              )}
                            </div>

                            {/* Photo Spot Alert */}
                            {activity.photoSpot && (
                              <div className="bg-pink-50 border-2 border-pink-200 p-3 rounded-lg mb-2">
                                <div className="flex items-start gap-2">
                                  <Camera className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-bold text-sm text-pink-900">
                                      📸 Perfect Photo Moment!
                                    </p>
                                    <p className="text-sm text-pink-700">
                                      {activity.photoTime}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Souvenir Alert */}
                            {activity.souvenirAlert && (
                              <div className="bg-purple-50 border-2 border-purple-200 p-3 rounded-lg mb-2">
                                <div className="flex items-start gap-2">
                                  <Gift className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-bold text-sm text-purple-900">
                                      🎁 Souvenir Opportunity!
                                    </p>
                                    <p className="text-sm text-purple-700">
                                      {activity.souvenirAlert}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* AI Note */}
                            {activity.aiNote && (
                              <div className="bg-blue-50 border-2 border-blue-200 p-3 rounded-lg mb-2">
                                <div className="flex items-start gap-2">
                                  <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-bold text-sm text-blue-900">
                                      ✨ AI Optimization
                                    </p>
                                    <p className="text-sm text-blue-700">
                                      {activity.aiNote}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Tip */}
                            {activity.tip && (
                              <div className="bg-amber-50 p-3 rounded-lg">
                                <p className="text-sm text-amber-800">
                                  💡 <span className="font-bold">Tip:</span>{" "}
                                  {activity.tip}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
              <div className="text-center mb-6">
                <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Your Itinerary is Alive! ✨
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Unlike static travel plans, yours adapts in real-time to
                  weather, crowds, and local events. We optimize for the best
                  photos, authentic souvenirs, and unforgettable experiences.
                </p>
              </div>

              <div className="grid sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <Camera className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-sm font-bold">Photo Spots</p>
                  <p className="text-xs text-gray-600">Perfectly timed</p>
                </div>
                <div className="text-center">
                  <Gift className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm font-bold">Gift Ideas</p>
                  <p className="text-xs text-gray-600">Built into plan</p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                  <p className="text-sm font-bold">Live Updates</p>
                  <p className="text-xs text-gray-600">Real-time changes</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                  <p className="text-sm font-bold">Memories</p>
                  <p className="text-xs text-gray-600">Built to last</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
