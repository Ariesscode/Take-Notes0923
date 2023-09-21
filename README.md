# 11 Express.js: Note Taker

## Github Repo 
https://github.com/Ariesscode/Take-Notes0923

## Table of contents:

- [Github Repo](#github-repo)
- [Task](#task)
- [User Story](#user-story)
- [Mock-up](#mock-up)
- [Acceptance Criteria](#acceptance-criteria)
- [Dependencies](#dependencies)
- [Start Program](#start-program-tests)
- [Resources](#resources)
- [Contact](#contact)



## Task

This project was focused on buiding the back-end of this Note taker application. This application uses two dependencies, such as the UUID (universally unique identifiers) package to save each note with it's own UUID and the express package. The express package gives the app the capability to manage server and routes for a single page or more and also gives the app levarage to be able to add route handlers, error handlers while practicing request and response. This app allows users to add, save, read, and delete notes. Each note will have it's own unique id in which the server provides each time a user adds a note using the save icon. The trash bins are used to delete the note the user chooses and if user decides to open a note, they will be able to open the saved noted by just one click on the note's title. User can start adding notes now by clicking the "Get started" button on the main page. This app is created to be flexible for anyone to be able to get access to this app, this was achieved by having the server check for enviornment variables first for any saved PORT values and also setting an available PORT 4007 for this app to use if there is no PORT mentioned in the enviornment variables. By typing localhost:4007, you will see take-notes0923 app displayed. In order to see the backend server details, follow instructions below. Consider using the app to test backend server work or Postman app as the client. Here is a link to download:

## Resources

Postman
window users: https://www.postman.com/downloads/
Mac users: https://www.postman.com/downloads/canary/

## Dependencies:
UUID : https://www.npmjs.com/package/uuid
express: https://www.npmjs.com/package/express

## Start Program/ Tests:

Back-end server details:
1. git clone this repo to your device.
2. npm install
3. download all dependencies (npm i express / npm i uuid)
4. start program: npm start
5. If your using Posting: 
-Enter method : POST <br>
-Body(raw) : {<br>
  "title": "your note title",<br>
  "text":"your text"
}
-SEND POST
-You will notice the POST was created, a unique identifier is added to the JSON array as a value to the id property created,then this new instance is sent back to the server, where it is then added the the "db.json" file and on the app, check out your new note! 
6. You can test the app also by just using the app (make sure to install npm and all dependencies!)<br>
-Click "Get started"<br>
-Type the title of your note and the context <br>
-Click the save icon <br>
-Look to your left, you will see your note has been added<br>
-The server sneds you feedback of success when your note has been added successfully! If any errors<br>
occured, it would print a status code and let you know of the error. This error is communicated to both the server and the client! <br>
**Try deleting a note on the browser and look back at the db.json file, you will notice how quick the note was removed from the db.json file and the client side is updated of deletion.




## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)


## Contact

Email: abigailtop95@yahoo.com
Github: https://github.com/Ariesscode