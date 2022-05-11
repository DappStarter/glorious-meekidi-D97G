require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess gloom symptom spot warrior ridge remember protect grace forget flip square'; 
let testAccounts = [
"0x9422af000b56d7e92ccdd93738b267d9cee1158405a7a4ba717bff7d0ff1574e",
"0xdf7212b72c98e7235a72a87abe2e6f39ec8bd2f693f8afc17be4d419b3ea1891",
"0x043cdab855a49f215bd5eacf1a5126e13414b764e730b06ec5b9f8abd9faa41f",
"0x237a93e7e9d7b9c8e204dab9cc65120915c7d18f9037cdefb0d89237b10dc69f",
"0x9a2230b10765a872d00c8152d142d94c5d866a5d19163ebac7047187e25ab5b9",
"0xdadd1d21a2ae979ff301423b1f7e679fde29e4c3994859165f349b244f6059ce",
"0xbb08e3c120eb5bc8609fe69d1e1219f61a8676c2078ec3b2229f6b8574bde987",
"0xe3b7ddacd0def8b89f69cad1780bf0e7007da8713347a2974b5905e164e584ff",
"0xfbcea9ce64131593d9c08150a713f20c8a012a226136588376418269b8477170",
"0xa8ffa59d5f833c665758d53e0c9c8d1da4ee9d726a0e23880918d26580ad0260"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


