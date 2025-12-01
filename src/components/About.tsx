
import { Code2, Database, Globe, Palette, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Express.js', 'PHP', 'MySQL'] },
    { name: 'Programming', icon: Code2, items: ['JavaScript', 'Java', 'C++', 'Core C'] },
    { name: 'Design', icon: Palette, items: ['Graphic Design', 'UI/UX', 'WordPress', 'CMS'] },
  ];

  const interests = [
    { name: 'Reading', icon: BookOpen, description: 'Books & Novels' },
    { name: 'Fitness', icon: Coffee, description: 'Exercise & Health' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer currently in final year of B.Sc. Computer Science at Kailali Multiple Campus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <span className="text-primary font-semibold">Jagat Joshi</span>, a creative and curious mind 
                  currently in my final year of B.Sc. in Computer Science and Information Technology at Kailali Multiple Campus.
                </p>
                <p>
                  I have a passion for web development, with experience in{' '}
                  <span className="text-primary font-semibold">HTML, CSS, JavaScript, PHP, and MySQL</span>, building 
                  responsive and dynamic web applications and <span className="text-primary font-semibold">CMS Like WordPress</span>.
                </p>
                <p>
                  Additionally, I am expanding my understanding of the{' '}
                  <span className="text-primary font-semibold">MERN stack</span> (MongoDB, Express.js, React, and Node.js) 
                  and I am actively expanding my knowledge to become a full-stack developer.
                </p>
                <p>
                  Beyond web development, I have a knack for{' '}
                  <span className="text-primary font-semibold">graphic design</span>, where I create impactful logos, 
                  pamphlets, visiting cards and many more.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">
              Technical <span className="text-primary">Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Beyond <span className="text-primary">Code</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={interest.name}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <interest.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">{interest.name}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            ))}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-2xl mb-3">🎵</div>
              <h4 className="font-semibold mb-2">Music</h4>
              <p className="text-sm text-muted-foreground">Movies & Music</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-2xl mb-3">🐕</div>
              <h4 className="font-semibold mb-2">Pet Lover</h4>
              <p className="text-sm text-muted-foreground">Spending time with dogs</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "I'm always eager to learn, grow, and explore new technologies. 
              Let's connect and build something amazing together! 🚀"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
