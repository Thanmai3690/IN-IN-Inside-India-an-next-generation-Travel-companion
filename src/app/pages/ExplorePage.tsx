import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { motion } from "motion/react";
import {
  Search,
  MapPin,
  TrendingUp,
  Heart,
  Star,
  Camera,
  Gift,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { destinationsList } from "@/app/data/destinations";

export function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Destinations" },
    { id: "beach", label: "Beach Paradise" },
    { id: "culture", label: "Cultural" },
    { id: "mountains", label: "Mountains" },
    { id: "heritage", label: "Heritage" },
    { id: "adventure", label: "Adventure" },
  ];

  const filteredDestinations = destinationsList.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || dest.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explore Incredible India
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover places that will capture your heart and create memories
              that last forever ✨
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link to={`/destination/${destination.id}`}>
                  <Card className="overflow-hidden cursor-pointer group h-full hover:shadow-2xl transition-shadow">
                    <div className="relative h-64">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <Badge className="bg-yellow-400 text-yellow-900">
                          <Star className="w-3 h-3 mr-1 fill-yellow-900" />
                          {destination.rating}
                        </Badge>
                      </div>

                      {/* Heart Icon */}
                      <div className="absolute top-4 right-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm hover:bg-white"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          {destination.name}
                        </h3>
                        <p className="text-sm text-gray-200 flex items-center gap-1 mb-2">
                          <MapPin className="w-3 h-3" />
                          {destination.state}
                        </p>
                        <p className="text-sm text-gray-200 mb-3">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.slice(0, 3).map((highlight) => (
                            <Badge
                              key={highlight}
                              variant="outline"
                              className="bg-white/20 text-white border-white/40 text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <Camera className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                          <p className="text-xs text-gray-600">Photo Spots</p>
                        </div>
                        <div className="text-center">
                          <Gift className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                          <p className="text-xs text-gray-600">Souvenirs</p>
                        </div>
                        <div className="text-center">
                          <Sparkles className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                          <p className="text-xs text-gray-600">AI Guide</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">
                No destinations found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-200 text-center">
              <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Can't Decide? Let AI Help!
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Answer a few questions about your travel style, and our AI will
                recommend the perfect destinations tailored just for you -
                complete with photo spots and souvenir suggestions! ✨
              </p>
              <Link to="/plan">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Get Personalized Recommendations
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
