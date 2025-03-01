// File: src/pages/WhatWeDo/Study.jsx
import React from 'react';

function Study() {
  // Data studi untuk ditampilkan
  const studies = [
    {
      title: "Dampak Media Sosial pada Kesehatan Mental Remaja",
      year: "2023",
      author: "Tim Peneliti YMP",
      summary: "Studi ini menganalisis hubungan antara penggunaan media sosial dan kesehatan mental pada 2.500 remaja di 5 kota besar Indonesia.",
      findings: [
        "Penggunaan media sosial lebih dari 5 jam sehari berkorelasi dengan peningkatan tingkat kecemasan sebesar 35%",
        "Cyberbullying dialami oleh 42% responden dalam 12 bulan terakhir",
        "Penggunaan media sosial yang positif dan terukur dapat meningkatkan rasa keterhubungan sosial"
      ],
      downloadLink: "#"
    },
    {
      title: "Kebutuhan Keterampilan Digital untuk Lapangan Kerja Masa Depan",
      year: "2022",
      author: "YMP bekerja sama dengan Kementerian Ketenagakerjaan",
      summary: "Penelitian tentang keterampilan digital yang dibutuhkan para pemuda untuk memasuki pasar kerja di era Industri 4.0.",
      findings: [
        "75% pemberi kerja menyatakan kesulitan menemukan kandidat dengan keterampilan digital yang memadai",
        "Keterampilan pemrograman, analisis data, dan literasi digital menjadi prioritas tertinggi",
        "Gap keterampilan terbesar ditemukan di daerah luar Jawa"
      ],
      downloadLink: "#"
    },
    {
      title: "Efektivitas Program Kepemimpinan Pemuda",
      year: "2021",
      author: "Tim Evaluasi YMP",
      summary: "Evaluasi dampak jangka panjang dari program kepemimpinan YMP terhadap karir dan kontribusi sosial alumni.",
      findings: [
        "85% alumni melaporkan peningkatan signifikan dalam keterampilan kepemimpinan",
        "62% alumni menduduki posisi manajerial dalam 5 tahun setelah program",
        "73% alumni aktif berkontribusi dalam kegiatan sosial di komunitas mereka"
      ],
      downloadLink: "#"
    }
  ];

  return (
    <div className="container mx-auto px-8 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-6">Research & Studies</h1>
      <p className="mb-8">
        YMP melakukan berbagai penelitian dan studi untuk lebih memahami tantangan dan kebutuhan pemuda Indonesia.
        Hasil penelitian ini menjadi dasar bagi pengembangan program dan kampanye kami, serta dibagikan secara luas
        untuk berkontribusi pada peningkatan kebijakan dan program pemberdayaan pemuda di Indonesia.
      </p>
      
      <div className="space-y-8">
        {studies.map((study, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-l-4 border-blue-600 p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {study.year}
                </span>
              </div>
              <p className="text-gray-600 mb-4">Oleh: {study.author}</p>
              <p className="mb-4">{study.summary}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Temuan Utama:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {study.findings.map((finding, idx) => (
                    <li key={idx}>{finding}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={study.downloadLink} 
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Download Full Report
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Usulan Penelitian</h2>
          <p className="mb-4">
            Kami terbuka untuk kolaborasi penelitian dengan akademisi, lembaga penelitian, 
            dan organisasi lain yang memiliki minat dalam isu-isu terkait pemuda.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Ajukan Usulan
          </button>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Publikasi</h2>
          <p className="mb-4">
            Selain laporan penelitian, YMP juga menerbitkan berbagai publikasi berupa
            buku, modul pelatihan, dan panduan praktis untuk pemberdayaan pemuda.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Lihat Publikasi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Study;