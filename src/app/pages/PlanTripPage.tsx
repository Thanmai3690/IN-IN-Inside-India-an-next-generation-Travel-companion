import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Slider } from "@/app/components/ui/slider";
import { Badge } from "@/app/components/ui/badge";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Heart,
  Camera,
  Gift,
  Mountain,
  Building,
  Utensils,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

export function PlanTripPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: [2000],
    travelers: 1,
    interests: [] as string[],
  });

  const interests = [
    { id: "culture", label: "Culture & History", icon: Building },
    { id: "nature", label: "Nature & Adventure", icon: Mountain },
    { id: "food", label: "Food & Dining", icon: Utensils },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "shopping", label: "Shopping", icon: ShoppingBag },
    { id: "romantic", label: "Romantic", icon: Heart },
  ];

  const popularDestinations = [
    "Vizag, AndhraPradesh",
    "Tirupati, AndhraPradesh",
    "North Goa, Goa",
    "South Goa, Goa",
    "Jaipur, Rajasthan",
    "Udaipur, Rajasthan",
    "Manali, Himachal Pradesh",
    "Shimla, Himachal Pradesh",
  ];

  const toggleInterest = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const handleSubmit = () => {
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Your trip plan is ready! 🎉");
    setTimeout(() => {
      navigate("/itinerary");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-orange-50">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                Plan Your Dream Trip
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Let's create an unforgettable journey together
            </p>

            {/* Progress Steps */}
            <div className="flex justify-center items-center gap-4 mt-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      step >= s
                        ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 h-1 rounded ${
                        step > s ? "bg-rose-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <Card className="p-8">
            {/* Step 1: Destination & Dates */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="destination" className="text-lg mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    Where do you want to go?
                  </Label>
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    className="text-lg"
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {popularDestinations.map((dest) => (
                      <Badge
                        key={dest}
                        variant="outline"
                        className="cursor-pointer hover:bg-rose-100 hover:border-rose-300"
                        onClick={() =>
                          setFormData({ ...formData, destination: dest })
                        }
                      >
                        {dest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="startDate" className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-rose-500" />
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-rose-500" />
                      End Date
                    </Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData({ ...formData, endDate: e.target.value })
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600"
                  size="lg"
                  disabled={!formData.destination || !formData.startDate || !formData.endDate}
                >
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Budget & Travelers */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    What's your budget?
                  </Label>
                  <div className="space-y-4">
                    <Slider
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                      max={10000}
                      min={500}
                      step={100}
                      className="mt-6"
                    />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-rose-600">
                        ${formData.budget[0].toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">Per person</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="travelers" className="text-lg mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Number of travelers
                  </Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.travelers}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        travelers: parseInt(e.target.value) || 1,
                      })
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="w-40"
                    size="lg"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="w-40 bg-gradient-to-r from-rose-500 to-orange-500"
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Interests */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-lg mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    What interests you most?
                  </Label>
                  <p className="text-gray-600 mb-4">
                    Select all that apply to personalize your experience
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {interests.map((interest) => (
                      <Card
                        key={interest.id}
                        className={`p-4 cursor-pointer transition-all ${
                          formData.interests.includes(interest.id)
                            ? "border-2 border-rose-500 bg-rose-50"
                            : "border-2 border-gray-200 hover:border-rose-300"
                        }`}
                        onClick={() => toggleInterest(interest.id)}
                      >
                        <div className="flex items-center gap-3">
                          <interest.icon
                            className={`w-8 h-8 ${
                              formData.interests.includes(interest.id)
                                ? "text-rose-500"
                                : "text-gray-400"
                            }`}
                          />
                          <span className="font-medium">{interest.label}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">
                        AI-Powered Personalization
                      </h4>
                      <p className="text-sm text-gray-700">
                        Based on your interests, we'll suggest the best photo
                        spots, local souvenirs, and experiences that match your
                        style. Your itinerary will adapt in real-time to
                        weather, crowds, and local events!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="w-40"
                    size="lg"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="w-40 bg-gradient-to-r from-rose-500 to-orange-500"
                    size="lg"
                  >
                    Create My Itinerary
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>

          {/* Features Preview */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center">
              <Camera className="w-12 h-12 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Perfect Photos</h3>
              <p className="text-sm text-gray-600">
                Get exact locations and best times to capture stunning shots
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Gift className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Meaningful Gifts</h3>
              <p className="text-sm text-gray-600">
                Discover authentic souvenirs your loved ones will cherish
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Live Adaptation</h3>
              <p className="text-sm text-gray-600">
                Your plan adjusts to weather, crowds, and real-time conditions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
