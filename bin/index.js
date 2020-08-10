#!/usr/bin/env node

const program = require('commander');
const request = require('request');
const endpoint = 'https://focusmobile-interview-materials.s3.eu-west-3.amazonaws.com/Cheap.Stocks.Internationalization.Currencies.csv';

program
  .version('0.0.1')
  .option('-s, --search [search]', 'Check if currency is supported')
  .parse(process.argv)

if (program.search) {
 console.log(`Checking if currency is supported ${program.search}...`)
} else {
 console.log("This is a list of all supported currencies:");
}

 // Check if currency is in ISO 4217 format
if (program.search.length == 3) {
    request.get(endpoint, function (error, response, body) {    // Retrieve contents of csv file from url
      if (!error && response.statusCode == 200) {
          var csv = body;
          console.log(csv.indexOf(program.search.toUpperCase())>-1  ? "This currency is supported" : "Sorry! This currency is not supported")
      } else {
          console.log("Unable to retrieve data from url");
      }
  });
} else {
   console.log("Currency should be 3 characters long");
}

