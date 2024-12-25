export const blogData = [
  {
    id: "typescript",
    title: "Typescript",
    imageUrl: "/typescript.png",
    intro:
      "TypeScript is a superset of JavaScript that adds optional static typing to the language. It helps developers catch errors early during development and improves code quality by offering better tooling support, like autocompletion and type inference.",
    advantages: [
      "Static typing for better error detection.",
      "Enhanced IDE support with autocompletion and type checking.",
      "Easy to refactor and maintain large codebases.",
      "Helps with team collaboration and understanding code.",
      "Supports modern JavaScript features and transpiles to clean JavaScript.",
    ],
    exampleCode: `
      // Example of TypeScript code
      let username: string = "Hamza";
      function greet(user: string) {
        console.log("Hello, " + user);
      }
      greet(username); // Output: Hello, Hamza
    `,
  },
  {
    id: "nextjs",
    title: "Next.js",
    imageUrl: '/nextjs.png',
    intro:
      "Next.js is a React framework that enables server-side rendering and static site generation for building fast, SEO-friendly web applications. It simplifies routing, API creation, and deployment with great performance and scalability.",
    advantages: [
      "Server-side rendering (SSR) for better SEO and performance.",
      "Automatic code splitting and optimized bundling.",
      "Static site generation (SSG) for fast loading times.",
      "Built-in routing and API endpoints.",
      "Great developer experience with fast refresh and TypeScript support.",
    ],
    exampleCode: `
      // Example of a Next.js page component
      import React from 'react';

      const HomePage = () => {
        return (
          <div>
            <h1>Welcome to My Next.js App!</h1>
          </div>
        );
      }

      export default HomePage;
    `,
  },
  {
    id: "shadcn",
    title: "ShadCN",
    imageUrl: '/shadcn.png',
    intro:
      "ShadCN is a UI component library built for React that focuses on design consistency and ease of use. It provides pre-built components and utilities for faster development and better UI design integration.",
    advantages: [
      "Pre-built components for faster development.",
      "Design consistency with minimal effort.",
      "Customizable components with easy theming support.",
      "Lightweight and optimized for performance.",
      "Comes with built-in support for dark mode.",
    ],
    exampleCode: `
      // Example of using ShadCN button component in React
      import { Button } from 'shadcn';

      const App = () => {
        return (
          <Button variant="primary">Click Me</Button>
        );
      };

      export default App;
    `,
  },
  {
    id: "sanity",
    title: "Sanity",
    imageUrl: '/sanity.png',
    intro:
      "Sanity is a platform for structured content that helps developers and content teams build better, flexible content management systems (CMS) for any type of application or website. It features a real-time API, flexible data models, and powerful content workflows.",
    advantages: [
      "Real-time collaborative editing for content teams.",
      "Flexible and customizable data schemas.",
      "Scalable with powerful APIs and integrations.",
      "Structured content for easy management and access.",
      "Great developer experience with rich documentation.",
    ],
    exampleCode: `
      // Example of querying content with Sanity's API
      import { client } from './sanityClient';

      const query = '*[_type == "post"]';

      client.fetch(query).then(posts => {
        console.log(posts);
      });
    `,
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    imageUrl: '/tailwindcss.png',
    intro:
      "Tailwind CSS is a utility-first CSS framework that provides low-level, reusable utility classes for building custom designs. It promotes a highly customizable, fast, and maintainable approach to styling web applications.",
    advantages: [
      "Utility-first approach for faster styling.",
      "Highly customizable with configuration options.",
      "No need to write custom CSS for most designs.",
      "Built-in responsiveness and mobile-first support.",
      "Helps create consistent designs without duplication.",
    ],
    exampleCode: `
      // Example of using Tailwind CSS in a component
      const Button = () => {
        return (
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Click Me
          </button>
        );
      };

      export default Button;
    `,
  },
  {
    id: "nextauth",
    title: "NextAuth.js",
    imageUrl: '/nextauth.png',
    intro:
      "NextAuth.js is an authentication library for Next.js applications that simplifies user sign-in with a variety of providers, including OAuth, email, and credentials. It’s easy to integrate and works with serverless environments.",
    advantages: [
      "Easy to set up and configure with multiple authentication providers.",
      "Secure and flexible, supporting OAuth, credentials, and more.",
      "Built for serverless and static environments.",
      "Session management with JWT tokens or database sessions.",
      "Supports automatic JWT token refresh and server-side sessions.",
    ],
    exampleCode: `
      // Example of setting up NextAuth.js in a Next.js project
      import NextAuth from 'next-auth';
      import Providers from 'next-auth/providers';

      export default NextAuth({
        providers: [
          Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
        ],
        session: {
          jwt: true
        }
      });
    `,
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    imageUrl: '/postgresql.png',
    intro:
      "PostgreSQL is an open-source, object-relational database management system that uses and extends the SQL language. It is known for its stability, reliability, and powerful features, including ACID compliance and complex queries.",
    advantages: [
      "ACID compliant, ensuring data integrity.",
      "Extensive support for complex queries and joins.",
      "Highly extensible with custom functions and types.",
      "Active community and frequent updates.",
      "Cross-platform support and great performance.",
    ],
    exampleCode: `
      -- Example of querying PostgreSQL using SQL
      SELECT * FROM users WHERE email = 'user@example.com';
    `,
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    imageUrl: '/bootstrap.jpg',
    intro:
      "Bootstrap is a popular open-source front-end framework for building responsive websites and applications. It provides a collection of CSS and JavaScript components that help create mobile-first, modern websites quickly.",
    advantages: [
      "Responsive design out of the box.",
      "Pre-styled components for faster UI development.",
      "Wide browser compatibility and support.",
      "Customizable with Sass variables.",
      "Large community and extensive documentation.",
    ],
    exampleCode: `
      <!-- Example of a Bootstrap button -->
      <button class="btn btn-primary">Click Me</button>
    `,
  },
  {
    id: "python",
    title: "Python",
    imageUrl: '/python.png',
    intro:
      "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making it a versatile language for various applications.",
    advantages: [
      "Readable and easy to learn syntax.",
      "Extensive standard library and third-party packages.",
      "Cross-platform and widely supported.",
      "Great for rapid development and prototyping.",
      "Strong community support and resources.",
    ],
    exampleCode: `
      # Example of a Python function
      def greet(name):
          print(f"Hello, {name}!")

      greet("Hamza")  # Output: Hello, Hamza
    `,
  },
  {
    id: "php",
    title: "PHP",
    imageUrl: '/php.jpg',
    intro:
      "PHP is a widely-used open-source server-side scripting language designed for web development. It is especially suited for dynamic and interactive websites, supporting a wide range of web frameworks and CMSs like WordPress and Laravel.",
    advantages: [
      "Embedded in HTML for easy web development.",
      "Huge ecosystem with frameworks and CMS options.",
      "Fast execution speed and low server requirements.",
      "Wide hosting support and ease of deployment.",
      "Active community and frequent updates.",
    ],
    exampleCode: `
      <!-- Example of PHP code embedded in HTML -->
      <?php
        echo "Hello, Hamza!";
      ?>
    `,
  },
  {
    id: "angular",
    title: "Angular",
    imageUrl: '/angular.jpg',
    intro:
      "Angular is a platform and framework for building single-page client applications with HTML and TypeScript. It provides a comprehensive solution for developing scalable and maintainable applications, with tools for routing, form handling, HTTP requests, and more.",
    advantages: [
      "Two-way data binding for automatic synchronization.",
      "Comprehensive tooling and development environment.",
      "Built-in dependency injection for scalable applications.",
      "Strong support for large-scale enterprise applications.",
      "Comprehensive testing tools and documentation.",
    ],
    exampleCode: `
      // Example of an Angular component
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        template: '<h1>Welcome to Angular!</h1>'
      })
      export class AppComponent {}
    `,
  },
];
