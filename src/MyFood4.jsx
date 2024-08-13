import React,{useState, useEffect, useRef, createContext} from 'react';
export const Price4Context = createContext();


    function MyFood4(){
        const [count, setCount] = useState (0);
        const [price4, setPrice4] = useState (0);
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
            setPrice4(count * 12.5 + 12.5);
        }
        function priceMinus(){
            setPrice4(count * 12.5 - 12.5);
        }
        
    return (
        <div className="container">
            <img src="images/curry4.jpg" alt="fried-chicken"/>
            <div className="caption1"> 
                <h4>Fried Chicken</h4>
                <p className="price-display">Price: 12.5$</p>
            </div>
            <p>Fried Chicken</p>
            <input type="radio" name="sauce"/>
            <label>Mayonnaise</label>
            <input type="radio" name="sauce"/>
            <label>Chilli</label>
            <input type="radio" name="sauce"/>
            <label>Catchup</label>
            <p>Choose: {count} </p>
            <button className="button1" 
                onClick={callBoth1}                
                disabled={count === 10}>+1</button>

            <button className="button1" 
                onClick={callBoth2} 
                disabled={count === 0}>-1</button>

            <p>Price: {price4}$</p>
            <Price4Context.Provider value={price4}>
               
            </Price4Context.Provider>
        </div>
    
    );
}   

export default MyFood4