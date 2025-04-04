# Gereundio Test

This is a Landing Page project for the Frontend position at Gerundio, optimized from mobile to desktop.

The architecture used in this project is Component-based Architecture, which enables component reusability, easier maintainability with small and modular components, and scalability. The latter allows for adding new components without affecting the project structure.

The use of Hooks is to encapsulate the logic, allowing for reusability throughout the app and easier scalability.

Finally, the use of SCSS enables the use of variables, mixins, and nesting, making styles more scalable and maintainable.

## Technologies

About this project, I decided to use the following technologies:

- Node v18.18.0: It's a JavaScript runtime environment used to execute JavaScript code and install dependencies.

- npm v9.8.1: It's the Node package manager used to install libraries, manage dependencies, and run scripts.

- React ^19.0.0: I chose React because this project is a simple Landing Page that doesn't require route management. React's component-based architecture is ideal for this purpose.

- TypeScript ~5.7.2: Its static typing helps improve code reliability by enforcing data types in components, functions, hooks, etc.

- SASS (SCSS) ^1.86.1: I chose SCSS because it allows the use of variables, nested selectors, and inheritance. I prefer the SCSS syntax over SASS because it's more similar to regular CSS.

- ESLint ^9.21.0: To maintain clean code and analyze it according to ECMAScript standards.

- Vite ^6.2.0: It's a modern build tool that helps create a more efficient frontend app with faster setup and development experience.

## Project Structure

```markdown
gerundio-test/ → App root folder
├── node_modules/ → Packages installed with npm
├── publics/ → Static assets like images
├── src/ → Source code
│ ├── assets/ → Icons and media
│ ├── components/ → Reusable React components
│ ├── hooks/ → Custom React hooks
│ ├── utils/ → Utility styles and data constants
│ ├── App.scss → Styles specific to the App component
│ ├── App.tsx → Main root component of the app
│ ├── index.scss → Global styles (resets, base)
│ ├── main.tsx → Entry point that mounts the React app
│ └── vite-env.d.ts → Vite-specific TypeScript types
├── .gitignore → Git versioning ignore list
├── eslint.config.js → Linting rules for code quality
├── index.html → Base HTML template used by Vite
├── package-lock.json → Auto-generated lockfile for exact dependency versions
├── package.json → Project metadata and npm dependencies
├── README.md → Project documentation
├── tsconfig.app.json → TypeScript config for the app only
├── tsconfig.json → Root TypeScript config
├── tsconfig.node.json → TypeScript config for Node scripts
└── vite.config.ts → Vite configuration (plugins, server, etc.)
```

## Commits Structure

```markdown
// structure
<type>(<scope>): <message>

// example
feat(styles): desktop styles added
```

How to run the project
First, make sure you have Node.js v18.18.0 and npm v9.8.1 installed.
If you don't have them, you can install them by following the instructions at:
👉 https://nodejs.org/en/download

Then, clone this repository using git clone followed by the repository URL in your terminal:

```markdown
git clone <repository-url>
```

Once the repository is cloned, navigate to the project folder and install the dependencies with:

```markdown
cd gerundio-test
```

```markdown
npm install
```

Now run the development server with:

```markdown
npm run dev
```

The project will now be running on:
👉 http://localhost:5173

You can open that URL in your browser to see the app.

## License

This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](./LICENSE) file for more information.
