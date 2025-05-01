// import React from 'react';
// import './Aidf_certificates.css';
// import cert1 from './cert1.PNG';
// import cert2 from './cert2.PNG';

// const certificateData = [
//   {
//     title: 'ISO 9001:2015  Quality Management System',
//     image: cert1,
//     pdf: './cert1.pdf', // Path to the PDF file in public folder
//     description: 'Certified for implementing rigorous quality management across our manufacturing and export processes.',
//   },
//   {
//     title: 'ISO 9001:2015  Quality Management System',
//     image: cert2,
//     pdf: './Certificate/cert2.pdf', // Path to the PDF file in public folder
//     description: 'Certified for implementing rigorous quality management across our manufacturing and export processes.',
//   }
// ];

// const Aidf_certificates = () => {
//   return (
//     <div className="certificates-page">
//       <h2 className="certificates-title">Our Certifications</h2>
//       <p className="certificates-intro">
//         At <strong>AIDF GROUP</strong>, we pride ourselves on delivering products that meet global standards. 
//         Our certifications reflect our unwavering commitment to quality, innovation, safety, and sustainability. 
//         These achievements not only reinforce our credibility in the global market, but also highlight our 
//         dedication to continuous improvement.
//       </p>

//       <div className="certificates-grid">
//         {certificateData.map((cert, index) => (
//           <div key={index} className="certificate-card">
//             <img src={cert.image} alt={cert.title} className="certificate-image" />
//             <h4 className="certificate-title">{cert.title}</h4>
//             <p className="certificate-description">{cert.description}</p>
//             <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="pdf-button">
//               View PDF
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Aidf_certificates;










import React from 'react';
import './Aidf_certificates.css';
import cert1 from './cert1.PNG';
import cert2 from './cert2.PNG';

const certificateData = [
  {
    title: 'ISO 9001:2015 Quality Management System',
    image: cert1,
    pdf: './cert1.pdf',
    description: 'Certified for implementing rigorous quality management across our manufacturing and export processes.',
  },
  {
    title: 'ISO 9001:2015 Quality Management System',
    image: cert2,
    pdf: './Certificate/cert2.pdf',
    description: 'Certified for implementing rigorous quality management across our manufacturing and export processes.',
  }
];

const Aidf_certificates = () => {
  return (
    <section className="certificates-section" style={{ backgroundColor: 'var(--e-global-color-ed79663)' }}>
      <div className="certificates-container">
        <div className="certificates-header">
          <h2 className="certificates-title" style={{ color: 'var(--e-global-color-43f3d89)' }}>
            Our Certifications
          </h2>
          <div className="title-divider" style={{ backgroundColor: 'var(--e-global-color-primary)' }}></div>
          <p className="certificates-intro" style={{ color: 'var(--e-global-color-text)' }}>
            At <strong style={{ color: 'var(--e-global-color-primary)' }}>AIDF GROUP</strong>, we pride ourselves on delivering products that meet global standards. 
            Our certifications reflect our unwavering commitment to quality, innovation, safety, and sustainability. 
            These achievements not only reinforce our credibility in the global market, but also highlight our 
            dedication to continuous improvement.
          </p>
        </div>

        <div className="certificates-grid">
          {certificateData.map((cert, index) => (
            <div key={index} className="certificate-card" style={{ backgroundColor: 'var(--e-global-color-401d40b)' }}>
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image"
                  style={{ border: '1px solid var(--e-global-color-a193bd8)' }}
                />
              </div>
              <div className="certificate-content">
                <h4 className="certificate-title" style={{ color: 'var(--e-global-color-2434ce4)' }}>
                  {cert.title}
                </h4>
                <p className="certificate-description" style={{ color: 'var(--e-global-color-text)' }}>
                  {cert.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aidf_certificates;