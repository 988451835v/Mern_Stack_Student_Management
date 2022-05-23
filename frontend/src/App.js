import AddStudent from './components/AddStudent';
import HeaderClass from './components/HeaderClass';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AllStudents from './components/AllStudents';



function App() {
  return (
  <Router>
  <div >
     
  <HeaderClass/>
 
  <Route path="/add" exact component={AddStudent} />
  <Route path="/" exact component={AllStudents}/>

     
  </div>
  </Router>
 
  );
}

export default App;
