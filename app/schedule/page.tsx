// ./app/schedule/page.tsx
"use client"; // This page uses animations, so it must be a client component

import { motion } from 'framer-motion';

// Mock data for the weekly schedule. Later, this could come from a database.
const scheduleData = {
  "Monday": [
    { time: "5:00 PM - 6:00 PM", className: "Hip-Hop Fundamentals", instructor: "Victor M." },
    { time: "6:00 PM - 7:00 PM", className: "Contemporary Flow", instructor: "Madau Ke" },
    { time: "7:00 PM - 8:00 PM", className: "Dancehall", instructor: "Joy Ke" },
  ],
  "Tuesday": [
    { time: "5:00 PM - 6:00 PM", className: "Foundational Dance (All Styles)", instructor: "PG Allstarz" },
    { time: "6:00 PM - 7:00 PM", className: "Aerobics & Dance Fitness", instructor: "Victor M." },
    { time: "7:00 PM - 8:00 PM", className: "African Dance", instructor: "Madau Ke" },
  ],
  "Wednesday": [
    { time: "5:00 PM - 6:00 PM", className: "Hip-Hop Choreography", instructor: "Kevo Allstarz." },
    { time: "6:00 PM - 7:00 PM", className: "Contemporary Dance", instructor: "PG Allstarz" },
    { time: "7:00 PM - 8:00 PM", className: "Yoga for Dancers", instructor: "Icy Allstarz" },
  ],
  "Thursday": [
    { time: "5:00 PM - 6:00 PM", className: "B-Boy & Street Dance", instructor: "Kevo Allstarz" },
    { time: "6:00 PM - 7:00 PM", className: "Dancehall", instructor: "Joy Ke" },
    { time: "7:00 PM - 8:00 PM", className: "African Dance", instructor: "Madau Ke." },
  ],
  "Friday": [
    { time: "5:00 PM - 6:00 PM", className: "Hip-Hop (Open Level)", instructor: "Victor M" },
    { time: "6:00 PM - 7:00 PM", className: "Foundational Dance (All Styles)", instructor: "Kevo Allstarz" },
    { time: "7:00 PM - 8:00 PM", className: "Freestyle Friday Jam", instructor: "Allstarz Team" },
  ],
  "Saturday": [
    { time: "10:00 AM - 11:00 AM", className: "Kids Dance (Ages 6-10)", instructor: "Victor M." },
    { time: "11:00 AM - 12:00 PM", className: "Aerobics & Dance Fitness", instructor: "Kevo Allstarz" },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function SchedulePage() {
  return (
    <div className="py-24 text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-brand-gold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Weekly Schedule
        </motion.h1>
        <motion.p 
          className="text-lg text-brand-neutral mb-12 max-w-2xl mx-auto text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plan your week and join us for a class. Walk-ins are welcome, but booking is recommended!
        </motion.p>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(scheduleData).map(([day, classes]) => (
            <motion.div key={day} variants={itemVariants}>
              <h2 className="text-3xl font-bold text-brand-gold border-b-2 border-brand-gold/30 pb-2 mb-6">
                {day}
              </h2>
              <div className="space-y-4">
                {classes.map((classItem, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-[#111] p-4 rounded-lg">
                    <div className="font-semibold text-lg">{classItem.time}</div>
                    <div className="text-xl text-white">{classItem.className}</div>
                    <div className="text-md text-brand-neutral md:text-right">with {classItem.instructor}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}