import React from 'react';
import { motion } from 'framer-motion';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  console.log('AboutPage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto py-16 px-4 md:px-6"
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-slate-400">
              Crafting the Future of Dark UIs
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Dynamic UI is more than a template; it's a design philosophy for building elegant, performant, and user-centric web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left Column: Creator Info */}
            <div className="md:col-span-1">
              <Card className="sticky top-24 border-border/60">
                <CardHeader className="items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@creator" />
                    <AvatarFallback>UI</AvatarFallback>
                  </Avatar>
                  <CardTitle>The Creator</CardTitle>
                  <p className="text-sm text-muted-foreground">Alex Doe, UI/UX Architect</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Passionate about creating interfaces that are not only functional but also a joy to interact with.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Philosophy Section */}
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle>Our Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In a digital world saturated with information, clarity and focus are paramount. The "Dynamic Black Theme UI" was born from the belief that a dark interface can reduce eye strain, improve content legibility, and create a sense of sophistication and focus. We prioritize clean lines, purposeful animations, and an intuitive component architecture.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground">
                    "Good design is obvious. Great design is transparent." — Joe Sparano
                  </blockquote>
                  <p>
                    Every component in this kit has been meticulously crafted to be both aesthetically pleasing and highly customizable. We leverage the power of modern tools like React, Tailwind CSS, and Framer Motion to deliver a development experience that is as smooth as the user experience it creates.
                  </p>
                </CardContent>
              </Card>
              
               {/* Image Section */}
               <Card className="overflow-hidden border-border/60">
                    <img 
                        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Abstract code on a screen"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 bg-black/20">
                        <p className="text-sm text-muted-foreground">We believe that a great UI is a harmonious blend of code and design, structured to create an intuitive and engaging user journey.</p>
                    </div>
                </Card>

            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;