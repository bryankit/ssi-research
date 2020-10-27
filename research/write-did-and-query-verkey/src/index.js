/**
 * Example demonstrating how to add DID with the role of Trust Anchor as Steward.
 *
 * Uses seed to obtain Steward's DID which already exists on the ledger.
 * Then it generates new DID/Verkey pair for Trust Anchor.
 * Using Steward's DID, NYM transaction request is built to add Trust Anchor's DID and Verkey
 * on the ledger with the role of Trust Anchor.
 * Once the NYM is successfully written on the ledger, it generates new DID/Verkey pair that represents
 * a client, which are used to create GET_NYM request to query the ledger and confirm Trust Anchor's Verkey.
 *
 * For the sake of simplicity, a single wallet is used. In the real world scenario, three different wallets
 * would be used and DIDs would be exchanged using some channel of communication
 */

const indy = require('indy-sdk')
const util = require('./util')
const colors = require('./colors')

const log = console.log

function logValue() {
    log(colors.CYAN, ...arguments, colors.NONE)
}

async function run() {

    log("Set protocol version 2 to work with Indy Node 1.4")
    await indy.setProtocolVersion(2)

    // Tell SDK which pool you are going to use. You should have already started
    // this pool using docker compose or similar. Here, we are dumping the config
    // just for demonstration purposes.

    // 1.
    log('1. Creates a new local pool ledger configuration that is used later when connecting to ledger.')
    const poolName = 'pool'
    const genesisFilePath = await util.getPoolGenesisTxnPath(poolName)
    const poolConfig = {'genesis_txn': genesisFilePath}
    await indy.createPoolLedgerConfig(poolName, poolConfig)

    // 2.
    log('2. Open pool ledger and get handle from libindy')
    const poolHandle = await indy.openPoolLedger(poolName, undefined)

    // 3.
    log('3. Creating new secure wallet')
    const walletName = {"id": "wallet"}
    const walletCredentials = {"key": "wallet_key"}
    await indy.createWallet(walletName, walletCredentials)

    // 4.
    log('4. Open wallet and get handle from libindy')
    const walletHandle = await indy.openWallet(walletName, walletCredentials)

    // Step 3 code goes here.

    // Step 4 code goes here.

    // Step 5 code goes here.

}


try {
    run()
} catch (e) {
    log("ERROR occured : e")
}
