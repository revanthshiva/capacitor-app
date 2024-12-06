import React from 'react';

interface Message {
  sender: string;
  content: string;
}

interface Contact {
  name: string;
  chatMessages: Message[];
  image?: string;
}

interface SidebarProps {
  contacts: Contact[];
  selectContact: (contact: Contact) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
  return (
    <div className="bg-blue-400 text-white p-4 h-full">
      <h2 className="text-xl font-semibold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center p-3 cursor-pointer hover:bg-gray-700 rounded-lg"
            onClick={() => selectContact(contact)}
          >
            <img
              src={contact.image || 'https://i.pravatar.cc/150'}
              alt={contact.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-white">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;





// // Sidebar.tsx

// import React from 'react';
// import { Contact } from './Chat'; // Adjust the path as necessary

// interface SidebarProps {
//   contacts: Contact[];
//   selectContact: (contact: Contact) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
//   return (
//     <div>
//       {contacts.map((contact, index) => (
//         <div
//           key={index}
//           onClick={() => selectContact(contact)}
//           className="flex items-center p-3 cursor-pointer hover:bg-gray-700"
//         >
//           <img
//             src={contact.image}
//             alt={contact.name}
//             className="w-10 h-10 rounded-full mr-3"
//           />
//           <div className="text-gray-400">{contact.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;





// import React from 'react';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// interface SidebarProps {
//   contacts: Contact[];
//   selectContact: (contact: Contact) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
//   return (
//     <div className="bg-gray-800 text-white p-4 h-full">
//       <h2 className="text-xl font-semibold mb-4">Contacts</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li
//             key={index}
//             className="flex items-center p-3 cursor-pointer hover:bg-gray-700 rounded-lg"
//             onClick={() => selectContact(contact)}
//           >
//             <img
//               src={contact.image || 'https://i.pravatar.cc/150'}
//               alt={contact.name}
//               className="w-8 h-8 rounded-full mr-3"
//             />
//             <span className="text-white">{contact.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;









// // Sidebar.tsx
// import React from 'react';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// interface SidebarProps {
//   contacts: Contact[];
//   selectContact: (contact: Contact) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-white mb-4">Contacts</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li
//             key={index}
//             className="flex items-center p-3 cursor-pointer hover:bg-gray-700 rounded-lg"
//             onClick={() => selectContact(contact)}
//           >
//             <img
//               src={contact.image || 'https://i.pravatar.cc/150'}
//               alt={contact.name}
//               className="w-8 h-8 rounded-full mr-3"
//             />
//             <span className="text-white">{contact.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;






// // Sidebar.tsx
// import React from 'react';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// interface SidebarProps {
//   contacts: Contact[];
//   selectContact: (contact: Contact) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
//   return (
//     <div className="flex-none p-4 bg-gray-100 border-r border-gray-300 max-w-xs overflow-y-auto h-screen">
//       <h2 className="text-xl font-bold">Contacts</h2>
//       <div className="space-y-2 mt-4">
//         {contacts.map((contact, index) => (
//           <button
//             key={index}
//             className="flex items-center w-full text-left p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//             onClick={() => selectContact(contact)}
//           >
//             <img
//               src={contact.image}
//               alt={contact.name}
//               className="w-8 h-8 rounded-full mr-3"
//             />
//             <span>{contact.name}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// // Sidebar.tsx
// import React from 'react';

// interface Message {
//   sender: string;
//   content: string;
// }

// interface Contact {
//   name: string;
//   chatMessages: Message[];
//   image?: string;
// }

// interface SidebarProps {
//   contacts: Contact[];
//   selectContact: (contact: Contact) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ contacts, selectContact }) => {
//   return (
//     <div className="flex-none p-4 bg-gray-100 border-r border-gray-300 max-w-xs overflow-y-auto h-screen">
//       <h2 className="text-xl font-bold">Contacts</h2>
//       <div className="space-y-2 mt-4">
//         {contacts.map((contact, index) => (
//           <button
//             key={index}
//             className="flex items-center w-full text-left p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//             onClick={() => selectContact(contact)}
//           >
//             <img
//               src={contact.image}
//               alt={contact.name}
//               className="w-8 h-8 rounded-full mr-3"
//             />
//             <span>{contact.name}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
