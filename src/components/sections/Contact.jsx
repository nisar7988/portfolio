import { Colors } from '../../constants/colors';
import contactData from '../../data/contact.json';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // Add this import
import {motion} from "framer-motion"
const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = "service_dc0zv6h";
      const templateId = "template_z8wx91y";
      const publicKey = "lMitc0wnowU8xw-1l";

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: "Nisar Ahmed",
        reply_to: formState.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormState({
        name: '',
        email: '',
        message: ''
      });
      toast.success('Message sent successfully!', {
        duration: 4000,
        style: {
          background: Colors.accent.blue,
          color: '#fff',
        },
      });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-20 overflow-hidden">
      <Toaster position="top-right" /> 
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {contactData.heading}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: Colors.text.secondary }}>
            {contactData.intro}
          </p>
          <div className="flex justify-center gap-8">
            {Object.entries(contactData.social).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl p-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                style={{ color: Colors.accent.blue }}
              >
                {platform === 'github' && <FaGithub />}
                {platform === 'linkedin' && <FaLinkedin />}
                {platform === 'twitter' && <FaTwitter />}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {Object.entries(contactData.contact).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl backdrop-blur-md hover:shadow-2xl transition-all duration-500"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex items-center gap-6">
                  <div 
                    className="p-4 rounded-xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${Colors.accent.blue}, rgba(59, 130, 246, 0.5))`,
                      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {key === 'email' && <FaEnvelope className="text-2xl text-white" />}
                    {key === 'phone' && <FaPhone className="text-2xl text-white" />}
                    {key === 'location' && <FaMapMarkerAlt className="text-2xl text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold capitalize mb-2" style={{ color: Colors.text.primary }}>
                      {key}
                    </h3>
                    <a 
                      href={
                        key === 'email' ? `mailto:${value}` :
                        key === 'phone' ? `tel:${value.replace(/\s+/g, '')}` :
                        key === 'location' ? `https://www.google.com/maps/search/${encodeURIComponent(value)}` :
                        '#'
                      }
                      target={key === 'location' ? '_blank' : '_self'}
                      rel={key === 'location' ? 'noopener noreferrer' : ''}
                      className="text-sm hover:underline transition-all duration-300"
                      style={{ color: Colors.text.secondary }}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13769.000827592436!2d77.2068663!3d30.3826075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f04edcc77ef8b%3A0x9eb0ca3761c0766f!2sSadhaura%2C%20Haryana%20133204!5e0!3m2!1sen!2sin!4v1709647825475!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md rounded-2xl p-8"
            style={{ 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="relative group">
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      style={{ color: Colors.text.primary }}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      style={{ color: Colors.text.primary }}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      required
                    />
                  )}
                 
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 mt-8 rounded-xl font-semibold flex items-center justify-center gap-2"
                style={{ 
                  background: `linear-gradient(45deg, ${Colors.accent.blue}, rgba(59, 130, 246, 0.8))`,
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaPaperPlane />
                    Send Message
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;