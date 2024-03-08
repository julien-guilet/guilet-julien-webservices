import redis from 'redis'

let redisClient = null

const initializeRedisClient = async () => {
    redisClient = redis.createClient({
        legacyMode:true,
        socket:{
          port:6379,
          host:'localhost'
        }
      })
    try {
        // connect to the Redis server
        await redisClient.connect();
        console.log(`🟥 Connected to Redis successfully!`);
    } catch (e) {
        console.error(`Connection to Redis failed with error:`);
        console.error(e);
    }
};

const get = async (redisKey)=>{
    return new Promise(resolve => {
        redisClient.get(redisKey,(err, res) => {
            if (err) console.error(err);
            resolve(res)
        })
    })
}
const set = async (redisKey,value,options)=>{
    return new Promise(resolve => {
        redisClient.set(redisKey,value,options,(err, res) => {
            if (err) console.error(err);
            resolve(res)
        })
    })
}


// Tentative de suppression des clés correspondant au modèle spécifié (non fonctionnel)
const  scanAndDelete = async (pattern) => {
    let cursor = '0';
    // delete any paths with query string matches
    const reply = await redisClient.scan(cursor, { MATCH: pattern, COUNT: 1000 });
    for (key of reply.keys) {
      cursor = reply.cursor;
  
      await redisClient.del(key);
    }
  }


// Seconde tentative de suppression des clés correspondant au modèle spécifié (non fonctionnel)
const del = async(pattern, callback) =>{

    let keysToDelete = [];
    const stream = redisClient.scanStream({ match: pattern });

    stream.on('data', function (resultKeys) {
        // Ajouter les clés correspondantes à la liste
        keysToDelete = keysToDelete.concat(resultKeys);
    });

    stream.on('end', function () {
        // Supprimer les clés de la liste
        if (keysToDelete.length > 0) {
            redisClient.del(keysToDelete, function (err, reply) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, reply);
                }
            });
        } else {
            callback(null, "Aucune clé trouvée pour le modèle spécifié.");
        }
    });
}
      




export {
    initializeRedisClient,
    redisClient,
    get,
    set,
    del,
    scanAndDelete
}