import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Footer = () => {
  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/src/assets/logo.png" 
              alt="FrozenFizz Logo" 
              className="h-10 mb-4" 
            />
            <p className="text-gray-400 mb-4">
              FrozenFizz delivers the ultimate refreshment experience with innovative flavors and ice-cold sensations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <i className="ri-twitter-line"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "products", "stores", "about", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 capitalize"
                  >
                    {item === "home" ? "Home" : 
                     item === "stores" ? "Store Locator" : 
                     item === "about" ? "About Us" : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-map-pin-line mt-1 mr-2 text-gray-400"></i>
                <span className="text-gray-400">
                  123 Refresh Way<br />
                  Fizztown, CA 91234
                </span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2 text-gray-400"></i>
                <a 
                  href="tel:+18005551234" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  1-800-555-1234
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-gray-400"></i>
                <a 
                  href="mailto:hello@frozenfizz.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  hello@frozenfizz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FrozenFizz Beverages. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {["visa", "mastercard", "amex", "paypal"].map((method) => (
                <span key={method} className="h-6 w-10 bg-gray-800 rounded"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
