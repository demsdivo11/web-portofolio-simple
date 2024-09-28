import React from 'react';

const projects = [
  {
    name: 'GTPS Core',
    description: 'Free Cpp Only Core For Growtopia Private Server By Noir Community (iDems,GtpsHax)',
    link: 'https://github.com/GTPSHAX/GrowPlus-Core', // Link opsional
  },
  {
    name: 'Picker Mobile Legend',
    description: 'A picker role+team tool for the game Mobile Legends.',
    link: 'https://github.com/demsdivo11/pickML.github.io', // Link opsional
  },
  {
    name: 'Daily Notes',
    description: 'Simple Daily Note, Ini Sebener nya Tugas Sekolah Untuk Bikin Buku Harian Tetapi Saya Buat Saja Versi Website',
    link: 'https://daily.dems.my.id', // Tidak ada link, proyek ini tanpa link opsional
  },
  {
    name: 'Confessly',
    description: 'Website For Confess Tapi Pengiriman Pesan Nya Via Telegram Bot, WhatsApp Bot, Discord Webhook Project Ini Sedang Dalam Pengerjaan',
    link: null, // Tidak ada link, proyek ini tanpa link opsional
  },
  {
    name: 'E-Vote For Osis',
    description: 'Website Pemilihan Online Menggunakan Php, Untuk Osis Buatan iHax (Growplus Community)',
    link: 'https://github.com/GTPSHAX/E-Vote'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              ) : (
                <span className="text-gray-500 italic">No link available</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
