import { MemeGeneratorPipeline } from '@/components/MemeGeneratorPipeline';
import heroImage from '@/assets/meme-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AI Meme Generator" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Agentic AI
              <br />
              Meme Generator
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Multi-layer AI system that scrapes trending content, analyzes viral patterns, 
              and creates personalized memes for your products
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <div className="bg-primary/20 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium">
                🔍 Agentic Scraper
              </div>
              <div className="bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm font-medium">
                🧠 Trend Analyzer
              </div>
              <div className="bg-gradient-accent bg-opacity-20 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium">
                ⚡ Prompt Engineer
              </div>
              <div className="bg-gradient-secondary bg-opacity-20 border border-cyan-400/30 rounded-full px-4 py-2 text-sm font-medium">
                🎨 Meme Generator
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interface */}
      <section className="container mx-auto px-4 py-16">
        <MemeGeneratorPipeline />
      </section>

      {/* System Architecture Preview */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold">System Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sophisticated multi-agent system working together to create viral content
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-gradient-primary/10 border border-primary/20 hover:shadow-neon transition-all duration-300">
              <div className="text-4xl mb-4">🕷️</div>
              <h3 className="text-xl font-semibold mb-2">Web Scraper Agent</h3>
              <p className="text-sm text-muted-foreground">
                Crawls Reddit, Twitter, Instagram for trending memes and topics
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-secondary/10 border border-accent/20 hover:shadow-success-glow transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Context Builder</h3>
              <p className="text-sm text-muted-foreground">
                Summarizes scraped data into structured context for AI models
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-accent/10 border border-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">LLM Prompt Creator</h3>
              <p className="text-sm text-muted-foreground">
                Merges product info with trending data into custom meme prompts
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-secondary/10 border border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Image Generator</h3>
              <p className="text-sm text-muted-foreground">
                Renders final memes using product images and AI-generated captions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;