import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { LocationYelahanka } from './pages/LocationYelahanka';
import { Pricing } from './pages/Pricing';

// Lazy-loaded Full Body Services
const DeepTissue = lazy(() => import('./pages/DeepTissue').then(m => ({ default: m.DeepTissue })));
const ThaiMassage = lazy(() => import('./pages/ThaiMassage').then(m => ({ default: m.ThaiMassage })));
const SwedishMassage = lazy(() => import('./pages/SwedishMassage').then(m => ({ default: m.SwedishMassage })));
const CouplesMassage = lazy(() => import('./pages/CouplesMassage').then(m => ({ default: m.CouplesMassage })));
const MuscleRelaxingMassage = lazy(() => import('./pages/MuscleRelaxingMassage').then(m => ({ default: m.MuscleRelaxingMassage })));
const AromaTherapy = lazy(() => import('./pages/AromaTherapy').then(m => ({ default: m.AromaTherapy })));
const BalineseMassage = lazy(() => import('./pages/BalineseMassage').then(m => ({ default: m.BalineseMassage })));
const FourHandMassage = lazy(() => import('./pages/FourHandMassage').then(m => ({ default: m.FourHandMassage })));

// Lazy-loaded Targeted (30 min) Services
const BackMassage = lazy(() => import('./pages/BackMassage').then(m => ({ default: m.BackMassage })));
const FeetMassage = lazy(() => import('./pages/FeetMassage').then(m => ({ default: m.FeetMassage })));
const BodyPolish = lazy(() => import('./pages/BodyPolish').then(m => ({ default: m.BodyPolish })));
const BodyScrub = lazy(() => import('./pages/BodyScrub').then(m => ({ default: m.BodyScrub })));

// Lazy-loaded Add-On Services
const HotStoneTherapy = lazy(() => import('./pages/HotStoneTherapy').then(m => ({ default: m.HotStoneTherapy })));
const CuppingTherapy = lazy(() => import('./pages/CuppingTherapy').then(m => ({ default: m.CuppingTherapy })));
const HeadMassage = lazy(() => import('./pages/HeadMassage').then(m => ({ default: m.HeadMassage })));

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="locations/yelahanka" element={<LocationYelahanka />} />
            <Route path="location-yelahanka" element={<Navigate to="/locations/yelahanka/" replace />} />
            <Route path="pricing" element={<Pricing />} />

            {/* Full Body Massage Routes */}
            <Route path="services/deep-tissue-massage" element={<DeepTissue />} />
            <Route path="deep-tissue" element={<Navigate to="/services/deep-tissue-massage/" replace />} />
            
            <Route path="services/traditional-thai-massage" element={<ThaiMassage />} />
            <Route path="thai-massage" element={<Navigate to="/services/traditional-thai-massage/" replace />} />
            
            <Route path="services/swedish-massage" element={<SwedishMassage />} />
            <Route path="swedish-massage" element={<Navigate to="/services/swedish-massage/" replace />} />
            
            <Route path="services/muscle-relaxing-massage" element={<MuscleRelaxingMassage />} />
            <Route path="muscle-relaxing-massage" element={<Navigate to="/services/muscle-relaxing-massage/" replace />} />
            
            <Route path="services/aromatherapy-massage" element={<AromaTherapy />} />
            <Route path="aromatherapy-massage" element={<Navigate to="/services/aromatherapy-massage/" replace />} />
            <Route path="aroma-therapy" element={<Navigate to="/services/aromatherapy-massage/" replace />} />
            
            <Route path="services/balinese-massage" element={<BalineseMassage />} />
            <Route path="balinese-massage" element={<Navigate to="/services/balinese-massage/" replace />} />
            
            <Route path="services/four-hand-massage" element={<FourHandMassage />} />
            <Route path="four-hand-massage" element={<Navigate to="/services/four-hand-massage/" replace />} />
            
            <Route path="services/couples-massage" element={<CouplesMassage />} />
            <Route path="couples-massage" element={<Navigate to="/services/couples-massage/" replace />} />

            {/* Targeted 30 Min Therapy Routes */}
            <Route path="services/back-massage" element={<BackMassage />} />
            <Route path="back-massage" element={<Navigate to="/services/back-massage/" replace />} />
            
            <Route path="services/feet-massage" element={<FeetMassage />} />
            <Route path="feet-massage" element={<Navigate to="/services/feet-massage/" replace />} />
            
            <Route path="services/body-polish" element={<BodyPolish />} />
            <Route path="body-polish" element={<Navigate to="/services/body-polish/" replace />} />
            
            <Route path="services/body-scrub" element={<BodyScrub />} />
            <Route path="body-scrub" element={<Navigate to="/services/body-scrub/" replace />} />

            {/* Add-On Services Routes */}
            <Route path="services/hot-stone-therapy" element={<HotStoneTherapy />} />
            <Route path="hot-stone-therapy" element={<Navigate to="/services/hot-stone-therapy/" replace />} />
            
            <Route path="services/cupping-therapy" element={<CuppingTherapy />} />
            <Route path="cupping-therapy" element={<Navigate to="/services/cupping-therapy/" replace />} />
            
            <Route path="services/head-massage" element={<HeadMassage />} />
            <Route path="head-massage" element={<Navigate to="/services/head-massage/" replace />} />

            {/* Fallback route back to home */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
