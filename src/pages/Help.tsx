import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MessageCircle, HelpCircle, Upload, Zap, Download, AlertCircle } from 'lucide-react';

const Help = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Support",
      value: "support@memegen.ai",
      description: "Get help within 24 hours"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Support",
      value: "+91-98765-43210",
      description: "Business hours: 9 AM - 6 PM IST"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Live Chat",
      value: "Available Now",
      description: "Instant support for urgent issues"
    }
  ];

  const faqItems = [
    {
      question: "How do I upload a product image?",
      answer: "Navigate to the Generator page and click on the upload area. You can either click to browse files or drag and drop your image. Supported formats include JPG, PNG, and WebP."
    },
    {
      question: "How are memes generated?",
      answer: "Our AI system uses a 4-step process: 1) Scrapes trending topics from social media, 2) Analyzes your product description, 3) Creates personalized meme prompts, and 4) Generates the final meme using advanced AI models."
    },
    {
      question: "Can I download and share my memes?",
      answer: "Yes! Each generated meme comes with download and share buttons. You can save them to your device or share directly to social media platforms."
    },
    {
      question: "What makes a meme go viral?",
      answer: "Our virality predictor considers factors like trending topics, humor style, timing, and audience engagement patterns. Memes scoring above 80% have higher viral potential."
    },
    {
      question: "Is there a limit to meme generation?",
      answer: "Free users can generate up to 10 memes per day. Premium users have unlimited generations plus access to advanced features like custom templates and batch processing."
    }
  ];

  const troubleshooting = [
    {
      issue: "Login Problems",
      solutions: [
        "Check your email and password",
        "Try resetting your password",
        "Clear browser cache and cookies",
        "Contact support if issue persists"
      ]
    },
    {
      issue: "File Upload Issues",
      solutions: [
        "Ensure file size is under 10MB",
        "Use supported formats (JPG, PNG, WebP)",
        "Check your internet connection",
        "Try refreshing the page"
      ]
    },
    {
      issue: "Meme Generation Fails",
      solutions: [
        "Provide a detailed product description",
        "Ensure uploaded image is clear",
        "Wait for trending data to load",
        "Try generating again after a moment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Help & Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Contact Information */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center space-y-4 p-6 bg-secondary/20 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mx-auto">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <p className="text-lg font-medium text-primary">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                  {contact.title === "Live Chat" && (
                    <Button className="w-full bg-gradient-primary hover:shadow-primary-glow">
                      Start Chat
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <HelpCircle className="h-6 w-6" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Help Center Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card border-0 text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <Upload className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Getting Started</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn how to upload products and create your first meme
            </p>
            <Button variant="outline" size="sm">View Guide</Button>
          </Card>

          <Card className="shadow-card border-0 text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Advanced Features</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Explore virality prediction and custom templates
            </p>
            <Button variant="outline" size="sm">Learn More</Button>
          </Card>

          <Card className="shadow-card border-0 text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mx-auto mb-4">
              <Download className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Download & Share</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Export your memes and share across platforms
            </p>
            <Button variant="outline" size="sm">View Tutorial</Button>
          </Card>
        </div>

        {/* Troubleshooting */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Troubleshooting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Badge variant="outline">{item.issue}</Badge>
                  </h3>
                  <ul className="space-y-2 ml-4">
                    {item.solutions.map((solution, sIndex) => (
                      <li key={sIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <Card className="shadow-card border-0 bg-gradient-hero">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Still Need Help?</h2>
            <p className="text-muted-foreground">
              Our support team is here to help you succeed with AdMeme Generator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-primary-glow">
                Contact Support
              </Button>
              <Button variant="outline">
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;