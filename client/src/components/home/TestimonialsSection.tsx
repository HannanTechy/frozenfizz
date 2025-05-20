import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TESTIMONIALS } from "@/lib/constants";
import { Testimonial } from "@shared/schema";

const TestimonialsSection = () => {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  
  // Using mock data for testimonials
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: async () => {
      // In a real app, you would fetch from API
      return TESTIMONIALS;
    }
  });

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            <span className="inline-block align-middle"><img src="/src/assets/logo.png" alt="FrozenFizz Logo" className="h-10" /></span> Loved by Customers
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our refreshed customers have to say about FrozenFizz.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Testimonial skeletons
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="bg-white p-8 rounded-xl shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-teal">
                      {Array(5).fill(0).map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <div className="flex items-center">
                    <Skeleton className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={testimonialVariants}
              >
                <Card className="bg-card p-8 rounded-xl shadow-md h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="text-teal">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <i key={i} className="ri-star-fill"></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={`${testimonial.name} testimonial`} 
                        className="w-10 h-10 rounded-full object-cover mr-3" 
                      />
                      <div>
                        <h4 className="font-montserrat font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
