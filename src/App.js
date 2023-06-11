import { useState } from 'react';
import './App.css';
import {Card, Navbar } from 'react-bootstrap';
import {data} from './data' ;
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function App() {
  const [count, setCount]= useState(0);
  return (
    <div className='body'>
     {/*--------------------------- img section----------------------------------------------- */}
     <img className='head' src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt='header nothing'/>
      {data.map((prod,idx)=>(
         <Content 
         key={idx}
         img={prod.img}
         productName={prod.productName}
         star={prod.star}
         fakePrice={prod.pricerossLine}
         originalPrice={prod.originalPrice}
         count={count}
         setCount={setCount}
        />
      ))}
      


    </div>


  );
}

export default App;


let Content=({key,img,productName,star,fakePrice,originalPrice ,count,setCount})=>{
  const [show, setShow] = useState(true) 
  // add to cart clickFunction
let cartnumber=(count, setCount )=>{
  setShow(!show) 
  setCount(count=count+1)
  
}

// remove from cart clickFunction

let removecartnumber=(count, setCount)=>{
  setShow(!show)
  setCount(count=count-1)
 
}

  return(
    <div className='body1'>
    {/* ---------------------------cart section------------------------------------ */}
    <div className='cart'>
      <Navbar fixed="top">
      <div className='cartbtn '>
         <ShoppingCartIcon/>
         (<div className='cartNumber'>{count}</div>)
      </div>
      </Navbar>
    </div>
{/* ---------------------------card section------------------------------------ */}
    <div className='card-container'>
        <Card key={key} className='card'>
        <Card.Img variant="top" src={img} className='img' />
        <Card.Body className='cardBody'>
          <Card.Title className='prodName'>{productName}</Card.Title>
            <div className='star'> {star}</div>
            <div className='priceTable'>
            <span className='priceTitle'>Price: </span>
            <span className='fakePrice'>{fakePrice}</span>
            <span className='originalPrice'>{originalPrice}</span>
            </div>
            
             { !show? <div className='cardBtnDiv'><button className='cardBtn' onClick={()=>removecartnumber(count, setCount)}>Remove From Cart</button></div>
                      : 
                    <div className='cardBtnDiv'><button className='cardBtn' onClick={()=>cartnumber(count, setCount)}>Add To Cart</button></div>  
             } 
        </Card.Body>
      </Card>
    
    </div>
    </div>

  )
}