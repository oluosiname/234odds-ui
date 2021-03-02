const { readdirSync, writeFileSync } = require("fs");
const ICON_SOURCE_FOLDER = "src/assets/images";
// some helpful functions
const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split(".")[0];
const toPascalCase = (string) =>
  string
    .match(/[a-z]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("");
// getting all the icons
const icons = readdirSync(ICON_SOURCE_FOLDER)
  .filter(isSVG)
  .map(removeExtension);
const indexContent = [
  "import React from 'react';",
  "import Icon from './Icon';",
  "",
  icons
    .map(
      (icon) =>
        `export const ${toPascalCase(
          icon
        )} = props => <Icon {...props} name="${icon}" />;`
    )
    .join("\n"),
].join("\n");
writeFileSync(`src/components/Icon/index.js`, indexContent);
console.log("Icon component file created! ✅");

const iconMapContent = [
  icons
    .map(
      (icon) =>
        `import { ReactComponent as ${toPascalCase(
          icon
        )} } from '../images/${icon}.svg';`
    )
    .join("\n"),
  "",
  "export default {",
  icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join("\n"),
  "};",
].join("\n");
writeFileSync(`src/assets/icons/icon-map.js`, iconMapContent);
console.log("Web Icon Map created! ✅");
