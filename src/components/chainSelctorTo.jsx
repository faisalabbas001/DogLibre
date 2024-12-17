import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const ChainSelectorTo = () => {

  const availableChains = [
    { name: "ETH", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png", bgColor: "#3C3C3D" },
    { name: "Base", logo: "https://avatars.githubusercontent.com/u/108554348?v=4", bgColor: "#2563EB" },
    { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png", bgColor: "#00FF96" },
    { name: "Binance Smart Chain", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", bgColor: "#F8760D" },
    { name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png", bgColor: "#E84118" },
    { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png", bgColor: "#8247e5" },
    { name: "VeChain", logo: "https://cryptologos.cc/logos/vechain-vet-logo.png", bgColor: "#32C1A2" },
    { name: "IOTA", logo: "https://cryptologos.cc/logos/iota-iota-logo.png", bgColor: "#4A90E2" },
    { name: "Algorand", logo: "https://cryptologos.cc/logos/algorand-algo-logo.png", bgColor: "#A5B4FC" },
    { name: "Zilliqa", logo: "https://cryptologos.cc/logos/zilliqa-zil-logo.png", bgColor: "#4B4B4B" },
    { name: "Fantom", logo: "https://cryptologos.cc/logos/fantom-ftm-logo.png", bgColor: "#1A1D24" },
    { name: "Elrond", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzxvz-KmX105W09nNRHSGq1C4JSxjjOlYHA&s", bgColor: "#20E6F2" },
    { name: "Harmony", logo: "https://cryptologos.cc/logos/harmony-one-logo.png", bgColor: "#0BCE82" },
    { name: "Hedera", logo: "https://cryptologos.cc/logos/hedera-hbar-logo.png", bgColor: "#5BFFBB" },
    { name: "Waves", logo: "https://cryptologos.cc/logos/waves-waves-logo.png", bgColor: "#4A84F0" },
    { name: "Kusama", logo: "https://cryptologos.cc/logos/kusama-ksm-logo.png", bgColor: "#0D98A1" },
    { name: "Near Protocol", logo: "https://cryptologos.cc/logos/near-protocol-near-logo.png", bgColor: "#3D6E9D" },
    { name: "Celo", logo: "https://cryptologos.cc/logos/celo-celo-logo.png", bgColor: "#7E5C10" },
   
  ];

 
  const limitedChains = availableChains.slice(0, 50);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState(availableChains[0]); 

  
  const handleChainSelect = (chain) => {
    setSelectedChain(chain);
    setIsModalOpen(false); 
  };

  return (
    <div className="flex flex-col items-center">
      {/* Chain Selector Button */}
      <div
  className="w-[240.25px] h-[80.88px] bg-[#f4f4f5] rounded-[14px] shadow-md flex items-center cursor-pointer"
  onClick={() => setIsModalOpen(true)}
>
  <div className="flex justify-end items-center w-full px-4">
  <div className="flex flex-col ml-[12px]"> 
      <p className="text-sm">To</p>
      <h2 className="text-lg font-bold">{selectedChain.name}</h2>
    </div>
    <div className="w-[50px] h-[50px] rounded-full overflow-hidden"> 
      <img
        src={selectedChain.logo}
        alt={selectedChain.name}
        className="w-full h-full object-cover"
      />
    </div>

    
  </div>
</div>



   
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
            className="relative  bg-opacity-90 rounded-lg w-[90%] sm:w-[600px] p-6 max-h-[90vh] "
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
           
            {/* Modal Header */}
            <div className="flex items-center justify-center "    onClick={() => setIsModalOpen(false)}>
  <h3 className="text-2xl bg-white rounded-full p-2 font-semibold text-center mb-6 inline-block">
    Select a Network
  </h3>
</div>
            {/* Chains Grid */}
            <div className="grid grid-cols-2  sm:grid-cols-3 gap-4">
              {limitedChains.map((chain) => (
                <motion.div
                  key={chain.name}
                  className="flex flex-col h-[240px] items-center justify-center p-4 rounded-xl shadow-md cursor-pointer"
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

export default ChainSelectorTo;
