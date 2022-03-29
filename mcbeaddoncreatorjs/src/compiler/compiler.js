const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
let standardRPManifest = {
  "format_version": 2,
  "header": {
    "name": "MCBE Addon Creator JS Addon RP",
    "description": "This addon was made using MCBE Addon Creator JS",
    "uuid": uuidv4(),
    "version": [
      1,
      0,
      0
    ],
    "min_engine_version": [
      1,
      17,
      0
    ]
  },
  "modules": [
    {
      "type": "resources",
      "uuid": uuidv4(),
      "version": [
        1,
        0,
        0
      ]
    }
  ],
  "metadata": {
    "authors": [
      "Noinkin#5026"
    ],
    "url": "MCBEAddons.tk"
  }
}

let standardBPManifest = {
  "format_version": 2,
  "header": {
    "name": "MCBE Addon Creator JS Addon",
    "description": "This addon was made using MCBE Addon Creator JS",
    "uuid": uuidv4(),
    "version": [
      1,
      0,
      0
    ],
    "min_engine_version": [
      1,
      17,
      0
    ]
  },
  "modules": [
    {
      "type": "data",
      "uuid": uuidv4(),
      "version": [
        1,
        0,
        0
      ]
    }
  ],
  "metadata": {
    "authors": [
      "Noinkin#5026"
    ],
    "url": "MCBEAddons.tk"
  }
}

class Compiler {

	constructor() {
        this.manifestRP = standardRPManifest
        this.manifestBP = standardBPManifest
        this.components = []
    }

	setRPManifest(manifestRP) {
        this.manifestRP = manifestRP
        return this
    }

    setBPManifest(manifestBP) {
        this.manifestBP = manifestBP
        return this
    }

    setComponents(components) {
        this.components = components
        return this
    }
	
	compile() {
		console.log('Compiling')
		let data1 = JSON.stringify(this.manifestRP)
		let data2 = JSON.stringify(this.manifestBP)
    	fs.mkdirSync('./builds', { recursive: true })
		fs.mkdirSync('./builds/rp', { recursive: true })
		fs.mkdirSync('./builds/bp', { recursive: true })
		fs.writeFile('./builds/rp/manifest.json', data1, (err) => {console.log(err)});
		fs.writeFile('./builds/bp/manifest.json', data2, (err) => {console.log(err)});
		console.log('Compiled')
    }

}

module.exports = Compiler