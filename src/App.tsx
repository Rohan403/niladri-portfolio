import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import NET from 'vanta/dist/vanta.net.min';
import myImage from '../assets/profileimage.jpeg'
function App() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b82f6,
          backgroundColor: 0x0f172a,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 16.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative">
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <motion.img
              src={myImage}
              alt="Niladri Pal"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-500/30 shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <motion.h1
                className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                NILADRI PAL
              </motion.h1>
              <motion.h2
                className="text-2xl text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.div
                className="flex flex-wrap gap-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a href="tel:+919556903109" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone size={18} /> +91 9556903109
                </a>
                <a href="https://linkedin.com/in/niladri-pal-670480213" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="mailto:niladripal160@gmail.com" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail size={18} /> niladripal160@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={18} /> Bengaluru
                </span>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Summary Section */}
        <motion.section
          className="backdrop-blur-md bg-gray-800/50 py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
              alt="Code Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Summary</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Full Stack Developer building websites and web applications using ReactJS, NextJS, and
              modern JavaScript tools like Tailwind CSS and Redux. Strong design-to-code transition skills.
              Experienced in developing effective and productive relationships with clients and vendors.
              Knowledgeable in user interaction, testing, and debugging processes.
            </p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <motion.img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Developer Experience"
                className="rounded-lg shadow-lg mb-4 w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Experience</h2>
              <div className="space-y-12">
                <motion.div
                  className="border-l-2 border-blue-500/50 pl-6 relative backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-8"></div>
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-gray-400 mb-2">Octopus technologies | 06/2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Implemented Responsive Design for cross-device compatibility</li>
                    <li>Created RESTful APIs for seamless application integration</li>
                    <li>Developed dynamic web applications using ReactJS</li>
                    <li>Optimized code base for enhanced performance</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="border-l-2 border-blue-500/50 pl-6 relative backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-8"></div>
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <p className="text-gray-400 mb-2">Nettantra technologies | 03/2022 - 04/2024</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Developed React applications with Redux state management</li>
                    <li>Created custom components and user interfaces</li>
                    <li>Optimized React applications using code splitting and lazy loading</li>
                    <li>Collaborated with product owners on feature implementation</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="backdrop-blur-md bg-gray-800/50 py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
              alt="Coding Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React', 'Next.js', 'JavaScript', 'TypeScript',
                'HTML5', 'CSS3', 'Tailwind CSS', 'Redux',
                'REST API', 'Node.js', 'Git', 'Material UI',
                'React Native', 'Vue.js', 'Bootstrap', 'Debugging'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="backdrop-blur-sm bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center hover:bg-blue-500/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="md:w-1/3">
              <motion.img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Education"
                className="rounded-lg shadow-lg mb-4 w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Education</h2>
              <motion.div
                className="border-l-2 border-blue-500/50 pl-6 relative backdrop-blur-sm bg-gray-800/30 p-6 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-8"></div>
                <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
                <p className="text-gray-400">Sambalpur University Institute of Information Technology</p>
                <p className="text-gray-400">07/2018 - 04/2022 | Burla, Sambalpur</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="backdrop-blur-md bg-gray-900/80 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/niladri-pal-670480213" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:niladripal160@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p>© 2024 Niladri Pal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;