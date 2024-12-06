// Dashboard.tsx
import React, { useState } from 'react';
import Chat from './Chat';
import Calls from './Calls';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="flex flex-col h-screen">
      {/* Tab Navigation */}
      <nav className="bg-gray-100 p-4 border-b border-gray-300">
        <ul className="flex justify-center space-x-8">
          <li
            className={`cursor-pointer pb-2 ${activeTab === 'chat' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Chat
          </li>
          <li
            className={`cursor-pointer pb-2 ${activeTab === 'calls' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('calls')}
          >
            Calls
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering of Components */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === 'chat' ? <Chat /> : <Calls />}
      </div>
    </div>
  );
};

export default Dashboard;




// // Dashboard.tsx
// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Chat from './Chat';
// import Calls from './Calls';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="flex h-screen">
//       <div className="flex flex-col flex-1">
//         <div className="flex-1 p-4 overflow-y-auto">
//           <Routes>
//             <Route path="/chat" element={<Chat />} />
//             <Route path="/calls" element={<Calls />} />
//             <Route path="/" element={<Chat />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// //import Sidebar from './Sidebar'; // Ensure this is correctly imported
// import Chat from './Chat'; // Ensure this is correctly imported
// import Calls from './Calls'; // Ensure this is correctly imported

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('chat');

//   return (
//     <div className="flex h-screen">
      
//       <div className="flex flex-col flex-1">
//         <nav className="bg-gray-100 p-4 border-b border-gray-300">
//           <ul className="flex justify-center space-x-8">
//             <li
//               className={`cursor-pointer pb-2 ${activeTab === 'chat' ? 'border-b-2 border-blue-600' : ''}`}
//               onClick={() => setActiveTab('chat')}
//             >
//               <Link to="/app/dashboard/chat">Chat</Link>
//             </li>
//             <li
//               className={`cursor-pointer pb-2 ${activeTab === 'calls' ? 'border-b-2 border-blue-600' : ''}`}
//               onClick={() => setActiveTab('calls')}
//             >
//               <Link to="/app/dashboard/calls">Calls</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="flex-1 p-4 overflow-y-auto">
//           <Routes>
//             <Route path="/chat" element={<Chat />} />
//             <Route path="/calls" element={<Calls />} />
//             <Route path="/" element={<Chat />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Chat from './Chat'; // Ensure this is correctly imported
// import Calls from './Calls'; // Ensure this is correctly imported

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('chat');

//   return (
//     <div className="flex flex-col items-center h-screen">
//       <nav className="w-full bg-gray-100 p-4">
//         <ul className="flex justify-center space-x-8">
//           <li
//             className={`cursor-pointer pb-2 ${activeTab === 'chat' ? 'border-b-2 border-blue-600' : ''}`}
//             onClick={() => setActiveTab('chat')}
//           >
//             <Link to="/app/dashboard/chat">Chat</Link>
//           </li>
//           <li
//             className={`cursor-pointer pb-2 ${activeTab === 'calls' ? 'border-b-2 border-blue-600' : ''}`}
//             onClick={() => setActiveTab('calls')}
//           >
//             <Link to="/app/dashboard/calls">Calls</Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="flex-1 w-full p-4 overflow-y-auto">
//         <Routes>
//           <Route path="/chat" element={<Chat />} />
//           <Route path="/calls" element={<Calls />} />
//           <Route path="/" element={<Chat />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

















// import React from 'react';
// import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <IonCard>
//         <IonCardHeader>
//           <IonCardTitle>Dashboard</IonCardTitle>
//           <IonCardSubtitle>Welcome to the dashboard</IonCardSubtitle>
//         </IonCardHeader>
//         <IonCardContent>
//           Here you can see all the relevant information.
//         </IonCardContent>
//       </IonCard>
//     </div>
//   );
// };

// export default Dashboard;










// import React, { useState } from 'react';
// import Chat from './Chat'; // Ensure this is correctly imported
// import Calls from './Calls'; // Ensure this is correctly imported

// function Dashboard() {
//   const [activeTab, setActiveTab] = useState('chat');

//   return (
//     <div>
//       <nav>
//         <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
//           <li
//             style={{
//               marginRight: '20px',
//               cursor: 'pointer',
//               borderBottom: activeTab === 'chat' ? '2px solid #0078d4' : 'none',
//             }}
//             onClick={() => setActiveTab('chat')}
//           >
//             Chat
//           </li>
//           <li
//             style={{
//               cursor: 'pointer',
//               borderBottom: activeTab === 'calls' ? '2px solid #0078d4' : 'none',
//             }}
//             onClick={() => setActiveTab('calls')}
//           >
//             Calls
//           </li>
//         </ul>
//       </nav>

//       <div style={{ padding: '20px' }}>
//         {activeTab === 'chat' && <Chat />}
//         {activeTab === 'calls' && <Calls />}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;









// // import React from 'react';
// // import { Routes, Route, Link } from 'react-router-dom';
// // import Chat from './Chat'; // Make sure this is the correct import
// // import Calls from './Calls'; // Ensure this is correctly imported

// // function Dashboard() {
// //   return (
// //     <div>
// //       <nav>
// //         <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
// //           <li style={{ marginRight: '20px' }}>
// //             <Link to="/chat">Chat</Link>
// //           </li>
// //           <li>
// //             <Link to="/calls">Calls</Link>
// //           </li>
// //         </ul>
// //       </nav>

// //       <Routes>
// //         <Route path="/chat" element={<Chat />} />
// //         <Route path="/calls" element={<Calls />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default Dashboard;
