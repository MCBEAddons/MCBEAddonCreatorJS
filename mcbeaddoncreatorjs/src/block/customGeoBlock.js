'use strict';

const { Block } = require('./block')

/**
 * @file Creates a block
 * @author Noinkin
 * @copyright MCBEAddons
 */

class CustomGeoBlock extends Block {
	// JSDoc Soon

	constructor() {
		super(this.data)
        this.name = "MCBE Addon Creator JS Block";
        this.id = 1000;
        this.textureFile = null;
        this.modelFile = null;
		this.data = {}
    }
    
	setName(name) {
		// Needs Update
		if (!typeof name === 'string') return console.error("String Error: Block name is not a string");
		
        this.name = name;
		return this;
    };

    setId(id) {
		// Needs Update
		if (!Number.isInteger(id)) return console.log("Integer Error: Block id is not an integer value");

		this.id = id;
		return this;
     };

    setTextureFile(textureFile) {
		// Needs Update
        this.textureFile = textureFile;
        return this;
    };

    setModelFile(modelFile) {
		// Needs Update
        this.modelFile = modelFile;
        return this;
    };

}

module.exports = CustomGeoBlock;