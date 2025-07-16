import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, Mail, Phone, MapPin, Building, 
  MessageCircle, Send, Calendar, ExternalLink, 
  Globe, Briefcase 
} from 'lucide-react';

// Type definitions
interface PolicyMaker {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  focus: string[];
  avatar: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  color: string;
}

const ContactPolicyMakers: React.FC = () => {
  const policyMakers: PolicyMaker[] = [
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
    // ... other policy makers
  ];

  const quickActions: QuickAction[] = [
    {
      title: "Schedule Meeting",
      description: "Book a consultation with policy makers",
      icon: <Calendar className="h-6 w-6" />,
      action: "Schedule Now",
      color: "bg-primary"
    },
    // ... other quick actions
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

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
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
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
      <QuickActionsSection actions={quickActions} />

      {/* Policy Makers Directory */}
      <PolicyMakersSection makers={policyMakers} />

      {/* Contact Form Section */}
      <ContactFormSection onSubmit={handleSubmit} />
    </div>
  );
};

// Sub-components for better organization
const QuickActionsSection: React.FC<{ actions: QuickAction[] }> = ({ actions }) => (
  <section className="py-16 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Quick Actions</h2>
        <p className="text-muted-foreground">Get started with these common requests</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {actions.map((action, index) => (
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
);

const PolicyMakersSection: React.FC<{ makers: PolicyMaker[] }> = ({ makers }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Key Policy Makers</h2>
        <p className="text-muted-foreground">Connect with the right people for your specific needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {makers.map((maker, index) => (
          <PolicyMakerCard key={index} maker={maker} />
        ))}
      </div>
    </div>
  </section>
);

const PolicyMakerCard: React.FC<{ maker: PolicyMaker }> = ({ maker }) => (
  <Card className="hover:shadow-elegant transition-all duration-300 group">
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
      <div className="space-y-2">
        <ContactInfoItem icon={<Mail className="h-4 w-4 text-primary" />} content={
          <a href={`mailto:${maker.email}`} className="hover:text-primary transition-colors">
            {maker.email}
          </a>
        } />
        {/* Other contact items... */}
      </div>
      
      <FocusAreas areas={maker.focus} />
      
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
);

const ContactInfoItem: React.FC<{ icon: React.ReactNode, content: React.ReactNode }> = ({ icon, content }) => (
  <div className="flex items-center gap-2 text-sm">
    {icon}
    {content}
  </div>
);

const FocusAreas: React.FC<{ areas: string[] }> = ({ areas }) => (
  <div>
    <h4 className="font-semibold mb-2 text-sm">Focus Areas:</h4>
    <div className="flex flex-wrap gap-2">
      {areas.map((area, index) => (
        <Badge key={index} variant="secondary" className="text-xs">
          {area}
        </Badge>
      ))}
    </div>
  </div>
);

const ContactFormSection: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({ onSubmit }) => (
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
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput label="Name" placeholder="Your full name" />
              <FormInput label="Organization" placeholder="Your organization" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput label="Email" type="email" placeholder="your.email@example.com" />
              <FormInput label="Phone" placeholder="+264 XX XXX XXXX" />
            </div>

            <FormInput label="Subject" placeholder="Brief subject of your inquiry" />

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <textarea 
                className="w-full min-h-32 px-3 py-2 border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Describe your inquiry..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

const FormInput: React.FC<{
  label: string;
  placeholder: string;
  type?: string;
}> = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label className="text-sm font-medium text-foreground mb-2 block">{label}</label>
    <Input type={type} placeholder={placeholder} required />
  </div>
);

export default ContactPolicyMakers;