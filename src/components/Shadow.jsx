import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import ChainSelector from './ChainSelectorFrom';
import ChainSelectorTo from './chainSelctorTo';
import { FaChevronDown } from "react-icons/fa6";
import CustomSelect from "../components/CustomSelect"
const Shadow = () => {
  const [amount, setAmount] = useState('0');  
  const [currency, setCurrency] = useState('ETH'); 


  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="sm:ml-20 mt-2 w-full sm:max-w-[539.04px] h-auto shadow-[-4px_0px_10px_-4px_rgba(0,0,0,0.8)]   bg-white rounded-[36px] p-4">
 <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-0">
  <ChainSelector />


  <p className="bg-gray-200 flex items-center justify-center sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] rounded-full shadow-md">
  
    <FaGreaterThan className="hidden sm:block" />
  
    <FaChevronDown className="block text-2xl  sm:hidden" />
  </p>

  <ChainSelectorTo />
</div>



  <div className="flex flex-col mt-5 gap-2.5 bg-[#f4f4f5] rounded-[36px] px-4 py-5 border focus-within:border-border transition-colors shadow-md">
    <div className="flex gap-2 items-center">
      <input
        type="text"
        inputMode="decimal"
        minLength="1"
        maxLength="79"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        pattern="^[0-9]*[.,]?[0-9]*$"
        name="amount"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
        className="block w-full shadow-none bg-transparent focus:outline-none text-4xl leading-none placeholder:text-muted-foreground text-foreground"
        placeholder="0"
      />

<CustomSelect/>


    </div>
  </div>


  <button className="w-full py-3 mt-5 rounded-full bg-[#B08B6E] text-white shadow-lg hover:bg-slate-800 transition-colors">
    Connect
  </button>
</div>

  );
};

export default Shadow;
