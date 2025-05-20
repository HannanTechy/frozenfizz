import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  const stats = [
    { value: "3+", label: "Unique Flavors" },
    { value: "1+", label: "States Served" },
    { value: "1Lac+", label: "Happy Customers" },
  ];
  
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6 text-foreground">
                Our <span className="text-brand-gradient">Refreshing</span> Story
              </h2>
              <p className="text-foreground/80 mb-4">
                FrozenFizz was born from a simple idea: create the most refreshing beverage possible. 
                Our journey began in a small kitchen where our founders experimented with different 
                carbonation techniques and natural flavor combinations.
              </p>
              <p className="text-foreground/80 mb-4">
                Today, we're proud to deliver that same refreshing experience in every bottle. 
                Our unique freezing process ensures that each FrozenFizz stays colder longer, 
                delivering maximum refreshment with every sip.
              </p>
              <p className="text-foreground/80 mb-6">
                We remain committed to quality ingredients, innovative flavors, and sustainable practices. 
                From our recyclable packaging to our energy-efficient production facilities, 
                we're dedicated to refreshing both our customers and the planet.
              </p>
              
              <div className="flex items-center space-x-8 mt-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-teal font-montserrat font-bold text-3xl">{stat.value}</div>
                    <p className="text-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              ref={imageRef}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* A team of FrozenFizz employees working on product development */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=900" 
                alt="FrozenFizz team crafting refreshing beverages" 
                className="w-full h-auto rounded-xl shadow-xl" 
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gradient rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-iceBlue rounded-full opacity-30 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
