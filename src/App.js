import './App.css';
import "./sty.css"
import Header from "./components/header";
import Fields from './components/fields';
import Button from './components/button';
import ObjectHook from './components/objectHook';
import ArrayHook from './components/arrayHook';
// import MouseHook from './components/mouseHook';
import MouseContainer from './components/mouseContainer';
// import Test from './components/test';
function App() {
  return (
    <div className="App">
 <Header/>
 <Fields/>
 <Button/>
 <ObjectHook/>
 <ArrayHook/>
 {/* <MouseHook/> */}
 <MouseContainer/>
 {/* <Test/> */}

    </div>
  );
}

export default App;
