// Conditional Rendering = Allows you to control what gets rendered in your application based on certain conditions. 
//                         (show, hide, or change components).

import UserGreeting from './UserGreeting';
import './App.css'

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Scottie" />
    </>
  );

}

export default App;