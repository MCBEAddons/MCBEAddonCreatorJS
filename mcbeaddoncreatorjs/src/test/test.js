class MCBE {

    #name = null
    #id = null
    #textureFile = null
    #modelFile = null

    // We define a static Builder class within `MCBE`
    static BlockBuilder = class {
        // the builder class will have the same attributes as
        // the parent
        #name = null
        #id = null
        #textureFile = null
        #modelFile = null

        // there are four methods to set each of the four
        // attributes
        setName(name) {
			/* Check if String */
			if (!typeof name === 'string') return console.error("String Error: Block name is not a string");
			
            this.#name = name
			return this
        }

        setId(id) {
            /* Check if integer */
			if (!Number.isInteger(id)) return console.log("Integer Error: Block id is not an integer value");

			this.#id = id
			return this
        }

        setTextureFile(textureFile) {
            this.#textureFile = textureFile
            return this
        }

        setModelFile(modelFile) {
            this.#modelFile = modelFile
            return this
        }

		/* Build it */
		build() {
            const block = new MCBE(
                this.#name,
                this.#id,
                this.#textureFile,
                this.#modelFile)
            return block
        }
    }

    constructor(name, id, textureFile, modelFile) {
        this.#name = name
        this.#id = id
        this.#textureFile = textureFile
        this.#modelFile = modelFile
    }

    toString() {
        return `name: ${this.#name}
id: ${this.#id}
texture file: ${this.#textureFile}
model file: ${this.#modelFile}`
    }

}

module.exports = MCBE