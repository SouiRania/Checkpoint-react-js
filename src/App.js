
import Navbarss from './Navbarss';
import Heading from './Heading';
import Carte from './Carte';

import './Carte.css'
 
 function App() {
    return(
        <>
        <div className="App">

        <Navbarss></Navbarss>
        <Heading></Heading>
        <div className='Carte'>
         <Carte></Carte>
         <Carte></Carte>
         <Carte></Carte>
         </div>
        </div>
    
        </>

    );
 }
 export default App;

