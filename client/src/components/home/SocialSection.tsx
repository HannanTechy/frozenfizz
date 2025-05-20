import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { SOCIAL_POSTS } from "@/lib/constants";
import { SocialPost } from "@shared/schema";

const SocialSection = () => {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  
  // Using mock data for social posts
  const { data: socialPosts, isLoading } = useQuery({
    queryKey: ['/api/social-posts'],
    queryFn: async () => {
      // In a real app, you would fetch from API
      return SOCIAL_POSTS;
    }
  });

  const socialLinks = [
    { icon: "ri-instagram-line", label: "Instagram" },
    { icon: "ri-facebook-circle-line", label: "Facebook" },
    { icon: "ri-twitter-line", label: "Twitter" },
    { icon: "ri-youtube-line", label: "YouTube" },
    { icon: "ri-tiktok-line", label: "TikTok" },
  ];

  const postVariants = {
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl mb-4">
            Follow Our <span className="text-brand-gradient">Refreshing</span> Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of FrozenFizz enthusiasts and share your refreshing moments with us.
          </p>
        </motion.div>
        
        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-teal transition-colors duration-300"
              aria-label={link.label}
            >
              <i className={`${link.icon} text-3xl`}></i>
            </a>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {isLoading ? (
            // Social post skeletons
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="w-full h-56" />
              </div>
            ))
          ) : (
            socialPosts?.map((post, index) => (
              <motion.div
                key={post.id}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={postVariants}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.altText} 
                  className="w-full h-56 object-cover" 
                />
              </motion.div>
            ))
          )}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center font-montserrat font-semibold text-teal hover:text-darkTeal transition-colors duration-300">
            View More on Instagram
            <i className="ri-external-link-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
