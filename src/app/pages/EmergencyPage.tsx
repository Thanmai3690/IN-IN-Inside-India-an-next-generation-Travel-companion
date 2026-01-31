import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Phone, MapPin, Hospital, AlertTriangle, Navigation as Nav } from "lucide-react";

export function EmergencyPage() {
  const [location, setLocation] = useState("goa");

  const emergencyData: Record<string, any> = {
    goa: {
      hospitals: [
        {
          name: "Goa Medical College & Hospital",
          location: "Bambolim, Goa",
          distance: "15 km from Panjim",
          phone: "0832-2458700",
          emergency: "0832-2458888",
          services: ["Emergency 24/7", "Trauma Center", "ICU"],
        },
        {
          name: "Apollo Victor Hospital",
          location: "Margao, South Goa",
          distance: "35 km from Panjim",
          phone: "0832-2735800",
          emergency: "0832-2735858",
          services: ["Emergency", "ICU", "Cardiac Care"],
        },
        {
          name: "Manipal Hospital",
          location: "Dona Paula, Panjim",
          distance: "8 km from Panjim",
          phone: "0832-2565600",
          emergency: "0832-2565666",
          services: ["24/7 Emergency", "Surgery", "Pediatrics"],
        },
      ],
      police: [
        {
          name: "Calangute Police Station",
          location: "Calangute, North Goa",
          distance: "15 km from Panjim",
          phone: "0832-2277320",
          jurisdiction: "North Goa beaches",
        },
        {
          name: "Panjim Police Station",
          location: "Panjim City",
          distance: "City center",
          phone: "0832-2225831",
          jurisdiction: "Capital city area",
        },
        {
          name: "Colva Police Station",
          location: "Colva, South Goa",
          distance: "30 km from Panjim",
          phone: "0832-2788234",
          jurisdiction: "South Goa beaches",
        },
      ],
      important: [
        { service: "Police Emergency", number: "100", available: "24/7" },
        { service: "Ambulance", number: "108", available: "24/7" },
        { service: "Fire Service", number: "101", available: "24/7" },
        { service: "Tourist Helpline", number: "1363", available: "24/7" },
        { service: "Women Helpline", number: "1091", available: "24/7" },
      ],
    },
    "himachal-pradesh": {
      hospitals: [
        {
          name: "IGMC Hospital Shimla",
          location: "The Ridge, Shimla",
          distance: "City center",
          phone: "0177-2652320",
          emergency: "0177-2652468",
          services: ["Emergency 24/7", "Trauma", "ICU"],
        },
        {
          name: "Kullu Hospital",
          location: "Kullu Valley",
          distance: "40 km from Manali",
          phone: "01902-222349",
          emergency: "01902-222444",
          services: ["Emergency", "General Medicine"],
        },
        {
          name: "Lady Willingdon Hospital",
          location: "Manali, Kullu",
          distance: "Manali town",
          phone: "01902-253370",
          emergency: "01902-253370",
          services: ["Emergency Care", "Basic Treatment"],
        },
      ],
      police: [
        {
          name: "Shimla Police Station",
          location: "The Mall, Shimla",
          distance: "City center",
          phone: "0177-2812344",
          jurisdiction: "Shimla town",
        },
        {
          name: "Manali Police Station",
          location: "Manali town",
          distance: "Town center",
          phone: "01902-252023",
          jurisdiction: "Manali area",
        },
      ],
      important: [
        { service: "Police Emergency", number: "100", available: "24/7" },
        { service: "Ambulance", number: "108", available: "24/7" },
        { service: "Fire Service", number: "101", available: "24/7" },
        { service: "Tourist Helpline", number: "1363", available: "24/7" },
        { service: "Mountain Rescue", number: "0177-2812344", available: "24/7" },
      ],
    },
    rajasthan: {
      hospitals: [
        {
          name: "SMS Hospital Jaipur",
          location: "JLN Marg, Jaipur",
          distance: "City center",
          phone: "0141-2560291",
          emergency: "0141-2560390",
          services: ["Emergency 24/7", "Trauma Center", "All specialties"],
        },
        {
          name: "Fortis Hospital Jaipur",
          location: "Malviya Nagar, Jaipur",
          distance: "10 km from city",
          phone: "0141-2547000",
          emergency: "0141-2547888",
          services: ["Emergency", "ICU", "All specialties"],
        },
      ],
      police: [
        {
          name: "Pink City Police Station",
          location: "M.I. Road, Jaipur",
          distance: "City center",
          phone: "0141-2565888",
          jurisdiction: "Jaipur city",
        },
      ],
      important: [
        { service: "Police Emergency", number: "100", available: "24/7" },
        { service: "Ambulance", number: "108", available: "24/7" },
        { service: "Fire Service", number: "101", available: "24/7" },
        { service: "Tourist Helpline", number: "1363", available: "24/7" },
      ],
    },
  };

  const data = emergencyData[location] || emergencyData.goa;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
              <Shield className="w-5 h-5 text-red-600" />
              <span className="text-sm text-red-700 font-medium">
                Emergency Services
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Emergency Services & Live Map
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Quick access to hospitals and police stations nearby
            </p>
          </motion.div>

          {/* Location Selector */}
          <Card className="p-6 mb-8">
            <label className="block text-sm font-medium mb-2">📍 Select Your Location</label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="max-w-md">
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
          </Card>

          {/* Important Numbers */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-red-600" />
              Important Emergency Numbers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.important.map((item: any, idx: number) => (
                <div key={idx} className="p-4 bg-white rounded-lg border-2 border-red-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">{item.service}</p>
                    <Badge className="bg-red-500">{item.available}</Badge>
                  </div>
                  <a href={`tel:${item.number}`} className="text-2xl font-bold text-red-600 hover:text-red-700">
                    {item.number}
                  </a>
                  <Button className="w-full mt-3 bg-red-500 hover:bg-red-600" asChild>
                    <a href={`tel:${item.number}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Hospitals */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Hospital className="w-6 h-6 text-blue-600" />
            Nearby Hospitals
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {data.hospitals.map((hospital: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 border-2 border-blue-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{hospital.name}</h3>
                    <Badge className="bg-blue-500">Hospital</Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{hospital.location}</p>
                        <p className="text-xs text-gray-500">{hospital.distance}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {hospital.services.map((service: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Phone:</span>
                      <a href={`tel:${hospital.phone}`} className="text-blue-600 font-semibold">
                        {hospital.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Emergency:</span>
                      <a href={`tel:${hospital.emergency}`} className="text-red-600 font-semibold">
                        {hospital.emergency}
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button variant="outline" asChild>
                      <a href={`tel:${hospital.emergency}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <Nav className="w-4 h-4 mr-2" />
                      Navigate
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Police Stations */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            👮 Police Stations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.police.map((police: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 border-2 border-amber-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{police.name}</h3>
                    <Badge className="bg-amber-500">Police</Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{police.location}</p>
                        <p className="text-xs text-gray-500">{police.distance}</p>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="text-gray-600">Jurisdiction:</span>{" "}
                      <span className="font-medium">{police.jurisdiction}</span>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">Phone:</span>
                      <a href={`tel:${police.phone}`} className="text-amber-600 font-semibold">
                        {police.phone}
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" asChild>
                        <a href={`tel:${police.phone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </a>
                      </Button>
                      <Button className="bg-amber-500 hover:bg-amber-600">
                        <Nav className="w-4 h-4 mr-2" />
                        Navigate
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Safety Tips */}
          <Card className="p-6 mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold">Safety Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Save important emergency numbers in your phone</li>
              <li>✅ Share your location with family/friends regularly</li>
              <li>✅ Keep a copy of important documents in cloud storage</li>
              <li>✅ Know the address of your hotel/accommodation</li>
              <li>✅ Carry a power bank to keep your phone charged</li>
              <li>✅ Learn basic local phrases for emergencies</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
