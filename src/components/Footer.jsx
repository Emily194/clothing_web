import './Footer.css';

function Footer() {
  return <>
    <footer className="footer">
      <div className="footer-links">
        <a href="#help">Customer Support</a>
        <a href="#about">About Us</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="social">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  </>;
}

export default Footer;


// {images.map((image, index) => (
//     <div
//       className={`slide ${index === currentSlideIndex ? "active" : ""}`}
//       style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
//       key={index}
//     >
//       <img src={image.src} alt={`Slide ${index + 1}`} />
//       <a href={image.link} className="shop-now-btn">
//         Shop Now
//       </a>
//     </div>
//   ))}