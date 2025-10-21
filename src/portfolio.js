const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'PK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pradeep Kumar Vijayakumaran',
  role: "Grad Student at ",
  description: "I'm a Master's student in Computer Science at Northeastern University, Boston, with 2 years of industry experience as a Senior Systems Engineer. My background is in software development, data engineering, analytics, integration, and migration, and I'm especially interested in using technology to optimize and integrate complex systems. I’ve had the opportunity to work in cross-functional teams across India, Japan, and the USA, which has strengthened my collaborative and problem-solving skills. I'm passionate about creating innovative, data-driven solutions that deliver real impact.",
  //resume: 'https://drive.google.com/file/d/1d9m7bX55oJwQNtHRQ-Ke8Lgul3yAN5Gt/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pradeep-kumar-v/',
    github: 'https://github.com/pr4deepkumar',
    leetcode: 'https://leetcode.com/pr4deepkumar'
  },
}

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
    name: 'AI Resume Analyzer',
    description:
      'Developed a recruitment assistant using GPT-4o that automates the evaluation of resumes against job descriptions by extracting text from PDFs and generating detailed suitability feedback in real time via a Flask web app.',
    stack: ['Python', 'Flask', 'OpenAI GPT-4o', 'pdfplumber'],
    sourceCode: 'https://github.com/pr4deepkumar/ai-resume-analyzer',
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
    name: 'Husky Eats',
    description:
      'Developed an application that enables seamless food and grocery ordering, allowing users to easily select and customize their preferences. Utilized Python, SQL, and HTML to create a smooth, user-friendly interface focused on enhancing the overall ordering experience.',
    stack: ['Python', 'SQL', 'HTML'],
    sourceCode: 'https://github.com/balaji2417/HuskyEats',
    // livePreview: 'https://github.com',
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

const workExperience = [
  {
    name: 'Senior Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2021 - June 2022',
    workExperiencePoints: [
      "Achieved 99.9% uptime for L’Oréal APAC's mission-critical enterprise applications by engineering a robust support system featuring proactive monitoring, automated alerting, and rapid incident resolution protocols",
      'Improved data reliability and system performance by developing and optimizing scalable data pipelines (Scala, HiveQL, Control-M) to successfully integrate data feeds from two major Japanese retailers',
      'Reduced critical system downtime and ensured SLA compliance by building and deploying real-time alerting APIs and automation scripts that immediately notified stakeholders of system failures, enabling faster response times',
      'Enhanced system scalability and deployment efficiency by contributing to a strategic cloud migration from on-premise infrastructure to Google Cloud, utilizing Git and Agile practices to improve cross-team collaboration'

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
      'Executed a flawless platform modernization for Nike Inc., migrating from SAP AFS to SAP S/4HANA with zero downtime and no data loss , ensuring complete business continuity',
      'Reduced operational expenditures by over 40% while simultaneously boosting system throughput by conducting a thorough analysis and optimization of the AWS cloud architecture and resource utilization',
      'Engineered fault-tolerant and reliable data processing for downstream systems by designing and implementing ETL pipelines and microservices (Python, Spark, AWS, Airflow) with modular, reusable components and automated testing',
      'Eliminated manual reconciliation errors and improved data integrity by automating workflows using Airflow DAGs and real-time monitoring, which proactively detected and alerted teams to mismatches and delays via Slack/email APIs'],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Data Analyst Intern',
    company: "Infosys Ltd.",
    work_years: 'Jan. 2020 - Mar. 2020',
    workExperiencePoints: [
      'Developed end-to-end analytics applications by leveraging Python (NumPy, Pandas, Scikit-Learn) and SQL to perform data modeling, build machine learning prototypes, and create compelling data visualizations with Matplotlib',
      'Earned ‘Top Performer’ recognition for delivering impactful data solutions and leading the top-ranked capstone project'
    ],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  }
]

const education = [
  {
    name: 'Northeastern University',
    description: "Master's in Computer Science",
    // gpa: "9.04 / 10",
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

const skills = {
  // Programming Languages
  "Python": 90,
  "SQL": 90,
  "Prompt Engineering": 90,
  "Scala": 85,
  "HTML/CSS": 80,
  "C/C++": 75,
  "Java": 75,
  "JavaScript": 65,
  "TypeScript": 65,
  
  // Databases
  "MySQL": 90,
  "Oracle SQL": 90,
  "HiveQL": 90,
  "NoSQL": 80,
  "MongoDB": 80,

  // Frameworks / Libraries
  "NumPy": 90,
  "SciPy": 90,
  "Pandas": 90,
  "Matplotlib": 90,
  "Seaborn": 90,
  "Plotly": 90,
  "Scikit-learn": 90,
  "Terraform": 85,
  "OpenTofu": 85,
  "Keras": 80,
  "Tensorflow": 80,
  "Hadoop": 80,
  "PySpark": 80,
  "Hive": 80,
  "Flask": 75,
  "FastAPI": 70,

  // Cloud / Version Control / Tools
  "Git": 90,
  "Jira": 90,
  "Excel": 90,
  "Confluence": 90,
  "LaTeX": 90,
  "Copilot": 90,
  "Amazon Web Services": 85,
  "Spark": 80,
  "Airflow": 80,
  "Kafka": 70,
  "Google Cloud": 70,
  "Control-M": 70,
  "Docker": 70,
  "Kubernetes": 70,
  "Power BI": 70,
  "Tableau": 70
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pradeepkumarvijayakumaran@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
