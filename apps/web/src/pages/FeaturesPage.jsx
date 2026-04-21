
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Target, BarChart3, DollarSign, Lock, Rocket } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

const FeaturesPage = () => {
  const features = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual bookkeeping time by 87% with intelligent automation that handles data entry, categorization, and reconciliation.',
      number: '01',
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Eliminate human error with AI-powered validation that catches mistakes before they impact your financial statements.',
      number: '02',
    },
    {
      icon: BarChart3,
      title: 'Real-time Insights',
      description: 'Access live financial dashboards and reports that update automatically as transactions occur.',
      number: '03',
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Save an average of $2,300 per month compared to traditional accounting firms while maintaining professional quality.',
      number: '04',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Bank-level encryption and multi-factor authentication protect your sensitive financial data 24/7.',
      number: '05',
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Grow from 10 to 10,000 monthly transactions without changing systems or adding overhead.',
      number: '06',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Features - Nickelbook</title>
        <meta name="description" content="Discover the powerful features of Nickelbook including time savings, accuracy, real-time insights, cost efficiency, security, and scalability for your business." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Built for modern businesses
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how automation transforms your financial operations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
