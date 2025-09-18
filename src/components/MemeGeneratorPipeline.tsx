import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, Brain, Sparkles, Zap, Download, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PipelineStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  icon: React.ReactNode;
}

export const MemeGeneratorPipeline = () => {
  const { toast } = useToast();
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productDescription, setProductDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedMemes, setGeneratedMemes] = useState<string[]>([]);

  const pipelineSteps: PipelineStep[] = [
    {
      id: 'scraper',
      title: 'Agentic Scraper',
      description: 'Crawling trending memes from Reddit, Twitter, Instagram...',
      status: 'pending',
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 'analyzer',
      title: 'Trend Analyzer',
      description: 'Analyzing viral patterns and meme styles...',
      status: 'pending',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: 'prompt',
      title: 'Prompt Engineer',
      description: 'Creating personalized meme prompts...',
      status: 'pending',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'generator',
      title: 'Meme Generator',
      description: 'Generating your viral memes...',
      status: 'pending',
      icon: <Upload className="w-5 h-5" />
    }
  ];

  const [steps, setSteps] = useState(pipelineSteps);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProductImage(file);
      toast({
        title: "Image uploaded!",
        description: "Product image ready for meme generation",
      });
    }
  };

  const simulateGeneration = async () => {
    if (!productImage || !productDescription) {
      toast({
        title: "Missing inputs",
        description: "Please upload an image and add a description",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    const updatedSteps = [...steps];

    for (let i = 0; i < updatedSteps.length; i++) {
      setCurrentStep(i);
      updatedSteps[i].status = 'processing';
      setSteps([...updatedSteps]);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
      
      updatedSteps[i].status = 'completed';
      setSteps([...updatedSteps]);
    }

    // Simulate generated memes
    setGeneratedMemes([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
    ]);

    setIsGenerating(false);
    toast({
      title: "Memes generated!",
      description: "Your viral memes are ready to share",
    });
  };

  const resetPipeline = () => {
    setSteps(pipelineSteps);
    setCurrentStep(0);
    setGeneratedMemes([]);
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="p-6 bg-gradient-primary shadow-card-glow border-0">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Upload Your Product
            </h2>
            <p className="text-primary-foreground/80">
              Let AI create viral memes for your product
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-primary-foreground">
                Product Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-primary-foreground/30 rounded-lg hover:border-primary-foreground/60 cursor-pointer transition-colors"
                >
                  <Upload className="w-8 h-8 text-primary-foreground/60 mb-2" />
                  <span className="text-sm text-primary-foreground/80">
                    {productImage ? productImage.name : 'Click to upload image'}
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-primary-foreground">
                Product Description
              </label>
              <Textarea
                placeholder="Describe your product, its features, target audience, and key benefits..."
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="h-32 bg-black/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={simulateGeneration}
              disabled={isGenerating || !productImage || !productDescription}
              className="px-8 py-3 bg-gradient-secondary hover:shadow-success-glow transition-all duration-300"
            >
              {isGenerating ? 'Generating...' : 'Generate Viral Memes'}
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Pipeline Status */}
      {isGenerating || generatedMemes.length > 0 ? (
        <Card className="p-6 border border-border/50 shadow-card-glow">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">AI Pipeline Status</h3>
              {generatedMemes.length > 0 && (
                <Button variant="outline" size="sm" onClick={resetPipeline}>
                  New Generation
                </Button>
              )}
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                    step.status === 'processing'
                      ? 'border-primary bg-primary/10 shadow-neon'
                      : step.status === 'completed'
                      ? 'border-accent bg-accent/10'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    step.status === 'processing'
                      ? 'bg-primary text-primary-foreground animate-pulse'
                      : step.status === 'completed'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{step.title}</h4>
                      <Badge variant={
                        step.status === 'processing' ? 'default' :
                        step.status === 'completed' ? 'secondary' : 'outline'
                      }>
                        {step.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {step.status === 'processing' && (
                    <div className="w-24">
                      <Progress value={75} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      ) : null}

      {/* Results Gallery */}
      {generatedMemes.length > 0 && (
        <Card className="p-6 border border-border/50 shadow-card-glow">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Your Viral Memes</h3>
              <p className="text-muted-foreground">
                AI-generated memes ready to go viral!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {generatedMemes.map((meme, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden border border-border hover:shadow-card-glow transition-all duration-300"
                >
                  <img
                    src={meme}
                    alt={`Generated meme ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};