# Teamio - Social Media Application

![Teamio](teamio.png)

Welcome to the **Teamio** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/teamio)
- [Website](https://aabubokarr.github.io/teamio/)

## About

**Teamio** is a modern social workspace designed for working professionals and teams. It combines interactive social timelines, messaging, task management, and calendar scheduling into a unified platform. Built for seamless collaboration, conversations, and work together.

## Features

- Modern UI/UX
- Responsive Design
- Task Management
- Realtime Messenger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/teamio.git
   ```
2. Navigate to the project's frontend directory:
   ```bash
   cd teamio
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```  
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ``` 

## Structure

```
teamio/
├── .github/
│   ├── workflows/               # Github actions
├── public/                      # Public directory
├── src/                         # Main source-code directory
│   ├── components/              # Reusable UI components
│   │   ├── hooks/               # Reusable custom React hooks
│   │   ├── icons/               # Custom and reusable icons
│   │   ├── layout/              # Application-wide layouts\navigation
│   │   ├── teamio/              # Landing page sections
│   │   ├── ui/                  # Generic UI components
│   │   └── utilities/           # Shared UI utilities
│   ├── features/                # Feature-specific logic and components
│   ├── lib/                     # Shared application utilities
│   ├── routes/                  # Application pages
│   ├── main.tsx                 # Application entry point
│   ├── reportWebVitals.ts       # Performance and web-vitals reporting
│   ├── routes.ts                # TanStack Router configuration
│   ├── routeTree.gen.ts         # Auto generated TanStack route tree
│   └── styles.css               # Global styles and CSS variables
├── .cta.json                    # Configuration for the project's CTA
├── .dockerignore                # Files and folders that docker ignores
├── .gitignore                   # Files and folders that Git ignores
├── biome.json                   # Biome formatter and linter config
├── docker-compose.yml           # Docker compose file
├── Dockerfile                   # Instructions for Docker
├── index.html                   # Main HTML document
├── LICENSE                      # Project's license
├── nginx.conf                   # Docker configuration
├── package-lock.json            # Locks exact NPM dependency versions
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation and instructions
├── tsconfig.json                # Typescript configuration file
└── vite.config.js               # Vite configuration file
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/teamio/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/teamio" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
