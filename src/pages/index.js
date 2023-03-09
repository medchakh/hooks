import {  useState } from "react";
import styles from "../styles/Home.module.css";
import { useWalletConnect, useCoinbaseWallet, useMetamask } from "@thirdweb-dev/react";

function Home() {
  //   const { contract, isLoading } = useContract("0xEde2c80b714A41c513431599D787Acb230Ab215C", "marketplace")
  const [listings, setListings] = useState();
  const connectCoinbase = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithMetamask = useMetamask();

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => connectWithWalletConnect()}>Wallet Connect</div>
      <div className={styles.item} onClick={() => connectCoinbase()}>connect Coinbase</div>
      <div className={styles.item} onClick={() => connectWithMetamask()}>connect With Metamask</div>
    </div>
  );
}

export default Home;
