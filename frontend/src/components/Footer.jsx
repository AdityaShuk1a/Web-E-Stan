import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#252227',
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
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }} className="footer-sections">
        <div style={{ flex: '1', minWidth: '250px', padding: '10px' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '25px' }}>Learn with Us</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Our Courses</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Student Projects</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Success Stories</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '250px', padding: '10px' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '25px' }}>Connect with Us</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Facebook</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Instagram</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>LinkedIn</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '250px', padding: '10px' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '25px' }}>Opportunities</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Become a Mentor</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Teach with Us</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Collaborate</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '250px', padding: '10px' }} className="footer-column">
          <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '25px' }}>Help & Support</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>FAQs</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Contact Us</a></li>
            <li style={{marginBottom: '5px'}}><a href="#" style={{ color: '#dddddd', fontSize: '14px', textDecoration: 'none' }}>Student Support</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ borderTop: '2px solid #444', paddingTop: '20px' }} className="footer-bottom">
        <p style={{ fontSize: '12px', margin: '0' }}>&copy; 2025 MoonBeam Academy. All rights reserved.</p>
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
