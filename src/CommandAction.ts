import parse from "./parse";

type CommandOpts = {
    endpoint: string,
    types: string
}

const CommandAction = async (txHash: string, { endpoint, types }: CommandOpts) => {
    const typesArr = types.split(",").map(type => type.replace(/\s/g, ''));
    (await parse({
        txHash,
        endpoint,
        types: typesArr
    })).map(res => {
        console.log(`(${res.type}) ${res.value}`)
    })
}

export default CommandAction;