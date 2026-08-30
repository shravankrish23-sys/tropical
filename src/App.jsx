import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { LocationYelahanka } from './pages/LocationYelahanka';
import { DeepTissue } from './pages/DeepTissue';
import { ThaiMassage } from './pages/ThaiMassage';
import { SwedishMassage } from './pages/SwedishMassage';
import { CouplesMassage } from './pages/CouplesMassage';
import { Pricing } from './pages/Pricing';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="locations/yelahanka" element={<LocationYelahanka />} />
          <Route path="services/deep-tissue-massage" element={<DeepTissue />} />
          <Route path="services/traditional-thai-massage" element={<ThaiMassage />} />
          <Route path="services/swedish-massage" element={<SwedishMassage />} />
          <Route path="services/couples-massage" element={<CouplesMassage />} />
          <Route path="pricing" element={<Pricing />} />
          {/* Fallback route back to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
