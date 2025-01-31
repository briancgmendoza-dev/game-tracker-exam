# React + TypeScript + Vite

## Cloning the project

![image](https://github.com/user-attachments/assets/fb19dc81-eb42-4ed5-aed1-249cc019be13)

Open up your terminal or vscodes' terminal then do the ff:
1. From this page, locate the green button that says "Code"
2. In HTTPS tab, click on the copy button to copy the clone url
3. In your terminal, go to your desired folder then type in "git clone" then paste the url you've just copied
4. Once the cloning is done, cd inside the folder "game-tracker-exam"
5. Run the command, "npm install" to install project dependencies.

## ENV Values

In order for the APIs to work, do the ff:
1. Create .env file outside src folder
2. Then add the values below:

```js
VITE_EXAM_API_URL={{Add the API here}}
VITE_IMAGE_URL={{Add the API here without the /api}}
```

## Available commands
1. npm run dev -> to run the project locally.
2. npm run test -> to run vitest locally.
3. npm run build -> to build a deployable version of the project.
4. npm run link -> to check for linting error

## Answers to questions
1. What kind of libraries your project is using?
   a. Axios
   b. Redux toolkit
   c. React router dom
   d. fontawesome icons
   e. http proxy middleware
   f. react select
   g. vite & vitest
   h. testing library / react
3. What could you do better in your code next iteration?
   a. Adding more unit test
   b. Lazy loading or Pagination ??
   c. Better typesafe/typescript
   d. Better design
5. Any other notes you feel relevant for the evaluation of your solution?

## TODO:
1. Using lazy load images is a plus but not mandatory.
2. The user must be able to type the category (like an auto-complete).
3. Multiple categories can be added (eg. tags).   /filter?tag=3d.mmorpg.fantasy.pvp&platform=pc
4. The state of the filter must remains when navigating between pages.
5. Unit test
