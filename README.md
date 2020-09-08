## JAPP - Your Job Application Manager

This app helps you track your job applications and can be used right out of the box once it has been set up. It doesn't require any login credentials and personal data transfer as it uses your browser's local storage. This also means that all of the data you enter will remain on your device's browser only.

### How to setup

First, clone the repository to your local machine.

`npm install`
Set up all required dependencies.

`npm start`
Run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


`npm test`
Launch the test runner in the interactive watch mode.<br />

`npm run e2e`
Run integration tests via cypress.

`npm run build`
Build the app for production to the `build` folder.<br />

### About

Some information on JAPP.

#### Background

This app has been created as a learning project using React. Focuses include
- clean code
- testing (unit and e2e)
- SASS
- mocked REST API via LocalStorage
- documentation
- real use case

#### Functionality

You can use this app to add, view, edit, and delete job item entries (CRUD operations). Information you can add and edit as of now are:
- job title
- company
- location
- type (e.g., full-time)
- date to start working
- salary
- notes
- rating for custom categories on a scale from 0 to 10 and averaged total rating calculation.

A job status configuration also helps you keep track of how far your application process is with a certain job item.

You may preview and compare job ratings side by side or view them in detail.

### TODO

#### App
- add better styling
- add mobile version
- add contextual information adept for SaaS
- improve UX
- deploy, share, and do user tests
- get feedback and plan future

#### Developer
- more e2e testing
- further tests
- CI