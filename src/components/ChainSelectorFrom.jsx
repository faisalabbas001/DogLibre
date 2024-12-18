import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

const ChainSelectorFrom = ({ selectedChain, onChainSelect, excludeChain }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define available chains
  const availableChains = [
    {
      name: "ETH",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      bgColor: "#3C3C3D"
    },
    {
      name: "Solana",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
      bgColor: "#00FF96"
    },
    {
      name: "Base",
      logo: "https://avatars.githubusercontent.com/u/108554348?v=4",
      bgColor: "#2563EB"
    },
  ];

  const limitedChains = availableChains.filter(chain => chain.name !== excludeChain?.name);

  // Handle chain selection
  const handleChainSelect = (chain) => {
    onChainSelect(chain);
    setIsModalOpen(false); // Close modal after selecting a chain
  };

  return (
    <div className="flex flex-col items-center">
      {/* Chain Selector Button */}
      <div
        className="w-[240.25px] h-[80.88px] bg-[#f4f4f5] rounded-[14px] shadow-md flex items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Chain Logo */}
        <div className=" ml-10 shadow-md   w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            src={selectedChain.logo}
            alt={selectedChain.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Chain Name */}
        <div className="flex flex-col  ml-5">
          <p className="text-sm">From</p>
          <h2 className="text-lg font-bold">{selectedChain.name}</h2>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed overflow-auto inset-0 flex items-center justify-center bg-transparent backdrop-blur-lg z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-4 right-4 rounded-md bg-gray-100 text-gray-600 p-2 text-xl hover:bg-gray-200"
            onClick={() => setIsModalOpen(false)}
          >
            <RxCross2 />
          </button>
          {/* Modal Content */}
          <motion.div
            className="relative bg-opacity-90 rounded-lg w-[90%] sm:w-[600px] p-6 max-h-[90vh]"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-center mb-6" onClick={() => setIsModalOpen(false)}>
              <h3 className="text-2xl bg-white rounded-full p-2 font-semibold text-center inline-block">
                Select a Network
              </h3>
            </div>

            {/* Chains Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {limitedChains.map((chain) => (
                <motion.div
                  key={chain.name}
                  className="flex flex-col h-[240px] justify-center items-center p-4 rounded-xl shadow-md cursor-pointer"
                  style={{ backgroundColor: chain.bgColor }}
                  onClick={() => handleChainSelect(chain)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={chain.logo}
                    alt={`${chain.name} logo`}
                    className="w-16 h-16 rounded-full mb-2 object-cover"
                    onError={(e) => (e.target.src = "fallback.png")}
                  />
                  <span className="text-lg font-medium">{chain.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ChainSelectorFrom;
