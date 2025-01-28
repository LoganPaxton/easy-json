const fs = require('fs');

let fp = null;

function initializeJSON(filePath) {
    if (!filePath) {
        console.error("Easy-JSON: A file path is required to initialize!");
        return;
    }

    const exists = fs.existsSync(filePath);
    if (!exists) {
        // Create an empty JSON object if the file doesn't exist
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
        console.log("File created:", filePath);
    }

    fp = filePath;
}

function writeKey(key, data) {
    if (!fp) {
        console.error("Easy-JSON: You need to initialize Easy-JSON first!");
        return;
    }

    // Read existing file content
    let jsonFileData;
    try {
        const fileData = fs.readFileSync(fp, { encoding: 'utf-8' });
        jsonFileData = JSON.parse(fileData);
    } catch (err) {
        console.error("Easy-JSON: Failed to read or parse JSON file!", err);
        return;
    }

    // Add new key-value pair
    jsonFileData[key] = data;

    // Write updated content back to the file
    try {
        fs.writeFileSync(fp, JSON.stringify(jsonFileData, null, 2));
        console.log("Key added:", key, "=>", data);
    } catch (err) {
        console.error("Easy-JSON: Failed to write to JSON file!", err);
    }
}

function readKey(key) {
    if (!fp) {
        console.error("Easy-JSON: You need to initialize Easy-JSON first!");
        return;
    }

    try {
        const fileData = fs.readFileSync(fp, { encoding: 'utf-8' });
        const jsonFileData = JSON.parse(fileData);

        return jsonFileData[key];
    } catch (err) {
        console.error("Easy-JSON: Failed to read or parse JSON file!", err);
        return undefined;
    }
}

module.exports = {
    readKey,
    writeKey,
    initializeJSON
}