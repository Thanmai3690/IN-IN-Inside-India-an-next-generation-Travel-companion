import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '@/app/pages/HomePage';
import { PlanTripPage } from '@/app/pages/PlanTripPage';
import { PhotoSpotsPage } from '@/app/pages/PhotoSpotsPage';
import { SouvenirsPage } from '@/app/pages/SouvenirsPage';
import { ItineraryPage } from '@/app/pages/ItineraryPage';
import { ExplorePage } from '@/app/pages/ExplorePage';
import { DestinationDetailPage } from '@/app/pages/DestinationDetailPage';
import { AIGuidePage } from '@/app/pages/AIGuidePage';
import { PackingPage } from '@/app/pages/PackingPage';
import { PhotoToolsPage } from '@/app/pages/PhotoToolsPage';
import { SouvenirSmartPage } from '@/app/pages/SouvenirSmartPage';
import { RoutePlannerPage } from '@/app/pages/RoutePlannerPage';
import { TranslatorPage } from '@/app/pages/TranslatorPage';
import { EmergencyPage } from '@/app/pages/EmergencyPage';
import { RemindersPage } from '@/app/pages/RemindersPage';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plan" element={<PlanTripPage />} />
        <Route path="/photo-spots" element={<PhotoSpotsPage />} />
        <Route path="/souvenirs" element={<SouvenirsPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/destination/:id" element={<DestinationDetailPage />} />
        <Route path="/ai-guide" element={<AIGuidePage />} />
        <Route path="/packing" element={<PackingPage />} />
        <Route path="/photo-tools" element={<PhotoToolsPage />} />
        <Route path="/souvenir-smart" element={<SouvenirSmartPage />} />
        <Route path="/route-planner" element={<RoutePlannerPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/reminders" element={<RemindersPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}