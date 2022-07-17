'use strict';

let baseParamaters = {
	toCome: "Soon"
}

class OldBlock {
	/**
	* @deprecated since dev-1.1.0
	*/

	constructor() {
        this.name = "MCBE Addon Creator JS Block";
        this.id = 1000;
        this.textureFile = null;
        this.modelFile = null;
		this.paramaters = baseParamaters;
    }
    setName(name) {
		if (!typeof name === 'string') return console.error("String Error: Block name is not a string");
		
        this.name = name;
		return this;
    };

    setId(id) {
		if (!Number.isInteger(id)) return console.log("Integer Error: Block id is not an integer value");

		this.id = id;
		return this;
     };

    setTextureFile(textureFile) {
        this.textureFile = textureFile;
        return this;
    };

    setModelFile(modelFile) {
        this.modelFile = modelFile;
        return this;
    };

	setParameters(parameters) {
		this.parameters = parameters;
		return this;
	};

    toString() {
        return `name: ${this.name}
id: ${this.id}
texture file: ${this.textureFile}
model file: ${this.modelFile}`
    }

}

module.exports = OldBlock