// Calls.tsx
import React from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing, FiPhoneMissed } from 'react-icons/fi';

const Calls: React.FC = () => {
  const calls = [
    { caller: 'John', time: '10:00 AM', type: 'incoming' },
    { caller: 'Alice', time: '11:00 AM', type: 'outgoing' },
    { caller: 'Bob', time: '12:00 PM', type: 'missed' },
  ];

  return (
    <div className="p-4">
      {calls.map((call, index) => (
        <div key={index} className="flex items-center mb-4 pb-4 border-b border-gray-300">
          <div className="mr-4">
            {call.type === 'incoming' && <FiPhoneIncoming className="text-green-500" size={24} />}
            {call.type === 'outgoing' && <FiPhoneOutgoing className="text-blue-500" size={24} />}
            {call.type === 'missed' && <FiPhoneMissed className="text-red-500" size={24} />}
          </div>
          <div>
            <strong className="block">{call.caller}</strong>
            <span className="text-gray-500">{call.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calls;













// import React from 'react';

// // Sample data for recent calls
// const recentCalls = [
//   { id: 1, caller: 'John Doe', time: '10:30 AM', duration: '5 min', status: 'Answered' },
//   { id: 2, caller: 'Jane Smith', time: '9:45 AM', duration: '12 min', status: 'Missed' },
//   { id: 3, caller: 'Alice Cooper', time: '8:20 AM', duration: '3 min', status: 'Answered' },
// ];

// function Calls() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Recent Calls</h2>

//       {/* Calls List */}
//       <div style={{ marginBottom: '20px' }}>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {recentCalls.map((call) => (
//             <li
//               key={call.id}
//               style={{
//                 marginBottom: '15px',
//                 padding: '10px',
//                 border: '1px solid #ddd',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 backgroundColor: '#f9f9f9',
//               }}
//             >
//               {/* Profile Picture */}
//               <div
//                 style={{
//                   width: '50px',
//                   height: '50px',
//                   borderRadius: '50%',
//                   backgroundColor: '#ccc',
//                   marginRight: '15px',
//                 }}
//               >
//                 {/* Placeholder Profile Image */}
//               </div>

//               <div style={{ flex: 1 }}>
//                 <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{call.caller}</div>
//                 <div style={{ fontSize: '14px', color: '#888' }}>
//                   {call.time} - {call.duration}
//                 </div>
//                 <div style={{ fontSize: '14px', color: call.status === 'Missed' ? 'red' : '#555' }}>
//                   {call.status}
//                 </div>
//               </div>

//               {/* Call Action */}
//               <div style={{ marginLeft: '10px' }}>
//                 <button
//                   style={{
//                     padding: '5px 10px',
//                     borderRadius: '50%',
//                     backgroundColor: '#25D366', // WhatsApp's color
//                     border: 'none',
//                     color: 'white',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => alert('Calling...')}
//                 >
//                   <i className="fa fa-phone" style={{ fontSize: '18px' }}></i> {/* You can use an icon library like FontAwesome */}
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Button to make a call */}
//       <button
//         style={{
//           padding: '10px',
//           borderRadius: '20px',
//           border: 'none',
//           backgroundColor: '#0078d4',
//           color: 'white',
//           cursor: 'pointer',
//         }}
//         onClick={() => alert('Make a call button clicked')}
//       >
//         Make a Call
//       </button>
//     </div>
//   );
// }

// export default Calls;
