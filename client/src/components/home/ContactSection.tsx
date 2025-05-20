import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactMethods = [
  {
    icon: "ri-mail-line",
    title: "Email Us",
    description: "For general inquiries, product information, and customer support.",
    contact: "hello@frozenfizz.com",
    link: "mailto:hello@frozenfizz.com",
  },
  {
    icon: "ri-phone-line",
    title: "Call Us",
    description: "Our customer service team is available Monday through Friday, 9am-5pm EST.",
    contact: "1-800-555-1234",
    link: "tel:+18005551234",
  },
  {
    icon: "ri-map-pin-line",
    title: "Visit Us",
    description: "Stop by our headquarters for tours and tastings (by appointment only).",
    contact: "123 Refresh Way<br>Fizztown, CA 91234",
    isAddress: true,
  },
];

const ContactSection = () => {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: methodsRef, inView: methodsInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Message Failed",
        description: error instanceof Error ? error.message : "Unable to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    mutate(values);
  };

  const methodVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">
            Get in <span className="text-brand-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team through any of the channels below.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div ref={methodsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={methodsInView ? "visible" : ""}
                variants={methodVariants}
              >
                <Card className="bg-white p-8 rounded-xl shadow-md text-center h-full">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 text-teal rounded-full mb-6">
                      <i className={`${method.icon} text-2xl`}></i>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    {method.isAddress ? (
                      <address className="text-teal not-italic" dangerouslySetInnerHTML={{ __html: method.contact }}></address>
                    ) : (
                      <a href={method.link} className="text-teal hover:text-darkTeal font-medium transition-colors duration-300">
                        {method.contact}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            ref={formRef}
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white p-8 rounded-xl shadow-md">
              <CardContent className="p-0">
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-gray-700">Your Name</FormLabel>
                            <FormControl>
                              <Input
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-gray-700">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Subject</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-gray-700">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="bg-brand-gradient text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                        disabled={isPending}
                      >
                        {isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
