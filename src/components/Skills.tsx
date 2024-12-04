import { Code, Database, Globe, Palette, Server, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

// Skills data
const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Python", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    icon: Terminal,
    skills: ["Docker", "AWS", "CI/CD", "Linux", "Git"],
  },
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105"
                variants={fadeInUp}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600" />
                </motion.div>

                {/* Category Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-transform"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
