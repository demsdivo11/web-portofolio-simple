const Header = () => {
  return (
    <header className="bg-black text-white py-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-wide text-gold">My portofolio</h1>
        <nav>
          <a href="#about" className="px-4 text-gray-300 hover:text-white transition duration-300">About</a>
          <a href="#projects" className="px-4 text-gray-300 hover:text-white transition duration-300">Projects</a>
          <a href="#contact" className="px-4 text-gray-300 hover:text-white transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
