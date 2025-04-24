import React from 'react';
import { motion } from 'framer-motion';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <div className="trust-section-container">
      <motion.section 
        className="trust_section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          TRUST THE EXPERTS FOR ALL
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 style={{ marginTop: '1rem' }}>
              "YOUR BUILDING NEED"
            </h4>
          </motion.div>
        </motion.h3>
      </motion.section>
    </div>
  );
};

export default TrustSection;