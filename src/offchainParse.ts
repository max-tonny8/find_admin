import { ethers } from "ethers";

type OffchainOpts = {
    byteCode: string,
    txData: string,
    types: string[]
}

export const offchainParse = ({byteCode, txData, types}: OffchainOpts) => {
    const endOfByteCode = byteCode.slice(-32);
    const startAt = txData.indexOf(endOfByteCode);
    if(startAt === -1) {
        throw new Error("Undefined startAt")
    }
    const constructorByteCode = "0x" + txData.slice(startAt + 32);
    const params = ethers.utils.defaultAbiCoder.decode(types, constructorByteCode);
    return types.map((type, index) => {
        return {type: type, value: params[index]}
    }); 
}

export default offchainParse;