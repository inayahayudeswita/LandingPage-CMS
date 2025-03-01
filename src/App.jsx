import React from 'react';
import Header from './components/Header';  // Komponen Header
import Hero from './components/Hero';  // Komponen Hero
import Gallery from './components/Gallery'; 
import ImageSlider from './components/ImageSlider';  // Komponen ImageSlider
import Programs from './components/Programs';  // Komponen Programs
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Header /> {/* Menampilkan Header */}
      
      {/* Main content of the landing page */}
      <main className="p-8">
        <Hero /> {/* Menampilkan Hero */}
        <Gallery/>
        <ImageSlider /> {/* Menampilkan ImageSlider */}
        <Programs /> 
        <Partners /> 
        {/* Tambahkan komponen lainnya jika perlu */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
