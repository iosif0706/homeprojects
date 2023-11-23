
import { Component } from 'react';
import './App.css';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorCount: 0,
      textCount: 50,
      color: "red",
      quote:'',
      author:''
      };
      this.json= this.json.bind(this)
     
    }
      json = () => {
        let colors = [
          "#16a085",
          "#27ae60",
          "#2c3e50",
          "#f39c12",
          "#e74c3c",
          "#9b59b6",
          "#FB6964",
          "#342224",
          "#472E32",
          "#BDBB99",
          "#77B1A9",
          "#73A857"
        ];
        fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response =>response.json())
        .then(data => this.setState({
          quote: data.quotes[this.state.textCount].quote,
          author: data.quotes[this.state.textCount].author,
          textCount: this.state.textCount + 1,
          colorCount: this.state.colorCount + 1
           }))
           .catch(error => this.setState({textCount: 0}))
        
      
        this.setState({color :colors[this.state.colorCount]})   
        if(this.state.colorCount == colors.length){
          this.setState({colorCount: 0})
        }
                                 
    
      };
      
    render(){
      
      let inputStyle = {background:this.state.color 
      }
      
   
     
    return (
      
      <div className="App" style={inputStyle}>
      <div className="container" style={inputStyle}>
        <div id="quote-box">
          <h2 id="text" >{this.state.quote}</h2>
          <h2 id="author">{this.state.author}</h2>
          <div class="btn">
          <a  href="twitter.com/intent/tweet"><input id="tweet-quote" type="submit" value="tweet" style={inputStyle} /></a>
           <input type="submit" 
          style={inputStyle}
          value="New Quote"
          onClick={this.json}/>
        
          </div>
         
          </div>

        </div>
      </div>
    );
  }
};


function App() {
  return (
  <Check/>
  );
}

export default App;
