import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const features = [
  { icon: "ri-mail-line", title: "Updates", description: "New product alerts" },
  { icon: "ri-coupon-2-line", title: "Discounts", description: "Exclusive offers" },
  { icon: "ri-gift-line", title: "Surprises", description: "Special giveaways" },
  { icon: "ri-calendar-event-line", title: "Events", description: "Sampling & more" },
];

const NewsletterSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: NewsletterFormValues) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error instanceof Error ? error.message : "Unable to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: NewsletterFormValues) => {
    mutate(values);
  };

  return (
    <section id="newsletter" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 z-0"></div>
      
      {/* Ice Cube Animation Elements */}
      <motion.div 
        className="absolute top-1/3 left-1/5 w-16 h-16 bg-iceBlue/20 rounded-lg"
        animate={{ rotate: 12 }}
        initial={{ rotate: 0 }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/5 w-20 h-20 bg-iceBlue/20 rounded-lg"
        animate={{ rotate: -12 }}
        initial={{ rotate: 0 }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Stay <span className="text-brand-gradient">Refreshed</span> with Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers, new flavor announcements, and 
            refreshing content delivered straight to your inbox.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Your email address" 
                          type="email"
                          className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300" 
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-brand-gradient text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  disabled={isPending}
                >
                  {isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
            <p className="text-gray-500 text-sm mt-4">
              By subscribing, you agree to receive marketing communications from FrozenFizz. 
              Don't worry, we respect your privacy and you can unsubscribe anytime.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-teal mb-3">
                  <i className={`${feature.icon} text-4xl`}></i>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
