"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { MagicText } from "@/components/ui/magic-text";
import { FlipLinksSection } from "@/components/ui/flip-links";
import { Tabs } from "@/components/ui/vercel-tabs";
import { ArticleCard } from "@/components/ui/blog-post-card";
import { useTheme } from "next-themes";
import { Code2, Link2, Mail, ExternalLink, Moon, Sun } from "lucide-react";

/* ─── Reusable fade-in-up on scroll ─── */
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const NAV_TABS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [navVisible, setNavVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      headline: "Autonomous Rover System (ROS 2)",
      excerpt: "Built an autonomous rover integrating LiDAR, IMU, GPS, and camera sensors for real-time navigation.",
      fullDescription: "Built an autonomous rover integrating LiDAR, IMU, GPS, and camera sensors for real-time navigation. Implements SLAM, obstacle avoidance, and goal-based traversal.",
      tools: ["ROS 2", "C++", "Python", "Nav2", "OpenCV", "Gazebo"],
      cover: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80",
      tag: "Robotics",
      githubUrl: "https://github.com/VighneshReddyy"
    },
    {
      headline: "Real-Time Object Detection (YOLO)",
      excerpt: "Developed a real-time object detection pipeline using YOLO models for robotics perception tasks like cone detection.",
      fullDescription: "Developed a real-time object detection pipeline using YOLO models for robotics perception tasks like cone detection and obstacle identification.",
      tools: ["Python", "YOLOv8/YOLOv11", "OpenCV", "PyTorch"],
      cover: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
      tag: "Computer Vision",
      githubUrl: "https://github.com/VighneshReddyy"
    },
    {
      headline: "MarketHub (Full-Stack Marketplace)",
      excerpt: "Developed a full-stack marketplace platform with listings, purchases, reviews, and admin panel.",
      fullDescription: "Developed a full-stack marketplace platform with listings, purchases, reviews, and admin panel.",
      tools: ["Next.js", "React", "Tailwind CSS", "MySQL/TiDB", "Node.js"],
      cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tag: "Web Development",
      githubUrl: "https://github.com/VighneshReddyy/MarketHub.git"
    },
    {
      headline: "MNIST Neural Network from Scratch",
      excerpt: "Implemented a fully connected neural network from scratch using NumPy with forward/backpropagation.",
      fullDescription: "Implemented a fully connected neural network from scratch using NumPy with forward/backpropagation and training pipeline.",
      tools: ["Python", "NumPy", "Pandas"],
      cover: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      tag: "Deep Learning",
      githubUrl: "https://github.com/VighneshReddyy/mnist-nn-from-scratch.git"
    },
    {
      headline: "Distributed Chat System (ROS 2)",
      excerpt: "Implemented a distributed chat application using ROS 2 pub-sub architecture for real-time communication across multiple nodes.",
      fullDescription: "Implemented a distributed chat application using ROS 2 pub-sub architecture for real-time communication across multiple nodes.",
      tools: ["ROS 2", "C++", "Python", "rclcpp", "rclpy"],
      cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      tag: "Networking",
      githubUrl: "https://github.com/VighneshReddyy"
    },
    {
      headline: "ROS 2 IMU Interface & Calibration",
      excerpt: "Designed a pipeline for IMU data acquisition, calibration, and orientation processing supporting hardware streams.",
      fullDescription: "Designed a pipeline for IMU data acquisition, calibration, and orientation processing supporting hardware and external streams.",
      tools: ["ROS 2", "C++", "Python", "BNO055", "sensor_msgs"],
      cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      tag: "Hardware",
      githubUrl: "https://github.com/VighneshReddyy/imu-interface.git"
    },
    {
      headline: "ROS 2 Panorama & Sensor Dashboard",
      excerpt: "Created a panorama stitching system with IMU-based compass overlay and GUI for real-time sensor visualization.",
      fullDescription: "Created a panorama stitching system with IMU-based compass overlay and GUI for real-time sensor visualization.",
      tools: ["ROS 2", "C++", "Python", "OpenCV", "Tkinter"],
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Robotics",
      githubUrl: "https://github.com/VighneshReddyy/ros2-gui.git"
    },
    {
      headline: "RADO GPS Mapping System",
      excerpt: "ROS 2-based reconnaissance and mapping tool with real-time GPS visualization, waypoint tagging, and image capture.",
      fullDescription: "ROS 2-based reconnaissance and mapping tool with real-time GPS visualization, waypoint tagging, and image capture. Supports both real hardware and simulated environments for mapping workflows.",
      tools: ["ROS 2", "Python", "OpenCV", "pygame", "matplotlib", "NumPy"],
      cover: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
      tag: "Robotics",
      githubUrl: "https://github.com/VighneshReddyy/rado-gps-mapping.git"
    },
    {
      headline: "RTK GPS Precision Localization",
      excerpt: "Implemented a full RTK-GPS pipeline enabling centimeter-level positioning using RTCM corrections.",
      fullDescription: "Implemented a full RTK-GPS pipeline enabling centimeter-level positioning using RTCM corrections. Includes base station streaming and rover-side correction with real-time ROS 2 publishing.",
      tools: ["ROS 2", "Python", "pyserial", "pyubx2", "TCP sockets"],
      cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tag: "Hardware",
      githubUrl: "https://github.com/VighneshReddyy/gps-rtk.git"
    },
    {
      headline: "CIFAR-10 CNN with Augmentation",
      excerpt: "Built a deep CNN for CIFAR-10 classification with augmentation and regularization for improved generalization.",
      fullDescription: "Built a deep CNN for CIFAR-10 classification with augmentation and regularization for improved generalization.",
      tools: ["Python", "TensorFlow", "Keras", "NumPy"],
      cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      tag: "Deep Learning",
      githubUrl: "https://github.com/VighneshReddyy/cifar10-cnn.git"
    },
    {
      headline: "OpenCV Panorama & Calibration Suite",
      excerpt: "Implemented feature detection, image stitching, and camera calibration pipelines including fisheye correction.",
      fullDescription: "Implemented feature detection, image stitching, and camera calibration pipelines including fisheye correction.",
      tools: ["Python", "OpenCV", "NumPy"],
      cover: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&q=80",
      tag: "Computer Vision",
      githubUrl: "https://github.com/VighneshReddyy/opencv-panorama-sift.git"
    },
    {
      headline: "OpenCV Object Detection & Tracking",
      excerpt: "Built classical CV pipelines for object detection and tracking using color and shape-based filtering.",
      fullDescription: "Built classical CV pipelines for object detection and tracking using color and shape-based filtering.",
      tools: ["Python", "OpenCV", "NumPy"],
      cover: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      tag: "Computer Vision",
      githubUrl: "https://github.com/VighneshReddyy/opencv-object-tracking.git"
    },
    {
      headline: "ArUco Pose Estimation System",
      excerpt: "Developed marker-based pose and distance estimation system for robotics navigation tasks.",
      fullDescription: "Developed marker-based pose and distance estimation system for robotics navigation tasks.",
      tools: ["Python", "OpenCV", "NumPy"],
      cover: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
      tag: "Computer Vision",
      githubUrl: "https://github.com/VighneshReddyy/opencv-aruco-pose.git"
    },
    {
      headline: "Logistic Regression (From Scratch + Sklearn)",
      excerpt: "Implemented logistic regression for binary and multiclass classification using NumPy and Scikit-learn.",
      fullDescription: "Implemented logistic regression for binary and multiclass classification using NumPy and Scikit-learn with evaluation pipelines.",
      tools: ["Python", "NumPy", "Scikit-learn", "Pandas", "Matplotlib"],
      cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tag: "Machine Learning",
      githubUrl: "https://github.com/VighneshReddyy/logistic-regression.git"
    },
    {
      headline: "Linear Regression on Real Datasets",
      excerpt: "Developed regression models for housing price and wine quality prediction with preprocessing and feature engineering.",
      fullDescription: "Developed regression models for housing price and wine quality prediction with preprocessing and feature engineering.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
      cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      tag: "Machine Learning",
      githubUrl: "https://github.com/VighneshReddyy/linear-regression.git"
    },
    {
      headline: "Habit Forest (Focus & Habit Tracker)",
      excerpt: "Built a productivity app combining focus sessions and habit tracking with visual analytics and streaks.",
      fullDescription: "Built a productivity app combining focus sessions and habit tracking with visual analytics and streaks.",
      tools: ["React", "Tailwind CSS", "Zustand", "Framer Motion", "Recharts"],
      cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tag: "Web Development",
      githubUrl: "https://github.com/VighneshReddyy/habit-tracker.git"
    },
    {
      headline: "C++ Programming Coursework",
      excerpt: "Structured collection of C++ exercises covering fundamental to advanced programming concepts.",
      fullDescription: "Structured collection of C++ exercises covering fundamental to advanced programming concepts.",
      tools: ["C++", "STL"],
      cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
      tag: "Programming",
      githubUrl: "https://github.com/VighneshReddyy/Codio-Cpp-Courses.git"
    }
  ];

  const skills: Record<string, string[]> = {
    Languages: ["C", "C++", "Java", "Python", "SQL"],
    Libraries: ["OpenCV", "TensorRT", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    "Robotics / ROS2": ["ROS2", "Nav2", "SLAM", "Autonomous Navigation", "Path Planning", "Obstacle Avoidance", "Sensor Fusion", "MoveIt2"],
    "Tools & Platforms": ["Linux (Ubuntu)", "Git", "Docker", "Gazebo", "RViz", "VS Code"],
  };

  const experience = [
    {
      role: "AI & Automation Member",
      org: "Mars Rover Manipal",
      period: "Oct 2025 - Present",
      location: "Manipal, India",
      points: [
        "Developing autonomous navigation and perception systems using ROS2, Nav2, and multi-sensor fusion (LiDAR, camera, IMU, GPS).",
        "Building computer vision pipelines with OpenCV and YOLO models for detecting navigation cues and mission objects.",
        "Automating a 6-DOF robotic arm using MoveIt2 for motion planning and autonomous manipulation.",
        "Simulation, testing, and validation in Gazebo and RViz before deployment on the physical rover.",
      ],
      accent: "#3b82f6",
    },
    {
      role: "Technical & PAV ManComm",
      org: "The MIT Editorial Board",
      period: "Feb 2026 - Present",
      location: "Udupi, Karnataka, India",
      points: [
        "Assisting with frontend and backend development of the MIT Ed Board website.",
        "Part of the PAV team, handling photography and videography for events."
      ],
      accent: "#e11d48",
    },
    {
      role: "Research Intern",
      org: "Manipal Institute of Technology",
      period: "Jan 2026 - Present",
      location: "Manipal, India",
      points: [
        "Conducting research on deepfake detection using deep neural networks for cross-dataset generalization.",
        "Exploring feature-level anomaly detection and temporal inconsistency analysis under faculty supervision.",
        "Contributing to experimentation and research writing.",
      ],
      accent: "#8b5cf6",
    },
    {
      role: "Managing Committee Member",
      org: "IE-E&C, The Manipal Chapter",
      period: "Jul 2025 - Present",
      location: "Manipal, India",
      points: [
        "Conducted technical interviews for junior applicants evaluating programming and ML fundamentals.",
        "Delivered introductory workshops on machine learning topics.",
        "Coordinated logistics for technical sessions and developer-focused events.",
      ],
      accent: "#10b981",
    },
    {
      role: "Working Committee",
      org: "Finova, Manipal",
      period: "Aug 2024 - Aug 2025",
      location: "Manipal, India",
      points: [
        "Explored foundational algorithms, quantitative trading concepts, and cybersecurity fundamentals through technical workshops.",
      ],
      accent: "#f59e0b",
    },
  ];

  return (
    <main className="relative z-[1] min-h-screen text-foreground">
      <DottedSurface />

      {/* ─── STICKY NAV ─── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navVisible
            ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-mono text-sm font-semibold tracking-widest text-foreground/80 hover:text-foreground transition-colors uppercase"
          >
            VRS
          </button>
          <Tabs tabs={NAV_TABS} onTabChange={scrollTo} className="hidden md:block" />
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />) : <Sun className="opacity-0" size={16} />}
            </button>
            <button
               onClick={() => scrollTo("contact")}
               className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
             >
               <Mail size={14} /> Hire Me
             </button>
          </div>
        </div>
      </motion.header>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 pt-20"
      >
        {/* Dark radial overlay so text pops on dark mode */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(ellipse_70%_60%_at_40%_50%,rgba(0,0,0,0.45)_0%,transparent_100%)]"
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 md:pl-16 md:-mt-12">
          {/* ── Left: Text ── */}
          <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start md:ml-8 lg:ml-16">
            <h1 className="text-5xl sm:text-7xl md:text-7xl font-black tracking-tight leading-none mb-5 flex flex-col md:items-start items-center">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                Vighnesh
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/85 to-foreground/55 mt-1"
              >
                Reddy Satti
              </motion.span>
            </h1>

            <p className="text-sm font-mono text-muted-foreground/80 tracking-[0.18em] uppercase mb-5 flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
              {["AI", "Robotics", "Deep Learning"].map((item, index) => (
                <span key={item} className="flex items-center gap-2 md:gap-4">
                  {index > 0 && <span className="opacity-40">·</span>}
                  <motion.span
                    animate={{
                      textShadow: [
                        "0px 0px 0px rgba(255,255,255,0)",
                        "0px 0px 20px rgba(255,255,255,1)",
                        "0px 0px 0px rgba(255,255,255,0)",
                      ],
                      opacity: [1, 1, 1],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut",
                    }}
                    className="font-bold relative z-10"
                  >
                    {item}
                  </motion.span>
                </span>
              ))}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-base sm:text-lg text-muted-foreground/90 max-w-lg mb-10 leading-relaxed md:mx-0 mx-auto"
            >
              Building autonomous systems that see, think, and navigate, from
              multi-sensor fusion to real-time deep learning pipelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-85 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
              >
                View Projects <ExternalLink size={14} />
              </button>
              <a
                href="https://github.com/VighneshReddyy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-border/70 bg-background/30 backdrop-blur-sm hover:bg-background/60 active:scale-95 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Code2 size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/vighnesh-reddy-satti-402172321"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-border/70 bg-background/30 backdrop-blur-sm hover:bg-background/60 active:scale-95 transition-all flex items-center gap-2 text-sm font-medium"
              >
                <Link2 size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center md:justify-center flex-1"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotateZ: [0, 1.5, -1.5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative group cursor-pointer"
            >
              {/* Animated glowing border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-foreground/50 to-foreground/10 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-b from-foreground/40 to-transparent" />
              
              <div className="relative size-40 sm:size-48 md:size-56 rounded-full overflow-hidden border border-background shadow-2xl bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.jpg"
                  alt="Vighnesh Reddy Satti"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = "none";
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1c1c1c,#2a2a2a);font-size:4rem;font-weight:900;color:#f8f7f4;letter-spacing:-2px">VR</div>`;
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/40"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent origin-top"
          />
        </motion.div>

        {/* Gradient fade into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative py-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn><SectionLabel>About</SectionLabel></FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <MagicText text="Autonomous systems, computer vision, and deep learning, I build machines that see, think, and navigate." />
            </FadeIn>
            <FadeIn delay={0.25} className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a second-year B.Tech Information Technology student at{" "}
                <strong className="text-foreground">Manipal Institute of Technology</strong>, deeply
                passionate about the intersection of robotics and AI.
              </p>
              <p>
                At <strong className="text-foreground">Mars Rover Manipal</strong>, I build real autonomous
                systems, integrating multi-sensor fusion stacks, computer vision pipelines, and robotic
                arm manipulation for international competitions. We placed{" "}
                <strong className="text-foreground">7th globally</strong> at the International Rover
                Challenge.
              </p>
              <p>
                I&apos;m also conducting research on{" "}
                <strong className="text-foreground">deepfake detection</strong> using deep neural
                networks at MIT Manipal, exploring temporal inconsistency analysis and cross-dataset
                generalization.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="mailto:vighneshreddysatti@gmail.com"
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
                >
                  <Mail size={14} /> vighneshreddysatti@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="relative py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn><SectionLabel>Experience</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold mb-16">Where I&apos;ve been building</h2></FadeIn>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12 pl-12">
              {experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative group">
                    <div
                      className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full border-2 border-background transition-transform group-hover:scale-125"
                      style={{ background: exp.accent }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.01, x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-foreground/20 transition-colors duration-300"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-muted-foreground text-sm">{exp.org} · {exp.location}</p>
                        </div>
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full border"
                          style={{ borderColor: exp.accent + "44", color: exp.accent }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-foreground/40 mt-1 shrink-0">›</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="relative py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn><SectionLabel>Projects</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold mb-16">Things I&apos;ve built</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <ArticleCard {...project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="relative py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn><SectionLabel>Skills</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold mb-16">My technical toolkit</h2></FadeIn>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], ci) => (
              <FadeIn key={category} delay={ci * 0.1}>
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.04 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 rounded-full text-sm border border-border bg-card/60 text-foreground/80 hover:border-foreground/40 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="relative py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn><SectionLabel>Education</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold mb-16">Academic journey</h2></FadeIn>
          <div className="space-y-4">
            {[
              { school: "Manipal Institute of Technology", degree: "B.Tech in Information Technology", grade: "pursuing" as const, period: "Aug 2024 - May 2028", location: "Manipal, India" },
              { school: "FIITJEE International School", degree: "Class XII", grade: "94%", period: "Jun 2022 - May 2024", location: "Vijayawada, India" },
              { school: "Aditya Educational Institutions", degree: "Class X", grade: "95%", period: "May 2019 - Apr 2021", location: "Kakinada, India" },
            ].map((edu, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-card/60 border border-border hover:border-foreground/20 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree} · {edu.location}</p>
                  </div>
                  <div className="text-right">
                    {edu.grade === "pursuing" ? (
                      <span className="flex items-center gap-2 text-green-500 font-medium text-sm">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse" /> Pursuing
                      </span>
                    ) : (
                      <span className="font-semibold">{edu.grade}</span>
                    )}
                    <span className="text-xs text-muted-foreground font-mono block mt-1">{edu.period}</span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-24 space-y-20">
            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">🏆 Awards</h3>
              <ul className="space-y-4">
                {[
                  "7th Place - International Rover Challenge (IRC) among 35 international teams",
                  "4th Place - International Rover Design Challenge (IRDC)",
                ].map((award, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-2xl bg-card/60 border border-border hover:border-foreground/20 transition-colors text-muted-foreground w-full">
                    <span className="text-foreground font-mono font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {award}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">📜 Certifications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "DeepLearning.AI: Neural Networks and Deep Learning", url: "https://www.coursera.org/account/accomplishments/verify/Q8S1HHLZXCQR" },
                  { title: "DeepLearning.AI: Convolutional Neural Networks", url: "https://www.coursera.org/account/accomplishments/verify/RU2D0A88HDOK" },
                  { title: "DeepLearning.AI: Sequence Models", url: "https://www.coursera.org/account/accomplishments/verify/A63ESN9IMLSJ" },
                  { title: "DeepLearning.AI: Deep Learning Specialization", url: "https://www.coursera.org/account/accomplishments/verify/JH0PP8AN6N7C" },
                  { title: "Codio: C++ Programming Object-Oriented", url: "https://www.coursera.org/account/accomplishments/verify/HTKCDGQQ7T7Q" },
                  { title: "Codio: C++ Programming STL", url: "https://www.coursera.org/account/accomplishments/verify/IIVWWLSN0Z3G" },
                  { title: "Codio: C++ Programming Advanced Concepts", url: "https://www.coursera.org/account/accomplishments/verify/OEB1KYU09BZR" },
                ].map((cert, i) => (
                  <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 p-5 rounded-2xl bg-card/60 border border-border hover:border-foreground/30 hover:bg-muted/30 transition-colors w-full group">
                    <div className="flex justify-between items-start">
                      <span className="text-foreground/40 font-mono text-sm shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-foreground transition-colors"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{cert.title}</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative py-0 bg-background">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-6 text-center">
          <FadeIn><SectionLabel>Contact</SectionLabel></FadeIn>
        </div>
        <FlipLinksSection />
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted-foreground bg-background">
        © {new Date().getFullYear()} Vighnesh Reddy Satti · Built with Next.js, Tailwind CSS & Three.js
      </footer>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.3em] mb-4">
      {children}
    </p>
  );
}
