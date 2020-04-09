import Gun from 'gun/gun';
const nomGraph = "docs-arrels";

//definir peers gun
export const gunPeers = ["https://localhost:8765/gun","https://prova-gun.herokuapp.com:8765/gun"];


const gun = Gun(gunPeers);


/**
 * @description Obtenir l'últim capítol llegit per l'usuari // Get the last chapter read by the user
 * @param {String} path 
 * @param {String} req Pot ser 'get' o 'set'
 */
export async function ultimCapitol(req, path) {

    // Check if this is a valid request
    if (req !== 'get' && req !== 'set') {

        console.error('Request incorrecte, s\'esperava get o set i s\'ha rebut ', req);

    }
    
    // Break the path
    const parts = path.split('/');
    const doc = parts[2]; // Nom del document
    const docKey = doc.split('-')[1];
    const capitol = parts[3];

    if (req === 'set') {        

        console.log('S\'ha rebut un req de tipus set');
        
        gun.get(nomGraph).get(docKey).get(capitol).get("llegit").put(true, (ack) => {

            if (ack.err) {
                console.error('Vaja...', ack.err);
            }

            console.log('set ha funcionat', ack);

        });

    } else {

        console.log(`S\'ha rebut un req de tipus get: ${capitol}`);

        return gun.get(nomGraph).get(docKey).get(capitol).get("llegit").once((res) => {

            console.log(`resposta del get ${capitol}`, res);


            return res

        },{wait: 0})

    }

}

/**
 * @description Inicia l'emmagatzematge local pels usuaris nous / Init LocalStorage store
 */
export function initGun() {

    if (typeof window !== "undefined") {
        

        gun.get(nomGraph).once((res) => {

            if (res == undefined) {

                console.log('afegim valor');

                gun.get(nomGraph).put({
                    zero: "",
                    primer: "",
                    segon: ""
                });

                gun.get(nomGraph).once((resp) => {

                    console.log('res 2a', resp);

                })

            } else {

                console.log('Genial!! El gun està funcionant correctament');

            }

        })


    }

}

