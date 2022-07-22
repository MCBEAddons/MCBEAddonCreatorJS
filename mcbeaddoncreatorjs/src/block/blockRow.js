'use strict';

const { Block } = require('./block')

class BlockRow extends Block {
  	constructor({ blocks }) {
    	super(data);

		/**
    	 * The blocks in this block row
    	 * @type {Block[]}
    	 * @readonly
    	 */
    	this.blocks = blocks.map(b => b.toJSON());
  	}
  
 	toJSON() {
   		return { blocks: this.blocks };
  	}
}

module.exports = BlockRow;