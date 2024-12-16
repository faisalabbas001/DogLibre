import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";

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
    <div className="sm:ml-20 mt-2 w-full sm:max-w-[569.04px] h-auto shadow-lg bg-white rounded-lg p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
        <div className="w-[248.25px] h-[83.88px] bg-[#f4f4f5] rounded-[14px] shadow-md flex items-center">
          <div className="bg-gray-200 ml-3 shadow-md w-[40px] h-[40px]"></div>
          <div className="flex flex-col ml-3 items-center">
            <p className="text-sm">from</p>
            <h2 className="text-lg">Ethreme</h2>
          </div>
        </div>

        <p className="bg-gray-200 z-50 flex  sm:mt-0 items-center justify-center w-[40px] h-[40px]">
          <FaGreaterThan />
        </p>

        <div className="w-[248.25px] h-[83.88px] bg-[#f4f4f5] rounded-[14px] shadow-md flex flex-row items-center justify-end">
          <div className="flex flex-col mr-3 items-center">
            <p className="text-sm">to</p>
            <h2 className="text-lg">Ethreme</h2>
          </div>
          <div className="bg-gray-200 mr-3 shadow-md w-[40px] h-[40px]"></div>
        </div>
      </div>

      <div className="flex flex-col mt-5 gap-2.5 bg-[#f4f4f5] relative rounded-2xl px-4 py-5 border border-transparent focus-within:border-border transition-colors bg-muted">
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

          <select
            name="currency"
            id="currency"
            value={currency}  
            onChange={handleCurrencyChange}  
            className="border p-2 w-32 sm:w-[100px] bg-white rounded-full text-lg"
          >
            <option value="ETH">ETH</option>
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
          </select>
        </div>
      </div>

      <button className="w-full py-3 mt-5 rounded-full bg-[#B08B6E] text-white shadow-md hover:bg-slate-800 transition-colors">
        Connect
      </button>
    </div>
  );
};

export default Shadow;
