import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "ri-water-flash-line",
    title: "Extra Fizz",
    description: "Our unique carbonation process creates the perfect level of bubbles for maximum refreshment."
  },
  {
    icon: "ri-leaf-line",
    title: "Natural Flavors",
    description: "We use only real fruit extracts and natural ingredients for authentic taste."
  },
  {
    icon: "ri-ice-cream-line",
    title: "Optimal Chill",
    description: "Specially formulated to maintain the perfect cold temperature longer than regular drinks."
  },
  {
    icon: "ri-recycle-line",
    title: "Eco-Friendly",
    description: "Our packaging is made from recyclable materials to reduce environmental impact."
  }
];

const RefreshmentSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-muted">
      <div className="absolute inset-0 bg-gradient-to-r from-teal/5 to-gold/5 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={contentRef}
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              The Perfect <span className="text-brand-gradient">Refreshment</span> Experience
            </h2>
            <p className="text-foreground/80 mb-8">
              Our drinks are crafted to deliver the ultimate refreshment with the perfect balance of flavor and fizz. 
              Made with premium ingredients and ice-cold carbonation, every sip of FrozenFizz is a delightful escape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card p-6 rounded-lg shadow-sm"
                >
                  <div className="text-teal mb-3">
                    <i className={`${feature.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* A glass of FrozenFizz drink with ice cubes and condensation */}
            <img 
              src="https://pixabay.com/get/g7f94d30d1d0e5618c50e3ee14772c4eaeb4c4b8c380ca40ee479d6b1bf5427eee0ea94bbded804ae5944008da07e34fba1ae71900384d31bcba19d0e48d2e207_1280.jpg" 
              alt="Refreshing FrozenFizz drink with ice cubes" 
              className="w-full h-auto rounded-xl shadow-xl" 
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-iceBlue/30 rounded-full blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-md"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RefreshmentSection;
