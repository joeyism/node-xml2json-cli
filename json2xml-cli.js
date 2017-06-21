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
    console.log("\tjson2xml ".green+"[inputfile]".white+ " " +"[outputfile]".white+"\n");
    console.log("where");
    console.log("\tinputfile: a json file that needs to be converted");
    console.log("\toutputfile (optional): a xmlfile that's outputted\n");
    console.log("Example:");
    console.log("\tjson2xml thiscompany.json thiscompany.xml\n");
}
else if (inputFile != null){
    var inputFilePath = path.join(process.cwd(), inputFile);

    fs.readFile(inputFilePath, function(err,jsonFile){
        if (err){
            console.log(err.toString().red);
            return;
        }
        var parsedDoc = parser.toXml(jsonFile);
        if (outputFile){
            outputFilePath = path.join(process.cwd(), outputFile);
            fs.writeFile(outputFilePath, parsedDoc, function(err){
                if (err){
                    console.log(err.toString().red);
                }
                else {
                    console.log("\n   Complete writing to ".green + outputFile.green + "\n");
                }
            });

        }
        else {
            console.log(parsedDoc);
        }
    });
}
else {
    console.log("Please provide an input file".red); 
}
