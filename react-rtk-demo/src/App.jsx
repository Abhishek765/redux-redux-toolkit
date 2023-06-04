import './App.css';
import CakeView from './features/cake/CakeView';
import IceCreamView from './features/icecream/IceCreamView';
import UserView from './features/user/UserView';


function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
