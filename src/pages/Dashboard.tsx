import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, Eye, Download, Share2 } from 'lucide-react';

const Dashboard = () => {
  const recentMemes = [
    {
      id: 1,
      prompt: "When your productivity app actually works",
      generatedAt: "2 hours ago",
      viralityScore: 85,
      appropriateness: "Safe",
      views: 1250,
      downloads: 45,
      shares: 23
    },
    {
      id: 2,
      prompt: "AI solving problems humans created",
      generatedAt: "5 hours ago",
      viralityScore: 92,
      appropriateness: "Safe",
      views: 2100,
      downloads: 78,
      shares: 41
    },
    {
      id: 3,
      prompt: "Startup life in one meme",
      generatedAt: "1 day ago",
      viralityScore: 78,
      appropriateness: "Safe",
      views: 890,
      downloads: 32,
      shares: 15
    }
  ];

  const stats = [
    { label: "Total Memes", value: "47", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Avg Virality Score", value: "85%", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Total Views", value: "12.5K", icon: <Eye className="h-5 w-5" /> },
    { label: "Downloads", value: "387", icon: <Download className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button className="bg-gradient-primary hover:shadow-primary-glow">
            Generate New Meme
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Memes */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle>Recent Memes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMemes.map((meme) => (
                <div key={meme.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium">{meme.prompt}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{meme.generatedAt}</span>
                      <Badge variant="outline" className="text-xs">
                        Virality: {meme.viralityScore}%
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {meme.appropriateness}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{meme.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{meme.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="h-4 w-4" />
                      <span>{meme.shares}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Performance */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Generated Prompts Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Humor Style</span>
                  <Badge variant="secondary">Trending</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Product Integration</span>
                  <Badge variant="secondary">Excellent</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Trending Alignment</span>
                  <Badge variant="secondary">High</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Virality Prediction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">85%</div>
                <p className="text-sm text-muted-foreground">Average Prediction Accuracy</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>High Viral Potential</span>
                  <span>23 memes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Medium Viral Potential</span>
                  <span>18 memes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Low Viral Potential</span>
                  <span>6 memes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;