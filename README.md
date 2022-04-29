# Note-Taker
## Description
- This app is create for user to take note and store their note, and also can delete their store note.
## Demonstration

## Screenshots of App
<img width="1440" alt="Screen Shot 2022-04-28 at 6 33 36 PM" src="https://user-images.githubusercontent.com/100381618/165872607-3057cc06-7443-4515-878f-4c3295c7e24b.png">
<img width="1440" alt="Screen Shot 2022-04-28 at 6 35 43 PM" src="https://user-images.githubusercontent.com/100381618/165872722-2420aedd-6ea4-44e0-af2e-ed6965664c7c.png">

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
