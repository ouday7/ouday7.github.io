import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Plus, Edit, Trash2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Cyber Runner 3D',
      description: 'An endless runner game with cyberpunk aesthetics, featuring procedural level generation and dynamic lighting effects.',
      category: 'Mobile Game',
      technologies: ['Unity 3D', 'C#', 'Shader Graph', 'Mobile Optimization'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://play.google.com',
      featured: true
    },
    {
      id: '2',
      title: 'VR Space Explorer',
      description: 'Virtual reality experience allowing users to explore realistic space environments with interactive elements.',
      category: 'VR/AR',
      technologies: ['Unity 3D', 'XR Toolkit', 'C#', 'Oculus SDK'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: '3',
      title: 'Multiplayer Battle Arena',
      description: 'Real-time multiplayer combat game with strategic gameplay and competitive ranking system.',
      category: 'PC Game',
      technologies: ['Unity 3D', 'Photon Networking', 'C#', 'Mirror Networking'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      liveUrl: 'https://steam.com',
      featured: false
    },
    {
      id: '4',
      title: 'AI Behavior System',
      description: 'Modular AI system with behavior trees for creating intelligent NPCs with complex decision-making.',
      category: 'Tool/Framework',
      technologies: ['Unity 3D', 'C#', 'Behavior Trees', 'State Machines'],
      image: '/placeholder.svg',
      githubUrl: 'https://github.com',
      featured: false
    }
  ]);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Add your project description here...',
      category: 'Mobile Game',
      technologies: ['Unity 3D', 'C#'],
      image: '/placeholder.svg',
      featured: false
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my latest work in game development, VR experiences, and development tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
          <Button variant="glow" onClick={addProject}>
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/80">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 bg-background/80 hover:bg-destructive/80"
                      onClick={() => deleteProject(project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;