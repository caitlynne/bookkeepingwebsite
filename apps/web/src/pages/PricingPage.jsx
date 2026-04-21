
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';

const PricingPage = () => {
  const pricingTiers = [
    {
      title: 'Starter',
      price: '$79',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Up to 100 monthly transactions',
        'Automated bank reconciliation',
        'Basic financial reports',
        'Expense tracking',
        'Email support',
        '1 user account',
      ],
      recommended: false,
    },
    {
      title: 'Professional',
      price: '$189',
      description: 'Ideal for growing small businesses',
      features: [
        'Up to 500 monthly transactions',
        'Advanced financial reports',
        'Tax preparation assistance',
        'Payroll processing',
        'Priority support',
        'Up to 5 user accounts',
        'Custom integrations',
        'Quarterly business reviews',
      ],
      recommended: true,
    },
    {
      title: 'Enterprise',
      price: '$399',
      description: 'For established businesses with complex needs',
      features: [
        'Unlimited transactions',
        'Multi-entity management',
        'Dedicated account manager',
        'Custom reporting',
        'Advanced tax planning',
        'Unlimited user accounts',
        'API access',
        'Monthly strategic consultations',
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Nickelbook</title>
        <meta name="description" content="Choose the perfect Nickelbook plan for your business. Transparent pricing with no hidden fees. From startups to enterprises." />
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
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose the plan that fits your business needs. Upgrade or downgrade anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PricingCard {...tier} />
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground">
                All plans include 14-day free trial. No credit card required.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
