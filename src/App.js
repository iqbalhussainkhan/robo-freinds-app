import React,{Component} from 'react';
import './App.css';
import SearchField from './SearchField';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()).then(photos => this.setState({robots: photos}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }


  render(){
    const robotsList = this.state.robots.filter(robot => {
      return robot.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return robotsList.length ?
     (
       <div className='tc'>
          <h1 className="h1text f1">Robo form</h1>
          <SearchField onSearchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={robotsList}/>
          </Scroll>
       </div>
      ) : 
       <h1 className="h1text f1 tc">LOADING..!</h1>

  }
}

export default App;
