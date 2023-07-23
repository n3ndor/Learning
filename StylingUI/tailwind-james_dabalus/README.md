Get Started:

npm init -y  = create package.json file
npm install -D tailwind = add package
npx tailwindcss init = creates tailwind.config.js file

in tailwind.config.js add this line "content: ["./src/**/*.{html,js}"],"

add to css file: "@tailwind base; @tailwind components; @tailwind utilities;"

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

in package.json we can add "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"

npm run dev

playground => play.tailwindcss.com