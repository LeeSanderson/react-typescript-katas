## Creating a sub-project

1. CD to the `src` folder.
1. Execute: `npx create-react-app [project-name] --template typescript`.
1. CD to the newly created `[project-name]` folder.
1. Install Prettier dev dependency: `npm install prettier -D --save-exact` (so most up to date version of Prettier will be used for this project).
1. Install React Router DOM for SPA navigation: `npm i react-router-dom`.
1. Install Tailwind CSS: `npm install -D tailwindcss`
1. Configure Tailwind: `npx tailwindcss init` (creates a basic tailwind.config.js file in the project root directory).
1. Update the `tailwind.config.js` file and replace the `content` section with `content: ["./src/**/*.{js,jsx,ts,tsx}"]`
1. Update the `index.css` file and add `tailwind` CSS imports e.g. `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;`.
