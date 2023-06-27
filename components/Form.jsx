const contractABI = require('../contract-abi.json')
const contractAddress = "0x210b7A76151d745CB7cdA4C64ab05Ef5609679E7";


import React, { useState } from 'react';
import Image from 'next/image';
import FormData from 'form-data';
import { pinFileToIPFS } from '@/utils/pinata';
const alchemyKey = process.env.SEPOLIA_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 


const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('file', selectedFile)

    const metadata = JSON.stringify({
      name: name,
      description: description,
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    const tokenURI = await pinFileToIPFS(formData);
    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();

    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI() //make call to NFT smart contract 
    };

    try {
      const txHash = await window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      console.log(txHash);
    } catch (error) {
      console.log(error);
    }
    // Reset the form after submission
    setSelectedFile(null);
    setName('');
    setDescription('');


  };

  return (
    <form onSubmit={handleSubmit} className='mx-10'>
      <div className='bg-blue-gradient w-full h-full rounded-md p-0.5 mt-10 relative'>
        <div className='absolute -top-4 -left-10 w-72 h-72 bg-[#33bbcf] rounded-full animate-blob1 filter blur-2xl opacity-[17%] animation-delay-4' />
        <div className='absolute top-10 -right-20 w-72 h-72 bg-[#9dedf0] rounded-full animate-blob2 filter blur-2xl opacity-[17%]' />
        <div className='absolute -bottom-8 left-10 w-72 h-72 bg-[#def9fa] rounded-full animate-blob3 filter blur-2xl opacity-[17%] animation-delay-2' />
        <div className='bg-black rounded-md text-white grid grid-rows-7 place-items-center p-[30px]' >
          <label htmlFor='file' className='font-poppins text-[28px]'>Image, Video or Audio: </label>
          <p className='font-poppins text-[12px]'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF</p>
          <div className='flex space-y-4'>
            <input type="file" required id="file" accept=".jpg, .png, .gif, .svg, .mp4, .webm, .mp3, .wav, .ogg, .glb, .gltf" className="hidden" onChange={handleFileChange} />
            <label htmlFor="file" className="cursor-pointer bg-black hover:bg-gray-900 text-white font-medium py-[100px] px-[10vw] rounded-md border-2 border-dotted border-gray-400 sm:px-[13vw] ss:px-[15vw] xs:px-[20vw] xxs:px-[25vw]">
              <Image src='/upload.svg' alt='upload' width={80} height={80} />
            </label>
          </div>
          <div className='flex mt-10 mb-2'>
            <label htmlFor="name" className='font-poppins text-[28px]'>Name:</label>
          </div>
          <div>
            <input type="text" id="name" value={name} placeholder='Name your NFT' onChange={handleNameChange} required className='bg-gray-800 text-gray-300 placeholder-gray-500 border-gray-600 focus:ring-gray-400 focus:border-gray-400 rounded-md py-2 px-4 font-poppins w-[35vw]' />
          </div>
          <div className='flex mt-10 mb-2'>
            <label htmlFor="description" className='font-poppins text-[28px]'>Description:</label>
          </div>
          <div>
            <textarea id="description" value={description} onChange={handleDescriptionChange} className='bg-gray-800 text-gray-300 placeholder-gray-500 border-gray-600 focus:ring-gray-400 focus:border-gray-400 rounded-md py-2 px-4 font-poppins w-[35vw]' placeholder='Provide a detailed description of your NFT.' />
          </div>
          <button type="submit" className='flex mt-10 font-poppins text-[23px] bg-blue-gradient px-4 py-2 rounded-md text-black transform transition-all duration-300 hover:scale-110'>Mint NFT</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
