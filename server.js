const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const app = express();
const express = require('express');

const allNotes = require('./db/db.json');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


require('./routes/apiRoutes')(app);
require('./routes/htmlRoute')(app);


app.listen(PORT, () => {
    console.log(`listening on localhost${PORT}`)
});