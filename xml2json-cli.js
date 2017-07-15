#!/usr/bin/env node
var parser = require("xml2json");
var params = process.argv;
var colors = require("colors");
var path = require("path");
var fs = require("fs");

var inputFile = params[2];
var outputFile = params[3];

if (inputFile === "--help" || inputFile === "-h"){
    console.log("To run:\n");
    console.log("\txml2json ".green+"[inputfile]".white+ " " +"[outputfile]".white+"\n");
    console.log("where");
    console.log("\tinputfile: a xml file that needs to be converted");
    console.log("\toutputfile (optional): a json file that's outputted\n");
    console.log("Example:");
    console.log("\txml2json thiscompany.xml thiscompany.json\n");
}
else if (inputFile != null){
    var inputFilePath = path.resolve(process.cwd(), inputFile);

    fs.readFile(inputFilePath, function(err, xmlFile){
        if (err){
            console.log(err.toString().red);
            return;
        }
        var options = {object: true};
        var parsedDoc = parser.toJson(xmlFile, options);
        var parsedDocText = JSON.stringify(parsedDoc, null, "\t");
        if (outputFile){
            outputFilePath = path.resolve(process.cwd(), outputFile);
            fs.writeFile(outputFilePath, parsedDocText, function(err){
                if (err){
                    console.log(err.toString().red);
                }
                else {
                    console.log("\n   Complete writing to ".green + outputFile.green + "\n");
                }
            });

        }
        else {
            console.log(parsedDocText);
        }
    });
}
else {
    console.log("Please provide an input file".red); 
}
