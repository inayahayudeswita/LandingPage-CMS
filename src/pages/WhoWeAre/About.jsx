// File: src/pages/WhoWeAre/About.jsx
import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-8 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-6">About YMP</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Youth Movement Program (YMP) adalah sebuah organisasi nirlaba yang didedikasikan untuk memberdayakan generasi muda melalui program pendidikan, pelatihan kepemimpinan, dan kegiatan sosial.
          </p>
          <p className="mb-4">
            Didirikan pada tahun 2010, YMP telah membantu ribuan pemuda mengembangkan keterampilan, kepercayaan diri, dan kesadaran sosial mereka untuk menjadi agen perubahan dalam masyarakat.
          </p>
          <p className="mb-4">
            Visi kami adalah menciptakan generasi muda yang peduli, kompeten, dan siap menghadapi tantangan masa depan.
          </p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Misi Kami</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Menyediakan program pendidikan berkualitas tinggi untuk pemuda dari berbagai latar belakang</li>
            <li>Memfasilitasi pengembangan keterampilan kepemimpinan dan organisasi</li>
            <li>Mendorong kesadaran sosial dan lingkungan di kalangan generasi muda</li>
            <li>Membangun jaringan dukungan bagi pemuda untuk mengembangkan potensi mereka</li>
            <li>Berkolaborasi dengan organisasi lain untuk menciptakan dampak positif yang lebih besar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
