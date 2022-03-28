# MCBE Addon Creator JS

```
  __  __  ___ ___ ___     _   ___  ___   ___  _  _ 
 |  \/  |/ __| _ ) __|   /_\ |   \|   \ / _ \| \| |
 | |\/| | (__| _ \ _|   / _ \| |) | |) | (_) | .` |
 |_|  |_|\___|___/___| /_/ \_\___/|___/ \___/|_|\_|

  ___ ___ ___   _ _____ ___  ___      _ ___ 
 / __| _ \ __| /_\_   _/ _ \| _ \  _ | / __|
| (__|   / _| / _ \| || (_) |   / | || \__ \
 \___|_|_\___/_/ \_\_| \___/|_|_\  \__/|___/
```

## Minecraft Bedrock Edition Addon Creator JS is a tool which allows you to use NodeJS and create addons without having to type JSON all day.

```js
const { Block } = require('mcbeaddoncreatorjs')

const block = new Block.Builder()
	.setName('MyBlock')
	.setId(1000)
	.setTextureFile('./assets/myBlock.png')
	.setModelFile('./assets/myBlock.geo.json')
	.build()

compile({ components: [ block ] })
```