'use strict';

module.exports = Object.assign(require('utilitas'), {
    elliptic: require('elliptic'),
    eos: require('eosjs'),
    eosEcc: require('eosjs-ecc'),
    eosKeos: require('eosjs-keos'),
    eosKeygen: require('eosjs-keygen'),
    eosNameVerify: require('eos-name-verify'),
    ethereumUtil: require('ethereumjs-util'),
    pg: require('pg'),
    secp256k1: require('secp256k1'),
    ws: require('ws'),
}, {
    account: require('./lib/account'),
    config: require('./lib/config'),
    crypto: require('./lib/crypto'),
    database: require('./lib/database'),
    finance: require('./lib/finance'),
    mixin: require('./lib/mixin'),
    node: require('./lib/node'),
    pacman: require('./lib/pacman'),
    producer: require('./lib/producer'),
    prsc: require('./lib/prsc'),
    sushibar: require('./lib/sushibar'),
    sushitrain: require('./lib/sushitrain'),
    swap: require('./lib/swap'),
    table: require('./lib/table'),
});
