import React, {Component} from 'react';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import QuoteBox from './components/QuoteBox';
import TagPicker from './components/TagPicker';
import './App.css'

const colors = [
  "cornflowerblue",
  "blueviolet",
  "indianred",
  "deeppink",
  "forestgreen"
];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        activeColor:colors[0]
    }
}
  handleActiveColor = (newColor) => {
    this.setState({
      activeColor:newColor
    });
  }

  render(){
    const {activeColor} = this.state;
    return (
      <div className="App" style={{backgroundColor:activeColor}}>
        <div className ="Header-box">
          <Header title="Random Quote Machine" />
        </div>
        <div className="Quote-box">
          <QuoteBox
            colors={colors} 
            activeColor={activeColor}
          />
        </div>
        <div className="ColorPicker-box">
        <ColorPicker 
          colors={colors} 
          activeColor={activeColor}
          handleActiveColor={this.handleActiveColor}
          />
        </div>
        <div className ="TagPicker-box">
          <TagPicker/>
        </div>
      </div>
      
    );
  }
}

export default App;
