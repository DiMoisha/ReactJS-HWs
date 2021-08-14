import './App.css';
import {Message} from "./components/Message";

function App(props) {
 return (
   <div className="App">
     <header className="App-header">
       <h3>{props.heading}</h3>
     </header>
     <div className="App-body">
      <Message msgText={props.msgText} />
     </div>
   </div>
 );
}

export default App;

