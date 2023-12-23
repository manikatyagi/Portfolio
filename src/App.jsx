
import styles from './App.module.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Intro} from "./components/intro/intro"
import {AboutMe} from "./components/aboutMe/aboutMe"
import { SkillsExperience } from './components/SkillsExperience/SkillsExperience';
import {Projects} from "./components/projects/projects"
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/education';

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <SkillsExperience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App
