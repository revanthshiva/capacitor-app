import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IonButton, IonCard, IonContent, setupIonicReact } from '@ionic/react';
import RaeImage from './Image/Rae.png'; // Import the image

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDashboardClick = () => {
    navigate('/app/dashboard');
  };

  return (
    <IonCard className="flex flex-col items-center justify-center align-center content-center  min-h-screen bg-slate-950	">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">CSA RAE</h1>


      <img
        src={RaeImage}  // Use the imported image
        alt="CSA Rae App Logo"
        className="w-29 h-44 rounded-full mx-auto"  // Adjust the size of the image
      />

      <IonCard className="grid lg:grid-cols-2 gap-3 w-1/2 bg-slate-950 mt-5 ">
        <IonButton
          className=" bg-[#c9ada7] text-white font-semibold rounded hover:bg-[#b08d76]" // Decreased padding slightly
          onClick={handleLoginClick}
        >
          Login
        </IonButton>
        <IonButton
          className=" bg-[#c9ada7] text-white font-semibold rounded hover:bg-[#b08d76]" // Decreased padding slightly
          onClick={handleDashboardClick}
        >
          Dashboard
        </IonButton>

      </IonCard>

    </IonCard>
  );
};

export default App;










// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';
// import { setupIonicReact } from '@ionic/react';

//  setupIonicReact();
// function App() {
//   return (
//     <IonContent style={{margin:"1rem"}}>
//       <h1>CSA Rae App</h1>
//     </IonContent>
//   );
// }

// export default App;
