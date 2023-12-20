const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layers || !layers.includes(layer)) {
    throw new Error(`Print slice ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Print name of slice');
}

createTemplate(layer, sliceName);
