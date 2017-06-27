# Simple XML2JSON CLI Parser

This is a wrapper around [buglab](http://buglabs.net)'s [XML2JSON](https://github.com/buglabs/node-xml2json).

## Installation
Simply run
```
npm install -g xml2json-cli
```

## To Run

### xml2json
```
$ xml2json [input xml file] [output json file (optional)]
```


**inputfile**: a xml file that needs to be converted

**outputfile** (optional): a json file that's outputted

##### Example
```
$ xml2json somefile.xml samefilebutconverted.json
```
### json2xml
```
$ json2xml [input json file] [output xml file (optional)]
```
**inputfile**: a json file that needs to be converted

**outputfile** (optional): a xmlfile that's outputted
##### Example
```
$ json2xml somefile.json samefilebutconverted.xml
```

# Versions
## 1.1.0
* Removed title on output

## 1.0.0
* Initial
