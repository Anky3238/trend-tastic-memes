import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import heroImage from '@/assets/meme-hero.jpg';

const Landing = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Generation",
      description: "Advanced AI analyzes trending topics and creates viral-worthy memes"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Trend Analysis",
      description: "Real-time scraping of social media to identify viral content patterns"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Product Integration", 
      description: "Seamlessly blend your product into trending meme formats"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Results",
      description: "Generate professional memes in seconds, not hours"
    }
  ];

  const exampleMemes = [
    { id: 1, title: "Tech Startup Meme", preview: "/placeholder.svg" },
    { id: 2, title: "E-commerce Meme", preview: "/placeholder.svg" },
    { id: 3, title: "SaaS Product Meme", preview: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="AdMeme Generator" className="w-10 h-10" />
          <span className="text-xl font-bold">AdMeme Generator</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-primary hover:shadow-primary-glow">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Generate Viral{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Memes
            </span>{' '}
            for Your Product using AI
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your marketing with AI-powered meme generation that analyzes trending content 
            and creates viral-worthy memes featuring your products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/generator">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary-glow text-lg px-8 py-3">
                Start Generating
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-12">
          <h2 className="text-3xl font-bold">Why Choose AdMeme Generator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-card border-0 hover:shadow-primary-glow transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Memes Carousel */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Example Generated Memes</h2>
          <div className="max-w-3xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {exampleMemes.map((meme) => (
                  <CarouselItem key={meme.id}>
                    <Card className="shadow-card border-0">
                      <CardContent className="p-6">
                        <div className="aspect-square bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                          <span className="text-lg font-medium">{meme.title}</span>
                        </div>
                        <p className="text-muted-foreground">AI-generated meme example</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-hero border-0 shadow-card">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Go Viral?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of marketers who are already creating viral content with AdMeme Generator.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary-glow text-lg px-8 py-3">
                Start Creating Memes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="AdMeme Generator" className="w-8 h-8" />
            <span className="font-medium">AdMeme Generator</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/help" className="hover:text-foreground">Help</Link>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;