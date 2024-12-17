import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const CustomSelect = () => {
  const [currency, setCurrency] = useState('Dogle');
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (value) => {
    setCurrency(value);
    setIsOpen(false); 
  };

  const currencies = [
    { value: 'Dogle', label: 'Dogle', image: "https://media.licdn.com/dms/image/v2/D560BAQFEHU3eIM9GlQ/company-logo_200_200/company-logo_200_200/0/1722318190155/doglibre_logo?e=2147483647&v=beta&t=od5Vj0QDFscdjgvxxos9DXmjZ54WMXMv4YSHLcgFcWc" },
  ];

  return (
    <div className='flex items-center relative'>
    
      <div className='w-32'>
        <div
          className='border p-2 sm:w-[120px] bg-white outline-none border-l-0 rounded-full text-lg flex justify-between items-center cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='flex items-center'>
            <img
              src={currencies.find((item) => item.value === currency)?.image}
              alt={currency}
              className='mr-2'
              style={{ width: 20, height: 20 }}
            />
            {currency}
          </div>
          <span><IoChevronDownOutline /></span>
        </div>
        {isOpen && (
          <div className='absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg'>
            {currencies.map((currencyItem) => (
              <div
                key={currencyItem.value}
                className='flex items-center p-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => handleCurrencyChange(currencyItem.value)}
              >
                <img
                  src={currencyItem.image}
                  alt={currencyItem.label}
                  className='mr-2'
                  style={{ width: 20, height: 20 }}
                />
                {currencyItem.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
