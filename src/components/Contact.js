// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Keep this if you need the phone icon
import { faWhatsapp, faDiscord, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gold">Contact Me</h2>
        <p className="text-xl text-gray-300 mb-10">Feel free to reach out to me through the following platforms!</p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a href="https://wa.me/+6283111515287" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500 hover:text-green-400" />
            </a>
            <a href="https://discord.com/users/demsm.kom" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" className="text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://t.me/demsdev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" className="text-blue-400 hover:text-blue-300" />
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.tiktok.com/@demsdev11" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} size="2x" className="text-black hover:text-gray-700" />
            </a>
            <a href="https://www.instagram.com/dhemas.dhiyanugraha.divonegara/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
