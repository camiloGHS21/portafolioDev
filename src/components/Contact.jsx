import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  // Footer content
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/camiloGHS21', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/camilo-grajales-a65275308/', icon: 'linkedin-square' },
  ];
  const currentYear = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const now = new Date();
    const date = now.toLocaleString('es-ES', { 
      year: 'numeric', month: 'long', day: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });

    const dateInput = document.createElement('input');
    dateInput.type = 'hidden';
    dateInput.name = 'date';
    dateInput.value = date;
    form.current.appendChild(dateInput);

    emailjs.sendForm('service_cijr4we', 'template_xhv4a5r', form.current, 'Htm2nOOrizIC26110')
      .then((result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          console.log(error.text);
          setError('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
          setIsSending(false);
          setTimeout(() => setError(null), 5000);
      }).finally(() => {
        form.current.removeChild(dateInput);
      });
  };

  return (
    <section id="contact" className="h-screen snap-start flex flex-col px-4 sm:px-8 pt-28 pb-8">
      <div className="max-w-2xl w-full mx-auto flex flex-col flex-grow text-center">
        
        {/* Main Content */}
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Contacto</h2>
          <p className="text-lg md:text-xl dark:text-gray-300 text-gray-600 leading-relaxed mb-12">
            ¿Tienes alguna pregunta o quieres trabajar juntos? Envíame un mensaje.
          </p>
          
          <form ref={form} onSubmit={sendEmail} className="w-full text-left space-y-6">
            {/* Form fields... */}
            <div className="space-y-2">
              <label className="text-sm font-semibold dark:text-gray-300 text-gray-700" htmlFor="user_name">Nombre</label>
              <input id="user_name" type="text" name="user_name" required className="w-full dark:bg-[#1a1a1a] bg-gray-100 dark:border-[#2a2a2a] border-gray-200 rounded-lg px-4 py-3 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold dark:text-gray-300 text-gray-700" htmlFor="user_email">Email</label>
              <input id="user_email" type="email" name="user_email" required className="w-full dark:bg-[#1a1a1a] bg-gray-100 dark:border-[#2a2a2a] border-gray-200 rounded-lg px-4 py-3 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold dark:text-gray-300 text-gray-700" htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" required rows="4" className="w-full dark:bg-[#1a1a1a] bg-gray-100 dark:border-[#2a2a2a] border-gray-200 rounded-lg px-4 py-3 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 resize-none"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={isSending} className="w-full sm:w-auto border dark:border-[#2a2a2a] border-gray-300 py-3 px-12 rounded-full font-semibold tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-[length:200%_200%] bg-left hover:bg-right">
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>

          {isSent && <p role="alert" className="mt-4 text-green-400">¡Mensaje enviado con éxito!</p>}
          {error && <p role="alert" className="mt-4 text-red-400">{error}</p>}
        </div>

        {/* Footer Content */}
        <div className="mt-12 dark:text-gray-400 text-gray-500">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="transition-transform duration-300 hover:scale-125 hover:text-pink-400">
                  <box-icon type='logo' name={link.icon} class="fill-current"></box-icon>
                </a>
              ))}
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm">&copy; {currentYear} CamiloDEv. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
