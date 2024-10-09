// import React, { useState } from 'react';
// import TransactionGraph from './Diagram';

// interface TransactionData {
//   nodes: { id: string; x: number; y: number }[];
//   links: { source: string; target: string; value: number }[];
// }

// function App() {
//   // Example data representing wallets and transactions
//   const transactionData: TransactionData = {
//     nodes: [
//         { id: 'Anshu', x: 100, y: 100 }, // Set initial positions
//         { id: 'HTML', x: 300, y: 100 },
//         { id: 'Javascript', x: 200, y: 200 },
//         { id: 'CSS', x: 100, y: 300 },
//         { id: 'React', x: 300, y: 300 },
//         { id: 'TailwindCSS', x: 200, y: 400 },
//         { id: 'NextJs', x: 400, y: 200 },
//     ],
//     links: [
//       { source: 'HTML', target: 'Anshu', value: 10 },
//       { source: 'Javascript', target: 'Anshu', value: 10 },
//       { source: 'CSS', target: 'Anshu', value: 10 },
//     //   { source: 'CSS', target: 'TailwindCSS', value: 10 },
//       { source: 'TailwindCSS', target: 'Anshu', value: 10 },
//       { source: 'React', target: 'Anshu', value: 10 },
//       { source: 'NextJs', target: 'Anshu', value: 10 },
//     ]
//   };

//   const [selectedAddress, setSelectedAddress] = useState<string>('Anshu');

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         {/* Transaction Graph */}
//         <div>
//           <TransactionGraph data={transactionData} />
//         </div>
//         {/* Address Balance Component */}
//       </div>
//     </div>
//   );
// }

// export default App;
