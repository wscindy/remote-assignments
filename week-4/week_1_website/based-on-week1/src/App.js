import './App.css';
import NavBar from './NavBar';
import WelcomeMsg from './WelcomMsg';
import ContentBox from './ContentBox';
import CallToAction from './CallToAction';





function App() {

  return (
    <div className="App">
      <NavBar />
      <WelcomeMsg section="Section Title" />
      <ContentBox boxName="Content Box 1" boxNameTwo="Content Box 2" />
      <ContentBox boxName="Content Box 3" boxNameTwo="Content Box 4" />
      <CallToAction btnName="Call to Action" />
    </div>
  );
}

export default App;
