import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#252227', // Updated color
      color: '#fefefa',
      fontFamily: "'Actor', sans-serif",
      textShadow: '-0.1rem -0.1rem 0 #000, 0.1rem -0.1rem 0 #000, -0.1rem 0.1rem 0 #000, 0.1rem 0.1rem 0 #000',
      zIndex: 5,
      boxShadow: '2px 2px 0 #333, -2px -2px 0 #333, 3px 3px 0 #333',
      border: '2px solid #333',
      borderRadius: '12px'
    }} id="footer">
      {/* Back to Top Button */}
      <div style={{ paddingBottom: '20px' }} className="back-to-top">
        <a href="#" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none' }}>Back to Top</a>
      </div>

      {/* Footer Sections */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap' }} className="footer-sections">
        <div style={{ flexBasis: '23%', padding: '10px', textAlign: 'left' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px' }}>Get to Know Us</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Careers</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Blog</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>About Us</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Investor Relations</a></li>
          </ul>
        </div>
        <div style={{ flexBasis: '23%', padding: '10px', textAlign: 'left' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px' }}>Connect with Us</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Facebook</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Twitter</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Instagram</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>LinkedIn</a></li>
          </ul>
        </div>
        <div style={{ flexBasis: '23%', padding: '10px', textAlign: 'left' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px' }}>Make Money with Us</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Sell Products</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Become an Affiliate</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Advertise Your Products</a></li>
          </ul>
        </div>
        <div style={{ flexBasis: '23%', padding: '10px', textAlign: 'left' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px' }}>Let Us Help You</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Your Account</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Customer Service</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Returns & Replacements</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Shipping Info</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ borderTop: '2px solid #444', paddingTop: '20px' }} className="footer-bottom">
        <p style={{ fontSize: '12px', margin: '0' }}>&copy; 2024 Your Company. All rights reserved.</p>
        <ul style={{ listStyle: 'none', padding: '0', margin: '10px 0 0', display: 'flex', justifyContent: 'center' }} className="legal-links">
          <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</a></li>
          <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '12px', textDecoration: 'none' }}>Terms of Service</a></li>
          <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#dddddd', fontSize: '12px', textDecoration: 'none' }}>Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;