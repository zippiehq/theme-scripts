# Zippie theme scripts
## Setup
#### Add it to your theme package
```bash
npm i -D @zippie/theme-scripts
# or this github repository directly
```
#### Add the following fields to your package.json
```json
"build:server": "theme-build --server <theme_variables_file_path>.js",
"build:client": "theme-build --client <theme_entry_file_path>.js",
"build": "npm run build:server && npm run build:client",
```

#### Now simply do the following inside your theme dir
```bash
npm run build
```
