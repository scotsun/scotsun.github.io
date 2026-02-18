export const siteConfig = {
  name: "Scott Sun",
  title: "PhD Student at Duke University",
  description: "Portfolio website of Scott Sun",
  // #########################
  // company index
  companyName: "AutoHealth",
  companySlogan: "Empowering Health with AI/ML Solutions",
  companyDescription: "AutoHealth is transforming healthcare with AI-powered✨ solutions and MaaS (Model-as-a-Service) capabilities that improve patient care, streamline clinical workflows, and deliver personalized insights to enhance outcomes for both patients and providers.",
  companyServices: [
    {
      name: "Medical AI Foundation Models",
      description:
        "State-of-the-art foundation MaaS for EHR data and medical imaging to accelerate research and clinical workflows.",
    },
    {
      name: "AI-Driven Clinical Insights",
      description:
        "Risk prediction, triage support, and decision assistance designed for transparency and accountability.",
    },
    {
      name: "Healthcare M/SaaS Delivery",
      description:
        "Secure, accessible model and data services that integrate with provider operations and scale across systems.",
    },
  ],
  companyPeople: [
    {
      name: "Scott Sun",
      title: "Founder & Tech Lead",
      bio: "Scott Sun is the Tech lead at AutoHealth. His works on building foundation models for Electronic Health Records (EHRs) and event stream data, with a focus on incorporating domain-specific inductive biases to improve efficiency, robustness, and real-world performance. He also works on variational methods and contrastive learning for multimodal and longitudinal representations. In parallel, he builds scalable ML infrastructure and is interested in modern MLOps tools such as Dagster, dbt, and MLflow.",
    },
    {
      name: "Lorraine Lin",
      title: "Research Scientist",
      bio: "Lorraine is a Health AI and Biostatistics researcher with interests in statistical machine learning, longitudinal data analysis, and AI for biomedical research. Her current work focuses on clinical outcome prediction using longitudinal cytometry data, combining representation learning with Gaussian Process modeling to improve robustness and interpretability in small-cohort settings. She has also worked on multimodal learning and applied AI projects, including hyperspectral image modeling for smart agriculture, tensor-based methods for infrared target detection, and domain-specific large language model development. Lorraine is passionate about applying data-driven and computational approaches to real-world scientific and healthcare challenges.",
    },
    {
      name: "Rishi Kedia",
      title: "MLE",
      bio: "Rishi Kedia is a Machine Learning Engineer at AutoHealth. His work focuses on computer vision and biomedical imaging, particularly medical image segmentation and clinical ML systems to support pathologists and radiologists. He is interested in building scalable, real-world AI solutions for healthcare.",
    },
    {
      name: "Eloise Lee",
      title: "Biostatistician III",
      bio: "Eloise Lee is a Biostatistician III at AutoHealth, where they ensure AI systems built on health records and medical imaging are safe, unbiased, and clinically valid. Specializing in causal inference and risk prediction, Eloise bridges the gap between complex data and actionable clinical insights. They work alongside engineers and clinicians to deploy transparent, regulatory-grade AI that prioritizes patient safety and ethical standards.",
    },
    {
      name: "Leo Liang",
      title: "Research Scientist",
      bio: "Leo Liang is a Health AI and Biostatistics researcher. His work focuses on foundation for single-cell/multimodal omics data, with interests in representation learning for longitudinal and multimodal signals, variational methods, and contrastive learning. He also works on causal inference and reproducible ML pipelines, and is interested in scalable infrastructure for research-to-production workflows, including modern MLOps and agentic tooling.",
    },
  ],
  companySocial: {
    email: "info@autohealth.com",
    linkedin: "https://www.linkedin.com/in/minghui-scott-sun/",
    twitter: "https://x.com/elonmusk",
    github: "https://github.com/scotsun",
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Company", href: "/company" },
  ],
  // #########################

  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://www.linkedin.com/in/minghui-scott-sun/",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/scotsun",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company XYZ",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Duke University",
      degree: "{MS, PhD} in Biostatistics",
      dateRange: "2021 - Present",
      achievements: [
        "AI Health Fellow",
      ],
    },
    {
      school: "Rose-Hulman Institute of Technology",
      degree: "BS in Mathematics",
      dateRange: "2017 - 2021",
      achievements: [
        "Dean's List all semesters",
        "Departmental Award",
      ],
    },
  ],
};