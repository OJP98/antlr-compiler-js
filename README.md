# js-antlr

A decaf parser implementation using JavaScript and ANTLR4 Visitor generated file. It's created on a [specified grammar](src/grammar/Decaf.g4). You may test out files from the browser, wether you want to upload a .decaf file and/or write your own in the integrated editor. Use it online in this [netlify link](https://decafparser.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3b596e5-d5f3-4c06-acf5-b79dec62fd27/deploy-status)](https://app.netlify.com/sites/decafparser/deploys)

## Requirements

* Node.js: v11 or higher.

In case you want to generate your own files using antlr:

* Java
* [ANTLR](https://www.antlr.org/) (with antlr4 command available)

## Get Started

### Clone the repo
```
git clone https://github.com/OJP98/js-antlr
cd js-antlr
```
### Install npm packages
Install the `npm` packages described in the `package.json` and verify that it works:
```
npm install
npm start
```
The npm start command builds the application into dist/, watches for changes to the source files, and runs lite-server on port 5000.

Shut it down manually with Ctrl-C.

### Build
1. To generate the build (dist folder)
```
npm run build
```
