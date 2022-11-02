require("dotenv").config();

const base = [
    'CONSTRUCTOR_DETECTOR_ENDPOINT',
    'ENDPOINT',
    'CONSTRUCTOR',
    'CONSTRUCTOR_ENDPOINT',
    'WEB3_ENDPOINT',
];

const keysUrl = (keys: string[]) => {
    let res: string[] = [];

    keys.map(key => {
        res.push(`URL_${key}`)
        res.push(`${key}_URL`)
    })

    return [...res, ...keys];
}

const keysNetworks = (keys: string[], networks: string[]) => {
    let res: string[] = [];

    keys.map(key => {
        networks.map(network => {
            res.push(`${network}_${key}`)
        })
    })

    keys.map(key => {
        networks.map(network => {
            res.push(`${key}_${network}`)
        })
    })

    return [...res, ...keys];
}

const networks = [
    "ETHEREUM",
    "BSC",
    "BINANCE",
    "POLYGON",
    "ARBITRUM",
    "HECO",
    "ETH",
    "ETHER"
]
const keys = keysUrl(keysNetworks(base, networks))

const findEndpoint = (keys: string[]) => {
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if(process.env[key] !== undefined) {
            return process.env[key];
        }
        
    }
    return undefined;
}

const defaultEndpoint = findEndpoint(keys);
export default defaultEndpoint;