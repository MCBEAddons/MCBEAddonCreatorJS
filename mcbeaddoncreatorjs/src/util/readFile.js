const fs = require('fs').promises;

async function readFile(filePath) {
 	try {
	 	const location = process.argv[1].split('/')
	  	location.pop()
	  	const finalLoc = location.join('/')
	  	const data = await fs.readFile(`${finalLoc}/${filePath}`);
      	return data;
  	} catch (error) {
    	console.error(`Got an error trying to read the file: ${error.message}`);
  	}
}

module.exports = readFile;