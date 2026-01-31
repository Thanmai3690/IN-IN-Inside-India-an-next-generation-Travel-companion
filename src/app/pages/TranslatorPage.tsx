import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Badge } from "@/app/components/ui/badge";
import { useState } from "react";
import { motion } from "motion/react";
import { Languages, Volume2, Copy, Check, Book, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export function TranslatorPage() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("english");
  const [toLang, setToLang] = useState("hindi");
  const [copied, setCopied] = useState(false);

  const commonPhrases = {
    greetings: [
      { english: "Hello / Hi", hindi: "नमस्ते (Namaste)", kannada: "ನಮಸ್ಕಾರ (Namaskara)", bengali: "নমস্কার (Nomoshkar)" },
      { english: "Good morning", hindi: "सुप्रभात (Suprabhat)", kannada: "ಶುಭೋದಯ (Shubhodaya)", bengali: "সুপ্রভাত (Shuprobhat)" },
      { english: "How are you?", hindi: "आप कैसे हैं? (Aap kaise hain?)", kannada: "ಹೇಗಿದ್ದೀರಿ? (Hegiddiri?)", bengali: "আপনি কেমন আছেন? (Apni kemon achen?)" },
      { english: "Thank you", hindi: "धन्यवाद (Dhanyavaad)", kannada: "ಧನ್ಯವಾದ (Dhanyavada)", bengali: "ধন্যবাদ (Dhonnobad)" },
      { english: "Please", hindi: "कृपया (Kripya)", kannada: "ದಯವಿಟ್ಟು (Dayavittu)", bengali: "দয়া করে (Doya kore)" },
    ],
    food: [
      { english: "Where is a good restaurant?", hindi: "अच्छा रेस्टोरेंट कहाँ है? (Accha restaurant kahan hai?)", kannada: "ಉತ್ತಮ ರೆಸ್ಟೋರೆಂಟ್ ಎಲ್ಲಿದೆ? (Uttama resṭoreṇṭ ellide?)", bengali: "ভালো রেস্তোরাঁ কোথায়? (Bhalo resturant kothay?)" },
      { english: "I'm vegetarian", hindi: "मैं शाकाहारी हूँ (Main shakahari hoon)", kannada: "ನಾನು ಸಸ್ಯಾಹಾರಿ (Nanu sasyahari)", bengali: "আমি নিরামিষভোজী (Ami niramishabhojthi)" },
      { english: "Water, please", hindi: "पानी, कृपया (Pani, kripya)", kannada: "ನೀರು, ದಯವಿಟ್ಟು (Niru, dayavittu)", bengali: "জল, দয়া করে (Jol, doya kore)" },
      { english: "How much is this?", hindi: "यह कितने का है? (Yeh kitne ka hai?)", kannada: "ಇದು ಎಷ್ಟು? (Idu eshṭu?)", bengali: "এটি কত? (Eti koto?)" },
      { english: "Delicious!", hindi: "स्वादिष्ट! (Swadisht!)", kannada: "ರುಚಿಕರವಾಗಿದೆ! (Ruchikaravagide!)", bengali: "সুস্বাদু! (Shuswadu!)" },
    ],
    directions: [
      { english: "Where is...?", hindi: "...कहाँ है? (...kahan hai?)", kannada: "...ಎಲ್ಲಿದೆ? (...ellide?)", bengali: "...কোথায়? (...kothay?)" },
      { english: "How far is it?", hindi: "यह कितनी दूर है? (Yeh kitni door hai?)", kannada: "ಅದು ಎಷ್ಟು ದೂರ? (Adu eshṭu dūra?)", bengali: "এটা কত দূর? (Eta koto dur?)" },
      { english: "Left / Right", hindi: "बाएं / दाएं (Bayen / Dayen)", kannada: "ಎಡ / ಬಲ (Eḍa / Bala)", bengali: "বাম / ডান (Bam / Dan)" },
      { english: "Straight ahead", hindi: "सीधे आगे (Seedhe aage)", kannada: "ನೇರವಾಗಿ (Neravagi)", bengali: "সোজা সামনে (Shoja shamne)" },
      { english: "Stop here", hindi: "यहाँ रुकें (Yahan ruken)", kannada: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ (Illi nillisi)", bengali: "এখানে থামুন (Ekhane thamun)" },
    ],
    emergency: [
      { english: "Help!", hindi: "मदद! (Madad!)", kannada: "ಸಹಾಯ! (Sahaya!)", bengali: "সাহায্য! (Shahajyo!)" },
      { english: "Call the police", hindi: "पुलिस बुलाओ (Police bulao)", kannada: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ (Polis kareyiri)", bengali: "পুলিশ ডাকুন (Pulish dakun)" },
      { english: "I need a doctor", hindi: "मुझे डॉक्टर चाहिए (Mujhe doctor chahiye)", kannada: "ನನಗೆ ವೈದ್ಯರ ಅವಶ್ಯಕತೆ (Nanage vaidyara avashyakate)", bengali: "আমার ডাক্তার দরকার (Amar daktar dorkar)" },
      { english: "Where is the hospital?", hindi: "अस्पताल कहाँ है? (Aspatal kahan hai?)", kannada: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ? (Aspatre ellide?)", bengali: "হাসপাতাল কোথায়? (Hashpatal kothay?)" },
      { english: "I'm lost", hindi: "मैं खो गया हूँ (Main kho gaya hoon)", kannada: "ನಾನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ (Nanu kaledukoṇḍiddene)", bengali: "আমি হারিয়ে গেছি (Ami hariye gechi)" },
    ],
  };

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिन्दी (Hindi)" },
    { value: "kannada", label: "ಕನ್ನಡ (Kannada)" },
    { value: "bengali", label: "বাংলা (Bengali)" },
    { value: "assamese", label: "অসমীয়া (Assamese)" },
  ];

  const handleTranslate = () => {
    // Simulated translation
    setTranslatedText(`Translated: ${sourceText}`);
    toast.success("Text translated!");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Copied to clipboard!");
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    toast.success("Playing audio");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <Languages className="w-5 h-5 text-indigo-600" />
              <span className="text-sm text-indigo-700 font-medium">
                Translation Helper
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Language Translation Helper
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Break language barriers and connect with locals
            </p>
          </motion.div>

          {/* Translator Tool */}
          <Card className="p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Select value={fromLang} onValueChange={setFromLang}>
                <SelectTrigger>
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={toLang} onValueChange={setToLang}>
                <SelectTrigger>
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  placeholder="Type text to translate..."
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  className="h-24"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => speakText(sourceText)}
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Listen
                </Button>
              </div>

              <div>
                <Input
                  placeholder="Translation appears here..."
                  value={translatedText}
                  readOnly
                  className="h-24 bg-gray-50"
                />
                <div className="flex gap-2 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(translatedText)}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    Copy
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => speakText(translatedText)}
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </div>
            </div>

            <Button
              onClick={handleTranslate}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            >
              <Languages className="w-4 h-4 mr-2" />
              Translate
            </Button>
          </Card>

          {/* Common Phrases */}
          <Tabs defaultValue="greetings" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="greetings">Greetings</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="directions">Directions</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>

            {Object.entries(commonPhrases).map(([category, phrases]) => (
              <TabsContent key={category} value={category}>
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4 capitalize flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-500" />
                    {category} Phrases
                  </h2>
                  <div className="space-y-4">
                    {phrases.map((phrase, idx) => (
                      <div key={idx} className="p-4 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg">
                        <div className="grid md:grid-cols-4 gap-3">
                          <div>
                            <Badge className="mb-2">English</Badge>
                            <p className="font-semibold">{phrase.english}</p>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-orange-500">Hindi</Badge>
                            <p>{phrase.hindi}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 p-0 h-6"
                              onClick={() => speakText(phrase.hindi)}
                            >
                              <Volume2 className="w-3 h-3" />
                            </Button>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-red-500">Kannada</Badge>
                            <p>{phrase.kannada}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 p-0 h-6"
                              onClick={() => speakText(phrase.kannada)}
                            >
                              <Volume2 className="w-3 h-3" />
                            </Button>
                          </div>
                          <div>
                            <Badge className="mb-2 bg-green-500">Bengali</Badge>
                            <p>{phrase.bengali}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 p-0 h-6"
                              onClick={() => speakText(phrase.bengali)}
                            >
                              <Volume2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Quick Tips */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 border-2 border-indigo-100">
              <Book className="w-10 h-10 mb-3 text-indigo-500" />
              <h3 className="font-bold mb-2">Learn Key Phrases</h3>
              <p className="text-sm text-gray-600">
                Master basic greetings and common phrases for better connections
              </p>
            </Card>
            <Card className="p-6 border-2 border-purple-100">
              <Volume2 className="w-10 h-10 mb-3 text-purple-500" />
              <h3 className="font-bold mb-2">Use Audio</h3>
              <p className="text-sm text-gray-600">
                Listen to pronunciations to speak confidently with locals
              </p>
            </Card>
            <Card className="p-6 border-2 border-pink-100">
              <MessageSquare className="w-10 h-10 mb-3 text-pink-500" />
              <h3 className="font-bold mb-2">Gesture Friendly</h3>
              <p className="text-sm text-gray-600">
                Combine phrases with gestures for clearer communication
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
