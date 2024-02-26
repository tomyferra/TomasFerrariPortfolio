import NavigationBar from './components/Navbar';
import About from './components/About';
import PastWork from './components/Projects';
import Skills from './components/Skills';
// import WorkExperience from './components/WorkExperience';
import Links from './components/Links';
import ReactGA from 'react-ga4';

import './App.css';
import ExperienceTimeline from './components/ExperienceTimeline';

function App() {
  ReactGA.initialize('G-1103B8DGCR');
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  })
  return (
    <div className="mt-auto d-flex flex-column min-vh-100">
      <div className="row">
        <NavigationBar />
        <About />
        <ExperienceTimeline />
        {/* <WorkExperience /> */}
        <PastWork />
        <Skills />
        <Links/>
      </div>
    </div>
  );
}

export default App;
