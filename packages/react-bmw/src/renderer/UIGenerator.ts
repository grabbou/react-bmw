import fs from 'fs';
import path from 'path';
import Root from './Root';

const shouldGenerateFiles = process.env.GENERATE_UI;
const generatedFilesDir = path.join(process.cwd(), 'uiDescriptionID7');
const xmlFileName = path.join(generatedFilesDir, 'application.xml');
const jsonFileName = path.join(generatedFilesDir, 'uiDescription.json');

export default (root: Root) => {
  if (shouldGenerateFiles) {
    if (!fs.existsSync(generatedFilesDir)) {
      fs.mkdirSync(generatedFilesDir);
    }
    fs.unlink(xmlFileName, () => {
      fs.appendFile(xmlFileName, root.toXML(), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('The XML file was saved in!', xmlFileName);
      });
      fs.appendFile(jsonFileName, JSON.stringify(root.toJSON()), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('The JSON file was saved in!', jsonFileName);
      });
    });
  }
};
