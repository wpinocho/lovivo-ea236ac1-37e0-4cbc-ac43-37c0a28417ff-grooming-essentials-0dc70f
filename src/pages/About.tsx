import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Leaf, Users } from 'lucide-react'

const About = () => {
  return (
    <EcommerceTemplate pageTitle="About Us">
      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Redefining Men's Grooming
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe every man deserves premium grooming products that are as effective as they are natural. 
            Our mission is to simplify your routine while elevating your results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Premium Men's Grooming was born from a simple frustration: 
                  the lack of truly effective, natural grooming products designed specifically for men.
                </p>
                <p>
                  Our founder, after years of trying countless products filled with harsh chemicals 
                  and empty promises, decided to create something different. Something better.
                </p>
                <p>
                  We partnered with dermatologists, chemists, and grooming experts to develop 
                  formulas that combine the best of nature with proven science. Every product 
                  is tested rigorously to ensure it delivers real results.
                </p>
                <p>
                  Today, we're proud to serve thousands of men who've upgraded their grooming 
                  routine and discovered what premium, natural care can do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" 
                alt="Our founder"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Natural First</h4>
                <p className="text-muted-foreground">
                  We use only the finest natural ingredients, sustainably sourced and ethically produced.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Quality Obsessed</h4>
                <p className="text-muted-foreground">
                  Every product undergoes rigorous testing to ensure it meets our exacting standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Cruelty Free</h4>
                <p className="text-muted-foreground">
                  100% cruelty-free. We never test on animals and source ingredients ethically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Customer First</h4>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to help you look and feel your best.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
            <p className="text-xl text-muted-foreground">
              The experts behind your grooming routine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-foreground mb-2">James Mitchell</h4>
              <p className="text-accent font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                Former product developer at leading skincare brands. Passionate about natural ingredients.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-foreground mb-2">Dr. Sarah Chen</h4>
              <p className="text-accent font-medium mb-2">Chief Dermatologist</p>
              <p className="text-muted-foreground text-sm">
                Board-certified dermatologist with 15 years experience in men's skincare.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-foreground mb-2">Marcus Rodriguez</h4>
              <p className="text-accent font-medium mb-2">Master Barber</p>
              <p className="text-muted-foreground text-sm">
                Award-winning barber and grooming consultant. Expert in beard care and styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h3>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            We're committed to providing you with the highest quality grooming products, 
            backed by science and crafted with care. If you're not completely satisfied, 
            we'll make it right. That's our promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-primary-foreground/80">Natural Ingredients</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-primary-foreground/80">Happy Customers</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About