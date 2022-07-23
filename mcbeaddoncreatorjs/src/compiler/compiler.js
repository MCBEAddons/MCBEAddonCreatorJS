'use strict';

/**
 * @file Compiles everything
 * @author Noinkin
 * @copyright MCBEAddons
 */

const fs = require('fs');
const StandardManifests = require('../util/standardManifest')

class Compiler extends StandardManifests {
	// JSDoc Tags soon.

	constructor() {
        this.manifestRP = this.RP;
        this.manifestBP = this.BP;
    };

	setManifest(manifest) {
        this.manifestRP = manifest.toJSONRP;
		this.manifestBP = manifest.toJSONBP;
        return this;
    };

	compile() {
		// Update Soon.
		console.log('MCBE Addons is compiling your addon. Please wait...');
		let data1 = JSON.stringify(this.manifestRP);
		let data2 = JSON.stringify(this.manifestBP);
    	fs.mkdirSync('./builds', { recursive: true });
		console.log('Main Folder Created.')
		fs.mkdirSync('./builds/rp', { recursive: true });
		fs.mkdirSync('./builds/bp', { recursive: true });
		console.log('BP and RP Folder Created.')
		fs.writeFile('./builds/rp/manifest.json', data1, (err) => {console.log(err)});
		fs.writeFile('./builds/bp/manifest.json', data2, (err) => {console.log(err)});
		console.log('Manifests Created.')
		console.log('Compiled');
		console.log('Thank you for using MCBE Addon Creator JS');
    }

}

module.exports = Compiler;