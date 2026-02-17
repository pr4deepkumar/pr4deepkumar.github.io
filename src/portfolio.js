const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'PK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pradeep Kumar Vijayakumaran',
  role: "Grad Student at ",
  description: "I'm a dedicated technology professional with 2+ years of industry experience as a Senior Systems Engineer and currently pursuing my Master's Degree in Computer Science at Northeastern University, Boston, USA. My experience spans data engineering, analytics, integration, and migration, with proficiency in software development and hands-on exposure to machine learning and artificial intelligence for building scalable, data-driven solutions. I'm driven by a strong curiosity to leverage technology and data to optimize complex systems, and I have a proven track record of collaborating with cross-functional teams across India, Japan, and the USA to solve challenging problems and deliver innovative, impactful outcomes.",
  //resume: 'https://drive.google.com/file/d/1d9m7bX55oJwQNtHRQ-Ke8Lgul3yAN5Gt/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pradeep-kumar-v/',
    github: 'https://github.com/pr4deepkumar',
    leetcode: 'https://leetcode.com/pr4deepkumar'
  },
}

const workExperience = [
    {
    name: 'Digital Analytics Intern',
    company: "Fashion Index",
    work_years: 'Jan. 2026 - Present',
    workExperiencePoints: [
      'Architected a scalable visual search infrastructure using Python, DINOv2 and ChromaDB, utilizing high-dimensional texture embeddings and hybrid scoring to improve retrieval accuracy',
      'Developing automated ETL pipelines by reverse-engineering Shopify APIs to aggregate and normalize product data from partner vendors, continuously expanding platform inventory and discoverability',
      'Developing scalable React.js web applications to visualize complex product and search metadata with real-time interactivity, enabling real-time text search and intuitive product visualization through a clean, responsive user interface'],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Senior Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2021 - June 2022',
    workExperiencePoints: [
      "Achieved 99.9% uptime for L’Oréal APAC’s mission-critical analytics systems by implementing proactive monitoring, automated alerting, and rapid incident response workflows, reducing service disruptions and SLA violations",
      'Designed, built and optimized scalable ingestion pipelines using Scala, HiveQL, and Control-M to integrate daily data feeds from major Japanese retailers improving data reliability and accelerating enterprise analytics processing',
      'Supported strategic migration of enterprise data infrastructure from on-premise systems to GCP and reduced MTTR by 50% by developing real-time alerting APIs and automation workflows using Git-based CI/CD practice'
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2020 - Sept. 2021',

    workExperiencePoints: [
      'Executed a flawless platform modernization for Nike Inc. migrating from SAP AFS to SAP S/4HANA with zero downtime and no data loss ensuring uninterrupted business operations and seamless system transition',
      'Built fault-tolerant ETL pipelines and distributed data workflows using Python, Spark, Airflow, and AWS improving pipeline scalability, reliability, and downstream data availability for analytics use cases',
      'Reduced cloud operational costs by 40% and improved system performance by optimizing AWS infrastructure utilization automating workflows with Airflow DAGs and implementing real-time monitoring and alerting'
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Data Analyst Intern',
    company: "Infosys Ltd.",
    work_years: 'Jan. 2020 - Mar. 2020',
    workExperiencePoints: [
      'Developed end-to-end Analytics and ML applications using Python (NumPy, Pandas, scikit-learn) and SQL for data modeling, predictive analysis, and visualization earning ‘Top Performer’ recognition out of 234 cohorts'
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
  name: 'Natural Language Database Interface (NLDI) Engine',
  description:
    'Built a deep learning model to translate natural language questions into executable SQL queries. Achieved 43.9% execution accuracy on the cross-domain Spider dataset using 5.6k training and 700 validation pairs. Engineered a PyTorch-based pipeline for schema serialization, model training, and real-time SQLite query evaluation.',
  stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'PEFT', 'Spider Dataset'],
  sourceCode: 'https://colab.research.google.com/drive/1-68rIhavcMDalklLkGdOTn7KnKFvvzKi?usp=sharing',
  // livePreview: 'https://github.com',
  },
  {
  name: 'GitHub Analytics Dashboard',
  description:
  'Built a serverless GitHub analytics dashboard that transforms repository, pull request, issue, and profile data into an interactive HTML/JavaScript interface. Designed an end-to-end infrastructure-as-code pipeline using Terraform/OpenTofu with AWS S3 for static hosting and AWS Lambda + EventBridge for automated data collection and dashboard generation. Engineered Python data ingestion using the GitHub REST API and implemented scheduled, scalable analytics processing with fully automated deployment.',
  stack: ['Python', 'JavaScript', 'Terraform/OpenTofu', 'AWS S3', 'AWS Lambda', 'AWS EventBridge', 'GitHub REST API', 'Serverless', 'HTML/CSS'],
  sourceCode: 'https://github.com/pr4deepkumar/GithubDashboard',
  // livePreview: 'https://github.com',
  },
  {
  name: 'Network Intrusion Detection System using Machine Learning',
  description:
    'Built a machine learning-based intrusion detection system using the UNSW-NB15 dataset to classify network traffic as normal or malicious. Applied XGBoost for anomaly detection, achieving high accuracy and precision. Developed a real-time Streamlit dashboard for interactive visualization of predictions and network statistics.',
  stack: ['Python', 'Scikit-learn', 'XGBoost', 'Kafka', 'Streamlit', 'UNSW-NB15'],
  sourceCode: 'https://github.com/pr4deepkumar/Network-Intrustion-Detection-using-ML',
  // livePreview: 'https://github.com',
  },
  {
    name: 'Reinforcement Learning in Agar.io',
    description:
      'Developed reinforcement learning agents using Q-learning and Deep Q-Networks (DQN) to play Agar.io autonomously, leveraging TensorFlow, PyTorch, and NumPy. Training was conducted in both the official game environment and a custom Python simulation, with performance tracked using Matplotlib visualizations.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'NumPy'],
    sourceCode: 'https://github.com/haigshiroz/ReinforcementLearningAgario',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Customer Segmentation',
    description:
      'Developed a machine learning model to segment customers for personal loan cross-selling by analyzing demographic and behavioral data, with insights visualized using Matplotlib and Seaborn.',
    stack: ['Python', 'Pandas', 'NumPy', 'SciPy','Matplotlib', 'Seaborn', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/CustomerSegmentation/',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Image Processor Application',
    description:
      'Designed and deployed a modular MVC image-processing engine with 15+ advanced transformations like RGB, split/combine and histogram visualization that consistently delivers sub-second latency while maintaining 100% functional accuracy across 50+ rigorous test scenarios.',
    sourceCode: 'https://github.com/pr4deepkumar/Image-Processor-Application',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Husky Eats',
    description:
      'Developed an application that enables seamless food and grocery ordering, allowing users to easily select and customize their preferences. Utilized Python, SQL, and HTML to create a smooth, user-friendly interface focused on enhancing the overall ordering experience.',
    stack: ['Python', 'SQL', 'HTML'],
    sourceCode: 'https://github.com/balaji2417/HuskyEats',
    // livePreview: 'https://github.com',
  },
  {
    name: 'NBA Game Predictor',
    description:
      'Developed a real-time NBA game prediction app using FastAPI and Dash, leveraging machine learning models trained on historical team stats with data processed via NumPy and Pandas.',
    stack: ['Python', 'FastAPI', 'Dash', 'NumPy', 'Pandas', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/NBA-Game-Predictor',
    // livePreview: 'https://github.com',
  },
  {
    name: 'F1 Quali Predictor',
    description:
      'Built a machine learning model using FastF1 and linear regression to predict 2025 F1 driver qualifying times based on historical performance data, evaluated with MAE and R² scores.',
    stack: ['Python', 'FastF1', 'Pandas', 'NumPy', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/F1QualiPredictor',
    // livePreview: 'https://github.com',
  },
  {
    name: 'AI Resume Analyzer',
    description:
      'Developed a recruitment assistant using GPT-4o that automates the evaluation of resumes against job descriptions by extracting text from PDFs and generating detailed suitability feedback in real time via a Flask web app.',
    stack: ['Python', 'Flask', 'OpenAI GPT-4o', 'pdfplumber'],
    sourceCode: 'https://github.com/pr4deepkumar/ai-resume-analyzer',
    // livePreview: 'https://github.com',
  },
  {
  name: 'Personal Portfolio Website',
  description:
    'Developed a responsive portfolio website to showcase projects, skills, and achievements in a clean and engaging layout and an optimized user experience across devices. (The site you are currently viewing!)',
  stack: ['HTML', 'CSS', 'JavaScript'],
  sourceCode: 'https://github.com/pr4deepkumar/pr4deepkumar.github.io',
  // livePreview: 'https://pr4deepkumar.github.io',
}
]

const publications = [
  {
    name: 'PlaceHolder',
    authors: ['Placeholder' ],
    //livePreview: 'https://doi.org/10.1109/AICAPS57044.2023.10074005',
    isPublication: true,
    
  }
]

const skills = {
  // Languages & Analytics
  "Python": 90,
  "SQL": 90,
  "Scala": 80,
  "JavaScript": 80,
  "PowerBI": 85,
  "Tableau": 80,
  
  // Data Engineering & AI
  "Spark": 90,
  "PySpark": 90,
  "Airflow": 85,
  "Kafka": 85,
  "dbt": 80,
  "MySQL": 90,
  "MongoDB": 80,
  "Polars": 80,
  "PyTorch": 85,
  "Hugging Face": 80,
  "scikit-learn": 90,
  "LangChain": 80,

  // Cloud & Infrastructure
  "AWS": 90,
  "Google Cloud": 85,
  "Snowflake": 85,
  "Docker": 80,
  "Kubernetes": 80,
  "Terraform": 80,
  "OpenTofu": 80,
  "Git": 85,
  "CI/CD": 75,
}

const education = [
  {
    name: 'Northeastern University',
    description: "Master's in Computer Science",
    gpa: "3.667 / 4.0",
    years: '2024 - Present',
    isPublication: true,
    isEducation: true,
  },
  {
    name: "Anna University",
    description: 'B.E. in Computer Science and Engineering',
    gpa: "8.60 / 10",
    years: '2016 - 2020',
    isPublication: true,
    isEducation: true,
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pradeepkumarvijayakumaran@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }