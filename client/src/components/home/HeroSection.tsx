import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { ref: textRef, inView: textInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  return (
    <section id="home" className="relative overflow-hidden pt-20 md:pt-0 bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-teal/5 z-0"></div>
      
      {/* Hero Ice Cube Animation Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-iceBlue/10 rounded-lg"
        animate={{ rotate: 45 }}
        initial={{ rotate: 0 }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-20 h-20 bg-iceBlue/10 rounded-lg"
        animate={{ rotate: 12 }}
        initial={{ rotate: 0 }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-iceBlue/10 rounded-lg"
        animate={{ rotate: -12 }}
        initial={{ rotate: 0 }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 lg:py-36 relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <motion.div 
            ref={textRef}
            className="md:w-1/2 space-y-6 pt-8 md:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              Refresh with <span className="inline-block align-middle"><img src="/src/assets/logo.png" alt="FrozenFizz Logo" className="h-12" /></span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              Discover our range of ice-cold refreshments that bring a burst of flavor and a cool sensation to every moment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const section = document.getElementById("products");
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-brand-gradient text-white font-montserrat font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Flavors
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("stores");
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-muted border-2 border-teal text-foreground font-montserrat font-semibold px-8 py-3 rounded-full hover:bg-teal hover:text-white transition-colors duration-300"
              >
                Find Near You
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* A frosty can of FrozenFizz with water droplets and ice cubes */}
            <img 
              src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Refreshing FrozenFizz drink with ice cubes" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
            
            {/* Floating element decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gradient rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-iceBlue rounded-full opacity-30 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="hsl(210, 10%, 10%)" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
