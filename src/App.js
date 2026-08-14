import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academic from './components/Academic';
import Interests from './components/Interests';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import ThankYouGoals from './components/ThankYouGoals';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Academic />
        <Interests />
        <Achievements />
        <Hobbies />
        <ThankYouGoals />
      </main>
      <Footer />
    </>
  );
}
