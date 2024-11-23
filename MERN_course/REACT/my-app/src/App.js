import logo from './logo.svg';
import './App.css';
import './Signup.css'
import './Counter.css'
import './Amazon.css'
import Signup from './Signup';
import Counter from './Counter';
import Amazon from './Amazon';
import Props from './Props';
import ProductList from './ProductList';

function App() {
  const isBusMissed=true;
  let mess;
  if(isBusMissed){
    mess=<button>Take Auto</button>
  }
  else{
    mess =<button>Take Bus</button>
  }
  (isBusMissed)?mess=<button>Take Auto</button>:mess =<button>Take Bus</button>;//using ternary operator

  //Array
  const data=['Anshad','Sreekumar','Albin','Rambo']
  const profile=[{name:'Nihal',age:22,gender:'Male'},
    {name:'Majo',age:22,gender:'Male'},
    {name:'Bhagya',age:22,gender:'Female'}
  ];

  return (
    <div className='sign-up-container'>
      <Signup/>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <Amazon/>

      <hr></hr>
      <h1>Greetings using props</h1>
      <Props name="Anshad"/>
      <Props name="Dilsha"/>

      <hr/>
      <h1>Product List</h1>
      <hr/>
  
      <ProductList product ="Laptop" price="999" description="High performance laptop"/>
      <ProductList product ="Smartphone" price="699" description="Latest smartphone with powerful features"/>
      <ProductList product ="HeadPhone" price="199" description="Noice-Cancelling Over the Ear headphones"/>
      

    </div>
    // <div className="App">
      
    //   <h1>I</h1>
    //   <h2>AM</h2>
    //   <h3>MUHAMMAD ANSHAD P A</h3>
      
    //   {mess}  

    //   <ul>{
    //     data.map(data1=><li>{data1}</li>)
    //     }

    //   </ul>    

    //   <ul>
    //     {profile.map((item, index) => (
    //       <li key={index}>
    //         Name: {item.name}, Age: {item.age}
    //       </li>
    //     ))}
    //   </ul>
      
    // </div>
  );
}


export default App;
