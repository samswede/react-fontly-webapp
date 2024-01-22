const fs = require('fs');
const path = require('path');

const fonts = require('./fonts.mongo');  

function loadFontsData() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '..', '..', 'data', 'font_collection.json'), 'utf8', async (err, data) => {
            if (err) {
                console.error(err);
                return reject(err);
            }

            try {
                const fontsData = JSON.parse(data);
                for (const font of fontsData) {
                    await saveFont(font);
                }
                const countFontsFound = await getAllFonts();
                console.log(`${countFontsFound.length} fonts found!`);
                resolve();
            } catch (parseErr) {
                console.error(parseErr);
                reject(parseErr);
            }
        });
    });
}

async function getAllFonts() {
    return await planets.find({}, {
      '_id': 0, 
      '__v': 0,
    
    }); // exclude the _id and __v fields
    };
  
async function saveFont(font) {
  try {
    await fonts.updateOne({
      index: font.index
      }, 
      {
      name: font.name 
      },
      {
        embedding: font.embedding 
        },
      {
      upsert: true,
      },
    )

  } catch(err) {
    console.error(`Could not save font because: ${err}`);
  }
};
  

module.exports = {
    loadFontsData,
    getAllFonts,
    };