import { ReactTyped as Typed } from 'react-typed';

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Hello I Am Dhemas Dhiyanugraha Divonegara!</h1>
        <h2 className="text-3xl font-semibold">
          <Typed
            strings={[
              'I am a Frontend Developer',
              'I am a Backend Developer',
              'I am a C++ Developer',
              'I am an AI Prompt Engineer'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
