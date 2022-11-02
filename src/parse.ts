import { getContractAddress } from "@ethersproject/address";
import { ethers } from "ethers";
import offchainParse from "./offchainParse";

async function parse({txHash, endpoint, types}: {
    txHash: string,
    endpoint: string,
    types: string[]
}) {
    const provider = new ethers.providers.JsonRpcProvider(endpoint);
    const tx = await provider.getTransaction(txHash);
    const address = getContractAddress(tx);
    const byteCode = await provider.getCode(address);
    return offchainParse({
        byteCode, 
        txData: tx.data,
        types
    });
}

export default parse;