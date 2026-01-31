import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Image, Hash, Copy, Check, Sparkles, Sun, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

export function PhotoToolsPage() {
  const [selectedMode, setSelectedMode] = useState<"photo" | "travel">("photo");
  const [selectedMood, setSelectedMood] = useState("aesthetic");
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedHashtags, setCopiedHashtags] = useState(false);

  const photoSpots = [
    {
      location: "Goa - Baga Beach",
      bestTime: "Golden hour (6:00-7:00 AM)",
      pose: "Walking along the shore, looking back",
      outfitSuggestion: "Flowy dress or beach casual",
      crowd: "Low in morning, High after 10 AM",
      image: "https://images.unsplash.com/photo-1587693282896-0e46f8a7b0b5?w=800",
    },
    {
      location: "Jaipur - Hawa Mahal",
      bestTime: "Morning (8:00-9:00 AM)",
      pose: "Side angle with the palace in background",
      outfitSuggestion: "Traditional wear or solid colors",
      crowd: "Moderate, avoid weekends",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    },
    {
      location: "Manali - Solang Valley",
      bestTime: "Afternoon (2:00-4:00 PM)",
      pose: "Standing on hilltop, arms spread wide",
      outfitSuggestion: "Warm colorful jacket, jeans",
      crowd: "High, go on weekdays",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    },
    {
      location: "Vizag - RK Beach",
      bestTime: "Sunset (6:00-7:00 PM)",
      pose: "Sitting on rocks, gazing at horizon",
      outfitSuggestion: "Light summer clothes",
      crowd: "Moderate to High",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    },
  ];

  const poseReferences = [
    {
      category: "Beach Poses",
      poses: [
        { name: "Walking Away", tip: "Look back over shoulder" },
        { name: "Jumping Shot", tip: "Time it with wave splash" },
        { name: "Sitting in Water", tip: "Let waves flow around you" },
        { name: "Beach Yoga", tip: "Tree pose or warrior pose" },
      ],
    },
    {
      category: "Mountain Poses",
      poses: [
        { name: "Arms Spread Wide", tip: "On hilltop or cliff edge" },
        { name: "Sitting on Rock", tip: "Legs dangling, looking at view" },
        { name: "Jumping", tip: "Mid-air with mountain backdrop" },
        { name: "Walking Trail", tip: "Back view on hiking path" },
      ],
    },
    {
      category: "Heritage Sites",
      poses: [
        { name: "Doorway Frame", tip: "Stand in archway, natural frame" },
        { name: "Side Profile", tip: "Looking at architecture" },
        { name: "Symmetrical Shot", tip: "Center yourself with building" },
        { name: "Details Close-up", tip: "Focus on intricate designs" },
      ],
    },
    {
      category: "Aesthetic/Instagram",
      poses: [
        { name: "Coffee Shop", tip: "Looking away, holding cup" },
        { name: "Mirror Selfie", tip: "Use phone to cover face partially" },
        { name: "From Behind", tip: "Walking away, hair flowing" },
        { name: "Candid Laugh", tip: "Natural, not looking at camera" },
      ],
    },
  ];

  const captionMoods = {
    aesthetic: {
      examples: [
        "Chasing sunsets and dreams ✨",
        "Lost in the beauty of this moment 🌅",
        "Where the sky meets the sea 🌊",
        "Finding magic in ordinary places ✨",
      ],
      hashtags: [
        "#aesthetic",
        "#wanderlust",
        "#travelgram",
        "#beautifuldestinations",
        "#instatravel",
        "#visualsoflife",
        "#exploretheworld",
      ],
    },
    adventure: {
      examples: [
        "Adventure awaits! 🏔️",
        "Taking the road less traveled",
        "Mountains are calling and I must go ⛰️",
        "Living life on the edge!",
      ],
      hashtags: [
        "#adventuretime",
        "#mountainlife",
        "#trekking",
        "#hiking",
        "#outdoors",
        "#naturelovers",
        "#wildernessculture",
      ],
    },
    cultural: {
      examples: [
        "Discovering India's rich heritage 🕌",
        "Where history comes alive",
        "Stepping back in time ⏳",
        "Culture and colors of Incredible India 🇮🇳",
      ],
      hashtags: [
        "#incredibleindia",
        "#heritage",
        "#culture",
        "#indiatravel",
        "#historicalplace",
        "#architecturephotography",
        "#indianculture",
      ],
    },
    fun: {
      examples: [
        "Good vibes and tan lines! ☀️",
        "Beach please! 🏖️",
        "Life's a beach, enjoy the waves! 🌊",
        "Making memories one sunset at a time 🌅",
      ],
      hashtags: [
        "#beachlife",
        "#goodvibes",
        "#vacaymode",
        "#beachday",
        "#summervibes",
        "#travellife",
        "#happyplace",
      ],
    },
    romantic: {
      examples: [
        "Love is in the air ❤️",
        "Creating memories with you 💕",
        "Together is our favorite place to be",
        "You, me, and the sea 🌊",
      ],
      hashtags: [
        "#couplegoals",
        "#traveltogether",
        "#lovetravel",
        "#romanticgetaway",
        "#coupletravel",
        "#togetherforever",
        "#lovebirds",
      ],
    },
  };

  const generateCaption = () => {
    const moods = captionMoods[selectedMood as keyof typeof captionMoods];
    const randomCaption = moods.examples[Math.floor(Math.random() * moods.examples.length)];
    setGeneratedCaption(randomCaption);
    toast.success("Caption generated!");
  };

  const copyToClipboard = (text: string, type: "caption" | "hashtags") => {
    navigator.clipboard.writeText(text);
    if (type === "caption") {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    } else {
      setCopiedHashtags(true);
      setTimeout(() => setCopiedHashtags(false), 2000);
    }
    toast.success(`${type === "caption" ? "Caption" : "Hashtags"} copied to clipboard!`);
  };

  const getHashtags = () => {
    const moods = captionMoods[selectedMood as keyof typeof captionMoods];
    return moods.hashtags.join(" ");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
              <Camera className="w-5 h-5 text-pink-600" />
              <span className="text-sm text-pink-700 font-medium">
                Photo & Social Media Tools
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Create Instagram-Perfect Content
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Pose suggestions, perfect timing, and auto-generated captions
            </p>
          </motion.div>

          <Tabs defaultValue="photo-spots" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
              <TabsTrigger value="photo-spots">
                <MapPin className="w-4 h-4 mr-2" />
                Photo Spots
              </TabsTrigger>
              <TabsTrigger value="poses">
                <Camera className="w-4 h-4 mr-2" />
                Pose Ideas
              </TabsTrigger>
              <TabsTrigger value="captions">
                <Hash className="w-4 h-4 mr-2" />
                Captions
              </TabsTrigger>
            </TabsList>

            {/* Photo Spots */}
            <TabsContent value="photo-spots">
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
                  <h2 className="text-2xl font-bold mb-2">📸 Best Photo Spots in India</h2>
                  <p className="text-gray-700">
                    Perfect locations with optimal timing and crowd information
                  </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {photoSpots.map((spot, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-48">
                          <img
                            src={spot.image}
                            alt={spot.location}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-pink-500">Instagram Worthy</Badge>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <h3 className="font-bold text-lg">{spot.location}</h3>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-amber-500" />
                            <span><strong>Best Time:</strong> {spot.bestTime}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <Camera className="w-4 h-4 text-blue-500" />
                            <span><strong>Pose:</strong> {spot.pose}</span>
                          </div>
                          
                          <div className="text-sm">
                            <strong>👗 Outfit:</strong> {spot.outfitSuggestion}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm pt-2 border-t">
                            <span className="text-gray-600">Crowd Level:</span>
                            <Badge variant={spot.crowd.includes("Low") ? "default" : "secondary"}>
                              {spot.crowd}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Poses */}
            <TabsContent value="poses">
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                  <h2 className="text-2xl font-bold mb-2">🤳 Pose & Angle Suggestions</h2>
                  <p className="text-gray-700">
                    Professional pose ideas with reference tips for stunning photos
                  </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {poseReferences.map((category, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="p-6">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-purple-500" />
                          {category.category}
                        </h3>
                        <div className="space-y-3">
                          {category.poses.map((pose, poseIdx) => (
                            <div key={poseIdx} className="p-3 bg-gray-50 rounded-lg">
                              <div className="font-semibold text-purple-600 mb-1">
                                {pose.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                💡 {pose.tip}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Tips Card */}
                <Card className="p-6 bg-amber-50 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-6 h-6 text-amber-600" />
                    <h3 className="font-bold text-lg">Pro Photography Tips</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✨ <strong>Golden Hour:</strong> Shoot during sunrise or sunset for magical lighting</li>
                    <li>📱 <strong>Grid Lines:</strong> Enable grid on phone for rule of thirds composition</li>
                    <li>👀 <strong>Eye Level:</strong> Camera at eye level for most flattering angles</li>
                    <li>🎨 <strong>Colors:</strong> Wear colors that contrast with the background</li>
                    <li>😊 <strong>Natural:</strong> Candid shots look more authentic than posed</li>
                    <li>📸 <strong>Burst Mode:</strong> Take multiple shots to get the perfect moment</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* Captions */}
            <TabsContent value="captions">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Hash className="w-6 h-6 text-pink-500" />
                    <h2 className="text-2xl font-bold">Auto Caption & Hashtag Generator</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Mode Selector */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Mode</label>
                      <div className="flex gap-3">
                        <Button
                          variant={selectedMode === "photo" ? "default" : "outline"}
                          onClick={() => setSelectedMode("photo")}
                          className={selectedMode === "photo" ? "bg-pink-500" : ""}
                        >
                          📸 Photo Mode
                        </Button>
                        <Button
                          variant={selectedMode === "travel" ? "default" : "outline"}
                          onClick={() => setSelectedMode("travel")}
                          className={selectedMode === "travel" ? "bg-blue-500" : ""}
                        >
                          ✈️ Travel Mode
                        </Button>
                      </div>
                    </div>

                    {/* Mood Selector */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Caption Mood</label>
                      <Select value={selectedMood} onValueChange={setSelectedMood}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aesthetic">✨ Aesthetic</SelectItem>
                          <SelectItem value="adventure">🏔️ Adventure</SelectItem>
                          <SelectItem value="cultural">🕌 Cultural</SelectItem>
                          <SelectItem value="fun">🌊 Fun & Beach</SelectItem>
                          <SelectItem value="romantic">❤️ Romantic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Generate Button */}
                    <Button
                      onClick={generateCaption}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                      size="lg"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Caption
                    </Button>

                    {/* Generated Caption */}
                    {generatedCaption && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">Your Caption</label>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(generatedCaption, "caption")}
                            >
                              {copiedCaption ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                              <span className="ml-2">
                                {copiedCaption ? "Copied!" : "Copy"}
                              </span>
                            </Button>
                          </div>
                          <Textarea
                            value={generatedCaption}
                            onChange={(e) => setGeneratedCaption(e.target.value)}
                            className="min-h-[80px]"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium">Trending Hashtags</label>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(getHashtags(), "hashtags")}
                            >
                              {copiedHashtags ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                              <span className="ml-2">
                                {copiedHashtags ? "Copied!" : "Copy"}
                              </span>
                            </Button>
                          </div>
                          <Textarea
                            value={getHashtags()}
                            readOnly
                            className="min-h-[100px] bg-gray-50"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Example Captions */}
                    <div className="mt-6">
                      <h3 className="font-bold mb-3">Example Captions ({selectedMood})</h3>
                      <div className="space-y-2">
                        {captionMoods[selectedMood as keyof typeof captionMoods].examples.map(
                          (example, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 cursor-pointer"
                              onClick={() => setGeneratedCaption(example)}
                            >
                              {example}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Hashtag Strategy */}
                <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                  <h3 className="font-bold text-lg mb-3">📊 Hashtag Strategy Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✅ Use 7-15 hashtags per post (optimal range)</li>
                    <li>✅ Mix popular (#travel) and niche (#goatravel) hashtags</li>
                    <li>✅ Add location-specific tags for local reach</li>
                    <li>✅ Include brand hashtags if sponsored</li>
                    <li>✅ Save your favorite hashtag sets for quick access</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
