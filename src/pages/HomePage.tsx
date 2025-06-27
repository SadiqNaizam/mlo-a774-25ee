import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import AnimatedCounter from '@/components/AnimatedCounter';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Icons
import { Layers3, Zap, Palette } from 'lucide-react';

const features = [
  {
    icon: <Layers3 className="h-8 w-8 text-primary" />,
    title: 'Extensive Component Library',
    description: 'A wide range of pre-built, customizable components to accelerate your development workflow.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Performance Optimized',
    description: 'Built with performance in mind, ensuring a fast and smooth user experience on all devices.',
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Sleek & Modern Design',
    description: 'A visually stunning dark theme that is both elegant and highly functional, ready to impress.',
  },
];

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />

        {/* Stats Section */}
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-muted-foreground">Components</h3>
                        <p className="text-5xl font-bold text-primary">
                            <AnimatedCounter to={50} duration={2} />+
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-muted-foreground">Downloads</h3>
                         <p className="text-5xl font-bold text-primary">
                            <AnimatedCounter to={10000} duration={2.5} />+
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-muted-foreground">Stars</h3>
                         <p className="text-5xl font-bold text-primary">
                            <AnimatedCounter to={2500} duration={3} />+
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Dynamic UI?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our UI kit is crafted to provide the best foundation for your next-gen web applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-neutral-900 border-neutral-800 text-center flex flex-col items-center p-6">
                  <CardHeader className="items-center">
                    {feature.icon}
                    <CardTitle className="mt-4 text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link to="/contact">Get In Touch</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;