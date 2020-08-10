#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

program
  .version('0.0.1')
  .option('-s, --search [search]', 'Check if currency is supported')
  .parse(process.argv)

if (program.search) {
 console.log(`Checking if currency is supported ${program.search}...`)
} else {
 console.log("This is a list of all supported currencies:");
}

if (program.search) {

  fs.readFile(path.join(__dirname, '../data/dataset.csv'), function(err, content) {
      if (err) throw err;
      console.log(content.indexOf(program.search)>-1 && content.indexOf(program.search) ? "This currency is supported" : "Sorry! This currency is not supported")
  });

}