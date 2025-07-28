import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Development",
      skills: [
        { name: "Unity 3D", level: 95 },
        { name: "C# Programming", level: 90 },
        { name: "Game Architecture", level: 85 },
        { name: "Performance Optimization", level: 80 },
        { name: "Shader Programming", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 70 },
        { name: "C++", level: 65 },
        { name: "SQL", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Visual Studio", level: 90 },
        { name: "Blender", level: 60 },
        { name: "Photon Networking", level: 75 },
        { name: "Firebase", level: 70 }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Mobile Game Development", level: 85 },
        { name: "VR/AR Development", level: 70 },
        { name: "Multiplayer Systems", level: 80 },
        { name: "AI & Behavior Trees", level: 75 },
        { name: "Physics Programming", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Unity Certified Developer",
    "Microsoft C# Certification",
    "Agile Development",
    "Game Design Fundamentals"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;