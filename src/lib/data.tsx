export const projects = [
  // ==== FEATURED RESEARCH PROJECTS ====
  {
    id: "research1",
    title: "Lunar Hyperspectral Denoising using CNN with Skip Connections",
    description:
      "Designed a CNN with skip connections to denoise Chandrayaan-2 hyperspectral images. Evaluated with PSNR, SSIM, SIM, and SAM metrics. Published at IEEE SPACE 2024.",
    stack: ["Python", "CNN", "Deep Learning", "Remote Sensing"],
    image: "/images/projects/denoising_skip_image.jpg",
    link: "https://ieeexplore.ieee.org/abstract/document/10667656",
    category: "Research"
  },
  {
    id: "research2",
    title: "Plant Disease Detection using Multi-Model CNN + NLP Chatbot",
    description:
      "Integrated VGG16, ResNet50, and InceptionV3 models with an NLP chatbot to help farmers diagnose plant diseases. Published under Springer Nature.",
    stack: ["TensorFlow", "CNN", "NLP"],
    image: "/images/projects/healthyleaf.jpg",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-58604-0_15",
    category: "Research"
  },
  {
    id: "research3",
    title: "Mixed-Attention Autoencoder for Lunar Hyperspectral Denoising",
    description:
      "Built self-attention and mixed-attention autoencoders for denoising IIRS data. Compared multiple architectures and filtering techniques.",
    stack: ["Autoencoders", "Attention", "Python"],
    image: "/images/projects/denoising_autoencoder_mixed_attention.jpg",
    link: "#",
    category: "Research"
  },

  // ==== MACHINE LEARNING PROJECTS ====
  {
    id: "ml1",
    title: "StockSense — Stock Movement Prediction",
    description:
      "Predicted next-day stock price movement using engineered features (RSI, MACD, OBV, Bollinger Bands). Trained XGBoost and Random Forest models.",
    stack: ["Python", "XGBoost", "Sklearn"],
    image: "/images/projects/stocksense.png",
    link: "#",
    category: "Machine Learning"
  },
  {
    id: "ml2",
    title: "Soil Nutrient Prediction & Crop Recommendation",
    description:
      "Built ML models to predict NPK, pH, and moisture using environmental data, then recommended optimal crops.",
    stack: ["Python", "Sklearn"],
    image: "/images/projects/soil_prediction.png",
    link: "#",
    category: "Machine Learning"
  },
  // {
  //   id: "ml3",
  //   title: "FraudGuard — Credit Card Fraud Detection",
  //   description:
  //     "Developed a fraud detection model using Logistic Regression, XGBoost, Random Forest, and Isolation Forest with SMOTE and feature engineering.",
  //   stack: ["Python", "ML"],
  //   image: "/images/fraud.png",
  //   link: "#",
  //   category: "Machine Learning"
  // },
  // {
  //   id: "cv1",
  //   title: "Automatic Number Plate Recognition (ANPR)",
  //   description:
  //     "Built a YOLOv5 + EasyOCR pipeline to detect and read number plates in real time.",
  //   stack: ["YOLOv5", "Python", "OCR"],
  //   image: "/images/anpr.png",
  //   link: "#",
  //   category: "Computer Vision"
  // },

  // // ==== SOFTWARE ENGINEERING PROJECTS ====
  // {
  //   id: "web1",
  //   title: "EventSphere — Event Booking Platform (MERN)",
  //   description:
  //     "Full-stack event management system with JWT auth, search filters, admin dashboard, and Razorpay payments.",
  //   stack: ["React", "Node.js", "Express", "MongoDB"],
  //   image: "/images/eventsphere.png",
  //   link: "#",
  //   category: "Web Development"
  // },
  // {
  //   id: "web2",
  //   title: "EcoCart — E-Commerce Platform",
  //   description:
  //     "Full e-commerce platform with cart, checkout, admin panel, JWT auth, and Stripe/PayPal integration.",
  //   stack: ["React", "Node.js", "MongoDB"],
  //   image: "/images/ecocart.png",
  //   link: "#",
  //   category: "Web Development"
  // },
  // {
  //   id: "web3",
  //   title: "Library Management System (Django)",
  //   description:
  //     "Built a complete LMS with book management, authentication, payment gateway, and Django backend.",
  //   stack: ["Django", "Python"],
  //   image: "/images/library.png",
  //   link: "#",
  //   category: "Web Development"
  // },

  // // ==== CS CORE ====
  // {
  //   id: "cs1",
  //   title: "SmartScheduler — CPU Scheduling Simulator",
  //   description:
  //     "Simulator implementing FCFS, SJF, Priority Scheduling, and Round Robin with visualizations and metrics.",
  //   stack: ["C", "C++", "OS Concepts"],
  //   image: "/images/scheduler.png",
  //   link: "#",
  //   category: "CS Fundamentals"
  // },
];

// =========================
// CERTIFICATIONS
// =========================

export const certifications = [
  {
    id: "cert1",
    title: "Salesforce Marketing Cloud Email Essentials",
    issuer: "Salesforce",
    date: "2024",
    skills: ["SFMC", "Email Studio", "Automation Studio"],
    image: "/images/sfmc.png",
    link: "#",
  },
  {
    id: "cert2",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    skills: ["Neural Networks", "CNN", "Optimization"],
    image: "/images/dl.png",
    link: "#",
  },
  {
    id: "cert3",
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2022",
    skills: ["Python", "Backend"],
    image: "/images/python.png",
    link: "#",
  },
];
