'use strict';

class Block {
  	constructor(data) {
    
    	this.data = data;
  	}
  
  	toJSON() {
    	return { ...this.data };
  	}
}

module.exports = Block;