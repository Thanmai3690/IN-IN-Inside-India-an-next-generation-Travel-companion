import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { motion } from "motion/react";
import {
  Gift,
  Heart,
  ShoppingBag,
  MapPin,
  DollarSign,
  Star,
  Users,
  Clock,
  Sparkles,
  Package,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SouvenirsPage() {
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const souvenirs = [
    {
      id: "1",
      name: "Himachal Woolens(Caps,Gloves & Mufflers)",
      location: " Shimla Road,Himachal pradesh",
      image:
        " /images/hwo.jpeg",
      price: "₹200-₹800",
      category: "Clothing & Accessories ",
      perfectFor: "Family,Friends,Winter Travelers",   
      whyMeaningful:
        "These Woolean items are made forcold mountain weather and are very useful for daily wear.",
      culturalNote:
        "Himachal Woolens reflect local hill culture and traditional winter clothing.",
      difficulty: "Easy to find",
      rating: 4.7,
      loveFactor: 5,
    },
    {
      id: "2",
      name: "Jaipur Pottery Items",
      location: "Chandpole(chandpol) bazar,Jaipur",
      image:
        "/images/jaipot.jpeg",
      price: "₹200-₹1500",
      category: "Home Decor & Handicrafts",
      perfectFor: "Friends,Family, Siblings, Home decor Lovers",
      whySpecial:
        "Each piece is handcrafted by local Jaipur artisans with traditional designs and Vibrant colors.",
      culturalNote:
        "Jaipur pottery reflects Rajasthan's rich artistic heritage and Centuries-old craftmanship",
      difficulty: "Easy to find",
      rating: 4.7,
      loveFactor: 5,
    },
    {
      id: "3",
      name: "Shell&Sea-Themed Ornaments",
      location: "Beach Road Stalls,Goa",
      image:
        "/images/goac.jpeg",
      price: "₹50-₹300",
      category: "Handicrafts & Decor",
      perfectFor: "Friends,Family,Home Decor Lovers",
      whySpecial:
        "These ornaments are made from Sea shells and remind you of Goa's beaches and ocean.",
      culturalNote:
        "Shell Crafts are a popular coastal souvenir and reflect Goa's beach life",
      difficulty: "Very easy",
      rating: 4.5,
      loveFactor: 5,
    },
    {
      id: "4",
      name: "Araku Valley Fresh Roasted Coffee Beans",
      location: "Araku valley local markets and coffee outlets near the tribal musesum",
      image:
        "/images/cofeearaku.jpeg",
      price: "₹300-₹1200",
      category: "Food & Beverages",
      perfectFor: "Coffee Lovers, Friends, Office Colleagues",
      whySpecial:
        "Grown in the Eastern Ghats,Araku coffee is organically farmed and roasted fresh for a rich smooth flavour.",
      culturalNote:
        "Cultivated by tribal communities using eco-friendly methods supported by cooperative socities.",
      difficulty: "Easy to find",
      rating: 4.8,
      loveFactor: 5,
    },
  ];

  const giftGuide = [
    {
      person: "Parents",
      suggestions: [
        "Traditional crafts that show cultural appreciation",
        "High-quality local food items (olive oil, honey, tea)",
        "Framed local artwork or photography",
        "Handwoven textiles or table linens",
      ],
    },
    {
      person: "Partner/Spouse",
      suggestions: [
        "Jewelry from local artisans",
        "Perfume or scented products unique to the region",
        "Romantic items (love locks, couple's keepsakes)",
        "Personalized leather goods",
      ],
    },
    {
      person: "Friends",
      suggestions: [
        "Local spirits or wine",
        "Trendy local fashion accessories",
        "Unique home décor items",
        "Gourmet food samplers",
      ],
    },
    {
      person: "Kids",
      suggestions: [
        "Traditional toys from the region",
        "Local sweets and chocolates",
        "Cultural storybooks or postcards",
        "Fun local trinkets and keychains",
      ],
    },
  ];

  const toggleSave = (itemId: string) => {
    if (savedItems.includes(itemId)) {
      setSavedItems(savedItems.filter((id) => id !== itemId));
      toast.success("Removed from gift list");
    } else {
      setSavedItems([...savedItems, itemId]);
      toast.success("Added to your gift list! 🎁");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-rose-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Gift className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700">
                Meaningful Souvenirs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                Bring Memories Home
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We help you find authentic, meaningful gifts that your loved ones
              will cherish forever. Not just souvenirs - pieces of culture and
              connection. 🎁❤️
            </p>
          </motion.div>

          {/* Why This Matters */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-purple-50 to-rose-50 border-2 border-purple-200">
            <div className="text-center">
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 fill-rose-500" />
              <h2 className="text-2xl font-bold mb-4">
                Why Souvenirs Matter ❤️
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Other apps tell you where to go. We help you connect emotionally
                with places AND the people you love back home. Every gift we
                recommend has a story, a tradition, and a meaning - because the
                best souvenirs aren't just objects, they're tangible memories
                that say "I was thinking of you."
              </p>
            </div>
          </Card>

          <Tabs defaultValue="souvenirs" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="souvenirs">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Top Picks
              </TabsTrigger>
              <TabsTrigger value="guide">
                <Users className="w-4 h-4 mr-2" />
                Gift Guide
              </TabsTrigger>
            </TabsList>

            <TabsContent value="souvenirs" className="space-y-8">
              {souvenirs.map((item, index) => (
                <motion.div
                  key={item.id}
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
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 backdrop-blur-sm"
                            onClick={() => toggleSave(item.id)}
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                savedItems.includes(item.id)
                                  ? "fill-rose-500 text-rose-500"
                                  : ""
                              }`}
                            />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded">
                            <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                            <span className="text-sm font-bold text-yellow-900">
                              {item.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 bg-rose-500 px-2 py-1 rounded">
                            {[...Array(item.loveFactor)].map((_, i) => (
                              <Heart
                                key={i}
                                className="w-3 h-3 fill-white text-white"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6 md:p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {item.location}
                            </span>
                            <span className="flex items-center gap-1 text-green-600 font-bold">
                              <DollarSign className="w-4 h-4" />
                              {item.price}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-purple-100 text-purple-700">
                            {item.category}
                          </Badge>
                          <Badge className="bg-green-100 text-green-700">
                            {item.difficulty}
                          </Badge>
                        </div>

                        {/* Perfect For */}
                        <div className="bg-purple-50 p-4 rounded-lg mb-4">
                          <div className="flex items-start gap-2">
                            <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-bold text-sm text-purple-900 mb-1">
                                Perfect For:
                              </p>
                              <p className="text-sm text-purple-700">
                                {item.perfectFor}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Why Meaningful */}
                        <div className="mb-4">
                          <h4 className="font-bold mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-rose-500" />
                            Why It's Meaningful:
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.whyMeaningful}
                          </p>
                        </div>

                        {/* Cultural Note */}
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-bold text-sm text-amber-900 mb-1">
                                Cultural Insight:
                              </p>
                              <p className="text-sm text-amber-800">
                                {item.culturalNote}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Where to Find */}
                        <div className="mb-4">
                          <h4 className="font-bold mb-2 flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            Where to Find:
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.whereToFind}
                          </p>
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600"
                          onClick={() => toast.success("Added to itinerary!")}
                        >
                          <Package className="w-4 h-4 mr-2" />
                          Add to Shopping List
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="guide" className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-rose-50">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Gift Guide by Recipient
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Not sure what to get? Here's our guide for finding the perfect
                  gift for everyone in your life ❤️
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {giftGuide.map((guide, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 h-full border-2 border-purple-200">
                        <div className="flex items-center gap-3 mb-4">
                          <User className="w-8 h-8 text-purple-600" />
                          <h3 className="text-xl font-bold">{guide.person}</h3>
                        </div>
                        <ul className="space-y-2">
                          {guide.suggestions.map((suggestion, i) => (
                            <li key={i} className="flex gap-2 text-gray-700">
                              <span className="text-purple-500">•</span>
                              <span className="text-sm">{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Tips Section */}
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Pro Tips for Souvenir Shopping
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Shop Early</h4>
                    <p className="text-xs text-gray-600">
                      Give yourself time to find quality items
                    </p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Think Personal</h4>
                    <p className="text-xs text-gray-600">
                      Choose items that match their interests
                    </p>
                  </div>
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Authentic Only</h4>
                    <p className="text-xs text-gray-600">
                      Buy from local artisans and markets
                    </p>
                  </div>
                  <div className="text-center">
                    <Package className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Pack Smart</h4>
                    <p className="text-xs text-gray-600">
                      Consider size and fragility
                    </p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Set a Budget</h4>
                    <p className="text-xs text-gray-600">
                      Plan spending per person
                    </p>
                  </div>
                  <div className="text-center">
                    <Gift className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                    <h4 className="font-bold mb-1 text-sm">Add a Story</h4>
                    <p className="text-xs text-gray-600">
                      Share the meaning behind each gift
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-purple-100 to-rose-100 border-2 border-purple-200">
              <Gift className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Plan Your Gift Shopping Journey
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Create your trip and we'll map out the best local markets,
                artisan shops, and authentic stores along your route. Never miss
                the perfect gift again! 🎁
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600"
              >
                Plan My Shopping Adventure
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
