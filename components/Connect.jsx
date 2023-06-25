import React, { useState } from 'react';
import Web3 from 'web3';
import Image from 'next/image';

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
    <div className='font-poppins font-normal cursor-pointer text-[16px] text-black bg-blue-gradient p-2.5 rounded-md transform transition-all duration-300 hover:scale-110'>
      {account ? (
        <div className="flex items-center">
          <Image src='/green.svg' alt='connected' width={15} height={15} className='rounded-full mr-2' />
          <span className="mr-1 mt-1">{account.slice(0, 5)}...{account.slice(-4)}</span>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>

  );
};

export default Connect;