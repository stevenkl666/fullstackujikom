// import React from 'react';

// const Main1 = ({ setModalAdd, setModalLog }) => {
//   return (
//     <div className="w-full background-image grayscale-20 bg-cover bg-center bg-no-repeat">
//       <div className="w-full h-full bg-black/50">
//         <div className="max-w-7xl flex justify-center mx-auto">
//           <div className="h-[90vh] flex justify-between pe-5 items-center gap-5 w-full">
//             <div className="w-[80%] space-y-4 text-white">
//               <h1 className="text-7xl font-semibold">
//                 The Biggest, The Longest & Most Complete Fair In South Asia
//               </h1>
//             </div>

//             <div className="w-[45%] space-y-4 text-white">
//               <div className="flex gap-3 w-full flex-col items-center">
                
//                 <button
//                   className="w-full px-8 py-3 rounded-lg font-semibold text-blue-600 border-2 border-blue-400 bg-white transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 active:scale-95 shadow-lg"
//                   onClick={() => setModalAdd(true)}
//                 >
//                   Daftar
//                 </button>

//                 <button
//                   onClick={() => setModalLog(true)}
//                   className="w-full px-8 py-3 rounded-lg font-semibold text-white border-2 border-blue-400 bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 active:scale-95 shadow-lg"
//                 >
//                   Login
//                 </button>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from 'react';
// import { motion } from 'framer-motion';

// const Main1 = ({ setModalAdd, setModalLog }) => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center mx-auto px-8 space-y-8 md:space-y-0 md:space-x-8">
//         <motion.div
//           className="w-full md:w-3/5 text-black space-y-6 text-center md:text-left"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 inline-block">
//             <h1 className="text-4xl md:text-7xl font-bold leading-tight drop-shadow-lg text-black">
//               <span className="text-yellow-500">The Biggest</span>, <span className="text-red-500">The Longest</span> & <span className="text-blue-500">Most Complete</span> Fair In South Asia
//             </h1>
//           </div>
//         </motion.div>

//         <motion.div
//           className="w-full md:w-2/5 bg-gray-100 p-10 rounded-2xl shadow-xl border border-gray-300"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="flex flex-col space-y-6 text-center">
//             <button
//               className="w-full px-10 py-4 rounded-lg font-semibold text-blue-600 border-2 border-blue-400 bg-white transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 active:scale-95 shadow-xl"
//               onClick={() => setModalAdd(true)}
//             >
//               Daftar
//             </button>
//             <button
//               onClick={() => setModalLog(true)}
//               className="w-full px-10 py-4 rounded-lg font-semibold text-white border-2 border-blue-400 bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 active:scale-95 shadow-xl"
//             >
//               Login
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Main1;

import React from 'react';
import { motion } from 'framer-motion';

const Main1 = ({ setModalAdd, setModalLog }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center mx-auto px-8 space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="w-full md:w-3/5 text-black space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 inline-block">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight drop-shadow-lg text-black">
              <span className="text-yellow-500">The Biggest</span>, <span className="text-red-500">The Longest</span> & <span className="text-blue-500">Most Complete</span> Fair In South Asia
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/5 bg-gray-100 p-10 rounded-2xl shadow-xl border border-gray-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col space-y-6 text-center">
            <button
              className="w-full px-10 py-4 rounded-lg font-semibold text-blue-600 border-2 border-blue-400 bg-white transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 active:scale-95 shadow-xl"
              onClick={() => setModalAdd(true)}
            >
              Daftar
            </button>
            <button
              onClick={() => setModalLog(true)}
              className="w-full px-10 py-4 rounded-lg font-semibold text-white border-2 border-blue-400 bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 active:scale-95 shadow-xl"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main1;
