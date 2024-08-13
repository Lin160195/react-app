import React,{useState} from 'react';


    function MyFood(onQuery){
        const [count, setCount] = useState (0);
        const [price1, setPrice1] = useState (0);
        function callBoth1(){
          numberAdd();
          priceAdd();  
        }
        function callBoth2 (){
            numberMinus();
            priceMinus();
        }
        function numberAdd(){
            setCount(count + 1);
        }
        function numberMinus(){
            setCount(count - 1);
        }
        function priceAdd(){
            setPrice1(count * 15 + 15);
        }
        function priceMinus(){
            setPrice1(count * 15 - 15);
        }
        function TotalBill (){
            setPrice1(price1);
        }
        function handlePriceChange (e){
            onQuery(e.target.value);
        }
    return (
        <div className="container">
            <img src="images/curry1.jpg" alt="chicken-curry"/>
            <div className="caption1"> 
                <h4>Chicken Curry</h4>
                <p className="price-display">Price: 15$</p>
            </div>
            <p>Chicken,Ginger,Onion,Tomato,Masla and <br/> Mint leaves</p>
            <p>Choose: {count} </p>
            <button className="button1" 
                onClick={callBoth1}                
                disabled={count === 10}>+1</button>

            <button className="button1" 
                onClick={callBoth2} 
                disabled={count === 0}>-1</button>
            <button onClick={handlePriceChange} value={price1}>Price:{price1}$</button>
            
        </div>
    
    );
}   

export default MyFood