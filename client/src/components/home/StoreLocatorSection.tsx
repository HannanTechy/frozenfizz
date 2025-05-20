import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { Skeleton } from "@/components/ui/skeleton";
import { STORE_LOCATIONS } from "@/lib/constants";
import { StoreLocation } from "@shared/schema";

const StoreLocatorSection = () => {
  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation();
  const { ref: mapRef, inView: mapInView } = useScrollAnimation();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<StoreLocation[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Initial store locations data
  const { data: storeLocations, isLoading } = useQuery({
    queryKey: ['/api/store-locations'],
    queryFn: async () => {
      // In a real app, this would fetch from the API
      return STORE_LOCATIONS;
    }
  });

  const handleStoreSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    try {
      // In a real app, this would make an API request
      // const response = await apiRequest("GET", `/api/store-locations/search?query=${encodeURIComponent(searchQuery)}`);
      // const data = await response.json();
      
      // For now, simulate a search by filtering the mock data
      const filteredResults = STORE_LOCATIONS.filter(
        store => store.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching for stores:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section id="stores" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            Find <span className="inline-block align-middle"><img src="/src/assets/logo.png" alt="FrozenFizz Logo" className="h-10" /></span> Near You
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Enter your location to discover where you can pick up your favorite FrozenFizz beverages.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={formRef}
            className="bg-card p-6 rounded-xl shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              onSubmit={handleStoreSearch}
            >
              <div className="md:col-span-2">
                <Input
                  type="text"
                  placeholder="Enter your zip code or address"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="bg-brand-gradient text-white font-montserrat font-semibold px-6 py-3 rounded-lg hover:shadow-md transition-shadow duration-300"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Find Stores"}
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="map-container mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {isLoading || isSearching ? (
                // Store location skeletons
                Array(2).fill(0).map((_, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-64 mb-3" />
                    <div className="flex items-center mb-3">
                      <Skeleton className="h-4 w-36" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-8 w-16 rounded-full" />
                      <Skeleton className="h-8 w-24 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  </div>
                ))
              ) : (
                // Display search results if available, otherwise show all locations
                (searchResults.length > 0 ? searchResults : storeLocations || []).map((store) => (
                  <Card key={store.id} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-montserrat font-semibold text-lg mb-2 text-foreground">{store.name}</h3>
                    <p className="text-foreground/70 mb-3">{store.address}</p>
                    <div className="flex items-center text-foreground/60 mb-3">
                      <i className="ri-time-line mr-2"></i>
                      <span>{store.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {store.phone && (
                        <a href={`tel:${store.phone.replace(/\D/g, '')}`} className="text-sm text-teal hover:text-darkTeal transition-colors duration-300">
                          <i className="ri-phone-line mr-1"></i> Call
                        </a>
                      )}
                      <a href="#" className="text-sm text-teal hover:text-darkTeal transition-colors duration-300">
                        <i className="ri-map-pin-line mr-1"></i> Directions
                      </a>
                      {store.distance && (
                        <span className="text-sm bg-gold/20 text-darkTeal px-2 py-1 rounded-full">{store.distance}</span>
                      )}
                    </div>
                  </Card>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
