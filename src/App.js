import logo from './logo.svg';
import './App.css';
import UseState1 from './Hooks/useState/useStateEx1'
import UseState2 from './Hooks/useState/useStateEx2'
import UseState3 from './Hooks/useState/useStateEx3'
import UseState4 from './Hooks/useState/useStateEx4'
import UseState5 from './Hooks/useState/useStateEx5'
import UseState6 from './Hooks/useState/useStateEx6'
import UseEffectEx1 from './Hooks/useEffect/useEffectEx1'
import UseEffectEx2 from './Hooks/useEffect/useEffectEx2'
import UseEffect3 from './Hooks/useEffect/useEffectEx3'
import GetAndPost from './fakeAPis/getAndPost';
import GetDeletePut from './fakeAPis/getDeletePut';
import Index from './todoList/index'
function App() {
  return (
    <div className="App">
       <p style={{fontFamily:"sans-serif",fontWeight:"600",fontSize:"30px"}}>useState start to here </p>
     
      <UseState1 />
       <GetAndPost />
       <GetDeletePut />
       <Index />
      <UseState2 />
      <UseState3 />
      <UseState4 />
      <UseState5 />
      <UseState6 />
      <hr/>
      <p style={{fontFamily:"sans-serif",fontWeight:"600",fontSize:"30px"}}>useEffect start to here </p>
      <UseEffectEx1 />
      <UseEffectEx2 />
      <UseEffect3 />

       
    </div>
  );
}

export default App;
