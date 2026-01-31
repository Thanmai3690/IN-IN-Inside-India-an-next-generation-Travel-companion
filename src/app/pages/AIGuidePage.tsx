import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Send,
  Bot,
  User,
  MapPin,
  DollarSign,
  Calendar,
  Sparkles,
  Sun,
  Backpack,
  Camera,
  Utensils,
  Hotel,
  AlertCircle,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
  data?: any;
}

export function AIGuidePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi! I'm your AI Travel Guide. I'll help you plan the perfect trip to Indian destinations. What's your dream destination? If you're not sure, I can suggest the best places for you!",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "Suggest best places in India",
        "Goa beach vacation",
        "Himachal Pradesh mountains",
        "Rajasthan heritage tour",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [chatStep, setChatStep] = useState<
    | "destination"
    | "weather"
    | "budget"
    | "days"
    | "preferences"
    | "recommendations"
  >("destination");
  const [tripData, setTripData] = useState<{
    destination?: string;
    budget?: string;
    days?: number;
    preferences?: string[];
  }>({});

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const indianDestinations = {
    "Andhra Pradesh": {
      places: ["Tirupati", "Visakhapatnam", "Vijayawada", "Araku Valley"],
      bestTime: "October to March",
      specialties: ["Tirupati Laddu", "Pesarattu", "Gongura Pickle"],
      language: "Telugu",
    },
    Goa: {
      places: ["Baga Beach", "Calangute", "Old Goa Churches", "Dudhsagar Falls"],
      bestTime: "November to February",
      specialties: ["Fish Curry", "Bebinca", "Feni"],
      language: "Konkani",
    },
    "Himachal Pradesh": {
      places: ["Shimla", "Manali", "Dharamshala", "Kasol"],
      bestTime: "March to June, September to November",
      specialties: ["Sidu", "Chana Madra", "Babru"],
      language: "Himachali/Hindi",
    },
    Rajasthan: {
      places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      bestTime: "October to March",
      specialties: ["Dal Baati Churma", "Laal Maas", "Ghevar"],
      language: "Rajasthani/Hindi",
    },
  };

  const translationPhrases = {
    Telugu: [
      { english: "Hello", local: "నమస్కారం (Namaskaram)", audio: true },
      { english: "Thank you", local: "ధన్యవాదాలు (Dhanyavadalu)", audio: true },
      { english: "How much?", local: "ఎంత? (Entha?)", audio: true },
      { english: "Water please", local: "నీరు దయచేసి (Neeru dayachesi)", audio: true },
      { english: "Where is toilet?", local: "టాయిలెట్ ఎక్కడ? (Toilet ekkada?)", audio: true },
    ],
    Konkani: [
      { english: "Hello", local: "नमस्कार (Namaskār)", audio: true },
      { english: "Thank you", local: "देव बोरें करूं (Dev borē karū)", audio: true },
      { english: "How much?", local: "किती? (Kitī?)", audio: true },
      { english: "Water please", local: "उदक दि (Udak di)", audio: true },
      { english: "Where is toilet?", local: "शौचालय कोठें? (Śaucālay koṭhē?)", audio: true },
    ],
    "Rajasthani/Hindi": [
      { english: "Hello", local: "नमस्कार (Namaskaar)", audio: true },
      { english: "Thank you", local: "धन्यवाद (Dhanyavaad)", audio: true },
      { english: "How much?", local: "कितना? (Kitna?)", audio: true },
      { english: "Water please", local: "पानी दीजिए (Paani deejiye)", audio: true },
      { english: "Where is toilet?", local: "शौचालय कहाँ है? (Shauchalay kahan hai?)", audio: true },
    ],
    "Himachali/Hindi": [
      { english: "Hello", local: "नमस्ते (Namaste)", audio: true },
      { english: "Thank you", local: "धन्यवाद (Dhanyavaad)", audio: true },
      { english: "How much?", local: "कतना? (Katna?)", audio: true },
      { english: "Water please", local: "पाणी दो (Paani do)", audio: true },
      { english: "Where is toilet?", local: "शौचालय कड्डे? (Shauchalay kadde?)", audio: true },
    ],
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      handleBotResponse(messageText);
    }, 1000);
  };

  const handleBotResponse = (userMessage: string) => {
    let botResponse: Message;
    const lowerMessage = userMessage.toLowerCase();

    if (chatStep === "destination") {
      if (
        lowerMessage.includes("suggest") ||
        lowerMessage.includes("recommend") ||
        lowerMessage.includes("best places")
      ) {
        botResponse = {
          id: Date.now().toString(),
          text: "🌟 Here are the best Indian destinations I recommend:\n\n" +
            "🏖️ Goa - Beach paradise with Portuguese heritage\n" +
            "🏔️ Himachal Pradesh - Mountain beauty and adventure\n" +
            "🏰 Rajasthan - Royal heritage and desert culture\n" +
            "🌊 Andhra Pradesh - Spiritual & coastal wonders\n\n" +
            "Which state interests you the most?",
          sender: "bot",
          timestamp: new Date(),
          suggestions: Object.keys(indianDestinations),
        };
      } else {
        const matchedState = Object.keys(indianDestinations).find((state) =>
          lowerMessage.includes(state.toLowerCase())
        );

        if (matchedState) {
          setTripData((prev) => ({ ...prev, destination: matchedState }));
          const destInfo = indianDestinations[matchedState as keyof typeof indianDestinations];
          
          botResponse = {
            id: Date.now().toString(),
            text: `Excellent choice! ${matchedState} is amazing! 🎉\n\n` +
              `📍 Top places: ${destInfo.places.join(", ")}\n` +
              `🌤️ Best time to visit: ${destInfo.bestTime}\n` +
              `🍽️ Must-try foods: ${destInfo.specialties.join(", ")}\n\n` +
              `Now, what's your budget for this trip?`,
            sender: "bot",
            timestamp: new Date(),
            suggestions: ["Budget (₹10k-20k)", "Mid-range (₹20k-50k)", "Luxury (₹50k+)"],
          };
          setChatStep("budget");
        } else {
          botResponse = {
            id: Date.now().toString(),
            text: "I focus on 5 amazing Indian states: Andhra Pradesh, Goa, Himachal Pradesh, Rajasthan, and Assam. Which one would you like to explore?",
            sender: "bot",
            timestamp: new Date(),
            suggestions: Object.keys(indianDestinations),
          };
        }
      }
    } else if (chatStep === "budget") {
      setTripData((prev) => ({ ...prev, budget: userMessage }));
      botResponse = {
        id: Date.now().toString(),
        text: "Great! How many days are you planning for this trip? 🗓️",
        sender: "bot",
        timestamp: new Date(),
        suggestions: ["3-4 days", "5-7 days", "8-10 days", "More than 10 days"],
      };
      setChatStep("days");
    } else if (chatStep === "days") {
      const daysMatch = userMessage.match(/\d+/);
      const days = daysMatch ? parseInt(daysMatch[0]) : 5;
      setTripData((prev) => ({ ...prev, days }));
      
      botResponse = {
        id: Date.now().toString(),
        text: `Perfect! A ${days}-day trip will be wonderful. ✨\n\n` +
          `Now, what are your travel preferences? Select all that apply:`,
        sender: "bot",
        timestamp: new Date(),
        suggestions: [
          "🍽️ Food & Cuisine",
          "📸 Photography & Content",
          "🏞️ Nature & Adventure",
          "🏛️ Heritage & Culture",
          "🛍️ Shopping & Markets",
          "Show my recommendations",
        ],
      };
      setChatStep("preferences");
    } else if (chatStep === "preferences") {
      if (lowerMessage.includes("recommendations") || lowerMessage.includes("show")) {
        const prefs = tripData.preferences || [];
        botResponse = generateRecommendations(tripData, prefs);
        setChatStep("recommendations");
      } else {
        const newPref = userMessage;
        setTripData((prev) => ({
          ...prev,
          preferences: [...(prev.preferences || []), newPref],
        }));
        
        botResponse = {
          id: Date.now().toString(),
          text: `Added "${newPref}" to your preferences! ✅\n\nSelect more preferences or click "Show my recommendations" when ready.`,
          sender: "bot",
          timestamp: new Date(),
          suggestions: [
            "🍽️ Food & Cuisine",
            "📸 Photography & Content",
            "🏞️ Nature & Adventure",
            "🏛️ Heritage & Culture",
            "Show my recommendations",
          ],
        };
      }
    } else {
      botResponse = {
        id: Date.now().toString(),
        text: "Is there anything else I can help you with? 😊",
        sender: "bot",
        timestamp: new Date(),
        suggestions: [
          "Start a new trip plan",
          "View packing list",
          "Emergency services info",
        ],
      };
    }

    setMessages((prev) => [...prev, botResponse]);
  };

  const generateRecommendations = (data: any, preferences: string[]) => {
    const dest = data.destination;
    const budget = data.budget || "mid-range";
    const days = data.days || 5;

    return {
      id: Date.now().toString(),
      text: `🎉 Here's your personalized ${dest} travel plan!\n\n` +
        `📅 Duration: ${days} days\n` +
        `💰 Budget: ${budget}\n` +
        `⭐ Your Preferences: ${preferences.join(", ")}\n\n` +
        `📦 PACKING ESSENTIALS:\n` +
        (dest === "Himachal Pradesh" || dest === "Kashmir"
          ? "🧥 Warm clothes, jackets, thermals\n"
          : dest === "Goa"
          ? "👙 Beach wear, sunscreen, sunglasses\n"
          : "👕 Light cotton clothes, comfortable shoes\n") +
        `📄 Documents: ID proof, booking confirmations\n` +
        `💊 Medicines: First aid kit, personal meds\n` +
        `🔋 Electronics: Charger, power bank, camera\n\n` +
        `🏨 ACCOMMODATION:\n` +
        (budget.toLowerCase().includes("budget")
          ? "Budget hotels and guesthouses (₹500-1500/night)\n"
          : budget.toLowerCase().includes("luxury")
          ? "Luxury resorts and hotels (₹5000+/night)\n"
          : "3-star hotels and boutique stays (₹2000-4000/night)\n") +
        `\n🍽️ FOOD RECOMMENDATIONS:\n` +
        `Try local specialties at famous food spots\n` +
        `Budget: ₹300-500/meal for local cuisine\n\n` +
        `⚠️ EMERGENCY CONTACTS:\n` +
        `🏥 Hospitals & 📞 Police stations on live map\n` +
        `💱 Currency: Indian Rupees (₹)\n\n` +
        `🔔 SMART ALERTS:\n` +
        `• Crowd alerts for popular spots\n` +
        `• Weather updates & rain alerts\n` +
        `• Best time to visit each location\n\n` +
        `Would you like to:\n` +
        `✅ View detailed route planner\n` +
        `✅ See photo spots with best timing\n` +
        `✅ Get souvenir shopping guide\n` +
        `✅ Set up smart reminders`,
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "View Route Planner",
        "Photo Spots Guide",
        "Souvenir Shopping",
        "Set Reminders",
        "View on Map",
      ],
      data: { destination: dest, budget, days, preferences },
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Bot className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">
                AI-Powered Travel Assistant
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tour Guide Chatbot
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Let me help you plan your perfect Indian adventure!
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: MapPin,
                title: "5 Indian States",
                desc: "Andhra Pradesh, Goa, Himachal Pradesh, Rajasthan, Assam",
                color: "text-rose-500",
                bg: "bg-rose-50",
              },
              {
                icon: DollarSign,
                title: "Budget Planning",
                desc: "Personalized recommendations for your budget",
                color: "text-green-500",
                bg: "bg-green-50",
              },
              {
                icon: Sun,
                title: "Best Weather",
                desc: "Perfect timing for your visit",
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
              {
                icon: Backpack,
                title: "Smart Packing",
                desc: "Weather-based packing lists",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`p-4 ${item.bg} border-2 border-gray-100`}>
                  <item.icon className={`w-8 h-8 mb-2 ${item.color}`} />
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Chat Interface */}
          <Card className="shadow-2xl">
            <div className="flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">AI Travel Guide</h3>
                  <p className="text-sm text-gray-500">Online • Ready to help</p>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex gap-3 ${
                          message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === "user"
                              ? "bg-rose-500"
                              : "bg-gradient-to-r from-blue-500 to-purple-500"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-5 h-5 text-white" />
                          ) : (
                            <Bot className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div
                          className={`flex-1 ${
                            message.sender === "user" ? "items-end" : "items-start"
                          } flex flex-col`}
                        >
                          <div
                            className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                              message.sender === "user"
                                ? "bg-rose-500 text-white"
                                : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="whitespace-pre-line">{message.text}</p>
                          </div>
                          {message.suggestions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {message.suggestions.map((suggestion, idx) => (
                                <Button
                                  key={idx}
                                  size="sm"
                                  variant="outline"
                                  className="text-xs"
                                  onClick={() => handleSendMessage(suggestion)}
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                          <span className="text-xs text-gray-400 mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Features Info */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 border-2 border-blue-100">
              <Sparkles className="w-10 h-10 mb-3 text-blue-500" />
              <h3 className="font-bold mb-2">Smart Suggestions</h3>
              <p className="text-sm text-gray-600">
                Get AI-powered recommendations based on your preferences and budget
              </p>
            </Card>
            <Card className="p-6 border-2 border-purple-100">
              <Calendar className="w-10 h-10 mb-3 text-purple-500" />
              <h3 className="font-bold mb-2">Perfect Timing</h3>
              <p className="text-sm text-gray-600">
                Learn the best seasons and times to visit each destination
              </p>
            </Card>
            <Card className="p-6 border-2 border-rose-100">
              <AlertCircle className="w-10 h-10 mb-3 text-rose-500" />
              <h3 className="font-bold mb-2">Real-time Updates</h3>
              <p className="text-sm text-gray-600">
                Get crowd alerts, weather updates, and travel advisories
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}