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
  resume: 'https://drive.google.com/file/d/1d9m7bX55oJwQNtHRQ-Ke8Lgul3yAN5Gt/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pradeep-kumar-v/',
    github: 'https://github.com/pr4deepkumar',
    // leetcode: 'https://leetcode.com/pr4deepkumar'
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
    name: 'Customer Segmentation',
    description:
      'Developed a machine learning model to segment customers for personal loan cross-selling by analyzing demographic and behavioral data, with insights visualized using Matplotlib and Seaborn.',
    stack: ['Python', 'Pandas', 'NumPy', 'SciPy','Matplotlib', 'Seaborn', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/CustomerSegmentation/',
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
    name: 'Husky Eats',
    description:
      'Developed an application that enables seamless food and grocery ordering, allowing users to easily select and customize their preferences. Utilized Python, SQL, and HTML to create a smooth, user-friendly interface focused on enhancing the overall ordering experience',
    stack: ['Python', 'SQL', 'HTML'],
    sourceCode: 'https://github.com/balaji2417/HuskyEats',
    // livePreview: 'https://github.com',
  },
  {
    name: 'F1 Quali Predictor',
    description:
      'Built a machine learning model using FastF1 and linear regression to predict 2025 F1 driver qualifying times based on historical performance data, evaluated with MAE and R² scores.',
    stack: ['Python', 'FastF1', 'Pandas', 'NumPy', 'SKLearn'],
    sourceCode: 'https://github.com/pr4deepkumar/F1QualiPredictor',
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
    workExperiencePoints: ['Managed operations for 3 major L\'Oreal APAC applications, ensuring data integrity and error-free functionality',
'Updated the Existing Pipelines to accommodate the introduction of 2 new major Japanese Retailers’ sales data',
'Designed, developed and deployed new Data Pipelines that provided new functionalities as required by the clients using Scala, HiveQL, Microsoft SQL Server Management Studio (SSMS) and Control-M',
'Built Email Alerts that is sent to Business Users and Support Engineers in case of any Application Failure',
'Facilitated with the movement of Existing Applications to Google Cloud Platform (GCP)',
'Onboarded incoming support engineers by training them and facilitating cross-functional knowledge transfer'
    ],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Systems Engineer',
    company: "Infosys Ltd.",
    work_years: 'Oct. 2020 - Sept. 2021',

    workExperiencePoints: ['Assisted Nike Inc. in migrating from SAP AFS to SAP S/4HANA with no data or functionality loss',
'Performed Impact Analysis on the existing Pipelines using SAP AFS data which helped in the design and development of Pipelines that used data sourced from SAP S/4HANA',
'Built Data Pipelines that utilized data sourced from S4/HANA while retaining the data output formats from the existing Pipelines as required by the client using Python, Git, AWS, Airflow, HiveQL and Spark',
'Built Recon DAGs that monitored Data Movement at various facets of the Pipelines and sent Alerts through Mail and Slack if there was any Data Loss, Delay in Data Movement, Duplicity or Data Mismatch',
'Optimized new data pipelines to improve AWS resource efficiency, cutting client costs by over 40%'],
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
      "Strengthened data analytics skills in Python and SQL, working with tools like NumPy, Pandas, Scikit-Learn, Matplotlib, and Seaborn on real-world datasets",
      "Scored over 90% during internship and was recognized as one of the Top Performers (TPF) during training"
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
  "Hadoop": 80,
  "PySpark": 80,
  "Hive": 80,
  "Flask": 75,
  "FastAPI": 70,

  // Cloud / Version Control / Tools
  "Git": 90,
  "Jira": 90,
  "Confluence": 90,
  "Amazon Web Services": 85,
  "Spark": 80,
  "Airflow": 80,
  "Google Cloud": 70,
  "Control-M": 70
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pradeepkumarvijayakumaran@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
