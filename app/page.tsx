"use client";

import { useState, useEffect } from "react";
import { profile } from "profile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Database,
  Calendar,
  MapPin,
  Send,
  ChevronDown,
} from "lucide-react";
import { Resume } from "@/components/resume";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [showResume, setShowResume] = useState(false);

  const skills = [
    { name: "Figma", level: 90, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "Framer", level: 80, icon: Code },
    { name: "Canva", level: 85, icon: Code },
    { name: "HTML", level: 75, icon: Code },
    { name: "CSS", level: 80, icon: Code },
    { name: "React", level: 70, icon: Code },
    { name: "UI Design", level: 90, icon: Database },
    { name: "UX Development", level: 90, icon: Database },
  ];

  const projects = [
    // {
    //   id: 1,
    //   title: "Bank Management System (Frontend Design)",
    //   description:
    //     "Complete banking solution with user and admin modules for account management and transactions",
    //   image: "/bank management.jpg?height=300&width=400",
    //   tech: ["HTML", "JavaScript", "Postgres", "Vercel"],
    //   github: "#",
    //   live: "#",
    //   details:
    //     "Bank Management System helps users perform all banking related activities such as creating accounts and performing debit/credit transactions. Features two modules: user module for account statements and balance checking, and admin module for reviewing and approving new account requests.",
    // },
    {
      id: 2,
      title: "Product Image Designing (Graphics Design)",
      description:
        "A project focused on creating visually appealing product images for ATAI Chatbot.",
      image: "/chatbot1.jpg?height=300&width=400",
      tech: ["Figma", "Canva"],
      github: "#",
      live: "https://www.figma.com/design/LzhlwXv9U3yWFFxiLsSxyE/Ticket-Handling-Product-Image--Copy-?node-id=2-2&t=HaOkzKksRUxE1SfH-1",
      details:
        "Created visually appealing product images for ATAI Chatbot using Figma and Canva. The project involved designing images that effectively communicate the product's features and benefits, enhancing its marketability and user engagement.",
    },
    {
      id: 3,
      title: "Laundry Application (UIUX) (Mobile)",
      description:
        "Designed a interactive and user-friendly Laundry Application, streamlining laundry services for users.",
      image: "/Laundry Service.png?height=300&width=400",
      tech: ["Figma", "Canva"],
      github: "#",
      live: "https://www.figma.com/proto/XWF7esamVswCklqiWTMgs7/Laundry-Application?t=BBIooON0bCdZrDH6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=24-764&starting-point-node-id=24%3A850&show-proto-sidebar=1",
      details:
        "A modern laundry application designed with user experience in mind, featuring intuitive navigation, to reduce user effort and enhance overall satisfaction. This application is designed for 3 levels of users: Laundry Owners, Customers and Delivery Personnel.",
    },
    {
      id: 4,
      title: "Laundry Application Admin Portal (UIUX) (Web)",
      description:
        "Designed a interactive and user-friendly Laundry Application, for admin users to manage and monitor all the activities in the system.",
      image: "/Laundry Services Admin Portal.png?height=450&width=400",
      tech: ["Figma", "Canva"],
      github: "#",
      live: "https://www.figma.com/proto/k8mteNXRRxp4e1Kp8L84vW/Laundry_Web?node-id=136-1805&t=BBIooON0bCdZrDH6-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=217%3A871",
      details:
        "A modern laundry application admin portal designed to efficiently manage and monitor all activities within the laundry service system. The portal provides comprehensive tools for administrators to oversee operations, track orders, and manage customer and delivery personnel interactions.",
    },
    {
      id: 5,
      title: "Laundry Application Landing Website (UIUX) (Web)",
      description:
        "A landing website designed to promote the Laundry Application and attract potential users.",
      image: "/Laundry Services Website.png?height=450&width=400",
      tech: ["Figma", "Canva"],
      github: "#",
      live: "https://www.figma.com/proto/k8mteNXRRxp4e1Kp8L84vW/Laundry_Web?node-id=276-1001&t=BBIooON0bCdZrDH6-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=276%3A1001",
      details:
        "A visually appealing landing website designed to effectively promote the Laundry Application. The website aims to attract potential users by showcasing the application's features, benefits, and user testimonials, ultimately driving user engagement and conversions.",
    },
     {
      id: 6,
      title: "SBI YONO Redesign: QR Onboarding → Banking Super App (iOS)",
      description:
        "Complete redesign of  banking app (12Cr+ users) with ATM QR onboarding, UPI payments, card limits, insights, and wealth management.",
      image: "/sbiyono.png?height=450&width=400",
      tech: ["Figma", "iOS Design System", "RBI Compliance Research"],
      github: "#",
      live: "https://www.figma.com/proto/VyA7Rnh4Dxn3kTIaSHHLC3/Untitled?node-id=554-633&t=Pz685OaTIQRKQIoZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=565%3A651&show-proto-sidebar=1",
      details:
        "50‑screen fintech masterpiece fixing onboarding dropoff (QR scan → MFIN), UPI payments, card controls, spend analytics, and SIP investing. Enterprise UX with regulatory compliance. Key flows: ATM QR auto‑fetches accounts → Instant dashboard → Banking + Wealth suite.",
    }
  ];

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "DataStack Technology",
      period: "1 Year",
      location: "Wakad, Pune",
      description:
        "- Developed enterprise-grade web applications using C#, .NET Framework, and PostgreSQL"+
"- Built a comprehensive task management system to streamline daily operations and worklog tracking"+
"- Optimized database queries and backend logic, improving system performance by 30%"+
"- Reduced manual tracking efforts by 50% through automation of workflows and reporting modules"+
"- Collaborated with cross-functional teams to deliver scalable and maintainable solutions",
    },
    {
      title: "Graphics Designer",
      company: "AtJoin Solutions",
      period: "6 Months",
      location: "Aundh, Pune",
      description:
        "Designed multiple products and marketing graphics for client websites, with hands-on experience in Figma and Canva.",
    },
      {
      title: "UI/UX Design Intern",
      company: " Cognitexx Pvt. Ltd",
      period: "1 Year",
      location: "Aundh, Pune",
      description:
        "Designed end-to-end UI for multiple client products spanning mobile apps and responsive web platforms, Conducted user research and usability testing to validate design decisions before handoff",
    },
    {
      title: "UI/UX Developer",
      company: "Freelance",
      period: "Ongoing",
      location: "Remote (Pune)",
      description:
        "Working on various UI/UX projects, focusing on user research, wireframing, and prototyping. Currently collaborating with multiple clients to create user-centered designs that enhance usability and engagement.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
        />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Borse Vaishnavi
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Creative Graphic Designer & UI/UX Developer crafting visually
              compelling and user-centered digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate developer with about 1 year of experience creating
              innovative web and mobile solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <img
                  src="/profile.png?height=400&width=400"
                  alt="Profile"
                  className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    My Journey
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Started as a Computer Science Engineering diploma student and
                  evolved into a frontend developer with strong expertise in
                  JavaScript and React. Currently working as a freelancer,
                  serving multiple industry-level clients as a graphic designer,
                  UI/UX developer, and frontend developer. Passionate about
                  building responsive, user-friendly web applications and
                  crafting intuitive digital experiences.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    What I Do
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in designing intuitive web and mobile
                  applications using modern frontend technologies such as React
                  and JavaScript, complemented by mastery in UI/UX design tools
                  like Figma and Canva. I craft stunning visuals that captivate
                  users—delivering efficient solutions that connect brands with
                  their creative goals.{" "}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Figma",
                  "JavaScript",
                  "Framer",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Canva",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-black/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <skill.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {skill.level}% Proficiency
                        </p>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-black/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                      </Button> */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-cyan-500/50 text-cyan-400 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full border-cyan-500 bg-transparent text-cyan-400 hover:bg-cyan-500/100"
                          // className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-black border-gray-800 text-white max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-gray-300 text-base">
                            {project.details}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-66 object-cover rounded-lg"
                          />
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-cyan-500/50 text-cyan-400"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          {/* <div className="flex space-x-4">
                            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                            <Button
                              variant="outline"
                              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </div> */}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and key milestones
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black" />

                <Card className="bg-black/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to work together? Let's create something amazing!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">borsevr13@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+91 92707 88959</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                  >
                    <Github className="w-5 h-5" />
                  </Button> */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/100 bg-transparent"
                  >
                    <a
                      href="https://www.linkedin.com/in/borse-vaishnavi-1b0a5b1b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />{" "}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/100 bg-transparent"
                  >
                    <a
                      href="mailto:borsevr13@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="w-5 h-5" />{" "}
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <Dialog open={showResume} onOpenChange={setShowResume}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300">
                      <a
                        href="https://drive.google.com/file/d/1pO7yHPfGEp7YLH9IMN6qK5eo2xdtUUfU/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-5 h-5 mr-2" />
                      </a>
                      View Resume
                    </Button>
                  </DialogTrigger>
                  {/* <DialogContent className="bg-white text-black max-w-5xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gray-900">Resume - Borse Vaishnavi</DialogTitle>
                      <div className="flex gap-2 mt-4">
                        <Button onClick={() => window.print()} className="bg-cyan-600 hover:bg-cyan-700 text-white">
                          <Download className="w-4 h-4 mr-2" />
                          Print/Download PDF
                        </Button>
                      </div>
                    </DialogHeader>
                    <Resume />
                  </DialogContent> */}
                </Dialog>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <Input
                          className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500 min-h-[120px]"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vaishnavi Borse. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
