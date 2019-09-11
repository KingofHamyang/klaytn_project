// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'

const PRIVATE_KEY = '0x0a4b2397f2b13383b93ece4afb920a74ac7a51ce073ea07512d7ea9bbaae2722'

module.exports = {
    networks : {
        klaytn : {
            provider : new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id : NETWORK_ID,
            gas : GASLIMIT,
            gasPrice : null,
        },
    },
}
