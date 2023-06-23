import React, { useState } from 'react';

const Form = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the NFT minting logic here using the file, name, and description values

    // Reset the form after submission
    setFile(null);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='mx-10'>
      <div className='bg-blue-gradient w-full h-full rounded-md p-0.5 mt-10'>
        <div className='bg-black rounded-md text-white grid grid-rows-7 place-items-center p-[30px]' >
          <label for='file' className='font-poppins text-[28px]'>Image, Video or Audio: </label>
          <p className='font-poppins text-[12px]'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF</p>
          <div className='flex space-y-4'>
            <input type="file" id="file" accept=".jpg, .png, .gif, .svg, .mp4, .webm, .mp3, .wav, .ogg, .glb, .gltf" class="hidden" />
            <label for="file" class="cursor-pointer bg-black hover:bg-gray-900 text-white font-medium py-[100px] px-[150px] rounded-md border-2 border-dotted border-gray-400">
              <img src='/upload.svg' alt='upload' className='h-20 w-20 ' />
            </label>
          </div>
          <div className='flex mt-10 mb-2'>
            <label htmlFor="name" className='font-poppins text-[28px]'>Name:</label>
          </div>
          <div>
            <input type="text" id="name" value={name} placeholder='Name your NFT' onChange={handleNameChange} className='bg-gray-800 text-gray-300 placeholder-gray-500 border-gray-600 focus:ring-gray-400 focus:border-gray-400 rounded-md py-2 px-4 font-poppins' />
          </div>
          <div className='flex mt-10 mb-2'>
            <label htmlFor="description" className='font-poppins text-[28px]'>Description:</label>
          </div>
          <div>
            <textarea id="description" value={description} onChange={handleDescriptionChange} className='bg-gray-800 text-gray-300 placeholder-gray-500 border-gray-600 focus:ring-gray-400 focus:border-gray-400 rounded-md py-2 px-4 font-poppins' placeholder='Provide a detailed description of your NFT.' />
          </div>
          <button type="submit" className='flex mt-10 font-poppins text-[23px] bg-blue-gradient px-4 py-2 rounded-md text-black transform transition-all duration-300 hover:scale-110'>Mint NFT</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
