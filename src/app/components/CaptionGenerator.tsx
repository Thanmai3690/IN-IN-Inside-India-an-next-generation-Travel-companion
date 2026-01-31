import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { useState } from "react";
import {
  Sparkles,
  Copy,
  RefreshCw,
  Heart,
  Camera,
  MapPin,
  Smile,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

interface CaptionGeneratorProps {
  destination: string;
}

export function CaptionGenerator({ destination }: CaptionGeneratorProps) {
  const [selectedMood, setSelectedMood] = useState("adventurous");
  const [currentCaptions, setCurrentCaptions] = useState<string[]>([]);

  const moods = [
    { id: "adventurous", label: "Adventurous", icon: "🏔️" },
    { id: "romantic", label: "Romantic", icon: "❤️" },
    { id: "funny", label: "Funny", icon: "😂" },
    { id: "inspirational", label: "Inspirational", icon: "✨" },
    { id: "foodie", label: "Foodie", icon: "🍽️" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
  ];

  const captionsByMood: Record<string, string[]> = {
    adventurous: [
      `Lost in the magic of ${destination} 🏔️✨ #AdventureAwaits #TravelGoals`,
      `${destination} vibes hitting different 🌄 Where to next? #Wanderlust #ExploreIndia`,
      `Making memories in ${destination}, one adventure at a time 🎒 #TravelDiaries`,
      `Nature's masterpiece found in ${destination} 🏞️ #IntoTheWild #TravelIndia`,
      `${destination}, you have my heart and my hiking boots 🥾❤️ #MountainCalling`,
    ],
    romantic: [
      `Falling in love with ${destination} all over again ❤️ #RomanticGetaway #TravelWithLove`,
      `${destination} sunsets and sweet moments 🌅💕 #CoupleGoals #TravelTogether`,
      `Finding paradise in ${destination} with my favorite person ❤️ #LoveAndTravel`,
      `Every moment in ${destination} feels like a fairytale ✨❤️ #RomanticEscape`,
      `${destination} days are the best days when spent with you 💑 #TravelRomance`,
    ],
    funny: [
      `${destination}: Where my diet came to die 😂🍕 #FoodComa #NoRegrets`,
      `I followed my heart to ${destination}... it led me to food stalls 😅 #TravelHumor`,
      `Came to ${destination} for culture, stayed for the street food 🤤 #Priorities`,
      `${destination} stole my heart (and my savings) 😂💸 #WorthIt #TravelBroke`,
      `Out of office, into ${destination} shenanigans 😎 #VacayMode #YOLO`,
    ],
    inspirational: [
      `${destination} reminded me that the best view comes after the hardest climb 🏔️✨ #LifeLessons #TravelWisdom`,
      `Collecting moments, not things in ${destination} 📸❤️ #Wanderlust #LiveFully`,
      `${destination} taught me that sometimes you find yourself in the middle of nowhere 🌄 #SoulSearching`,
      `Life is either a daring adventure or nothing at all - ${destination} edition ✨ #BeBrave #TravelMore`,
      `${destination}: Where every sunset is proof that endings can be beautiful too 🌅 #Grateful`,
    ],
    foodie: [
      `${destination} food tour: Day 1 of being absolutely stuffed 🍛😋 #FoodieTravel #LocalCuisine`,
      `Eating my way through ${destination}, one delicious bite at a time 🤤 #FoodComa #StreetFood`,
      `${destination}'s flavors have ruined me for all other food 😍🍽️ #FoodieParadise`,
      `When in ${destination}, eat like the locals do! 🥘❤️ #AuthenticFlavors #FoodTravel`,
      `Found heaven in ${destination} - it tastes amazing! 😋✨ #FoodieAdventures`,
    ],
    cultural: [
      `${destination}: Where history comes alive and stories never end 🏛️📖 #CulturalHeritage`,
      `Exploring the rich tapestry of ${destination}'s culture 🎨✨ #Heritage #TravelCulture`,
      `${destination} - where every corner tells a thousand stories 📚❤️ #CulturalJourney`,
      `Immersed in the traditions and beauty of ${destination} 🏛️ #CulturalTravel #India`,
      `${destination}'s culture is not just seen, it's felt in the soul ❤️ #Heritage #TravelDeep`,
    ],
  };

  const generateCaptions = () => {
    const captions = captionsByMood[selectedMood] || [];
    setCurrentCaptions(captions);
  };

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption);
    toast.success("Caption copied to clipboard! 📋");
  };

  const regenerate = () => {
    generateCaptions();
    toast.success("New captions generated! ✨");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-purple-500" />
          AI Caption Generator
        </h3>
        <p className="text-gray-600">
          Get perfect Instagram captions for your {destination} photos
        </p>
      </div>

      {/* Mood Selection */}
      <Card className="p-6">
        <h4 className="font-bold mb-4">Choose Your Vibe:</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {moods.map((mood) => (
            <Card
              key={mood.id}
              className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedMood === mood.id
                  ? "border-2 border-purple-500 bg-purple-50"
                  : "hover:border-purple-300"
              }`}
              onClick={() => {
                setSelectedMood(mood.id);
                setCurrentCaptions([]);
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{mood.icon}</div>
                <p className="text-sm font-medium">{mood.label}</p>
              </div>
            </Card>
          ))}
        </div>

        <Button
          onClick={generateCaptions}
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          size="lg"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Generate AI Captions
        </Button>
      </Card>

      {/* Generated Captions */}
      <AnimatePresence>
        {currentCaptions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg">Your AI-Generated Captions:</h4>
              <Button
                onClick={regenerate}
                variant="outline"
                size="sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate
              </Button>
            </div>

            {currentCaptions.map((caption, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Caption {index + 1}
                        </Badge>
                      </div>
                      <p className="text-gray-800 leading-relaxed">{caption}</p>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(caption)}
                      variant="ghost"
                      size="sm"
                      className="flex-shrink-0"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Hashtag Suggestions */}
            <Card className="p-4 bg-blue-50 border-2 border-blue-200">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Trending Hashtags for {destination}:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  `#${destination.replace(/\s+/g, "")}`,
                  "#IncredibleIndia",
                  "#TravelIndia",
                  "#Wanderlust",
                  "#TravelDiaries",
                  "#ExploreIndia",
                  "#IndianHeritage",
                  "#TravelPhotography",
                  "#InstaTravel",
                  "#TravelGoals",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
                    onClick={() => {
                      copyToClipboard(tag);
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-4 bg-amber-50 border-2 border-amber-200">
              <h5 className="font-bold mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-600" />
                Pro Tips for Better Engagement:
              </h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Post during peak hours (7-9 AM, 12-2 PM, 7-9 PM IST)</li>
                <li>• Use 20-30 relevant hashtags for maximum reach</li>
                <li>• Tag the location to help others discover {destination}</li>
                <li>• Engage with comments within the first hour of posting</li>
                <li>• Share stories and reels for better visibility</li>
              </ul>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
