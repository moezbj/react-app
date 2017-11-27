
import './App.css';
import MovingList from './MovingList'
import Rating from './Rating'


class App extends Component {
  constructor (props) {
    super(props)
    this.state ={
      MinRating:0,
      movies :[
        {
          title:"super-man",
          src:"images/super-man.png",
          Rate:3
        },
        {
          title:"pirate",
          src:"images/pirate.png",
          Rate:3
        },
        {
          title:"avatar",
          src:"images/avatar.png",
          Rate:4
        },{
          title:"fallout",
          src:"images/fallout.png",
          Rate:4
        },
        {
          title:"min",
          src:"images/min.png",
          Rate:5
        },{
          title:"justice league",
          src:"images/jl.png",
          Rate:5
        }
      ]
    }
  }
  render() {
    return (
          <div className="App">
              <header className="App-header">
                <h1 className="App-title">Movies App</h1>
              </header>
              <Rating UpdateSearch={(event)=>{
                let newValue =event.target.value
                this.setState({
                   MinRating:+(newValue)
                })
                console.log(this.state.MinRating)
              }}
              />
            <MovingList movies={this.state.movies.filter((el) =>{
              return el.Rate>=this.state.MinRating
            }
          )}/>



    </div>
    );
  }
}

export default App;