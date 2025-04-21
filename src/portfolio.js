const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'PK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pradeep Kumar Vijayakumaran',
  role: "Grad Student at ",
  description: "I'm a Master's student in Computer Science at Northeastern University, Boston, with a strong interest in data science—particularly in data engineering, analytics, and system integration. I'm passionate about using technology and data to solve complex problems. In my free time, I enjoy playing video games and watching or playing sports.",
  resume: 'https://drive.google.com/file/d/1V3VNz3BcHp3OyFboirHu42FoZoN_6drv/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pradeep-kumar-v/',
    github: 'https://github.com/pr4deepkumar',
    leetcode: "https://leetcode.com/u/pr4deepkumar/"
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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
    name: 'Customer Segmentation',
    description:
      'Developed a machine learning model to segment customers for personal loan cross-selling by analyzing demographic and behavioral data, with insights visualized using Matplotlib and Seaborn.',
    stack: ['Python', 'Pandas', 'NumPy', 'SciPy','Matplotlib', 'Seaborn', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/CustomerSegmentation/',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Husky Eats',
    description:
      'Built a Flask-based food delivery platform for Northeastern students and staff, featuring MySQL-backed order management and OTP-based authentication for secure deliveries.',
    stack: ['Python', 'MySQL', 'Flask'],
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
    workExperiencePoints: ['Managed operations for 3 major applications at L\'Oréal APAC, ensuring no loss of data and functionality.',
      'Updated data pipelines to integrate sales data from 2 new major Japanese retailers.',
      'Designed, developed, and deployed new data pipelines using Scala, HiveQL, SSMS, and Control-M, and facilitated the migration of applications to Google Cloud Platform (GCP).'
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2020 - Sept. 2021',

    workExperiencePoints: ['Assisted Nike Inc. in migrating from SAP AFS to SAP S/4HANA with no data or functionality loss.',
      'Conducted impact analysis on SAP AFS pipelines to inform and support the development of SAP S/4HANA pipelines.',
      'Developed SAP S/4HANA data pipelines using Python, Git, AWS, Airflow, HiveQL, and Spark, ensuring compatibility with existing data output formats.',
      'Built Recon DAGs to monitor data movement, sending alerts for any issues, and optimized pipelines to reduce AWS costs by over 40%.'],
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
      "Designed and developed a Java application to present historical facts based on date and location using Wikimedia and the Bing Search API.",
      "Implemented caching to avoid redundant API calls and secured data storage with 256-bit AES encryption."
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
    name: "St. Joseph's College of Engineering",
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
  "Scala": 85,
  "HTML/CSS": 80,
  "C/C++": 75,
  "Java": 75,

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
    "Keras": 80,
    "Tensorflow": 80,
    "Hadoop": 75,
    "PySpark": 75,
    "Airflow": 75,
    "Flask": 75,
    "FastAPI": 70,

  // Cloud / Version Control / Tools
  "Git": 90,
  "Jira": 90,
  "Amazon Web Services": 70,
  "Google Cloud": 70,
  "Control-M": 70
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pradeepkumarvijayakumaran@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
