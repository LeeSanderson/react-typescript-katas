# react-typescript-katas

A simple React, Tailwind and Typescript repo for experimenting with katas and other projects.

## IDE and Local environment setup

- `npm` 5.2+ or higher in order to run `create-react-app`.
- [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for code formatting (configured in workspace [Settings file](/.vscode/settings.json)).
- [Tailwind CSS IntelliSense VS Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- Configure VS Code to use Tailwind CSS IntelliSense by adding the following code to the [Settings file](/.vscode/settings.json) ([see StackOverflow answer](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker/68350950#68350950)):

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## More documentation

- [Creating a sub project](docs/CreatingASubProject.md)
- [Guidelines for React project structure](docs/FrontEndStructure.md)
