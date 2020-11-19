import React from 'react';
import Achievements from './components/Achievements';
import Splash from './components/Splash';
import NavBar from './components/NavBar';
import ProjectsSection from './components/ProjectsSection'
import JammingProject from "./components/CodingProject/Jamming/JammingProject";
import WebLearnProject from "./components/CodingProject/WebLearn/WebLearnProject";
import MandlebrotProject from "./components/CodingProject/Mandelbrot/MandlebrotProject";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarDisplayStatus: 'hidden'
    }
    this.projectsRef = React.createRef();
    this.achievementsRef = React.createRef();
    this.scrollToProjects = this.scrollToProjects.bind(this);
    this.scrollToAchievements = this.scrollToAchievements.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll() {
    //Used to hide navbar at top of page
    //Constructor default is 'hidden', to avoid pop in when the page first renders.
    if ( window.scrollY > 0 ) {
      this.setState({
        navBarDisplayStatus: ''
      });
    } else {
      this.setState({
        navBarDisplayStatus: 'hidden'
      })
    }

    //Find all image elements in the projects section 
    const projectImages = document.getElementsByClassName('project-image');

    //For every image, find the number of pixels away from bottom of viewport. 
    //If less than zero (image is in view or has been passed) change state of popIn[num] to 'animated'
    //popIn[num] passed to stateless ProjectSlide components which they use to decide when to animate into view
    for ( let i = 0 ; i < projectImages.length ; i++ ) {
      let distanceFromViewport = projectImages[i].getBoundingClientRect().top - window.innerHeight;

      if ( distanceFromViewport < 0 ) {
        this.setState({
          [`popIn${i+1}`]: 'animated'
        });
      } else {
        this.setState({
          [`popIn${i+1}`]: ''
        });
      }
    }
  }

  //Ref created and passed to the first ProjectSlide, which places it at its parent div.
  //Reference invoked in the scrollTo method, which is passed as a prop to Splash, 
  //which calls it when the SVG arrow is clicked
  scrollToProjects() {
    this.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAchievements() {
    this.achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          scrollToProjects={this.scrollToProjects} 
          scrollToAchievements={this.scrollToAchievements}
          displayStatus={this.state.navBarDisplayStatus} 
        />
        <Splash scrollToProjects={this.scrollToProjects} />
        <ProjectsSection refProp={this.projectsRef} />
        <Achievements 
          refProp={this.achievementsRef}
          popIn1={this.state.popIn1} 
          popIn2={this.state.popIn2} 
          popIn3={this.state.popIn3} 
          popIn4={this.state.popIn4}
        />
      </div>
    );
  }
}

export default App;
