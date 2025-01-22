
'use client';
import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';

const stakeOptions = [20, 40, 100, 300, 1000, 3000, 10000];

const Stake = ({ onSelect }: any) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value: any) => {
    setSelectedValue(value); 
    onSelect(value); 
  };


  
  return (
    <div className="flex flex-col gap-2 p-6 rounded-xl border border-white/40 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-lg text-center">
      <h1 className="text-white font-bold text-xl mb-2">Your Stake:</h1>
      {stakeOptions.map((option) => (
        <div
          key={option}
          className={`flex items-center justify-between cursor-pointer px-3 py-1.5 border border-white/90 rounded-xl transition-colors  ${
            selectedValue === option ? 'bg-white/10 border-4 border-[#FFAC09]' : ''
          } hover:bg-white/10`}
          onClick={() => handleSelect(option)}
        >
          <span className="text-white text-lg font-bold">{option}</span>

          
          <span className="text-white text-2xl">
            {selectedValue === option ? <FaCircleDot className='text-[#FFAC09] text-[20px]'/> : <FaRegCircle  className='text-white text-[20px]'/>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stake;
