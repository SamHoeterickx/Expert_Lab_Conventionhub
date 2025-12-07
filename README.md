# __CONVENTIONHUB__

![Project Status](https://img.shields.io/badge/status-active-success.svg)

**ConventionHub** is a full-stack web application designed to centralize and streamline coding standards and best practices for developers and teams. It serves as a central library where users can easily discover, document, and share coding conventions to ensure code readability and consistency.

## Features
* **Direct Download:** Download conventions with a single click as `.md` files for immediate use in your projects.
* **Visual Editor:** Create standards using a powerful Markdown editor with real-time live preview and syntax highlighting.
* **Community Validation:** A built-in like system allows the community to validate and surface the best standards.
* **Targeted Discovery:** Quickly find relevant rules with specific filters for Frontend, Backend, Database, and Open Source.
* **Single Source of Truth:** Enforces a uniform structure for all documentation, preventing fragmentation.

## Tech Stack
### Client
* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** CSS Modules
* **State Management:** TanStack Query (React Query)
* **Routing:** React Router DOM
* **Markdown:** `react-markdown`, `react-syntax-highlighter`

### Server
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** Cookie-based sessions (HttpOnly) & Bcrypt


## Installation & Setup
Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
  git clone [https://github.com/your-username/ConventionHub.git](https://github.com/your-username/ConventionHub.git)
```

### 2. Backend setup
#### 2.1 Installl dependencies
``` bash
  cd server
  npm i
```

#### 2.2 ENV
```bash
  DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/conventionhub?schema=public"
  COOKIE_SECRET="Your-secret-key-here"
```

#### 2.3 Migrate prisma scheme
```bash
  npx prisma migrate dev --name init
```

#### 2.4 Start Server
```bash
  npm run start
```  

### 3. Frontend setup
#### 2.1 Installl dependencies
``` bash
  cd client
  npm i
```

#### 2.2 ENV
```bash
  VITE_API_URL="Your-api-url-here"
```

#### 2.3 Start Client
```bash
  npm run dev
```  

## File Structure
```
ConventionHub/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── modules/        # Feature-based modules (Auth, Explore, Contribute...)
│   │   ├── shared/         # Shared components, hooks, and services
│   │   └── styles/         # Global styles and variables
│   └── ...
│
└── server/                 # Express Backend
    ├── prisma/             # Database schema and migrations
    ├── src/
    │   ├── conventions/    # Convention related routes & controllers
    │   ├── user/           # User auth routes & controllers
    │   └── ...
    └── ...
```

## Questions, requests or suggestions
Have a question about a specific convention? Want to request a new standard for a technology we're adopting? Or do you have a suggestion to improve this platform?

* Questions: Reach out to me on [Linkedin](https://www.linkedin.com/in/sam-hoeterickx/) or open an Issue in this repository with the tag question-hub.
* Feature Requests: Please open an Issue in this repository with the tag feature-request.
* New Conventions: You can add them directly via the Contribute page in the app, or request them via an Issue if you are unsure.

## Author

Sam Hoeterickx <br>
Student Multimedia & Creative Technology <br>
Erasmushogeschool Brussel <br>
[Linkedin](https://www.linkedin.com/in/sam-hoeterickx/) <br>
[portfolio](https://www.samhoeterickx.be) <br>

all rights reserved
