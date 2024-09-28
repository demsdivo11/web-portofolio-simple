import React, { useState } from 'react';

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(null);

  const timelineData = {
    2021: 'Saya memulai perjalanan dalam dunia pemrograman dengan mempelajari dasar-dasar C++ menggunakan perangkat Android, dengan modal autodidak. Proyek pertama yang saya kembangkan adalah aplikasi tanya jawab berbasis C++, seperti kuis kepribadian. Setelah itu, saya beralih ke HTML, di mana saya belajar secara intensif selama kurang lebih satu bulan. Kemudian, saya melanjutkan dengan mempelajari dasar-dasar CSS. Selanjutnya, saya membangun situs web portofolio menggunakan Bootstrap 5. Pada tahun yang sama, saya secara konsisten terus memperdalam pengetahuan saya di bidang pemrograman.',
    2022: 'Pada tahun 2022, saya melanjutkan pembelajaran saya di bidang pengembangan web secara konsisten. Saya juga memperoleh pengalaman kerja freelance sebagai coder di GTPS (Growtopia Private Server), di mana saya mempelajari C++ enet secara autodidak. Selama bekerja di GTPS, saya sangat menikmati peran sebagai coder. Selain itu, saya juga mulai mempelajari JavaScript untuk pembuatan bot Discord, yang kemudian semakin meningkatkan minat saya terhadap JavaScript. Saya sering kali bekerja hingga larut malam untuk belajar pemrograman lebih lanjut dan melanjutkan proyek-proyek yang sedang saya kerjakan',
    2023: 'Pada tahun 2023, saya mulai mengurangi aktivitas pemrograman karena ingin lebih fokus pada pendidikan, setelah nilai akademis saya sempat menurun. Di sekolah, saya sering kali lebih mengutamakan pengelolaan server web, game server, dan kegiatan pemrograman. Namun, pada tahun yang sama, saya tetap memperluas pengetahuan saya di bidang teknologi dan pemrograman, serta mulai tertarik pada Node.js dan C#. Saya beberapa kali membuat bot Telegram dan bot Discord menggunakan Node.js. Saya juga pernah melakukan rekode dan remake terhadap kode C# publik untuk meningkatkan kualitasnya.  Di tahun 2023, saya sering membuat berbagai website yang bermanfaat di situs pribadi saya. Pada periode yang sama, saya mendapatkan kesempatan bekerja sebagai programmer di sebuah situs rental mobil, yang merupakan proyek teman ayah saya. Tugas saya meliputi integrasi dengan Google Ads, pengaturan CNAME, serta konfigurasi name server. Saya juga beberapa kali mengikuti program beasiswa di bidang pemrograman, meskipun belum berhasil, dan pernah mengikuti sesi Zoom untuk bantuan Google Ads terkait situs web tersebut.',
    2024: 'Pada tahun 2024, khususnya antara bulan Mei hingga Agustus, saya mulai jarang belajar pemrograman karena lebih fokus pada studi akademik dan kehidupan pribadi. Namun, selama tahun ini, saya memperoleh banyak wawasan di bidang pemrograman dan teknologi. Saya mulai memahami lebih mendalam tentang konsep-konsep seperti programming, web development, backend, fullstack, dan lainnya. Saya juga beberapa kali mengganti bahasa pemrograman, mulai dari PHP, Java, Kotlin, Python, C#, C++, JavaScript, Node.js, hingga sekarang, pada akhir September, saya sudah dua hari mempelajari React.js dan Tailwind. Saya merasa senang karena React.js mudah diatur dan cepat dipelajari.Di sisi lain, keterlibatan saya sebagai coder di GTPS semakin berkurang karena minat terhadap game Growtopia mengalami penurunan drastis dibandingkan tahun-tahun sebelumnya. Selama di GTPS, saya juga sempat memperdalam pengetahuan saya tentang C++, enet, Lua, dan Rust.'
  };

  const handleClick = (year) => {
    setActiveYear(activeYear === year ? null : year); // Toggle the active year
  };

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold mb-6 text-gold">Jejak Tahunan</h2>
      <ul className="space-y-4">
        {Object.keys(timelineData).map((year) => (
          <li key={year}>
            <button
              onClick={() => handleClick(year)}
              className="text-2xl font-semibold text-white bg-gray-800 px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none transition duration-300"
            >
              {year}
            </button>
            {activeYear === year && (
              <div className="mt-4 text-gray-300 bg-gray-900 p-4 rounded-md shadow-inner">
                {timelineData[year]}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
