import React from 'react';
import video1 from "../assets/images/video1.mp4"; 

function Gallery() {
  return (
    <section className="py-20 bg-[#e6f0ff] pr-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-8 pl-8"> {/* Added padding-left */}
            {/* Ganti tag img dengan tag video untuk menampilkan video */}
            <video controls className="w-full rounded-lg mt-5 p-2 border-2 border-[#0066cc]">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-1 bg-gradient-to-r from-[#0066cc] to-[#004f9f] text-white p-8 rounded-lg shadow-lg pr-1"> {/* Added padding-right */}
            <h2 className="text-4xl font-bold mb-5 text-[#e6f0ff]">Explore Our Gallery</h2>
            <p className="mb-5 text-[#e6f0ff] text-justify pr-6">
            Discover a curated selection of inspiring images and videos that 
            showcase the power of change, innovation, and community support. 
            Each piece in this gallery tells a story of resilience, hope, 
            and the impact of collective efforts in improving lives. 
            Through these visuals, we invite you to explore the transformative 
            journeys of individuals and communities as they overcome challenges 
            and inspire others to take action. Whether it's through art, events, or 
            community-driven initiatives, this gallery highlights the power of 
            collaboration and positive change in the world.
            </p>
            <a href="#more" className="inline-block bg-[#004f9f] text-white py-2 px-5 rounded-full hover:bg-[#0066cc]">
              View More &gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
