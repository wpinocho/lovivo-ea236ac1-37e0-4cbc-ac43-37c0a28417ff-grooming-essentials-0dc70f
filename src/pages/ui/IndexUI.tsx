import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { ChevronRight, Droplet, Shield, Leaf, Check } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow-sm">
                Elevate Your Grooming Game
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Premium beard care and skincare essentials crafted for the modern man. 
                Natural ingredients, proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
                  onClick={() => {
                    const routineSection = document.getElementById('routine-section');
                    routineSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Build Your Routine
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                  onClick={() => {
                    const productsSection = document.getElementById('products-section');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=800&fit=crop" 
                alt="Premium grooming products"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Routine Section */}
      <section id="routine-section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your 3-Step Grooming Routine
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, effective, and designed for busy men who demand results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Cleanse</h3>
              <p className="text-muted-foreground mb-6">
                Start with a deep cleansing face wash to remove dirt, oil, and impurities. 
                Use morning and night for best results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Removes excess oil</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unclogs pores</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prevents breakouts</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Treat</h3>
              <p className="text-muted-foreground mb-6">
                Apply targeted treatments for specific concerns like aging, dark circles, 
                or beard conditioning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Addresses specific issues</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Nourishes deeply</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Enhances appearance</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Protect</h3>
              <p className="text-muted-foreground mb-6">
                Finish with moisturizer and SPF to hydrate and shield your skin from 
                environmental damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Locks in moisture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Sun protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Anti-aging benefits</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => {
                const productsSection = document.getElementById('products-section');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Build Your Routine Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-xl text-muted-foreground">
                Find exactly what you need for your grooming routine
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products-section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Products'
                }
              </h2>
              <p className="text-muted-foreground">
                Premium grooming essentials for the modern man
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ingredients FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Our Ingredients Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use only the finest natural ingredients, carefully selected for their proven benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Natural & Organic</h3>
              <p className="text-muted-foreground">
                Plant-based ingredients sourced sustainably. No harsh chemicals or synthetic fragrances.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Dermatologist Tested</h3>
              <p className="text-muted-foreground">
                All products tested for safety and efficacy. Suitable for sensitive skin.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Droplet className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Formulated with active ingredients backed by scientific research for visible results.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Common Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What makes your products different?</h4>
                <p className="text-muted-foreground">
                  We combine traditional grooming wisdom with modern science. Our formulas use high-concentration 
                  natural ingredients like argan oil, jojoba, activated charcoal, and botanical extracts that 
                  actually work.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Are your products suitable for sensitive skin?</h4>
                <p className="text-muted-foreground">
                  Yes! All our products are dermatologist-tested and free from harsh chemicals, parabens, and 
                  sulfates. We use gentle, natural ingredients that are effective yet kind to your skin.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How long until I see results?</h4>
                <p className="text-muted-foreground">
                  Most customers notice improvements within 2-3 weeks of consistent use. For best results, 
                  follow the 3-step routine daily and give products at least 30 days to show their full benefits.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you test on animals?</h4>
                <p className="text-muted-foreground">
                  Never. We're proud to be 100% cruelty-free. Our products are tested on willing humans only, 
                  and we source ingredients ethically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-sm">
            Ready to Transform Your Grooming Routine?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of men who've upgraded their daily routine with our premium products
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-12"
            onClick={() => {
              const productsSection = document.getElementById('products-section');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Build Your Routine
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};