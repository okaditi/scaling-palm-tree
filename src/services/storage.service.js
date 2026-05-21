const ImageKit = require("@imagekit/nodejs");
require('dotenv').config();

const imagekit = new ImageKit({
    privatekey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(buffer){
    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}

module.exports = uploadFile;