const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'PK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pradeep Kumar Vijayakumaran',
  role: "AI & Data Engineer | MSCS @ ",
  description: "Software Engineer and CS graduate student at Northeastern University with 2+ years of experience building production-scale AI systems, distributed data pipelines, and cloud-native platforms for global clients including Nike and L'Oréal. Skilled in end-to-end development spanning data ingestion, vector embeddings, and high-performance retrieval systems across AWS and GCP.",
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
      'Achieved 95% image-to-product match accuracy, validated across platform inventory, by architecting a semantic visual search system using Python, DINOv2 embeddings, and hybrid similarity scoring',
      'Scaled platform inventory to 56k+ products by engineering automated ETL pipelines via reverse-engineered Shopify APIs, normalizing and indexing data across partner vendors for AI-powered search',
      'Reduced search result render times to 8ms by building interactive React.js applications to visualize vector search outputs and product metadata in real time, enabling seamless product discovery at scale'],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Senior Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2021 - June 2022',
    workExperiencePoints: [
      "Maintained 99.9% uptime for L'Oréal’s mission-critical analytics systems by engineering proactive monitoring and automated alerting workflows that eliminated recurring SLA violations",
      'Delivered a production-grade analytics pipeline, replacing a fragmented ingestion process, by designing and optimizing Scala and T-SQL (SSMS) ingestion pipelines with Control-M scheduling for major Japanese retailer data feeds',
      'Reduced MTTR by 50% during a high-risk on-premises to GCP migration by building real-time alerting APIs and automating incident response with Git-based CI/CD pipelines'
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
      'Delivered zero-downtime, zero-data-loss platform modernization for Nike Inc. by leading the full migration from SAP AFS to SAP S/4HANA across a complex, high-visibility transition',
      'Eliminated downstream data gaps for analytics teams by rebuilding existing ingestion workflows into fault-tolerant distributed ETL pipelines using Python, Spark, Airflow, and AWS',
      'Reduced cloud operational costs by 40% by identifying over-provisioned AWS infrastructure, optimizing resource utilization, and automating recurring workflows with Airflow DAGs and real-time alerting'
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
      "Earned 'Top Performer' recognition by delivering end-to-end ML and analytics applications using Python (NumPy, Pandas, scikit-learn) and SQL for data modeling, predictive analysis, and visualization"
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
  name: 'DocuVerse: AI Agent-Powered Document Research',
  description:
    'Built an end-to-end AI document research platform that ingests PDFs from S3, parses page-level text, and indexes embeddings in Pinecone for retrieval-augmented QA. Implemented multi-agent research (document selection, RAG, web, arXiv) with FastAPI and Streamlit, including CSV/PDF session export. Automated ingestion and indexing with Airflow and deployed via Docker.',
  stack: ['Python', 'FastAPI', 'Streamlit', 'OpenAI API', 'Pinecone', 'AWS S3', 'Airflow', 'Docker'],
  sourceCode: 'https://github.com/pr4deepkumar/DocuVerse-AI-Agent-Powered-Document-Research',
  // livePreview: 'https://github.com',
  },
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
  name: 'GitHub Analytics Dashboard',
  description:
  'Built a serverless GitHub analytics dashboard that transforms repository, pull request, issue, and profile data into an interactive HTML/JavaScript interface. Designed an end-to-end infrastructure-as-code pipeline using Terraform/OpenTofu with AWS S3 for static hosting and AWS Lambda + EventBridge for automated data collection and dashboard generation. Engineered Python data ingestion using the GitHub REST API and implemented scheduled, scalable analytics processing with fully automated deployment.',
  stack: ['Python', 'JavaScript', 'Terraform/OpenTofu', 'AWS S3', 'AWS Lambda', 'AWS EventBridge', 'GitHub REST API', 'Serverless', 'HTML/CSS'],
  sourceCode: 'https://github.com/pr4deepkumar/GithubDashboard',
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
    stack: ['Java', 'Java Swing', 'MVC', 'JUnit'],   
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
  "Programming Languages": [
    { name: "Python", badge: "https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "SQL", badge: "https://img.shields.io/badge/-SQL-003B57?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "C++", badge: "https://img.shields.io/badge/-C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
    { name: "Java", badge: "https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white" },
    { name: "Scala", badge: "https://img.shields.io/badge/-Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white" },
    { name: "R", badge: "https://img.shields.io/badge/-R-276DC3?style=for-the-badge&logo=r&logoColor=white" },
    { name: "JavaScript", badge: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
  ],
  "AI & Machine Learning": [
    { name: "PyTorch", badge: "https://img.shields.io/badge/-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
    { name: "Hugging Face", badge: "https://img.shields.io/badge/-HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" },
    { name: "scikit-learn", badge: "https://img.shields.io/badge/-Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" },
    { name: "XGBoost", badge: "https://img.shields.io/badge/-XGBoost-EC0000?style=for-the-badge" },
    { name: "Pinecone", badge: "https://img.shields.io/badge/-Pinecone-000000?style=for-the-badge" },
    { name: "ChromaDB", badge: "https://img.shields.io/badge/-ChromaDB-FF6B35?style=for-the-badge" },
    { name: "LangChain", badge: "https://img.shields.io/badge/-LangChain-000000?style=for-the-badge" },
  ],
  "Data Engineering & Distributed Systems": [
    { name: "Apache Spark", badge: "https://img.shields.io/badge/-Apache_Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" },
    { name: "Airflow", badge: "https://img.shields.io/badge/-Apache_Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" },
    { name: "Kafka", badge: "https://img.shields.io/badge/-Kafka-000000?style=for-the-badge&logo=apache-kafka&logoColor=white" },
    { name: "MySQL", badge: "https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "SSMS", badge: "https://img.shields.io/badge/-SSMS-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" },
    { name: "MongoDB", badge: "https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "Snowflake", badge: "https://img.shields.io/badge/-Snowflake-56B9FF?style=for-the-badge&logo=snowflake&logoColor=white" },
    { name: "Supabase", badge: "https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
    { name: "dbt", badge: "https://img.shields.io/badge/-dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white" },
    { name: "Polars", badge: "https://img.shields.io/badge/-Polars-CD792C?style=for-the-badge" },
    { name: "Neo4j", badge: "https://img.shields.io/badge/-Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" },
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", badge: "https://img.shields.io/badge/-AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" },
    { name: "Google Cloud", badge: "https://img.shields.io/badge/-Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" },
    { name: "Docker", badge: "https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "Kubernetes", badge: "https://img.shields.io/badge/-Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
    { name: "Terraform", badge: "https://img.shields.io/badge/-Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white" },
    { name: "OpenTofu", badge: "https://img.shields.io/badge/-OpenTofu-FFDA44?style=for-the-badge" },
    { name: "Git", badge: "https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "CI/CD", badge: "https://img.shields.io/badge/-CI%2FCD-000000?style=for-the-badge" },
  ],
  "Web & Backend": [
    { name: "FastAPI", badge: "https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
    { name: "React", badge: "https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { name: "Streamlit", badge: "https://img.shields.io/badge/-Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white" },
    { name: "Flask", badge: "https://img.shields.io/badge/-Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
    { name: "Dash", badge: "https://img.shields.io/badge/-Dash-008DE4?style=for-the-badge&logo=plotly&logoColor=white" },
  ],
  "Analytics & Visualization": [
    { name: "Power BI", badge: "https://img.shields.io/badge/-PowerBI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" },
    { name: "Tableau", badge: "https://img.shields.io/badge/-Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white" },
    { name: "Excel", badge: "https://img.shields.io/badge/-Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" },
  ],
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