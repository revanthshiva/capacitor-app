import React, { useState, useEffect } from 'react';
import { FiSend, FiPaperclip, FiMoreHorizontal } from 'react-icons/fi';
import { FaVideo, FaPhoneAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';

interface Message {
  sender: string;
  content: string;
}

interface Contact {
  name: string;
  chatMessages: Message[];
  image?: string;
}

const Chat: React.FC = () => {
  const initialContacts: Contact[] = [
    {
      name: 'Aparna',
      chatMessages: [
        { sender: 'Aparna', content: 'Hey Bro ,how are you?' },
        { sender: 'You', content: 'I am good, How about you' },
      ],
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Revanth',
      chatMessages: [
        { sender: 'Alice', content: 'Did you finish the report?' },
        { sender: 'You', content: 'Almost done, just reviewing.' },
      ],
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      name: 'Chandru',
      chatMessages: [
        { sender: 'Tom', content: 'Can we discuss the task in meeting ?' },
        { sender: 'You', content: 'Sure ..' },
      ],
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      name: 'Emily',
      chatMessages: [
        { sender: 'Emily', content: 'Good morning!' },
        { sender: 'You', content: 'Morning! How are you?' },
      ],
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Michael',
      chatMessages: [
        { sender: 'Michael', content: 'Are we meeting later?' },
        { sender: 'You', content: 'Yes, I will be there at 3.' },
      ],
      image: 'https://i.pravatar.cc/150?img=4',
    },
    {
      name: 'Sara',
      chatMessages: [
        { sender: 'Sara', content: 'Let’s catch up soon!' },
        { sender: 'You', content: 'Definitely!' },
      ],
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'David',
      chatMessages: [
        { sender: 'David', content: 'Any updates on the project?' },
        { sender: 'You', content: 'I will update you tomorrow.' },
      ],
      image: 'https://i.pravatar.cc/150?img=6',
    },
    {
      name: 'Alice',
      chatMessages: [
        { sender: 'Alice', content: 'Did you finish the report?' },
        { sender: 'You', content: 'Almost done, just reviewing.' },
      ],
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      name: 'Tom',
      chatMessages: [
        { sender: 'Tom', content: 'Can we discuss the plan tomorrow?' },
        { sender: 'You', content: 'Sure, I will be ready.' },
      ],
      image: 'https://i.pravatar.cc/150?img=8',
    },
  ];

  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const sendMessage = () => {
    if (newMessage.trim() && selectedContact) {
      const updatedContacts = contacts.map((contact) =>
        contact.name === selectedContact.name
          ? {
              ...contact,
              chatMessages: [
                ...contact.chatMessages,
                { sender: 'You', content: newMessage },
              ],
            }
          : contact
      );
      setContacts(updatedContacts);
      setNewMessage('');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Section (Desktop Only) */}
      {!isMobile && (
        <div className="w-1/4 bg-gray-800 text-white p-4">
          <Sidebar contacts={contacts} selectContact={selectContact} />
        </div>
      )}

      {/* Chat Area Section */}
      <div className={`flex-1 p-4 flex flex-col bg-gray-50 ${isMobile && !selectedContact ? 'h-screen' : ''}`}>
        {/* Show Sidebar in Mobile View */}
        {isMobile && !selectedContact && (
          <div className="w-full mb-4">
            <Sidebar contacts={contacts} selectContact={selectContact} />
          </div>
        )}

        {/* Header with profile, video call, audio call, and menu */}
        {selectedContact && (
          <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
            <div className="flex items-center space-x-3">
              <img
                src={selectedContact.image || 'https://i.pravatar.cc/150?img=1'}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-lg font-semibold">{selectedContact.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-green-500 hover:text-green-600">
                <FaVideo size={24} />
              </button>
              <button className="text-blue-500 hover:text-blue-600">
                <FaPhoneAlt size={24} />
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <FiMoreHorizontal size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {selectedContact && (
          <div className="flex-1 p-4 overflow-y-auto">
            {selectedContact.chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 p-3 max-w-xs rounded-lg ${
                  msg.sender === 'You'
                    ? 'bg-green-500 text-white self-end rounded-br-none'
                    : 'bg-yellow-200 text-black self-start rounded-bl-none'
                }`}
              >
                <strong className="text-sm">{msg.sender}: </strong>
                <p className="mt-1 text-base">{msg.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Message Input Section (Fixed to bottom) */}
        {selectedContact && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-gray-800">
                <FiPaperclip size={24} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
              />
              <button
                onClick={sendMessage}
                className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <FiSend size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;



// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiMoreHorizontal } from 'react-icons/fi';
// import { FaVideo, FaPhoneAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     {
//       name: 'Emily',
//       chatMessages: [
//         { sender: 'Emily', content: 'Good morning!' },
//         { sender: 'You', content: 'Morning! How are you?' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=3',
//     },
//     {
//       name: 'Michael',
//       chatMessages: [
//         { sender: 'Michael', content: 'Are we meeting later?' },
//         { sender: 'You', content: 'Yes, I will be there at 3.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=4',
//     },
//     {
//       name: 'Sara',
//       chatMessages: [
//         { sender: 'Sara', content: 'Let’s catch up soon!' },
//         { sender: 'You', content: 'Definitely!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=5',
//     },
//     {
//       name: 'David',
//       chatMessages: [
//         { sender: 'David', content: 'Any updates on the project?' },
//         { sender: 'You', content: 'I will update you tomorrow.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=6',
//     },
//     {
//       name: 'Alice',
//       chatMessages: [
//         { sender: 'Alice', content: 'Did you finish the report?' },
//         { sender: 'You', content: 'Almost done, just reviewing.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=7',
//     },
//     {
//       name: 'Tom',
//       chatMessages: [
//         { sender: 'Tom', content: 'Can we discuss the plan tomorrow?' },
//         { sender: 'You', content: 'Sure, I will be ready.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=8',
//     },
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Section (Desktop Only) */}
//       {!isMobile && (
//         <div className="w-1/4 bg-gray-800 text-white p-4">
//           <Sidebar contacts={contacts} selectContact={selectContact} />
//         </div>
//       )}

//       {/* Chat Area Section */}
//       <div className={`flex-1 p-4 flex flex-col bg-gray-50 ${isMobile && !selectedContact ? 'h-screen' : ''}`}>
//         {/* Show Sidebar in Mobile View */}
//         {isMobile && !selectedContact && (
//           <div className="w-full mb-4">
//             <Sidebar contacts={contacts} selectContact={selectContact} />
//           </div>
//         )}

//         {/* Header with profile, video call, audio call, and menu */}
//         {selectedContact && (
//           <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={selectedContact.image || 'https://i.pravatar.cc/150?img=1'}
//                 alt={selectedContact.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="text-lg font-semibold">{selectedContact.name}</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-green-500 hover:text-green-600">
//                 <FaVideo size={24} />
//               </button>
//               <button className="text-blue-500 hover:text-blue-600">
//                 <FaPhoneAlt size={24} />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiMoreHorizontal size={24} />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Chat Messages */}
//         {selectedContact && (
//           <div className="flex-1 p-4 overflow-y-auto">
//             {selectedContact.chatMessages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 p-3 max-w-xs rounded-lg ${
//                   msg.sender === 'You'
//                     ? 'bg-green-500 text-white self-end rounded-br-none'
//                     : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                 }`}
//               >
//                 <strong className="text-sm">{msg.sender}: </strong>
//                 <p className="mt-1 text-base">{msg.content}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Message Input Section (Fixed to bottom) */}
//         {selectedContact && (
//           <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
//             <div className="flex items-center space-x-3">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiPaperclip size={24} />
//               </button>
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 <FiSend size={24} />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;









// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiMoreHorizontal } from 'react-icons/fi';
// import { FaVideo, FaPhoneAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Section (Desktop Only) */}
//       {!isMobile && (
//         <div className="w-1/4 bg-gray-800 text-white p-4">
//           <Sidebar contacts={contacts} selectContact={selectContact} />
//         </div>
//       )}

//       {/* Chat Area Section */}
//       <div className={`flex-1 p-4 flex flex-col bg-gray-50 ${isMobile && !selectedContact ? 'h-screen' : ''}`}>
//         {/* Show Sidebar in Mobile View */}
//         {isMobile && !selectedContact && (
//           <div className="w-full mb-4">
//             <Sidebar contacts={contacts} selectContact={selectContact} />
//           </div>
//         )}

//         {/* Header with profile, video call, audio call, and menu */}
//         {selectedContact && (
//           <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={selectedContact.image || 'https://i.pravatar.cc/150?img=1'}
//                 alt={selectedContact.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="text-lg font-semibold">{selectedContact.name}</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-green-500 hover:text-green-600">
//                 <FaVideo size={24} />
//               </button>
//               <button className="text-blue-500 hover:text-blue-600">
//                 <FaPhoneAlt size={24} />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiMoreHorizontal size={24} />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Chat Messages */}
//         {selectedContact && (
//           <div className="flex-1 p-4 overflow-y-auto">
//             {selectedContact.chatMessages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 p-3 max-w-xs rounded-lg ${
//                   msg.sender === 'You'
//                     ? 'bg-green-500 text-white self-end rounded-br-none'
//                     : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                 }`}
//               >
//                 <strong className="text-sm">{msg.sender}: </strong>
//                 <p className="mt-1 text-base">{msg.content}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Message Input Section (Fixed to bottom) */}
//         {selectedContact && (
//           <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
//             <div className="flex items-center space-x-3">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiPaperclip size={24} />
//               </button>
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 <FiSend size={24} />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;





// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiMoreHorizontal } from 'react-icons/fi';
// import { FaVideo, FaPhoneAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';  // Importing Sidebar for contact list

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Section */}
//       <div className="w-1/4 bg-gray-800 text-white p-4">
//         <Sidebar contacts={contacts} selectContact={selectContact} />
//       </div>

//       {/* Chat Area Section */}
//       <div className="flex-1 p-4 flex flex-col bg-gray-50">
//         {/* Header with profile, video call, audio call, and menu */}
//         {selectedContact && (
//           <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={selectedContact.image || 'https://i.pravatar.cc/150?img=1'}
//                 alt={selectedContact.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="text-lg font-semibold">{selectedContact.name}</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-green-500 hover:text-green-600">
//                 <FaVideo size={24} />
//               </button>
//               <button className="text-blue-500 hover:text-blue-600">
//                 <FaPhoneAlt size={24} />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiMoreHorizontal size={24} />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Chat Messages */}
//         {selectedContact && (
//           <div className="flex-1 p-4 overflow-y-auto">
//             {selectedContact.chatMessages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-4 p-3 max-w-xs rounded-lg ${
//                   msg.sender === 'You'
//                     ? 'bg-green-500 text-white self-end rounded-br-none'
//                     : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                 }`}
//               >
//                 <strong className="text-sm">{msg.sender}: </strong>
//                 <p className="mt-1 text-base">{msg.content}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Message Input Section (Fixed to bottom) */}
//         <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
//           <div className="flex items-center space-x-3">
//             <button className="text-gray-600 hover:text-gray-800">
//               <FiPaperclip size={24} />
//             </button>
//             <input
//               type="text"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//             />
//             <button
//               onClick={sendMessage}
//               className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             >
//               <FiSend size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;





// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiMoreHorizontal } from 'react-icons/fi';
// import { FaVideo, FaPhoneAlt } from 'react-icons/fa';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1 p-4 overflow-y-auto bg-gray-50">
//         <div className="flex flex-col w-full h-full">
//           {/* Header with profile, video call, audio call, and menu */}
//           {selectedContact && (
//             <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
//               <div className="flex items-center space-x-3">
//                 <img
//                   src={selectedContact.image || 'https://i.pravatar.cc/150?img=1'}
//                   alt={selectedContact.name}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="text-lg font-semibold">{selectedContact.name}</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button className="text-green-500 hover:text-green-600">
//                   <FaVideo size={24} />
//                 </button>
//                 <button className="text-blue-500 hover:text-blue-600">
//                   <FaPhoneAlt size={24} />
//                 </button>
//                 <button className="text-gray-600 hover:text-gray-800">
//                   <FiMoreHorizontal size={24} />
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Chat Messages */}
//           {selectedContact && (
//             <div className="flex-1 p-4 overflow-y-auto">
//               {selectedContact.chatMessages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`mb-4 p-3 max-w-xs rounded-lg ${
//                     msg.sender === 'You'
//                       ? 'bg-green-500 text-white self-end rounded-br-none'
//                       : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                   }`}
//                 >
//                   <strong className="text-sm">{msg.sender}: </strong>
//                   <p className="mt-1 text-base">{msg.content}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Message Input Section (Fixed to bottom) */}
//           <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
//             <div className="flex items-center space-x-3">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiPaperclip size={24} />
//               </button>
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 <FiSend size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;




// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip } from 'react-icons/fi';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1 p-4 overflow-y-auto bg-gray-50">
//         <div className="flex flex-col w-full h-full">
//           {selectedContact && (
//             <div className="flex-1 p-4 overflow-y-auto">
//               {selectedContact.chatMessages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`mb-4 p-3 max-w-xs rounded-lg ${
//                     msg.sender === 'You'
//                       ? 'bg-green-500 text-white self-end rounded-br-none'
//                       : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                   }`}
//                 >
//                   <strong className="text-sm">{msg.sender}: </strong>
//                   <p className="mt-1 text-base">{msg.content}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Message Input Section (Fixed to bottom) */}
//           <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300">
//             <div className="flex items-center space-x-3">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <FiPaperclip size={24} />
//               </button>
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 <FiSend size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;







// // Chat.tsx
// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiPhone, FiMoreHorizontal } from 'react-icons/fi';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   const handleCallClick = () => {
//     // Handle call functionality
//     console.log('Call button clicked');
//   };

//   const handleMoreOptionsClick = () => {
//     // Handle the three dots menu functionality (options)
//     console.log('More options clicked');
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1">
//         {/* Sidebar for contact list, visible only on larger screens */}
//         {!selectedContact || !isMobile ? (
//           <Sidebar contacts={contacts} selectContact={selectContact} />
//         ) : null}

//         {/* Chat Section */}
//         <div className="flex-1 p-4 overflow-hidden flex flex-col h-full">
//           {selectedContact ? (
//             <>
//               {/* Header */}
//               <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
//                 <div className="flex items-center space-x-3">
//                   {/* Profile Icon */}
//                   <img
//                     src={selectedContact.image}
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <span className="font-semibold text-lg">{selectedContact.name}</span>
//                 </div>
//                 <div className="flex space-x-4">
//                   {/* Calls Button */}
//                   <button onClick={handleCallClick} className="text-blue-500">
//                     <FiPhone size={24} />
//                   </button>
//                   {/* More Options Button (Three Dots) */}
//                   <button onClick={handleMoreOptionsClick} className="text-gray-500">
//                     <FiMoreHorizontal size={24} />
//                   </button>
//                 </div>
//               </div>

//               {/* Chat Messages */}
//               <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
//                 {selectedContact.chatMessages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`mb-4 p-3 max-w-xs rounded-lg ${
//                       msg.sender === 'You'
//                         ? 'bg-green-500 text-white self-end rounded-br-none'
//                         : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                     }`}
//                   >
//                     <strong className="text-sm">{msg.sender}: </strong>
//                     <p className="mt-1 text-base">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Message Input */}
//               <div className="flex p-4 border-t border-gray-300 bg-white">
//                 <button className="mr-3">
//                   <FiPaperclip size={24} className="text-gray-600 hover:text-gray-800" />
//                 </button>
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   <FiSend size={24} />
//                 </button>
//               </div>
//             </>
//           ) : (
//             // If no contact is selected and on mobile, show a message to select a contact
//             isMobile && (
//               <div className="flex items-center justify-center flex-1">
//                 <p className="text-lg text-gray-500">Select a contact to start chatting</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;











// // Chat.tsx
// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip, FiPhone, FiMoreHorizontal } from 'react-icons/fi';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   const handleCallClick = () => {
//     // Handle call functionality
//     console.log('Call button clicked');
//   };

//   const handleMoreOptionsClick = () => {
//     // Handle the three dots menu functionality (options)
//     console.log('More options clicked');
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1">
//         {/* Sidebar for contact list */}
//         {(!selectedContact || !isMobile) && (
//           <Sidebar contacts={contacts} selectContact={selectContact} />
//         )}

//         {/* Chat Section */}
//         <div className="flex-1 p-4 overflow-hidden flex flex-col">
//           {selectedContact ? (
//             <>
//               {/* Header */}
//               <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
//                 <div className="flex items-center space-x-3">
//                   {/* Profile Icon */}
//                   <img
//                     src={selectedContact.image}
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <span className="font-semibold text-lg">{selectedContact.name}</span>
//                 </div>
//                 <div className="flex space-x-4">
//                   {/* Calls Button */}
//                   <button onClick={handleCallClick} className="text-blue-500">
//                     <FiPhone size={24} />
//                   </button>
//                   {/* More Options Button (Three Dots) */}
//                   <button onClick={handleMoreOptionsClick} className="text-gray-500">
//                     <FiMoreHorizontal size={24} />
//                   </button>
//                 </div>
//               </div>

//               {/* Chat Messages */}
//               <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
//                 {selectedContact.chatMessages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`mb-4 p-3 max-w-xs rounded-lg ${
//                       msg.sender === 'You'
//                         ? 'bg-green-500 text-white self-end rounded-br-none'
//                         : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                     }`}
//                   >
//                     <strong className="text-sm">{msg.sender}: </strong>
//                     <p className="mt-1 text-base">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Message Input */}
//               <div className="flex p-4 border-t border-gray-300 bg-white">
//                 <button className="mr-3">
//                   <FiPaperclip size={24} className="text-gray-600 hover:text-gray-800" />
//                 </button>
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   <FiSend size={24} />
//                 </button>
//               </div>
//             </>
//           ) : (
//             isMobile && (
//               <div className="flex items-center justify-center flex-1">
//                 <p className="text-lg text-gray-500">Select a contact to start chatting</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;






// // Chat.tsx
// import React, { useState, useEffect } from 'react';
// import { FiSend, FiPaperclip } from 'react-icons/fi';
// import Sidebar from './Sidebar';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// const Chat: React.FC = () => {
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1',
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2',
//     },
//     // Add more contacts here
//   ];

//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1">
//         {(!selectedContact || !isMobile) && (
//           <Sidebar contacts={contacts} selectContact={selectContact} />
//         )}

//         {/* Chat Section */}
//         <div className="flex-1 p-4 overflow-hidden flex flex-col">
//           {selectedContact ? (
//             <>
//               <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
//                 {selectedContact.chatMessages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`mb-4 p-3 max-w-xs rounded-lg ${
//                       msg.sender === 'You'
//                         ? 'bg-green-500 text-white self-end rounded-br-none'
//                         : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                     }`}
//                   >
//                     <strong className="text-sm">{msg.sender}: </strong>
//                     <p className="mt-1 text-base">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex p-4 border-t border-gray-300 bg-white">
//                 <button className="mr-3">
//                   <FiPaperclip size={24} className="text-gray-600 hover:text-gray-800" />
//                 </button>
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   <FiSend size={24} />
//                 </button>
//               </div>
//             </>
//           ) : (
//             isMobile && (
//               <div className="flex items-center justify-center flex-1">
//                 <p className="text-lg text-gray-500">Select a contact to start chatting</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



// import React, { useState } from 'react';
// import { FiSend, FiPaperclip } from 'react-icons/fi';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string; // Optional field for profile image
// }

// const Chat: React.FC = () => {
//   // Sample contacts with messages
//   const initialContacts: Contact[] = [
//     {
//       name: 'John',
//       chatMessages: [
//         { sender: 'John', content: 'Hey, how are you?' },
//         { sender: 'You', content: 'I am good, thanks!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=1', // Random image
//     },
//     {
//       name: 'Jane',
//       chatMessages: [
//         { sender: 'Jane', content: 'Hello, how was your day?' },
//         { sender: 'You', content: 'It was good!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=2', // Random image
//     },
//     {
//       name: 'Alice',
//       chatMessages: [
//         { sender: 'Alice', content: 'What’s up?' },
//         { sender: 'You', content: 'Just relaxing!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=3', // Random image
//     },
//     {
//       name: 'Bob',
//       chatMessages: [
//         { sender: 'Bob', content: 'Let’s catch up sometime!' },
//         { sender: 'You', content: 'Yes, let’s do that soon!' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=4', // Random image
//     },
//     {
//       name: 'Charlie',
//       chatMessages: [
//         { sender: 'Charlie', content: 'Are you free for a meeting?' },
//         { sender: 'You', content: 'I’m free tomorrow.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=5', // Random image
//     },
//     {
//       name: 'Kitty',
//       chatMessages: [
//         { sender: 'Kitty', content: 'Are you free for a meeting?' },
//         { sender: 'You', content: 'I’m free tomorrow.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=6', // Random image
//     },
//     {
//       name: 'Rachael',
//       chatMessages: [
//         { sender: 'Rachael', content: 'Are you free for a meeting?' },
//         { sender: 'You', content: 'I’m free tomorrow.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=7', // Random image
//     },
//     {
//       name: 'Meloni',
//       chatMessages: [
//         { sender: 'Meloni', content: 'Are you free for a meeting?' },
//         { sender: 'You', content: 'I’m free tomorrow.' },
//       ],
//       image: 'https://i.pravatar.cc/150?img=8', // Random image
//     },
//   ];

//   // State for selected contact and messages
//   const [contacts, setContacts] = useState<Contact[]>(initialContacts);
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
//   const [newMessage, setNewMessage] = useState('');

//   // Handle selecting a contact
//   const selectContact = (contact: Contact) => {
//     setSelectedContact(contact);
//   };

//   // Send a new message
//   const sendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const updatedContacts = contacts.map((contact) =>
//         contact.name === selectedContact.name
//           ? {
//               ...contact,
//               chatMessages: [
//                 ...contact.chatMessages,
//                 { sender: 'You', content: newMessage },
//               ],
//             }
//           : contact
//       );
//       setContacts(updatedContacts);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1">
//         {/* Contact List (Sidebar) */}
//         <div className="flex-none p-4 bg-gray-100 border-r border-gray-300 max-w-xs overflow-y-auto h-screen">
//           <h2 className="text-xl font-bold">Contacts</h2>
//           <div className="space-y-2 mt-4">
//             {contacts.map((contact, index) => (
//               <button
//                 key={index}
//                 className="flex items-center w-full text-left p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//                 onClick={() => selectContact(contact)}
//               >
//                 <img
//                   src={contact.image}
//                   alt={contact.name}
//                   className="w-8 h-8 rounded-full mr-3"
//                 />
//                 <span>{contact.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Chat Section */}
//         <div className="flex-1 p-4 overflow-hidden flex flex-col">
//           {selectedContact ? (
//             <>
//               {/* Chat Messages */}
//               <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
//                 {selectedContact.chatMessages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`mb-4 p-3 max-w-xs rounded-lg ${
//                       msg.sender === 'You'
//                         ? 'bg-green-500 text-white self-end rounded-br-none'
//                         : 'bg-yellow-200 text-black self-start rounded-bl-none'
//                     }`}
//                   >
//                     <strong className="text-sm">{msg.sender}: </strong>
//                     <p className="mt-1 text-base">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Message Input */}
//               <div className="flex p-4 border-t border-gray-300 bg-white">
//                 <button className="mr-3">
//                   <FiPaperclip size={24} className="text-gray-600 hover:text-gray-800" />
//                 </button>
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-sm"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   <FiSend size={24} />
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="flex items-center justify-center flex-1">
//               <p className="text-lg text-gray-500">Select a contact to start chatting</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



























// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// function Chat() {
//   const [messages, setMessages] = useState([
//     { sender: 'John', content: 'Hey, how are you?' },
//     { sender: 'You', content: 'I am good, thanks!' },
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'You', content: newMessage }]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h3 style={styles.contactsHeader}>Contacts</h3>
//         <ul style={styles.contactList}>
//           <li>
//             <Link to="/chat" style={styles.contactLink}>
//               <div style={styles.contact}>
//                 <div style={styles.contactImage}></div>
//                 <span>John</span>
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Chat Window */}
//       <div style={styles.chatWindow}>
//         <div style={styles.chatHeader}>
//           <div style={styles.contactImage}></div>
//           <h3>John</h3>
//         </div>
//         <div style={styles.chatMessages}>
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               style={msg.sender === 'You' ? styles.sentMessage : styles.receivedMessage}
//             >
//               <strong>{msg.sender}:</strong> <span>{msg.content}</span>
//             </div>
//           ))}
//         </div>
//         <div style={styles.messageInput}>
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type a message..."
//             style={styles.inputBox}
//           />
//           <button onClick={sendMessage} style={styles.sendButton}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//     container: {
//       display: 'flex',
//       height: '100vh',
//     },
//     sidebar: {
//       width: '250px',
//       borderRight: '1px solid #ddd',
//       padding: '20px',
//       backgroundColor: '#f5f5f5',
//     },
//     contactsHeader: {
//       margin: 0,
//       fontSize: '18px',
//     },
//     contactList: {
//       listStyleType: 'none',
//       padding: 0,
//       marginTop: '10px',
//     },
//     contactLink: {
//       textDecoration: 'none',
//       color: 'black',
//     },
//     contact: {
//       display: 'flex',
//       alignItems: 'center',
//       marginBottom: '10px',
//     },
//     contactImage: {
//       width: '40px',
//       height: '40px',
//       borderRadius: '50%',
//       backgroundColor: '#ccc',
//       marginRight: '10px',
//     },
//     chatWindow: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column', // This should be a valid value
//       backgroundColor: '#fff',
//     },
//     chatHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: '10px',
//       backgroundColor: '#0078d4',
//       color: 'white',
//     },
//     chatMessages: {
//       flex: 1,
//       padding: '10px',
//       overflowY: 'auto',
//       backgroundColor: '#f4f4f4',
//     },
//     sentMessage: {
//       textAlign: 'right',  // 'right' is a valid textAlign value
//       marginBottom: '10px',
//       padding: '8px',
//       backgroundColor: '#dcf8c6',
//       borderRadius: '10px',
//     },
//     receivedMessage: {
//       textAlign: 'left',  // 'left' is a valid textAlign value
//       marginBottom: '10px',
//       padding: '8px',
//       backgroundColor: '#fff',
//       borderRadius: '10px',
//       border: '1px solid #ddd',
//     },
//     messageInput: {
//       display: 'flex',
//       padding: '10px',
//       backgroundColor: '#fff',
//       borderTop: '1px solid #ddd',
//     },
//     inputBox: {
//       flex: 1,
//       padding: '10px',
//       borderRadius: '20px',
//       border: '1px solid #ccc',
//     },
//     sendButton: {
//       padding: '10px',
//       borderRadius: '20px',
//       border: 'none',
//       backgroundColor: '#0078d4',
//       color: 'white',
//       cursor: 'pointer',
//       marginLeft: '10px',
//     },
//   };
  
//   export default Chat;
  


