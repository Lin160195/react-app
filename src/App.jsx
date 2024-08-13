import MyFood from './MyFood.jsx'
import MyFood2 from './MyFood2.jsx'
import MyFood3 from './MyFood3.jsx'
import MyFood4 from './MyFood4.jsx'
import TotalBill from './TotalBill.jsx'
import React,{useState} from 'react';


function App() {
  const [query, setQuery] = useState(1);
  
  return(
  <>
  <MyFood onQuery={setQuery}/>
  <MyFood2/>
  <MyFood3/>
  <MyFood4/>
  <TotalBill query={query}/>
  </>
  );
  
}

export default App
