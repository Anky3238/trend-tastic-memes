import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, Download, Share2, Heart, X, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Generator = () => {
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productDescription, setProductDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMemes, setGeneratedMemes] = useState<Array<{
    id: number;
    image: string;
    prompt: string;
    viralityScore: number;
    trendingTopics: string[];
  }>>([]);
  const [trendingData, setTrendingData] = useState<string[]>([]);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleGenerate = async () => {
    if (!productImage || !productDescription) {
      toast({
        title: "Missing Information",
        description: "Please upload a product image and enter a description.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate the pipeline process
    toast({
      title: "🕷️ Scraping trending data...",
      description: "Analyzing social media trends"
    });

    setTimeout(() => {
      setTrendingData(['AI Revolution', 'Productivity Hacks', 'Tech Humor', 'Startup Life']);
      toast({
        title: "🧠 Generating meme prompts...",
        description: "Creating personalized content"
      });
    }, 2000);

    setTimeout(() => {
      toast({
        title: "🎨 Generating memes...",
        description: "Creating viral content"
      });
    }, 4000);

    setTimeout(() => {
      const mockMemes = [
        {
          id: 1,
          image: '/placeholder.svg',
          prompt: 'Productivity app that actually makes you productive',
          viralityScore: 85,
          trendingTopics: ['Productivity Hacks', 'Tech Humor']
        },
        {
          id: 2,
          image: '/placeholder.svg',
          prompt: 'When your startup idea finally works',
          viralityScore: 92,
          trendingTopics: ['Startup Life', 'AI Revolution']
        },
        {
          id: 3,
          image: '/placeholder.svg',
          prompt: 'AI solving problems humans created',
          viralityScore: 78,
          trendingTopics: ['AI Revolution', 'Tech Humor']
        }
      ];
      
      setGeneratedMemes(mockMemes);
      setIsGenerating(false);
      toast({
        title: "✅ Memes generated successfully!",
        description: "Your viral content is ready"
      });
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Product Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                  <Label>Product Image</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {productImage ? (
                        <div className="space-y-2">
                          <img
                            src={URL.createObjectURL(productImage)}
                            alt="Product"
                            className="w-32 h-32 object-cover rounded-lg mx-auto"
                          />
                          <p className="text-sm text-muted-foreground">{productImage.name}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Product Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea
                    id="description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Describe your product, its benefits, and target audience..."
                    rows={4}
                  />
                </div>

                {/* Style Selection */}
                <div className="space-y-2">
                  <Label>Meme Style (Optional)</Label>
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="funny">Funny</SelectItem>
                      <SelectItem value="sarcastic">Sarcastic</SelectItem>
                      <SelectItem value="wholesome">Wholesome</SelectItem>
                      <SelectItem value="edgy">Edgy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-primary hover:shadow-primary-glow"
                >
                  {isGenerating ? 'Generating...' : 'Generate Memes'}
                </Button>
              </CardContent>
            </Card>

            {/* Trending Topics Sidebar */}
            {trendingData.length > 0 && (
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trendingData.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Output Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 h-full">
              <CardHeader>
                <CardTitle>Generated Memes</CardTitle>
              </CardHeader>
              <CardContent>
                {generatedMemes.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <p>Upload your product and click "Generate Memes" to get started</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {generatedMemes.map((meme) => (
                      <Card key={meme.id} className="shadow-soft border-0">
                        <CardContent className="p-4 space-y-4">
                          <div className="aspect-square bg-gradient-accent rounded-lg flex items-center justify-center">
                            <span className="text-sm font-medium text-center p-4">
                              {meme.prompt}
                            </span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                Virality: {meme.viralityScore}%
                              </Badge>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {meme.trendingTopics.map((topic, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;