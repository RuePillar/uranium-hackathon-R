import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  MessageCircle, 
  Send,
  Calendar,
  ExternalLink,
  Globe,
  Briefcase
} from 'lucide-react';

const ContactPolicyMakers = () => {
  const policyMakers = [
    {
      name: "Ministry of Mines and Energy",
      position: "Primary Mining Regulator",
      department: "Government of Namibia",
      email: "info@mme.gov.na",
      phone: "+264 61 284 8339",
      address: "6 Aviation Road, Windhoek",
      website: "https://www.mme.gov.na",
      focus: ["Mining Policy", "Energy Regulation", "Resource Management"],
      avatar: "🏛️"
    },
    {
      name: "Namibian Chamber of Mines",
      position: "Industry Representative Body",
      department: "Private Sector",
      email: "chamberofmines@chamberofmines.org.na",
      phone: "+264 61 237 925",
      address: "Chamber of Mines Building, Windhoek",
      website: "https://www.chamberofmines.org.na",
      focus: ["Industry Advocacy", "Policy Input", "Member Services"],
      avatar: "⚒️"
    },
    {
      name: "Ministry of Environment",
      position: "Environmental Oversight",
      department: "Government of Namibia",
      email: "info@met.gov.na",
      phone: "+264 61 284 2701",
      address: "Windhoek",
      website: "https://www.met.gov.na",
      focus: ["Environmental Impact", "Sustainability", "Conservation"],
      avatar: "🌍"
    },
    {
      name: "National Planning Commission",
      position: "Strategic Development",
      department: "Government of Namibia",
      email: "info@npc.gov.na",
      phone: "+264 61 283 4111",
      address: "Windhoek",
      website: "https://www.npc.gov.na",
      focus: ["National Development", "Economic Planning", "Vision 2030"],
      avatar: "📊"
    }
  ];

  const quickActions = [
    {
      title: "Schedule Meeting",
      description: "Book a consultation with policy makers",
      icon: <Calendar className="h-6 w-6" />,
      action: "Schedule Now",
      color: "bg-primary"
    },
    {
      title: "Submit Proposal",
      description: "Submit policy recommendations or proposals",
      icon: <Send className="h-6 w-6" />,
      action: "Submit",
      color: "bg-secondary"
    },
    {
      title: "Join Discussion",
      description: "Participate in ongoing policy discussions",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Join Forum",
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Connect with Decision Makers
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Contact Policy Makers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with key stakeholders shaping Namibia's uranium mining and nuclear energy policies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Start Conversation
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Contacts
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Actions</h2>
            <p className="text-muted-foreground">Get started with these common requests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{action.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Makers Directory */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Policy Makers</h2>
            <p className="text-muted-foreground">Connect with the right people for your specific needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policyMakers.map((maker, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{maker.avatar}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {maker.name}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">{maker.position}</p>
                      <p className="text-sm text-muted-foreground">{maker.department}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${maker.email}`} className="hover:text-primary transition-colors">
                        {maker.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${maker.phone}`} className="hover:text-primary transition-colors">
                        {maker.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{maker.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-primary" />
                      <a href={maker.website} target="_blank" rel="noopener noreferrer" 
                         className="hover:text-primary transition-colors">
                        Visit Website
                      </a>
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {maker.focus.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Send a Message</h2>
            <p className="text-muted-foreground">Reach out to multiple stakeholders at once</p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                General Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Organization</label>
                  <Input placeholder="Your organization" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input placeholder="your.email@example.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input placeholder="+264 XX XXX XXXX" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Brief subject of your inquiry" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea 
                  className="w-full min-h-32 px-3 py-2 border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your inquiry, policy suggestions, or collaboration proposal..."
                />
              </div>

              <Button size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPolicyMakers;