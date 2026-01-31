import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Backpack,
  Sun,
  Cloud,
  Snowflake,
  Shirt,
  FileText,
  Pill,
  Zap,
  Plane,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ShoppingBag,
  Heart,
} from "lucide-react";

export function PackingPage() {
  const [destination, setDestination] = useState("goa");
  const [duration, setDuration] = useState("5-7");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const weatherData: Record<string, { temp: string; icon: any; color: string }> = {
    goa: { temp: "25-32°C", icon: Sun, color: "text-amber-500" },
    "himachal-pradesh": { temp: "10-20°C", icon: Cloud, color: "text-blue-500" },
    rajasthan: { temp: "20-35°C", icon: Sun, color: "text-orange-500" },
    "andhra-pradesh": { temp: "24-30°C", icon: Sun, color: "text-yellow-500" },
    assam: { temp: "20-28°C", icon: Cloud, color: "text-green-500" },
  };

  const clothingByWeather: Record<string, string[]> = {
    goa: [
      "Light cotton t-shirts (5-6)",
      "Shorts and bermudas (3-4)",
      "Beach wear / Swimsuit (2)",
      "Light dress / Casual shirts (2-3)",
      "Flip-flops / Sandals",
      "Sunglasses & Sun hat",
      "Light jacket for AC",
    ],
    "himachal-pradesh": [
      "Warm jackets / Fleece (2)",
      "Thermal innerwear (2 sets)",
      "Woolen sweaters (2-3)",
      "Jeans / Warm pants (3-4)",
      "Warm socks (4-5 pairs)",
      "Gloves & Cap",
      "Trekking shoes / Boots",
      "Light raincoat",
    ],
    rajasthan: [
      "Light cotton clothes (5-6)",
      "Traditional wear for visits (1-2)",
      "Comfortable walking shoes",
      "Sandals for evening (1)",
      "Sunglasses & Scarf",
      "Light jacket for evenings",
      "Sun hat / Cap",
    ],
    "andhra-pradesh": [
      "Light cotton t-shirts (5-6)",
      "Comfortable pants / Jeans (3-4)",
      "Traditional wear for temples (1-2)",
      "Walking shoes (1)",
      "Sandals (1)",
      "Sunglasses",
      "Light jacket",
    ],
    assam: [
      "Light cotton clothes (4-5)",
      "Long pants for jungle safaris (2-3)",
      "Light jacket / Windcheater",
      "Comfortable trekking shoes",
      "Sandals (1)",
      "Sun hat / Cap",
      "Light raincoat",
    ],
  };

  const essentialDocuments = [
    { item: "Government ID (Aadhar / PAN / Passport)", important: true },
    { item: "Hotel booking confirmations (printed)", important: true },
    { item: "Flight / Train / Bus tickets", important: true },
    { item: "Travel insurance documents", important: false },
    { item: "Emergency contact numbers", important: true },
    { item: "Vaccination certificates (if required)", important: false },
    { item: "Photocopies of all documents", important: true },
    { item: "Credit/Debit cards & Cash", important: true },
  ];

  const medicines = [
    { item: "First aid kit (Band-aids, antiseptic)", important: true },
    { item: "Personal prescription medicines", important: true },
    { item: "Pain reliever (Paracetamol / Ibuprofen)", important: true },
    { item: "Antihistamine for allergies", important: false },
    { item: "Antacid / Digestive tablets", important: true },
    { item: "Motion sickness tablets", important: false },
    { item: "Mosquito repellent cream", important: true },
    { item: "Hand sanitizer & Masks", important: true },
  ];

  const electronics = [
    { item: "Mobile phone & Charger", important: true },
    { item: "Power bank (10000mAh+)", important: true },
    { item: "Camera & Memory cards", important: false },
    { item: "Earphones / Headphones", important: false },
    { item: "Universal adapter", important: false },
    { item: "Laptop / Tablet (if needed)", important: false },
    { item: "Charging cables (USB-C, Micro USB)", important: true },
  ];

  const toiletries = [
    { item: "Toothbrush & Toothpaste", important: true },
    { item: "Shampoo & Soap", important: true },
    { item: "Sunscreen (SPF 50+)", important: true },
    { item: "Moisturizer / Lotion", important: true },
    { item: "Deodorant", important: true },
    { item: "Razor & Shaving cream", important: false },
    { item: "Hair brush / Comb", important: true },
    { item: "Towel (quick-dry)", important: true },
    { item: "Wet wipes & Tissues", important: true },
  ];

  const flightRules = [
    {
      category: "Carry-on (Allowed)",
      items: [
        "✅ Liquids under 100ml in transparent bag",
        "✅ Electronics (laptop, phone, tablet)",
        "✅ Medications with prescription",
        "✅ Small scissors (blade < 6cm)",
        "✅ Umbrella (foldable)",
        "✅ Books, magazines",
        "✅ Baby food & formula",
      ],
    },
    {
      category: "Checked Baggage (Allowed)",
      items: [
        "✅ Full-size toiletries & liquids",
        "✅ Sharp objects (scissors, knives)",
        "✅ Sports equipment",
        "✅ Power banks (under 27000mAh)",
        "✅ Lighters (max 1)",
      ],
    },
    {
      category: "Prohibited Items (❌)",
      items: [
        "❌ Weapons & Firearms",
        "❌ Explosives & Flammable items",
        "❌ Lighters in checked bags",
        "❌ Smart bags with non-removable batteries",
        "❌ E-cigarettes in checked bags",
        "❌ Aerosols (flammable)",
      ],
    },
  ];

  const toggleItem = (item: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(item)) {
      newSet.delete(item);
    } else {
      newSet.add(item);
    }
    setCheckedItems(newSet);
  };

  const getProgress = () => {
    const totalItems =
      (clothingByWeather[destination]?.length || 0) +
      essentialDocuments.length +
      medicines.length +
      electronics.length +
      toiletries.length;
    const checkedCount = checkedItems.size;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const WeatherIcon = weatherData[destination].icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
              <Backpack className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-700 font-medium">
                Smart Packing Assistant
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Packing Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Never forget anything with our intelligent packing checklist
            </p>
          </motion.div>

          {/* Destination & Duration Selector */}
          <Card className="p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  📍 Select Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
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
              <div>
                <label className="block text-sm font-medium mb-2">
                  📅 Trip Duration
                </label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-3">2-3 days</SelectItem>
                    <SelectItem value="4-5">4-5 days</SelectItem>
                    <SelectItem value="5-7">5-7 days</SelectItem>
                    <SelectItem value="7-10">7-10 days</SelectItem>
                    <SelectItem value="10+">10+ days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Card className={`p-4 w-full ${weatherData[destination].color} bg-gradient-to-br from-amber-50 to-orange-50`}>
                  <div className="flex items-center gap-3">
                    <WeatherIcon className={`w-10 h-10 ${weatherData[destination].color}`} />
                    <div>
                      <p className="text-xs text-gray-600">Weather</p>
                      <p className="font-bold">{weatherData[destination].temp}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Packing Progress</span>
                <span className="text-sm font-bold text-green-600">{getProgress()}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${getProgress()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </Card>

          <Tabs defaultValue="clothing" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
              <TabsTrigger value="clothing">
                <Shirt className="w-4 h-4 mr-2" />
                Clothing
              </TabsTrigger>
              <TabsTrigger value="documents">
                <FileText className="w-4 h-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="medicines">
                <Pill className="w-4 h-4 mr-2" />
                Medicines
              </TabsTrigger>
              <TabsTrigger value="electronics">
                <Zap className="w-4 h-4 mr-2" />
                Electronics
              </TabsTrigger>
              <TabsTrigger value="toiletries">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Toiletries
              </TabsTrigger>
              <TabsTrigger value="flight-rules">
                <Plane className="w-4 h-4 mr-2" />
                Flight Rules
              </TabsTrigger>
            </TabsList>

            {/* Clothing */}
            <TabsContent value="clothing">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shirt className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold">Clothing Based on Weather</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Recommended clothes for {weatherData[destination].temp} weather
                </p>
                <div className="space-y-3">
                  {clothingByWeather[destination]?.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Checkbox
                        checked={checkedItems.has(item)}
                        onCheckedChange={() => toggleItem(item)}
                      />
                      <span className={checkedItems.has(item) ? "line-through text-gray-400" : ""}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Documents */}
            <TabsContent value="documents">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-6 h-6 text-amber-500" />
                  <h2 className="text-2xl font-bold">Essential Documents</h2>
                </div>
                <div className="space-y-3">
                  {essentialDocuments.map((doc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Checkbox
                        checked={checkedItems.has(doc.item)}
                        onCheckedChange={() => toggleItem(doc.item)}
                      />
                      <span className={checkedItems.has(doc.item) ? "line-through text-gray-400" : ""}>
                        {doc.item}
                      </span>
                      {doc.important && (
                        <Badge variant="destructive" className="ml-auto">
                          Important
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Medicines */}
            <TabsContent value="medicines">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Pill className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-bold">Medical & Health</h2>
                </div>
                <div className="space-y-3">
                  {medicines.map((med, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Checkbox
                        checked={checkedItems.has(med.item)}
                        onCheckedChange={() => toggleItem(med.item)}
                      />
                      <span className={checkedItems.has(med.item) ? "line-through text-gray-400" : ""}>
                        {med.item}
                      </span>
                      {med.important && (
                        <Badge variant="destructive" className="ml-auto">
                          Important
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Electronics */}
            <TabsContent value="electronics">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h2 className="text-2xl font-bold">Electronics & Gadgets</h2>
                </div>
                <div className="space-y-3">
                  {electronics.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Checkbox
                        checked={checkedItems.has(item.item)}
                        onCheckedChange={() => toggleItem(item.item)}
                      />
                      <span className={checkedItems.has(item.item) ? "line-through text-gray-400" : ""}>
                        {item.item}
                      </span>
                      {item.important && (
                        <Badge variant="destructive" className="ml-auto">
                          Must Have
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Toiletries */}
            <TabsContent value="toiletries">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <ShoppingBag className="w-6 h-6 text-green-500" />
                  <h2 className="text-2xl font-bold">Toiletries & Skincare</h2>
                </div>
                <div className="space-y-3">
                  {toiletries.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <Checkbox
                        checked={checkedItems.has(item.item)}
                        onCheckedChange={() => toggleItem(item.item)}
                      />
                      <span className={checkedItems.has(item.item) ? "line-through text-gray-400" : ""}>
                        {item.item}
                      </span>
                      {item.important && (
                        <Badge className="ml-auto bg-green-500">Essential</Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Flight Rules */}
            <TabsContent value="flight-rules">
              <div className="space-y-6">
                <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Plane className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Flight Baggage Rules</h2>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Important guidelines for what you can carry on Indian domestic flights
                  </p>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  {flightRules.map((rule, idx) => (
                    <Card key={idx} className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        {idx === 2 ? (
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        )}
                        {rule.category}
                      </h3>
                      <ul className="space-y-2">
                        {rule.items.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-amber-50 border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold">Important Notes</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cabin bag: 7 kg max (55cm x 35cm x 25cm)</li>
                    <li>• Checked bag: 15-20 kg (varies by airline)</li>
                    <li>• Liquids in carry-on must be in 100ml containers max</li>
                    <li>• Power banks must be in cabin baggage only</li>
                    <li>• Check airline website for updated rules before travel</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Tips */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 border-2 border-green-100">
              <Sparkles className="w-10 h-10 mb-3 text-green-500" />
              <h3 className="font-bold mb-2">Pro Tip</h3>
              <p className="text-sm text-gray-600">
                Roll clothes instead of folding to save space and prevent wrinkles
              </p>
            </Card>
            <Card className="p-6 border-2 border-blue-100">
              <Heart className="w-10 h-10 mb-3 text-blue-500" />
              <h3 className="font-bold mb-2">Smart Packing</h3>
              <p className="text-sm text-gray-600">
                Pack heavy items at the bottom and lighter items on top
              </p>
            </Card>
            <Card className="p-6 border-2 border-purple-100">
              <AlertTriangle className="w-10 h-10 mb-3 text-purple-500" />
              <h3 className="font-bold mb-2">Don't Forget</h3>
              <p className="text-sm text-gray-600">
                Keep valuables and documents in your carry-on bag always
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
