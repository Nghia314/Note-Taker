const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const app = express();
const express = require('express');

const allNotes = require('./db/db.json');

