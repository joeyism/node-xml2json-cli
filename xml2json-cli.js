#!/usr/bin/env node
var parser = require("xml2json");
var params = process.argv;
var colors = require("colors");
var path = require("path");
var fs = require("fs");

var inputFile = params[2];
var outputFile = params[3];

var title = ""+
"                 _   ___      _                 \n"+
"                | | |__ \\    (_)                \n"+
" __  ___ __ ___ | |    ) |    _ ___  ___  _ __  \n"+
" \\ \\/ / '_ ` _ \\| |   / /    | / __|/ _ \\| '_ \\ \n"+
"  >  <| | | | | | |  / /_    | \\__ \\ (_) | | | |\n"+
" /_/\\_\\_| |_| |_|_| |____|   | |___/\\___/|_| |_|\n"+
"                            _/ |                \n"+
"                           |__/                 \n";


console.log(title);
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
    var inputFilePath = path.join(process.cwd(), inputFile);
    var parsedDoc = parser.toJson(inputFilePath);
    var parsedDocText = JSON.stringify(parsedDoc, null, "\t");
    if (outputFile){
        outputFilePath = path.join(process.cwd(), outputFile);
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
}
else {
    console.log("Please provide an input file".red); 
}
