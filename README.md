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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## User Stories

  1. **As a basic user, I would like to be able to create a custom username and password for individuality and security.**
    + (Medium)

    + **Feature Tasks:**
      + Users can create a username that is unique to the database..
      + Users can create a password to secure their username..
      + Users must receive a token from an auth api before entering the chatroom.
    + **Acceptance Tests:**
      + Ensure that all users are prompted to register or login upon clicking the 'sign-in' link..
      + Ensure that username and password pairs are properly stored in database
      + Ensure that users can change their password/username and update it in the database.
      + Ensure that authorization measures work properly.


  2. **As a basic user, I would like to send and receive messages from other users of the site in real time.**
    + (Medium)

    + **Feature Tasks:**
      + Users will all have a 'Message Me' link that appears on their profile, clicking it will open a chat box.
      + Users can enter text to send messages to other users and receive text from other users.
      + Users can only see messages from clients in the same chat room as them.
    + **Acceptance Tests:**
      + Profile will feature a list of friends that can be clicked on to open an instant messenger.
      + Stretch Goal: IM will alert you when the user you are attempting to message is currently logged off.
      + Stretch Goal: A log of all messages sent is saved to the database when all users have left the room in order to save chat logs for future interactions with the same user.


  3. **As a basic user, I want to be able to edit the contents of my profile, while other users are only able to view it.**
    + (Medium-Small)

    + **Feature Tasks:**
      + Users are able to edit information on their profile.
      + Users are able to upload a personal photo.
      + Stretch Goal: Users can create a photo album.
    + **Acceptance Tests:**
      + Ensure that users are able to click to edit information and update it in their database.
      + Ensure that users are not able to alter information on a profile that does not belong to them.


  4. **As a recruiter, I’d like to be able to see who helped work on this application.**
    + (Small)

    + **Feature Tasks:**
      + The main site features a 'team' area which displays the profile links to the developers.
    + **Acceptance Tests:**
      + Ensure profile links photos display properly.

  5. **As a user, I want to be able to create custom playlists and post them to my profile.**
    + (Medium-Large)

    + **Feature Tasks:**
      + Users are able to create a list of favorite songs/personal music and then display that list on their site to be discovered by others.
    + **Acceptance Tests:**
      + Ensure that the playlist displays properly and music streams when the play button is clicked.
      + Stretch Goal: Playlist info can be shared among users.

