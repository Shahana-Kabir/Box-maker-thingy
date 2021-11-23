import logo from './logo.svg';
import './App.css';
import Box from './Box';
import NewBox from './NewBox';
import NewBoxList from './NewBoxList';
import BoxForm from './BoxForm';

function App() {
  return (
    <div className="App">
      {/* <NewBox height = {2} width = {2} color = {"red"} />
      <NewBox height = {4} width = {4} color = {"green"} /> */}
      {/* <Box height = {2} width = {2} color = {"green"}/> */}
      <NewBoxList />

  
    </div>
  );
}

export default App;
