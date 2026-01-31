import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Slider } from "@/app/components/ui/slider";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useState } from "react";
import { motion } from "motion/react";
import { Gift, ShoppingBag, MapPin, DollarSign, Users, Heart, Store, Sparkles, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export function SouvenirSmartPage() {
  const [selectedState, setSelectedState] = useState("goa");
  const [selectedRecipient, setSelectedRecipient] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState([500, 5000]);
  const [showUnique, setShowUnique] = useState(false);

  const stateSpecialties = {
    goa: {
      items: [
        {
          name: "Feni (Local Spirit)",
          price: "₹200-800",
          forWhom: ["Friends", "Colleagues"],
          unique: true,
          marketplace: "Panjim Market, Margao Market",
          cheapest: "Government Emporiums (GTDC outlets)",
          tip: "Buy from licensed shops only",
        },
        {
          name: "Cashew Nuts",
          price: "₹300-600/kg",
          forWhom: ["Family", "Friends", "Colleagues"],
          unique: false,
          marketplace: "Mapusa Market, Anjuna Flea Market",
          cheapest: "Direct from cashew factories in Bicholim",
          tip: "Buy in bulk for better deals",
        },
        {
          name: "Goan Handicrafts",
          price: "₹150-2000",
          forWhom: ["Family", "Friends"],
          unique: true,
          marketplace: "Saturday Night Market, Anjuna",
          cheapest: "Mapusa Friday Market",
          tip: "Bargain is expected!",
        },
        {
          name: "Bebinca (Sweet)",
          price: "₹250-500",
          forWhom: ["Family", "Parents"],
          unique: true,
          marketplace: "Local bakeries in Panjim",
          cheapest: "Traditional bakeries in Margao",
          tip: "Buy fresh, lasts 2-3 days",
        },
        {
          name: "Seashell Decorations",
          price: "₹100-800",
          forWhom: ["Kids", "Family"],
          unique: false,
          marketplace: "Beach markets (Calangute, Baga)",
          cheapest: "Colva Beach Market",
          tip: "Evening markets have better prices",
        },
      ],
    },
    "himachal-pradesh": {
      items: [
        {
          name: "Woolen Shawls",
          price: "₹500-3000",
          forWhom: ["Parents", "Family", "Boss"],
          unique: true,
          marketplace: "Mall Road Shimla, Old Manali Market",
          cheapest: "Kullu Shawl Factories",
          tip: "Check for pure wool certification",
        },
        {
          name: "Himachali Honey",
          price: "₹300-800",
          forWhom: ["Family", "Friends", "Colleagues"],
          unique: true,
          marketplace: "Local markets in Manali",
          cheapest: "Direct from bee farms in Kangra",
          tip: "Buy wild flower honey for best quality",
        },
        {
          name: "Handmade Jewelry",
          price: "₹200-2000",
          forWhom: ["Partners", "Family", "Friends"],
          unique: true,
          marketplace: "Tibetan Market, McLeod Ganj",
          cheapest: "Local artisan workshops",
          tip: "Silver jewelry is authentic",
        },
        {
          name: "Apple Products (Juice, Jam)",
          price: "₹150-500",
          forWhom: ["Family", "Colleagues"],
          unique: false,
          marketplace: "Kinnaur, Shimla markets",
          cheapest: "Apple orchards in Kotgarh",
          tip: "Buy during harvest season (Sept-Oct)",
        },
        {
          name: "Tibetan Prayer Flags",
          price: "₹50-300",
          forWhom: ["Friends", "Spiritual seekers"],
          unique: true,
          marketplace: "Dharamshala, McLeod Ganj",
          cheapest: "Monastery shops",
          tip: "Proceeds support local monasteries",
        },
      ],
    },
    rajasthan: {
      items: [
        {
          name: "Blue Pottery",
          price: "₹200-5000",
          forWhom: ["Parents", "Family", "Home decor lovers"],
          unique: true,
          marketplace: "Jodhpur markets, Jaipur bazaars",
          cheapest: "Factory outlets in Jaipur",
          tip: "Check for authentic hand-painted pieces",
        },
        {
          name: "Block Printed Textiles",
          price: "₹300-3000",
          forWhom: ["Family", "Friends", "Fashion lovers"],
          unique: true,
          marketplace: "Johari Bazaar Jaipur, Sadar Market Jodhpur",
          cheapest: "Sanganer village (printing hub)",
          tip: "Look for natural dyes",
        },
        {
          name: "Mojari (Traditional Shoes)",
          price: "₹200-1500",
          forWhom: ["Friends", "Fashion enthusiasts"],
          unique: true,
          marketplace: "Jodhpur Clock Tower Market",
          cheapest: "Mochi Bazaar (shoemakers' market)",
          tip: "Get custom sizes made",
        },
        {
          name: "Miniature Paintings",
          price: "₹500-10000",
          forWhom: ["Art lovers", "Boss", "Family"],
          unique: true,
          marketplace: "Udaipur art galleries",
          cheapest: "Directly from artists in Nathdwara",
          tip: "Authentic ones take days to paint",
        },
        {
          name: "Rajasthani Sweets (Ghevar, Dal Baati)",
          price: "₹150-600",
          forWhom: ["Family", "Colleagues"],
          unique: true,
          marketplace: "LMB Jaipur, local sweet shops",
          cheapest: "MT (Mishrilal Hotel), Jaipur",
          tip: "Pack carefully for travel",
        },
      ],
    },
    "andhra-pradesh": {
      items: [
        {
          name: "Tirupati Laddu",
          price: "₹50-200",
          forWhom: ["Family", "Religious", "Everyone"],
          unique: true,
          marketplace: "Only at Tirupati Temple",
          cheapest: "Temple counters (official price)",
          tip: "Prasadam from temple only, no outside vendors",
        },
        {
          name: "Kondapalli Toys",
          price: "₹100-1500",
          forWhom: ["Kids", "Family", "Collectors"],
          unique: true,
          marketplace: "Kondapalli village, Vijayawada",
          cheapest: "Direct from artisan homes",
          tip: "Handcrafted wooden toys, eco-friendly",
        },
        {
          name: "Kalamkari Textiles",
          price: "₹300-3000",
          forWhom: ["Fashion lovers", "Family"],
          unique: true,
          marketplace: "Srikalahasti, Machilipatnam",
          cheapest: "Weaver cooperatives",
          tip: "Hand-painted vs. block-printed varieties",
        },
        {
          name: "Pearls (Hyderabad)",
          price: "₹500-50000",
          forWhom: ["Partners", "Parents", "Special occasions"],
          unique: false,
          marketplace: "Laad Bazaar, Hyderabad",
          cheapest: "Wholesale markets in Charminar area",
          tip: "Get authenticity certificate",
        },
        {
          name: "Pickles & Spices",
          price: "₹100-500",
          forWhom: ["Family", "Food lovers"],
          unique: true,
          marketplace: "Local markets in Guntur, Vizag",
          cheapest: "Wholesale spice markets",
          tip: "Gongura and Avakaya pickles are famous",
        },
      ],
    },
    assam: {
      items: [
        {
          name: "Assam Tea",
          price: "₹200-2000",
          forWhom: ["Tea lovers", "Parents", "Colleagues"],
          unique: true,
          marketplace: "Tea estates, Guwahati markets",
          cheapest: "Direct from tea gardens in Dibrugarh",
          tip: "Orthodox tea is premium quality",
        },
        {
          name: "Muga Silk Sarees",
          price: "₹2000-30000",
          forWhom: ["Parents", "Special occasions", "Family"],
          unique: true,
          marketplace: "Fancy Bazaar Guwahati, Sualkuchi",
          cheapest: "Weaver villages in Sualkuchi",
          tip: "Golden silk exclusive to Assam",
        },
        {
          name: "Bamboo & Cane Crafts",
          price: "₹150-2000",
          forWhom: ["Home decor", "Eco-conscious friends"],
          unique: true,
          marketplace: "Local markets in Jorhat, Tezpur",
          cheapest: "Craft villages in Majuli",
          tip: "Eco-friendly and durable",
        },
        {
          name: "Traditional Jewelry (Gamkharu)",
          price: "₹500-5000",
          forWhom: ["Fashion lovers", "Cultural enthusiasts"],
          unique: true,
          marketplace: "Pan Bazaar, Fancy Bazaar Guwahati",
          cheapest: "Local artisan cooperatives",
          tip: "Tribal jewelry designs are unique",
        },
        {
          name: "Pitha (Traditional sweets)",
          price: "₹100-400",
          forWhom: ["Family", "Food lovers"],
          unique: true,
          marketplace: "Local sweet shops",
          cheapest: "Homemade from local vendors",
          tip: "Best during Bihu festival season",
        },
      ],
    },
  };

  const recipientOptions = [
    { value: "Family", label: "👨‍👩‍👧‍👦 Family" },
    { value: "Parents", label: "👴👵 Parents" },
    { value: "Friends", label: "👫 Friends" },
    { value: "Colleagues", label: "💼 Colleagues" },
    { value: "Boss", label: "👔 Boss" },
    { value: "Partners", label: "❤️ Partner" },
    { value: "Kids", label: "👶 Kids" },
  ];

  const toggleRecipient = (recipient: string) => {
    if (selectedRecipient.includes(recipient)) {
      setSelectedRecipient(selectedRecipient.filter((r) => r !== recipient));
    } else {
      setSelectedRecipient([...selectedRecipient, recipient]);
    }
  };

  const filteredItems = stateSpecialties[selectedState as keyof typeof stateSpecialties].items.filter((item) => {
    const priceMatch =
      parseInt(item.price.replace(/[^0-9]/g, "")) >= budgetRange[0] &&
      parseInt(item.price.replace(/[^0-9]/g, "")) <= budgetRange[1];
    
    const recipientMatch =
      selectedRecipient.length === 0 ||
      item.forWhom.some((w) => selectedRecipient.includes(w));
    
    const uniqueMatch = !showUnique || item.unique;

    return priceMatch && recipientMatch && uniqueMatch;
  });

  const addToShoppingList = (itemName: string) => {
    toast.success(`Added "${itemName}" to shopping list!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Gift className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">
                Souvenir Smart Shopping
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Souvenir Smart
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Find perfect gifts with budget filters and marketplace recommendations
            </p>
          </motion.div>

          {/* Filters */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              Smart Filters
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  📍 Select Destination
                </label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="goa">🏖️ Goa</SelectItem>
                    <SelectItem value="himachal-pradesh">🏔️ Himachal Pradesh</SelectItem>
                    <SelectItem value="rajasthan">🏰 Rajasthan</SelectItem>
                    <SelectItem value="andhra-pradesh">🌊 Andhra Pradesh</SelectItem>
                    <SelectItem value="assam">🌿 Assam</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  💰 Budget Range: ₹{budgetRange[0]} - ₹{budgetRange[1]}
                </label>
                <Slider
                  value={budgetRange}
                  onValueChange={setBudgetRange}
                  min={50}
                  max={50000}
                  step={50}
                  className="mt-4"
                />
              </div>
            </div>

            {/* Recipients */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-3">
                🎁 Who are you buying for?
              </label>
              <div className="flex flex-wrap gap-2">
                {recipientOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedRecipient.includes(option.value) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleRecipient(option.value)}
                    className={
                      selectedRecipient.includes(option.value)
                        ? "bg-purple-500 hover:bg-purple-600"
                        : ""
                    }
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Unique Filter */}
            <div className="mt-6 flex items-center gap-2">
              <Checkbox checked={showUnique} onCheckedChange={(checked) => setShowUnique(!!checked)} />
              <label className="text-sm font-medium cursor-pointer">
                ✨ Show only unique & special items from this region
              </label>
            </div>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              🛍️ {filteredItems.length} Items Found
            </h2>
            <p className="text-gray-600">
              Perfect souvenirs from {selectedState.replace("-", " ")} for your loved ones
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-semibold text-green-600">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      {item.unique && (
                        <Badge className="bg-purple-500">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Unique
                        </Badge>
                      )}
                    </div>

                    {/* Perfect For */}
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Perfect for:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.forWhom.map((person, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Marketplace */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Store className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">Where to find:</p>
                          <p className="text-gray-600">{item.marketplace}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">Cheapest at:</p>
                          <p className="text-gray-600">{item.cheapest}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tip */}
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-amber-800">
                        💡 <strong>Tip:</strong> {item.tip}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => addToShoppingList(item.name)}
                      className="w-full bg-purple-500 hover:bg-purple-600"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Shopping List
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <Card className="p-12 text-center">
              <Gift className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-bold mb-2">No items match your filters</h3>
              <p className="text-gray-600">
                Try adjusting your budget range or recipient selection
              </p>
            </Card>
          )}

          {/* Shopping Tips */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 border-2 border-purple-100">
              <MapPin className="w-10 h-10 mb-3 text-purple-500" />
              <h3 className="font-bold mb-2">Local Markets</h3>
              <p className="text-sm text-gray-600">
                Visit local markets early morning for fresh stock and better prices
              </p>
            </Card>
            <Card className="p-6 border-2 border-green-100">
              <DollarSign className="w-10 h-10 mb-3 text-green-500" />
              <h3 className="font-bold mb-2">Bargaining</h3>
              <p className="text-sm text-gray-600">
                Start at 50-60% of quoted price, especially in tourist markets
              </p>
            </Card>
            <Card className="p-6 border-2 border-blue-100">
              <Heart className="w-10 h-10 mb-3 text-blue-500" />
              <h3 className="font-bold mb-2">Authenticity</h3>
              <p className="text-sm text-gray-600">
                Buy from government emporiums or certified shops for guaranteed quality
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
