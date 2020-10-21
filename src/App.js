import React from 'react';
import kid from './images/funnyKid.webp';
import rocks from './images/rockArch.webp';
import ProjectSlide from './components/ProjectSlide';
import ProjectSlideReversed from './components/ProjectSlideReversed';
import Splash from './components/Splash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
    //Find all image elements in the projects section 
    const projectImages = document.getElementsByClassName('project-image');

    //For every image, find the number of pixels away from bottom of viewport. 
    //If less than zero (image is in view or has been passed) change state of associated popIn[num]
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

  render() {
    return (
      <div className="App">
        <Splash />
        <ProjectSlide smallImage={kid} largeImage={rocks} animate1={this.state.popIn1} animate2={this.state.popIn2}/>
        <ProjectSlideReversed smallImage={kid} largeImage={rocks} animate1={this.state.popIn3} animate2={this.state.popIn4}/>
        <ProjectSlide smallImage={kid} largeImage={rocks} animate1={this.state.popIn5} animate2={this.state.popIn6}/>
      </div>
    );
  }
}

export default App;
