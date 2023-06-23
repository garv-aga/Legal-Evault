import React, { useState } from 'react';
import Web3 from 'web3';

const Connect = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    try {
      // Modern dapp browsers
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }
      // Legacy dapp browsers
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      }
      // Non-dapp browsers
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  
      // Get the user's selected wallet
      const accounts = await window.web3.eth.getAccounts();
      const selectedAccount = accounts[0];

      setAccount(selectedAccount);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };
  

  return (
    <div className='font-poppins font-normal cursor-pointer text-[16px] text-black bg-blue-gradient p-1.5 rounded transform transition-all duration-300 hover:scale-110'>
      {account ? <div className='flex justify-between items-center'><img src='/green.svg' alt='connected' className='rounded-full w-[15px] h-[15px] flex-1 mr-2 mb-1 ml-1'/>{account.slice(0,5)+"..."+account.slice(-4)}</div> : <button onClick={connectWallet}>Connect Wallet</button>}
    </div>
  );
};

export default Connect;