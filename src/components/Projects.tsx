import { useState } from "react";
import {
  ExternalLink,
  Github,
  Clock,
  CheckCircle,
  Eye,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    // Ongoing Projects (Featured First)
    {
      id: 1,
      title: "SikyaNet",
      description:
        "Comprehensive Institute Management System for educational institutions",
      longDescription:
        "SikyaNet is a complete institute management system designed to streamline educational operations. It includes student management, course tracking, attendance systems, grade management, and administrative tools. Built with modern web technologies to ensure scalability and user-friendly experience.",
      category: "management",
      status: "ongoing",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      image: "/placeholder.svg",
      features: [
        "Student Management",
        "Course Tracking",
        "Attendance System",
        "Grade Management",
        "Admin Dashboard",
      ],
      progress: 75,
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Sambad",
      description:
        "Modern organization chat application for seamless team communication",
      longDescription:
        "Sambad is a real-time chat application designed for organizations to enhance team communication. Features include group chats, file sharing, video calls, message encryption, and administrative controls. Built with modern web technologies for optimal performance.",
      category: "communication",
      status: "ongoing",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      image: "/placeholder.svg",
      features: [
        "Real-time Messaging",
        "Group Chats",
        "File Sharing",
        "Video Calls",
        "Message Encryption",
      ],
      progress: 60,
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "SafaiiSathi",
      description: "Smart waste management system for Dhangadhi city",
      longDescription:
        "SafaiiSathi is an innovative waste management system specifically designed for Dhangadhi city. It includes waste collection scheduling, route optimization, citizen reporting, and analytics dashboard for efficient waste management operations.",
      category: "civic",
      status: "ongoing",
      technologies: ["React", "Node.js", "PostgreSQL", "Maps API", "PWA"],
      image: "/placeholder.svg",
      features: [
        "Collection Scheduling",
        "Route Optimization",
        "Citizen Portal",
        "Analytics Dashboard",
        "Mobile App",
      ],
      progress: 45,
      github: "#",
      live: "#",
    },
    // Completed Projects
    {
      id: 4,
      title: "Hamro Dokan",
      description:
        "Nepali E-Commerce platform for traditional tools and handicrafts",
      longDescription:
        "Hamro Dokan is a comprehensive e-commerce platform showcasing traditional Nepali tools, handicrafts, and market-demand products. Features include product catalog, shopping cart, payment integration, and order management.",
      category: "ecommerce",
      status: "completed",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PayPal API"],
      image: "/placeholder.svg",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
        "Admin Panel",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Amazon Clone",
      description: "Frontend clone of the popular e-commerce platform",
      longDescription:
        "A pixel-perfect frontend clone of Amazon's e-commerce platform, showcasing modern web development skills with responsive design, interactive components, and smooth user experience.",
      category: "frontend",
      status: "completed",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/placeholder.svg",
      features: [
        "Responsive Design",
        "Product Listings",
        "Search Functionality",
        "Cart Interface",
        "User Authentication UI",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Learn KMC",
      description:
        "Educational WordPress site for Kailali Multiple Campus students",
      longDescription:
        "Learn KMC is a comprehensive WordPress-based educational platform that provides study materials, course information, and resources for students at Kailali Multiple Campus.",
      category: "wordpress",
      status: "completed",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Themes", "Plugins"],
      image: "/placeholder.svg",
      features: [
        "Course Materials",
        "Student Portal",
        "Resource Library",
        "News & Updates",
        "Mobile Responsive",
      ],
      github: "#",
      live: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "ongoing",
      label: "Ongoing",
      count: projects.filter((p) => p.status === "ongoing").length,
    },
    {
      id: "completed",
      label: "Completed",
      count: projects.filter((p) => p.status === "completed").length,
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "wordpress",
      label: "WordPress",
      count: projects.filter((p) => p.category === "wordpress").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects.sort((a, b) => {
          // Sort by status first (ongoing first), then by id
          if (a.status === "ongoing" && b.status !== "ongoing") return -1;
          if (a.status !== "ongoing" && b.status === "ongoing") return 1;
          return a.id - b.id;
        })
      : activeFilter === "ongoing" || activeFilter === "completed"
      ? projects.filter((project) => project.status === activeFilter)
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Here's a selection of my work, featuring ongoing innovations and
            completed projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={`font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      project.status === "ongoing" ? "default" : "secondary"
                    }
                    className={`${
                      project.status === "ongoing"
                        ? "bg-amber-500 text-amber-50 animate-pulse-glow"
                        : "bg-green-500 text-green-50"
                    }`}
                  >
                    {project.status === "ongoing" ? (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Ongoing
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </>
                    )}
                  </Badge>
                </div>

                {/* Progress Bar for Ongoing Projects */}
                {project.status === "ongoing" && project.progress && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                    <div className="flex items-center justify-between text-white text-xs mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div
                        className="bg-primary h-1 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => openModal(project)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <Badge
                      variant={
                        selectedProject.status === "ongoing"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        selectedProject.status === "ongoing"
                          ? "bg-amber-500 text-amber-50"
                          : "bg-green-500 text-green-50"
                      }
                    >
                      {selectedProject.status === "ongoing" ? (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          Ongoing
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </>
                      )}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={closeModal}>
                    ✕
                  </Button>
                </div>

                {/* Progress Bar for Ongoing Projects */}
                {selectedProject.status === "ongoing" &&
                  selectedProject.progress && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-medium">
                          Development Progress
                        </span>
                        <span className="text-primary font-bold">
                          {selectedProject.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${selectedProject.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    About This Project
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map(
                      (feature: string, idx: number) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech: string, idx: number) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
