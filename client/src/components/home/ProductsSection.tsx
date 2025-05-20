import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PRODUCTS } from "@/lib/constants";
import { Product } from "@shared/schema";

const ProductsSection = () => {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  
  // Products data is mocked as per the design without using external data
  const [products, setProducts] = useState<Product[]>([]);
  
  // Simulate loading products, in a real app would fetch from the API
  const { isLoading, isError } = useQuery({
    queryKey: ['/api/products'],
    queryFn: async () => {
      // Loading the mocked products from constants
      setProducts(PRODUCTS);
      return PRODUCTS;
    }
  });

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="products" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            Discover <span className="inline-block align-middle"><img src="/src/assets/logo.png" alt="FrozenFizz Logo" className="h-10" /></span> Refreshing Flavors
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Experience the perfect balance of fizz and flavor with our signature drinks. 
            Each sip is a journey into refreshment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="rounded-xl bg-white shadow-md overflow-hidden">
                <div className="p-4 h-48 flex items-center justify-center bg-gradient-to-br from-teal/10 to-gold/10">
                  <Skeleton className="h-36 w-24" />
                </div>
                <div className="p-6">
                  <Skeleton className="h-6 w-36 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-10 w-24 rounded-full" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Display products
            products.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={productVariants}
                className="product-card rounded-xl bg-card shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="p-4 h-48 flex items-center justify-center bg-gradient-to-br from-teal/10 to-gold/10">
                  <img 
                    src={product.imageUrl}
                    alt={product.name} 
                    className="product-image h-full object-contain transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-2 text-foreground">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-teal font-montserrat font-bold">{product.price}</span>
                    <Button size="sm" className="bg-brand-gradient text-white font-montserrat hover:shadow-md transition-shadow duration-300">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" className="inline-flex items-center font-montserrat font-semibold text-teal hover:text-darkTeal transition-colors duration-300">
            View All Products
            <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
