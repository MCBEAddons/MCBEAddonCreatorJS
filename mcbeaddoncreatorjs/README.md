## Minecraft Bedrock Edition Addon Creator JS is a tool which allows you to use NodeJS and create addons without having to type JSON all day.

```js
const { CustomGeoBlock, BlockRow, Compiler, Manifest } = require('mcbeaddoncreatorjs')

const block = new CustomGeoBlock()
	.setName('MyBlock')
	.setIdentifier('my:block')
	.setTextureFile('./assets/myBlock.png')
	.setModelFile('./assets/myBlock.geo.json')

 const blockRow = new BlockRow()
	 .setBlocks({ blocks: [ block ] })

const manifest = new Manifest()
	.setName('My addon')
	.setDescription('My addon description')
	.setAuthor('Example')
	.setWebsite('Example.com')

 const compiler = new Compiler()
	.setManifest(manifest.toJSON())
	.setBlocks({ blocks: [ blockRow ] })
```