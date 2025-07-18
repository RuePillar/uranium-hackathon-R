import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Cpu, Zap, Shield, Globe, Microscope, Satellite, Users } from 'lucide-react';
import AISection from './AISection';
import WhatsLackingSection from './WhatsLackingSection';
import { useRouter } from 'next/router';

const TechnologyPage = () => {
  const router = useRouter();

  const generateStrategyReport = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('NAMIBIA URANIUM MINING TECHNOLOGY & AI STRATEGY REPORT', 20, 30);

    doc.setFontSize(16);
    doc.text('EXECUTIVE SUMMARY', 20, 50);

    doc.setFontSize(12);
    const summary = `This comprehensive report outlines the current state and future potential of technology and artificial intelligence applications in Namibia's uranium mining industry.`;
    doc.text(summary, 20, 65, { maxWidth: 170 });

    doc.setFontSize(16);
    doc.text('CURRENT TECHNOLOGY LANDSCAPE', 20, 90);

    const technologies = [
      '1. Mining Automation',
      '   - Autonomous haul trucks at major mines',
      '   - Automated drilling systems',
      '   - Remote-controlled mining equipment',
      '',
      '2. Processing Technology',
      '   - Advanced ore sorting systems',
      '   - Hydrometallurgical processing',
      '   - Real-time quality control systems',
      '',
      '3. Environmental Monitoring',
      '   - Continuous air quality monitoring',
      '   - Groundwater monitoring systems',
      '   - Dust suppression technologies'
    ];

    let yPos = 105;
    technologies.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 6;
    });

    doc.addPage();
    doc.setFontSize(16);
    doc.text('AI APPLICATIONS IN URANIUM MINING', 20, 30);

    const aiApps = [
      '1. Predictive Maintenance',
      '   - Equipment failure prediction',
      '   - Maintenance scheduling optimization',
      '   - Cost reduction through prevention',
      '',
      '2. Resource Optimization',
      '   - Ore grade prediction',
      '   - Mine planning optimization',
      '   - Production scheduling',
      '',
      '3. Safety Enhancement',
      '   - Real-time hazard detection',
      '   - Worker safety monitoring',
      '   - Emergency response systems'
    ];

    yPos = 45;
    aiApps.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 6;
    });

    doc.setFontSize(16);
    doc.text('STRATEGIC RECOMMENDATIONS', 20, yPos + 20);

    const recommendations = [
      '1. Investment in R&D',
      '2. Skills development programs',
      '3. Technology partnerships',
      '4. Regulatory framework development'
    ];

    yPos += 35;
    recommendations.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 8;
    });

    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 280);

    doc.save('namibia-uranium-technology-strategy-report.pdf');
  };

  const advancedTechnologies = [
    {
      title: 'Autonomous Mining Systems',
      description: 'Self-driving haul trucks and automated drilling systems increase efficiency and safety.',
      icon: <Cpu className="h-8 w-8" />,
      applications: ['Haul truck automation', 'Automated drilling', 'Remote equipment control'],
      benefits: ['24/7 operation', 'Improved safety', 'Reduced operating costs']
    },
    {
      title: 'IoT and Sensor Networks',
      description: 'Comprehensive monitoring systems for equipment, environment, and worker safety.',
      icon: <Satellite className="h-8 w-8" />,
      applications: ['Equipment monitoring', 'Environmental sensors', 'Worker tracking'],
      benefits: ['Real-time data', 'Predictive insights', 'Enhanced safety']
    },
    {
      title: 'Advanced Processing',
      description: 'State-of-the-art ore processing and beneficiation technologies.',
      icon: <Microscope className="h-8 w-8" />,
      applications: ['X-ray sorting', 'Hydrometallurgy', 'Automated quality control'],
      benefits: ['Higher recovery rates', 'Improved quality', 'Process optimization']
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of mining operations for optimization and planning.',
      icon: <Globe className="h-8 w-8" />,
      applications: ['Mine planning', 'Process simulation', 'Training systems'],
      benefits: ['Better planning', 'Risk reduction', 'Training efficiency']
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Solar and wind power systems to reduce environmental impact.',
      icon: <Zap className="h-8 w-8" />,
      applications: ['Solar power plants', 'Wind farms', 'Energy storage'],
      benefits: ['Reduced emissions', 'Cost savings', 'Sustainability']
    },
    {
      title: 'Cybersecurity Systems',
      description: 'Advanced security measures to protect mining operations and data.',
      icon: <Shield className="h-8 w-8" />,
      applications: ['Network security', 'Data protection', 'System monitoring'],
      benefits: ['Data security', 'Operational continuity', 'Compliance']
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technology and AI in Uranium Mining & Nuclear Industry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Advanced technologies, artificial intelligence applications, and areas for future development in uranium mining
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={generateStrategyReport} size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download Full Strategy Report
            </Button>
            <Button
              onClick={() => router.push('/contact-policy-makers')}
              size="lg"
              variant="outline"
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Policy Makers
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Advanced Mining Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover cutting-edge technologies revolutionizing uranium mining operations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTechnologies.map((tech, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{tech.icon}</div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AISection />
      <WhatsLackingSection />
    </div>
  );
};

export default TechnologyPage;
