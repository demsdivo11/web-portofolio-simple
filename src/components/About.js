import Timeline from './Timeline';
import ProgrammingChart from './ProgrammingChart';
import AcademicSchool from './AcademicSchool';
import NonAcademicSchool from './NonAcademicSchool';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gold">About Me</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Saya adalah seorang pelajar kelas 9 SMP dengan bakat di bidang teknologi, pemrograman, dan kepramukaan. Cita-cita saya adalah menjadi seorang perwira di militer atau kepolisian (Akmil atau Akpol). Selain itu, saya juga bercita-cita menjadi seorang fullstack developer dan meraih gelar Sarjana atau Magister Ilmu Komputer (S.Kom atau M.Kom). Saya memiliki pengalaman di bidang pengembangan web, AI Prompt Engineering, serta sebagai seorang developer C++.
        </p>

        {/* Timeline Section */}
        <Timeline />
        {/* Tentang Sekolah */}
        <div className="my-10">
          <h3 className="text-3xl font-bold mb-4 text-gold">Pendidikan</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <AcademicSchool />
            <NonAcademicSchool />
          </div>
        </div>
        <ProgrammingChart />
      </div>
    </section>
  );
};

export default About;
