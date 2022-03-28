import { v4 as uuidv4 } from 'uuid'

function compile(builders) {
    fs.mkdirSync('./builds', { recursive: true })
	fs.mkdirSync('./builds/rp', { recursive: true })
	fs.mkdirSync('./builds/bp', { recursive: true })
}