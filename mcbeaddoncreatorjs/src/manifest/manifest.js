'use strict';

/**
 * @file Creates both Manifests
 * @author Noinkin
 * @copyright MCBEAddons
 */

const { v4: uuidv4 } = require('uuid');

/**
 * @class
 * @classdesc The Main Manifest of the addon
 */
class Manifest {
	/**
	 * Create the Manifest Class.
	 * @example
	 * // Creates the addon
	 * const manifest = new Manifest()
	 */
	constructor() {
        this.name = "MCBE Addon Creator JS";
        this.description = "This addon was made using MCBE Addon Creator JS";
        this.author = "Noinkin#5026, TheAwesomeGuy47#8156";
		this.website = "MCBEAddons.tk";
    };

	/**
	 * Set a name for the addon
	 * @param {string} name - The name of the addon
	 * @example
	 * // Sets the name of the addon
	 * manifest.setName('MyAddonName')
	 */
	setName(name) {
        this.name = name;
        return this;
    };

	/**
	 * Set a description for the addon
	 * @param {string} description - The description of the addon
	 * @example
	 * // Sets the description of the addon
	 * manifest.setDescription('MyAddonDescription')
	 */
    setDescription(description) {
        this.description = description;
        return this;
    };

	/**
	 * Set an author for the addon
	 * @param {string} author - The author of the addon
	 * @example
	 * // Sets the author of the addon
	 * manifest.setAuthor('MyAddonAuthor')
	 */
    setAuthor(author) {
        this.author = author;
        return this;
    };

	/**
	 * Set a website for the addon
	 * @param {string} website - The website of the addon
	 * @example
	 * // Sets the website of the addon
	 * manifest.setWebsite('MyAddonWebsite')
	 */
	setWebsite(website) {
        this.website = website;
        return this;
    };

	/**
	 * Get the BP Manifest
	 * @example
	 * // Gets the BP of the addon
	 * manifest.toJSONBP()
	 * @return {object} The BP Manifest
	 */
	toJSONBP() {
		let jsonVer = {
"format_version": 2,
  "header": {
    "name": this.name,
    "description": this.description,
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
      this.author
    ],
    "url": this.website
  }
	}
	return JSON.stringify(jsonVer);
    }

	/**
	 * Get the RP Manifest
	 * @example
	 * // Gets the RP of the addon
	 * manifest.toJSONRP()
	 * @return {object} The RP Manifest
	 */
	toJSONRP() {
		let jsonVer = {
  "format_version": 2,
  "header": {
    "name": this.name,
    "description": this.description,
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
      this.author
    ],
    "url": this.website
  }
}
	return JSON.stringify(jsonVer);
    }

}

module.exports = Manifest;