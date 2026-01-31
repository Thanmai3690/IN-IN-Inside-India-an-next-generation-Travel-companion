import { Navigation } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useState } from "react";
import { motion } from "motion/react";
import { Bell, Clock, Gift, Backpack, CheckCircle2, Calendar, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Reminder {
  id: string;
  title: string;
  time: string;
  category: string;
  completed: boolean;
}

export function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Pack medicines and first aid kit",
      time: "1 day before departure",
      category: "packing",
      completed: false,
    },
    {
      id: "2",
      title: "Check weather forecast",
      time: "2 days before departure",
      category: "planning",
      completed: false,
    },
    {
      id: "3",
      title: "Confirm hotel bookings",
      time: "3 days before departure",
      category: "planning",
      completed: false,
    },
    {
      id: "4",
      title: "Buy gifts/souvenirs",
      time: "Last day of trip",
      category: "gifts",
      completed: false,
    },
    {
      id: "5",
      title: "Print travel documents",
      time: "1 day before departure",
      category: "documents",
      completed: false,
    },
  ]);

  const [newReminderTitle, setNewReminderTitle] = useState("");
  const [newReminderTime, setNewReminderTime] = useState("1-day");
  const [newReminderCategory, setNewReminderCategory] = useState("packing");

  const tripTimeline = [
    {
      stage: "2 Weeks Before",
      tasks: [
        "Book flights/trains",
        "Reserve hotels",
        "Apply for any permits if needed",
        "Check passport/ID validity",
      ],
    },
    {
      stage: "1 Week Before",
      tasks: [
        "Check weather forecast",
        "Plan itinerary",
        "Book activities/tours",
        "Inform bank about travel",
      ],
    },
    {
      stage: "3 Days Before",
      tasks: [
        "Start packing",
        "Charge power banks",
        "Download offline maps",
        "Currency exchange",
      ],
    },
    {
      stage: "1 Day Before",
      tasks: [
        "Final packing check",
        "Print documents",
        "Set reminders",
        "Pack medicines",
      ],
    },
    {
      stage: "Day of Travel",
      tasks: [
        "Check all documents",
        "Lock house properly",
        "Arrive at station/airport early",
        "Keep phone charged",
      ],
    },
    {
      stage: "During Trip",
      tasks: [
        "Take photos",
        "Try local food",
        "Buy souvenirs",
        "Share updates with family",
      ],
    },
    {
      stage: "Last Day",
      tasks: [
        "Buy pending gifts",
        "Pack carefully",
        "Settle hotel bills",
        "Check for forgotten items",
      ],
    },
    {
      stage: "Day of Return",
      tasks: [
        "Final room check",
        "Airport check-in",
        "Keep snacks handy",
        "Plan rest day after return",
      ],
    },
  ];

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
      )
    );
    toast.success("Reminder updated!");
  };

  const addReminder = () => {
    if (!newReminderTitle.trim()) {
      toast.error("Please enter a reminder title");
      return;
    }

    const newReminder: Reminder = {
      id: Date.now().toString(),
      title: newReminderTitle,
      time: newReminderTime,
      category: newReminderCategory,
      completed: false,
    };

    setReminders([...reminders, newReminder]);
    setNewReminderTitle("");
    toast.success("Reminder added!");
  };

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((r) => r.id !== id));
    toast.success("Reminder deleted!");
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      packing: "bg-blue-500",
      planning: "bg-purple-500",
      gifts: "bg-pink-500",
      documents: "bg-amber-500",
      general: "bg-gray-500",
    };
    return colors[category] || "bg-gray-500";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "packing":
        return <Backpack className="w-3 h-3" />;
      case "gifts":
        return <Gift className="w-3 h-3" />;
      case "planning":
        return <Calendar className="w-3 h-3" />;
      default:
        return <Bell className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Bell className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-amber-700 font-medium">
                Smart Reminders
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Smart Travel Reminders
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Never forget packing, gifts, or important travel tasks
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Reminders */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-amber-500" />
                  Active Reminders
                </h2>

                {/* Add New Reminder */}
                <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg mb-4">
                  <h3 className="font-semibold mb-3">Add New Reminder</h3>
                  <div className="space-y-3">
                    <Input
                      placeholder="Reminder title..."
                      value={newReminderTitle}
                      onChange={(e) => setNewReminderTitle(e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Select value={newReminderTime} onValueChange={setNewReminderTime}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-day">1 day before</SelectItem>
                          <SelectItem value="2-days">2 days before</SelectItem>
                          <SelectItem value="3-days">3 days before</SelectItem>
                          <SelectItem value="1-week">1 week before</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={newReminderCategory} onValueChange={setNewReminderCategory}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="packing">🎒 Packing</SelectItem>
                          <SelectItem value="planning">📅 Planning</SelectItem>
                          <SelectItem value="gifts">🎁 Gifts</SelectItem>
                          <SelectItem value="documents">📄 Documents</SelectItem>
                          <SelectItem value="general">🔔 General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={addReminder} className="w-full bg-amber-500 hover:bg-amber-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Reminder
                    </Button>
                  </div>
                </div>

                {/* Reminder List */}
                <div className="space-y-3">
                  {reminders.map((reminder) => (
                    <motion.div
                      key={reminder.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-4 rounded-lg border-2 ${
                        reminder.completed
                          ? "bg-gray-50 border-gray-200"
                          : "bg-white border-amber-100"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={reminder.completed}
                          onCheckedChange={() => toggleReminder(reminder.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p
                              className={`font-semibold ${
                                reminder.completed ? "line-through text-gray-400" : ""
                              }`}
                            >
                              {reminder.title}
                            </p>
                            <Badge className={`${getCategoryColor(reminder.category)} text-xs`}>
                              {getCategoryIcon(reminder.category)}
                              <span className="ml-1 capitalize">{reminder.category}</span>
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{reminder.time}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteReminder(reminder.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}

                  {reminders.length === 0 && (
                    <div className="text-center py-12">
                      <Bell className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-500">No reminders yet. Add one above!</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Popular Reminder Templates */}
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">🚀 Quick Templates</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: "Don't forget the gifts!", category: "gifts" },
                    { title: "Pack phone charger", category: "packing" },
                    { title: "Check flight status", category: "planning" },
                    { title: "Carry passport copy", category: "documents" },
                  ].map((template, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="justify-start"
                      onClick={() => {
                        setNewReminderTitle(template.title);
                        setNewReminderCategory(template.category);
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {template.title}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Trip Timeline */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Trip Timeline
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Complete checklist for your journey
                </p>

                <div className="space-y-4">
                  {tripTimeline.map((stage, idx) => (
                    <div key={idx} className="border-l-2 border-amber-300 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full -ml-[1.4rem]" />
                        <h3 className="font-bold text-sm">{stage.stage}</h3>
                      </div>
                      <ul className="space-y-1">
                        {stage.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="text-xs text-gray-600 flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Tips */}
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  💡 Smart Reminder Tips
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>📱 Enable push notifications</li>
                  <li>⏰ Set reminders 1 day before important tasks</li>
                  <li>✅ Check off completed items</li>
                  <li>📝 Add custom reminders for your needs</li>
                  <li>🔔 Review reminders the night before travel</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
