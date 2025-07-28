import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Mail, Phone, Globe } from 'lucide-react';

const CV = () => {
  const experience = [
    {
      title: "Senior Unity Developer",
      company: "GameStudio Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead developer for mobile and VR gaming projects, mentoring junior developers and architecting scalable game systems.",
      achievements: [
        "Developed 3 mobile games with 1M+ downloads",
        "Reduced loading times by 40% through optimization",
        "Led team of 5 developers using Agile methodology"
      ]
    },
    {
      title: "Unity Developer",
      company: "Indie Game Collective",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed indie games and interactive experiences, focusing on innovative gameplay mechanics and performance optimization.",
      achievements: [
        "Shipped 2 PC games on Steam with positive reviews",
        "Implemented custom shader solutions for unique visual effects",
        "Collaborated with international team across 6 time zones"
      ]
    },
    {
      title: "Junior Game Developer",
      company: "StartUp Games",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Entry-level position focusing on gameplay programming, bug fixing, and learning industry best practices.",
      achievements: [
        "Contributed to 4 mobile game releases",
        "Improved code quality through peer reviews",
        "Learned Unity and C# programming fundamentals"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "California",
      period: "2015 - 2019",
      details: "Focus on Game Development and Software Engineering"
    },
    {
      degree: "Unity Certified Developer",
      school: "Unity Technologies",
      location: "Online",
      period: "2020",
      details: "Professional certification in Unity development"
    }
  ];

  const contact = {
    email: "developer@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.portfolio.dev",
    linkedin: "linkedin.com/in/unitydeveloper",
    github: "github.com/unitydeveloper"
  };

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resume / CV
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <div className="mt-6">
            <Button variant="gradient" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {job.period}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <span className="font-medium">{job.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <Badge variant="outline">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span className="font-medium">{edu.school}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-3 text-accent" />
                  <span className="text-muted-foreground">{contact.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-3 text-accent" />
                  <span className="text-muted-foreground">{contact.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-accent" />
                  <span className="text-muted-foreground">{contact.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-3 text-accent" />
                  <span className="text-muted-foreground">{contact.website}</span>
                </div>
              </CardContent>
            </Card>

            {/* Key Skills */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Unity 3D', 'C#', 'Game Design', 'Performance Optimization', 'VR/AR', 'Mobile Development', 'Multiplayer', 'Shaders'].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">English</span>
                  <Badge variant="outline">Native</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Spanish</span>
                  <Badge variant="outline">Conversational</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Japanese</span>
                  <Badge variant="outline">Basic</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;