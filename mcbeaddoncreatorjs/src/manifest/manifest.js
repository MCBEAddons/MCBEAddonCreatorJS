'use strict';

const { v4: uuidv4 } = require('uuid');

/**
 * @author Noinkin
 */
class Manifest {
	/**
	 * Create the Manifest Class.
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
	 */
	setName(name) {
        this.name = name;
        return this;
    };

	/**
	 * Set a description for the addon
	 * @param {string} description - The description of the addon
	 */
    setDescription(description) {
        this.description = description;
        return this;
    };

	/**
	 * Set an author for the addon
	 * @param {string} author - The author of the addon
	 */
    setAuthor(author) {
        this.author = author;
        return this;
    };

	/**
	 * Set a website for the addon
	 * @param {string} website - The website of the addon
	 */
	setWebsite(website) {
        this.website = website;
        return this;
    };

	/**
	 * Get the BP Manifest
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