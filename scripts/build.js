const biliConfigBase = require('../bili.config')
const biliConfigClient = require('../bili.config.client')
const biliConfigServer = require('../bili.config.server')
const Bili = require('bili')
const argv = require('yargs').argv

let biliConfig
let input
if (argv.client) {
  biliConfig = biliConfigClient
  input = argv.client
} else if (argv.server) {
  biliConfig = biliConfigServer
  input = argv.server
}

Bili.write({
  ...biliConfigBase,
  ...biliConfig,
  input: input,
  cwd: calleeDirectory /** App dir */,
})
