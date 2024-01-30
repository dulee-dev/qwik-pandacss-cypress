# qwik style guide (pandacss + cypress)

## object

pandacss for style and can be tested in cypress

<required>

1. atomic css

2. supporting ts

3. use design token only

4. class variant (like cva or recipe)

5. official support

6. styles can be tested in cypress

## setup

1. setup pandacss

npm run qwik add pandacss

2. setup cypress

npm run qwik add cypress

3. set config in panda.config.ts

4. set tokens in ./styles/ and import to pandacss.config.ts>theme>tokens

5. set recipe in ./src/styles/

6. reset styled-system with "panda codegen"

7. for test import global.css in ./cypress/support/component.ts

8. add plugins to support older browser ('autoprefixer','@csstools/postcss-cascade-layers', ...)

## trouble shooting

change postcss.config.js -> postcss.config.cjs
