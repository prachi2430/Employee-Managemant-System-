const employees = [
  {
    "id": 1,
    "class": "employee",
    "email": "employee1@example.com",
    "password": "pass1234",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update Landing Page",
        "description": "Revamp the homepage layout with Tailwind CSS.",
        "date": "2025-12-05",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix Navbar Bug",
        "description": "Resolve dropdown issue in responsive view.",
        "date": "2025-11-28",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Write Unit Tests",
        "description": "Add Jest tests for form validation logic.",
        "date": "2025-12-10",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
     "class": "employee",
    "email": "employee2@example.com",
    "password": "secure5678",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Database Backup",
        "description": "Perform weekly backup of PostgreSQL database.",
        "date": "2025-12-06",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Optimize Queries",
        "description": "Improve performance of product search queries.",
        "date": "2025-11-30",
        "category": "Optimization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Deploy API",
        "description": "Push latest API changes to staging server.",
        "date": "2025-12-01",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 3,
     "class": "employee",
    "email": "employee3@example.com",
    "password": "mypassword90",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design Dashboard",
        "description": "Create wireframes for analytics dashboard.",
        "date": "2025-12-07",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Logo Update",
        "description": "Replace old branding assets with new logo.",
        "date": "2025-11-25",
        "category": "Branding"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Accessibility Audit",
        "description": "Check site for WCAG compliance.",
        "date": "2025-12-09",
        "category": "Audit"
      }
    ]
  },
  {
    "id": 4,
     "class": "employee",
    "email": "employee4@example.com",
    "password": "admin4321",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Setup CI/CD",
        "description": "Configure GitHub Actions for automated builds.",
        "date": "2025-12-08",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests for authentication module.",
        "date": "2025-11-29",
        "category": "Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Server Migration",
        "description": "Migrate app from shared hosting to cloud.",
        "date": "2025-12-02",
        "category": "Infrastructure"
      }
    ]
  },
  {
    "id": 5,
     "class": "employee",
    "email": "employee5@example.com",
    "password": "login8765",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Customer Feedback",
        "description": "Compile survey responses into a report.",
        "date": "2025-12-06",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Email Campaign",
        "description": "Launch December promotional emails.",
        "date": "2025-11-27",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Bug Triage",
        "description": "Categorize and assign reported issues.",
        "date": "2025-12-11",
        "category": "Support"
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "adminSecure123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};