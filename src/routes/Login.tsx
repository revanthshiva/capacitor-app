import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/app/dashboard', { replace: true });
    }, 1500);
  };

  return (
    <div className="login-container">
      <IonCard className="login-card">
        <IonCardHeader>
          <IonCardTitle className="login-title">Login</IonCardTitle>
          <IonCardSubtitle className="login-subtitle">Please enter your credentials</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <form onSubmit={onSubmit} className="login-form">
            <div className="login-input-group">
              <label htmlFor="email" className="login-label">Email</label>
              <input
                id="email"
                type="email"
                required
                className="login-input"
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                id="password"
                type="password"
                required
                className="login-input"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="login-button"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

// const Login: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       navigate('/app/dashboard', { replace: true });
//     }, 1500);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <IonCard>
//         <IonCardHeader>
//           <IonCardTitle>Login</IonCardTitle>
//           <IonCardSubtitle>Please enter your credentials</IonCardSubtitle>
//         </IonCardHeader>
//         <IonCardContent>
//           <form onSubmit={onSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>
//         </IonCardContent>
//       </IonCard>
//     </div>
//   );
// };

// export default Login;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CSSProperties } from "react";
// import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";


// function Login() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (event: any) => {
//     console.log('SUBMIT');
//     setLoading(true);
//     event.preventDefault();

//     setTimeout(() => {
//       setLoading(false);
//       navigate('/app/dashboard', { replace: true });
//     }, 1500);
//   };

//   return (
//     <>
//       <IonCard>
//       <IonCardHeader>
//         <IonCardTitle>Card Title</IonCardTitle>
//         <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
//       </IonCardHeader>

//       <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
//     </IonCard>
//     </>
//   );
// }

// const styles: { [key: string]: CSSProperties } = {
//   main: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f4f7fc", // Light background color
//   },
//   container: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//   },
//   heading: {
//     marginBottom: "20px",
//     color: "#333",
//     fontSize: "24px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column" as "column", // Explicitly specify the type
//   },
//   inputGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     fontSize: "14px",
//     color: "#555",
//     marginBottom: "5px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     boxSizing: "border-box" as "border-box", // Explicitly specify the type
//   },
//   loading: {
//     marginTop: "15px",
//     color: "#888",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "16px",
//     color: "#fff",
//     backgroundColor: "#007BFF",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// export default Login;
