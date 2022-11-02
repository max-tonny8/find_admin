import { getContractAddress } from "@ethersproject/address";
import { ethers } from "ethers";

type MainOpts = {
    endpoint: string,
    types: string
}

async function main(txHash: string, { endpoint, types }: MainOpts) {
    const provider = new ethers.providers.JsonRpcProvider(endpoint);
    const tx = await provider.getTransaction(txHash);
    const address = getContractAddress(tx);
    const byteCode = await provider.getCode(address);
    const endOfByteCode = byteCode.slice(-32);
    const startAt = tx.data.indexOf(endOfByteCode);
    if(startAt == -1) {
        return console.log("Undefined startAt")
    }
    const constructorByteCode = "0x" + tx.data.slice(startAt + 32);
    const typesArr = types.split(",").map(type => type.replace(/\s/g, ''));
    const params = ethers.utils.defaultAbiCoder.decode(typesArr, constructorByteCode);
    typesArr.map((type, index) => {
        console.log(`(${type}) ${params[index]}`)
    });
}

export default main;