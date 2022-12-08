Write a API in expressjs to read and edit a existing PDF File.

//import necessary libraries and modules
const express = require('express');
const fs = require('fs');
const pdf = require('pdf-parse');

//create an express app
const app = express();

//Read PDF file
app.get('/read-pdf', (req, res) => {
    let dataBuffer = fs.readFileSync('example.pdf');
    pdf(dataBuffer).then(function(data) {
        //store the pdf data
        let pdf_data = data.text;
        //send the pdf data back to client
        res.send(pdf_data);
    });
});

//Edit PDF file
app.put('/edit-pdf', (req, res) => {
    let dataBuffer = fs.readFileSync('example.pdf');
    pdf(dataBuffer).then(function(data) {
        //store the pdf data
        let pdf_data = data.text;
        //edit the pdf data
        pdf_data = pdf_data.replace('old-text', 'new-text');
        //write the edited pdf data to a new pdf file
       



