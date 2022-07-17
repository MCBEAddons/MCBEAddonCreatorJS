'use strict';

const { v4: uuidv4 } = require('uuid');

/**
 * @author Noinkin
 */
class RPManifest {
	/**
	 * @deprecated since dev-1.1.0
	 */

	constructor() {
        this.name = "MCBE Addon Creator JS";
        this.description = "This addon was made using MCBE Addon Creator JS";
        this.author = "Noinkin#5026, TheAwesomeGuy47#8156";
		this.website = "MCBEAddons.tk";
    };

	setName(name) {
        this.name = name;
        return this;
    };

    setDescription(description) {
        this.description = description;
        return this;
    }

    setAuthor(author) {
        this.author = author;
        return this;
    }

	setWebsite(website) {
        this.website = website;
        return this;
    }
	
	toJSON() {
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

module.exports = RPManifest;