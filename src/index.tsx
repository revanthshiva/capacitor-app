// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<main style={{ padding: '1rem' }}><p>There is nothing here</p><Link to="/">Go Back</Link></main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import Login from './routes/Login';
// import Dashboard from './routes/Dashboard';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/app/dashboard/*" element={<Dashboard />} />
//         <Route path="*" element={<main style={{ padding: '1rem' }}><p>There is nothing here</p><Link to="/">Back to home</Link></main>} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './routes/Login';
// import Dashboard from './routes/Dashboard';
// import Chat from './routes/Chat';
// import Calls from './routes/Calls';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* Main Route for the App */}
//         <Route path="/" element={<App />} />
        
//         {/* Route for Login */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Route for Dashboard, including nested routes for Chat and Calls */}
//         <Route path="/app/dashboard/*" element={<Dashboard />} />
        
//         {/* Fallback route for any unmatched paths */}
//         <Route path="*" element={<main style={{ padding: '1rem' }}><p>There is nothing here</p></main>} />

        
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();



