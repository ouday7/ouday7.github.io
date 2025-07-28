import { Card, CardContent } from '@/components/ui/card';
import { Code, Gamepad2, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable C# code following best practices and design patterns."
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Creating engaging gameplay mechanics and immersive player experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing games for smooth performance across different platforms and devices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with artists, designers, and other developers in team environments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Unity 3D developer with 5+ years of experience creating immersive 
              gaming experiences. My journey in game development started with a fascination for 
              interactive storytelling and has evolved into a deep expertise in C# programming, 
              game architecture, and performance optimization.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new game mechanics, contributing to 
              open-source projects, or experimenting with the latest Unity features. I believe 
              in the power of games to create meaningful connections and unforgettable experiences.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">What I Bring</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Strong foundation in object-oriented programming and design patterns
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Experience with multiplayer networking and real-time systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Proficiency in performance profiling and optimization techniques
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Passion for mentoring junior developers and code reviews
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;