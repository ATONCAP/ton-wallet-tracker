import { Blockchain, SandboxContract, TreasuryContract } from "@ton/sandbox";
import { toNano } from "@ton/core";
import { Main } from "../wrappers/Main";
import "@ton/test-utils";

describe("Main", () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let main: SandboxContract<Main>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        deployer = await blockchain.treasury("deployer");
        main = blockchain.openContract(await Main.fromInit());
        
        await main.send(deployer.getSender(), { value: toNano("0.05") }, { $$type: "Deploy", queryId: 0n });
    });

    it("should deploy", async () => {
        // Deployment tested in beforeEach
    });

    it("should respond to ping", async () => {
        const result = await main.send(deployer.getSender(), { value: toNano("0.05") }, "ping");
        expect(result.transactions).toHaveTransaction({ success: true });
    });
});