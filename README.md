# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!-- 1)Quick Test to Count Words and Characters -->
Example:
----
Hello, I  am John.
----
This text contains 4 words and 18 characters. Characters also include white spaces.

<!-- 2)Quick Test to Count Sentences and Paragraphs -->
It should recognize the sentences using punctuation marks as the sentence ends at (.!?). A paragraph starts from a new line and must contain at least a word.
Example:
----
Hello, world! There are many variations of passages of Lorem Ipsum available?
The majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable.
----
The above text contains 3 sentences and 2 paragraphs.

<!-- 3)Quick Test to Check Pronouns -->
You will find a list of pronouns in src/data/pronouns.ts file in the form of an array. You have to check how many pronouns have been used in the text. (I only added personal, object, possessive and reflexive pronouns in the file). In the same way, you can count any desired list of words.
Example:
----
How are you?  // 1 pronoun
I am Mike.    // 1 pronoun
You, ok?     // 1 pronoun
That is mine. // 1 pronoun
----


<!-- 4)Calculate the Average Reading Time -->
Assume the average reading time is 225 words per minute. You have to find out how long it would take to read the given text.

<!-- 5)Find Longest Word in the Text -->
 If multiple longest words have the same length, it should show just the first one. Make sure you also handle edge cases like (.!?,) appear after the longest word.

<!-- 6)Quick Test to Check Longest Word -->
The longest word in the Text is “literature”.
