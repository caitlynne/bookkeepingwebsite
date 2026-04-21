
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, FileText, DollarSign, Users, Receipt, ArrowRight, Clock, Target, BarChart3, Lock, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

const HomePage = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'Real-time transaction categorization, bank reconciliation, and financial record maintenance powered by intelligent automation.',
      link: '/contact',
    },
    {
      icon: FileText,
      title: 'Tax Preparation',
      description: 'Comprehensive tax planning and filing services that maximize deductions and ensure compliance with current regulations.',
      link: '/contact',
    },
    {
      icon: DollarSign,
      title: 'Financial Reporting',
      description: 'Detailed profit & loss statements, balance sheets, and cash flow reports delivered on demand with actionable insights.',
      link: '/contact',
    },
    {
      icon: Users,
      title: 'Payroll Processing',
      description: 'Automated payroll calculations, tax withholdings, and direct deposits with full compliance tracking and reporting.',
      link: '/contact',
    },
    {
      icon: Receipt,
      title: 'Expense Tracking',
      description: 'Intelligent receipt scanning, expense categorization, and reimbursement workflows that save hours of manual work.',
      link: '/contact',
    },
  ];

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
        <title>Nickelbook - Automated Accounting Solutions for Growing Businesses</title>
        <meta name="description" content="Save time and improve accuracy with Nickelbook's automated accounting solutions. Get real-time financial insights and streamline your bookkeeping." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1684563983781-ce52a026f139)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
          </div>

          <div className="container relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Automated accounting that saves you 15 hours per week
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Focus on growing your business while Nickelbook handles your bookkeeping, tax preparation, and financial reporting with precision and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Comprehensive Financial Services</h2>
              <p className="text-lg text-muted-foreground">
                From daily bookkeeping to annual tax preparation, we provide end-to-end solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
              {services.map((service, index) => {
                let gridClasses = "lg:col-span-2";
                if (index === 0) gridClasses += " lg:col-start-2";
                if (index === 2) gridClasses += " lg:col-start-1";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={gridClasses}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Built for modern businesses</h2>
              <p className="text-lg text-muted-foreground">
                Discover how automation transforms your financial operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ready to streamline your finances?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Join thousands of growing businesses that trust Nickelbook to handle their accounting with precision and speed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground transition-all duration-200 active:scale-[0.98]">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
