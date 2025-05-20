import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    close();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex cursor-pointer">
                <img
                  src="/src/assets/logo.png"
                  alt="FrozenFizz Logo"
                  className="h-8 sm:h-10"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link font-montserrat font-semibold text-foreground hover:text-teal transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="nav-link font-montserrat font-semibold text-foreground hover:text-teal transition-colors duration-300"
            >
              Products
            </button>
            
            {/* Stores dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="nav-link font-montserrat font-semibold text-foreground hover:text-teal transition-colors duration-300 flex items-center"
                >
                  Stores 
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card text-card-foreground border-border">
                <DropdownMenuItem onClick={() => scrollToSection("stores")} className="font-montserrat">
                  Find Store
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("stores")} className="font-montserrat">
                  Store Locator
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("stores")} className="font-montserrat">
                  Opening Hours
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link font-montserrat font-semibold text-foreground hover:text-teal transition-colors duration-300"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link font-montserrat font-semibold text-foreground hover:text-teal transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggle}
              className="md:hidden text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`ri-${isOpen ? "close" : "menu"}-line text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-card border-t border-border shadow-lg",
        isOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left font-montserrat font-semibold text-foreground py-2 px-4 rounded hover:bg-muted capitalize"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="block w-full text-left font-montserrat font-semibold text-foreground py-2 px-4 rounded hover:bg-muted capitalize"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("stores")}
            className="block w-full text-left font-montserrat font-semibold text-foreground py-2 px-4 rounded hover:bg-muted capitalize"
          >
            Stores
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left font-montserrat font-semibold text-foreground py-2 px-4 rounded hover:bg-muted capitalize"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left font-montserrat font-semibold text-foreground py-2 px-4 rounded hover:bg-muted capitalize"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
