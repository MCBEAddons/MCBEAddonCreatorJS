'use strict';

const { Block } = require('./block')
const { typeErrors } = require('../errors')
const { readFile } = require('../util')

/**
 * @file Creates a block
 * @author Noinkin
 * @copyright MCBEAddons
 */

class CustomGeoBlock extends Block {
	// JSDoc Soon

	constructor() {
		/**
    	 * @readonly
    	 */
        this.name = "MCBE Addon Creator JS Block";
		/**
    	 * @readonly
    	 */
        this.id = "js:mcbeaddoncreator";
		/**
    	 * @readonly
    	 */
        this.textureFile = null;
		/**
    	 * @readonly
    	 */
        this.modelFile = null;
		/**
    	 * @readonly
    	 */
		this.data = {}
    }
    
	setName(name) {
		// Needs Update
		if (!typeof name === 'string') throw new Error(typeErrors.notString);

		/**
    	 * @readonly
    	 */
        this.name = name;
		return this;
    };

    setIdentifier(id) {
		// Needs Update
		if (!typeof id === 'string') throw new Error(typeErrors.notString)

		/**
    	 * @readonly
    	 */
		this.id = id;
		return this;
     };

    setTextureFile(textureFile) {
		const texture = readFile(textureFile)
		const loc = textureFile.split('/');
	  	const loc1 = loc.pop();
		const loc2 = loc1.split('.');
		/**
    	 * @readonly
    	 */
		this.textureFileName = loc2[0];
		/**
    	 * @readonly
    	 */
		this.textureFile = texture;
        return this;
    };

    setModelFile(modelFile) {
		const model = readFile(modelFile);
		const modelJSON = JSON.parse(model)
		/**
    	 * @readonly
    	 */
		this.modelFileName = modelJSON['minecraft:geometry'][0]['description']['identifier'];
		/**
    	 * @readonly
    	 */
        this.modelFile = model;
        return this;
    };

	toJSON() {
		if (this.textureFile === null) throw new Error("Type Error: Block " + this.name + " Does not have a texture.");
		if (this.modelFile === null) throw new Error("Type Error: Block " + this.name + " Does not have a model.");
		this._JSON = {
			lang: `tile.${this.id}.name = ${this.name}`,
			texture: this.textureFile,
			textureName: this.textureFileName,
			model: this.modelFile,
			modelName: this.modelFileName,
			"format_version": "1.16.100",
			"minecraft:block": {
				"description": {
					"identifier": this.id,
					"is_experimental": false
				},
				"components": {
					"minecraft:geometry": "geometry." + this.modelFileName,
					"minecraft:material_instances": {
						"*": {
							"texture": this.textureFileName,
							"render_method": "alpha_test"
						}
					},
					"minecraft:pick_collision": {
						"origin": [
							-8,
							0,
							-8
						],
						"size": [
							16,
							16,
							16
						]
					},
					"minecraft:entity_collision": {
						"origin": [
							-8,
							0,
							-8
						],
						"size": [
							16,
							16,
							16
						]
					}
				}
			}
		}
		return JSON.stringify(this._JSON)
	}
}

module.exports = CustomGeoBlock;