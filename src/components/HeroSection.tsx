import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  console.log('HeroSection loaded');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #4a00e0 0%, transparent 40%)',
        }}
      />
       <motion.div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.0)_0,_rgba(255,255,255,0.0)_50%,_rgba(0,0,0,0.9)_90%)]"
        />


      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter !leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Dynamic Black Theme UI
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-xl text-neutral-300"
          >
            A sleek, modern, and fully-responsive UI kit built to create stunning, high-performance web applications with speed and style.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="group mt-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-300">
              <Link to="/components">
                Explore Components
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;