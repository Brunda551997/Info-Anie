import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Lesson from './pages/lesson';
import Setting from './pages/setting'
import Student from './pages/student'
function App() {
  return (
     <>
       <Router>
         <Navbar/>
         <Switch>
           <Route path="/" exact  component={Student} />
           <Route path="/lesson" component={Lesson} />
           <Route path="/setting" component={Setting} />
         </Switch>
       </Router>
     </>
  );
}

export default App;
