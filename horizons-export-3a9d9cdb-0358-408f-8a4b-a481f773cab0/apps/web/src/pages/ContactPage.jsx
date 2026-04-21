
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@nickelbook.com',
      href: 'mailto:hello@nickelbook.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 012-3456',
      href: 'tel:+1-555-0123',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: '742 Evergreen Terrace, Springfield',
      href: '#',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Nickelbook</title>
        <meta name="description" content="Get in touch with the Nickelbook team. We're here to answer your questions and help you streamline your accounting." />
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
                Let's talk about your business
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help you streamline your accounting and grow your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Have questions about our services? Want to discuss your accounting needs? Our team is ready to help you find the right solution for your business.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground mb-1">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-foreground transition-all duration-200 hover:text-primary"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden border bg-muted h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Office location map</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
