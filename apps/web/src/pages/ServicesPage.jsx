
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calculator, FileText, DollarSign, Users, Receipt } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
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

  return (
    <>
      <Helmet>
        <title>Our Services - Nickelbook</title>
        <meta name="description" content="Explore Nickelbook's comprehensive accounting services including automated bookkeeping, tax preparation, financial reporting, payroll processing, and expense tracking." />
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
                Professional accounting services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From bookkeeping to tax preparation, we provide comprehensive solutions tailored to your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First row: 2 cards */}
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>

            {/* Second row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {services.slice(2).map((service, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
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

export default ServicesPage;
