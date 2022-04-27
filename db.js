const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/assessment';
const mongClient = new MongoClient(uri)

async function DBConnect() {
    //let v = '';
    try {
        await mongClient.connect();        
        //v = await findPracticals();

    } catch (e) {
        console.error(e);
    }
    finally {
        //return v;
        //await mongClient.close();
    }
}

async function findDocuments(collection) {
    let allValues = ''
    try {
        var cursor = await mongClient.db('assessment').collection(collection).find({})
        /*await cursor.forEach(        
            doc => console.log(doc)
        );*/

        allValues = await cursor.toArray();
        //console.log(allValues);
    }
    catch (e) {
        console.error(e)        
    }
    finally {
        return allValues;
    }
}

module.exports.ConnectDatabase = DBConnect;
module.exports.Collection = findDocuments;