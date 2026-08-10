import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactBar } from './components/ContactBar';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <ContactBar />
    </div>
  );
};

export default App;
