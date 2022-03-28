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

    #manifestRP = standardRPManifest
    #manifestBP = standardBPManifest
    #components = null
	
    static Compile = class {
		
        #manifestRP = standardRPManifest
        #manifestBP = standardBPManifest
        #components = null
		
        setRPManifest(manifestRP) {
            this.#manifestRP = manifestRP
            return this
        }

        setBPManifest(manifestBP) {
            this.#manifestBP = manifestBP
            return this
        }

        setComponents(components) {
            this.#components = components
            return this
        }
		
        compile() {
            const compiled = new Compiler(
                this.#manifestRP,
                this.#manifestBP,
                this.#components)
            return compiled
        }
    }

    constructor(manifestRP, manifestBP, components) {
        this.#manifestRP = manifestRP
        this.#manifestBP = manifestBP
        this.#components = components
    }

    compile() {
		console.log('Compiling')
		let data1 = JSON.stringify(this.#manifestRP)
		let data2 = JSON.stringify(this.#manifestBP)
    	fs.mkdirSync('./builds', { recursive: true })
		fs.mkdirSync('./builds/rp', { recursive: true })
		fs.mkdirSync('./builds/bp', { recursive: true })
		fs.writeFile('./builds/rp/manifest.json', data1, (err) => {console.log(err)});
		fs.writeFile('./builds/bp/manifest.json', data2, (err) => {console.log(err)});
		console.log('Compiled')
    }

}