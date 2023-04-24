import './App.css';
import NavBar from './NavBar';
import WelcomeMsg from './WelcomMsg';
import ContentBox from './ContentBox';
import { useState } from 'react';




function App() {

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  };


  return (
    <div className="App">
      <NavBar />
      <WelcomeMsg section="Section Title" />
      <ContentBox boxName="Content Box 1" boxNameTwo="Content Box 2" />
      <ContentBox boxName="Content Box 3" boxNameTwo="Content Box 4" />
      <div className="btn">
        <button className="btn_action btn" onClick={handleToggle}>Call to Action</button>
      </div>
      {toggle ? <ContentBox boxName="Content Box 5" boxNameTwo="Content Box 6" /> : null}
      {toggle ? <ContentBox boxName="Content Box 7" boxNameTwo="Content Box 8" /> : null}
    </div>
  );
}

export default App;
