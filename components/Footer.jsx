import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 
        <img className='media-l' src='/src/images/diet.png' />
          fitNutrition. Tüm hakları saklıdır.</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/ali-ziya-özkan-083b82270/" target="_blank" rel="noopener noreferrer">
          <img className='media' src='/src/images/linkedin.png' />
          </a>
          <a href="https://github.com/aliziyaozkan" target="_blank" rel="noopener noreferrer">
          <img className='media' src='/src/images/github.png' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
