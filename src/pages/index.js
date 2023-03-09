import {  useState } from "react";
import styles from "../styles/Home.module.css";
import { useWalletConnect, useCoinbaseWallet, useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";

function Home() {
  //   const { contract, isLoading } = useContract("0xEde2c80b714A41c513431599D787Acb230Ab215C", "marketplace")
  const [listings, setListings] = useState();
  const connectCoinbase = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  return (
    <div className={styles.container}>
      {address ? <div className={styles.address}>{address}</div> :  <div className={styles.address}>No address detected</div>}
      <div className={styles.disconnect} onClick={() => disconnect()}>Disconect</div>
      <div className={styles.item} onClick={() => connectWithWalletConnect()}>Wallet Connect</div>
      <div className={styles.item} onClick={() => connectCoinbase()}>connect Coinbase</div>
      <div className={styles.item} onClick={() => connectWithMetamask()}>connect With Metamask</div>
    </div>
  );
}

export default Home;
