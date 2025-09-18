import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Bot, TrendingUp, Shield, Rocket, Users } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const About = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Multi-Agent AI System",
      description: "Advanced pipeline with specialized agents for scraping, analysis, and generation"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-Time Trend Analysis",
      description: "Continuously monitors social media platforms for viral content patterns"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Generation",
      description: "Creates professional memes in seconds using state-of-the-art AI models"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "Built-in appropriateness filters ensure brand-safe content"
    }
  ];

  const architecture = [
    { name: "Web Scraper Agent", description: "Crawls Reddit, Twitter, Instagram for trending content", status: "Active" },
    { name: "Context Builder", description: "Summarizes scraped data into structured context", status: "Active" },
    { name: "LLM Prompt Creator", description: "Merges product info with trending data", status: "Active" },
    { name: "Meme Generator", description: "Renders final memes using AI image generation", status: "Active" },
    { name: "Virality Predictor", description: "Estimates meme's viral potential", status: "Coming Soon" },
    { name: "Appropriateness Filter", description: "Detects harmful or unsafe content", status: "Coming Soon" }
  ];

  const futureEnhancements = [
    "Advanced virality prediction algorithms",
    "Multi-language meme generation",
    "Custom meme template creation",
    "Social media scheduling integration",
    "A/B testing for meme variations",
    "Brand voice personalization"
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <img src={logoImage} alt="AdMeme Generator" className="w-20 h-20 mx-auto" />
          <h1 className="text-4xl font-bold">About AdMeme Generator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sophisticated multi-agent AI system that transforms your products into viral memes 
            by analyzing trending content across social media platforms.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              AdMeme Generator represents the cutting edge of AI-powered content creation. Our system 
              employs multiple specialized AI agents that work together to create viral-worthy memes 
              featuring your products. By continuously analyzing trending topics across social media 
              platforms, we ensure your content stays relevant and engaging.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Architecture */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {architecture.map((component, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{component.name}</h3>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                  </div>
                  <Badge 
                    variant={component.status === "Active" ? "default" : "secondary"}
                    className={component.status === "Active" ? "bg-gradient-primary" : ""}
                  >
                    {component.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Enhancements */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              Future Enhancements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {futureEnhancements.map((enhancement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-sm">{enhancement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Flow */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold">Product Input</h3>
                  <p className="text-sm text-muted-foreground">Upload your product image and provide a description</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold">Trend Analysis</h3>
                  <p className="text-sm text-muted-foreground">AI scraper analyzes trending topics across social platforms</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold">Context Building</h3>
                  <p className="text-sm text-muted-foreground">System combines product info with trending data</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold">Meme Generation</h3>
                  <p className="text-sm text-muted-foreground">AI creates viral-worthy memes featuring your product</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;