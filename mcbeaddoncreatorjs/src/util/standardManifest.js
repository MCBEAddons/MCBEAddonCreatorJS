const standardBPManifest = {
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
      "Noinkin#5026",
	  "TheAwesomeGuy47#8156"
    ],
    "url": "MCBEAddons.tk"
  }
}

const standardRPManifest = {
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
      "Noinkin#5026",
	  "TheAwesomeGuy47#8156"
    ],
    "url": "MCBEAddons.tk"
  }
}

class StandardManifests {
	// JS Doc Tags soon
	constructor() {
		/** @public */
		this.BP = standardBPManifest;
		/** @public */
		this.RP = standardRPManifest;
	}
}

module.exports = StandardManifests