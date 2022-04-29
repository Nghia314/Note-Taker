# Note-Taker
## Description
- This app is create for user to take note and store their note, and also can delete their store note.
## Demonstration

## Screenshots of App

## App deploy site
- Heroku https://note-taker-aop.herokuapp.com/
##  Installing
- clone the repository to the local machine, and run the npm install to file.
- when all code is finish run node server.js
-then open http://localhost:5500 if user prefer
## App Build With 
- JavaScript
- NodeJs
- Node Package: Express
## Code snippet
The following code snippet is show how to set up express server.
```
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})
```
## License
- (https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
-(https://img.shields.io/github/languages/top/Nghia314/Note-Taker)
## GitHub repo link and deploy link
- 
- 
