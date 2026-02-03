import { Address, toNano } from "@ton/core";
import { Main } from "../wrappers/Main";
import { NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider, args: string[]) {
    const address = Address.parse(args[0]);
    const main = provider.open(Main.fromAddress(address));
    
    console.log("Current data:", await main.getData());
    console.log("Owner:", await main.getOwner());
}