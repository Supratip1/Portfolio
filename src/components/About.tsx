import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Decorative Underline */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Image Section with Gradient Border */}
          <motion.div
            className="relative w-full aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <img
                  src="/supratip.jpg"
                  alt="Supratip Bhattacharya"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              Hello! I’m <span className="font-bold text-purple-600">Supratip Bhattacharya</span>, a 
              <span className="text-indigo-600"> Software Development Engineer</span> with a passion for building high-performance, user-centric web applications. My expertise lies in creating stunning, functional interfaces with the latest frontend technologies.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              I specialize in <span className="font-semibold text-blue-600">React.js, TypeScript, Next.js</span>, and 
              <span className="font-semibold text-purple-500"> Tailwind CSS</span>. My mission is to craft scalable and maintainable solutions while optimizing user experience through performance-driven designs and reusable components.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              With achievements like reducing task completion times by <span className="font-bold text-purple-600">90%</span> and boosting engagement by <span className="font-bold text-blue-500">40%</span>, I bring a results-oriented approach to every project. I also enjoy exploring emerging technologies like Astro, NextJs, and React Server Components to stay ahead in the ever-evolving tech landscape.
            </motion.p>

            {/* Experience and Followers Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              variants={fadeInUp}
            >
              <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-3xl text-purple-600">4+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-extrabold text-3xl text-blue-600">2K+</h3>
                <p className="text-gray-600">LinkedIn Followers</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
