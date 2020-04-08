// Got this from TinaCMS Docs: https://tinacms.org/docs/nextjs/adding-backends
// Got Gun stuff at https://github.com/amark/gun/blob/master/examples/express.js

const express = require('express')
const next = require('next')
const cors = require('cors')
const gitApi = require('@tinacms/api-git')

//GUN
var Gun  = require('gun');
require('gun/axe');

const gunPort    = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8765;


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()
  const gunApp = express();


   server.use(cors())
   server.use('/___tina', gitApi.router({
     pathToRepo: process.cwd(),
     pathToContent: "",
   }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  gunApp.use(cors());
  gunApp.use(Gun.serve);
  const gunServer = gunApp.listen(gunPort);
  const gun = Gun({	web: gunServer });
  global.Gun = Gun; 
  global.gun = gun;

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

