import Gun from 'gun';
const nomGraph = "docs-arrels";

//definir peers gun
export const gunPeers = ["https://localhost:8765/gun","https://prova-gun.herokuapp.com:8765/gun"];


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

    const gun = Gun(gunPeers);

    // Break the path
    const parts = path.split('/');
    const doc = parts[2]; // Nom del document
    const docKey = doc.split('-')[1];
    const capitol = parts[3];


    if (req === 'set') {
        
        
        gun.get(nomGraph).get(docKey).get(capitol).get("llegit").put(true, (ack) => {

            if (ack.err) {
                console.error('Vaja...', ack.err);
            }

        });


    } else {

        return gun.get(nomGraph).get(docKey).get(capitol).get("llegit").once((res, key) => {
            return res
        },{wait: 0})

    }

}

/**
 * @description Inicia l'emmagatzematge local pels usuaris nous / Init LocalStorage store
 */
export function initGun() {

    if (typeof window !== "undefined") {

        const gun = Gun(gunPeers);

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

