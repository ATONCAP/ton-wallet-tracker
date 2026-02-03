import { useEffect, useState } from "react";
import { useTonConnect } from "./useTonConnect";
import { Main } from "../../../wrappers/Main";
import { Address, toNano } from "@ton/core";

export function useMainContract() {
  const { sender, client } = useTonConnect();
  const [data, setData] = useState<bigint>();

  const contractAddress = Address.parse("YOUR_CONTRACT_ADDRESS");

  useEffect(() => {
    async function fetchData() {
      if (!client) return;
      const contract = client.open(Main.fromAddress(contractAddress));
      setData(await contract.getData());
    }
    fetchData();
  }, [client]);

  const sendPing = async () => {
    if (!sender || !client) return;
    const contract = client.open(Main.fromAddress(contractAddress));
    await contract.send(sender, { value: toNano("0.05") }, "ping");
  };

  return { data, sendPing };
}