import './App.css';
import User from './components/User';

const friends = [
  {
    name:"Ahmet",
    id:1
  },
  {
    name:"Aslı",
    id:2

  },
  {
    name:"Reha",
    id:3

  },
  {
    name:"Cevo",
    id:4

  },
  {
    name:"Mustafa",
    id:5

  }
]

function App() {
  return(
    <div className="App">

      <User 
        name="Mehmet Ali" 
        surName="YILMAZ" 
        isLogIn={true} 
        age={32} 
        friends ={friends}
        address = {{
          title: "Gaziemir/İzmir",
          zip:35420
        }}
      />

    </div>
  );
}


export default App;
