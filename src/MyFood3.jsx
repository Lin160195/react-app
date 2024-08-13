import React,{useState, createContext} from 'react';
export const Price3Context = createContext();


    function MyFood3(){
        const [count, setCount] = useState (0);
        const [price3, setPrice3] = useState (0);
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
            setPrice3(count * 17.5 + 17.5);
        }
        function priceMinus(){
            setPrice3(count * 17.5 - 17.5);
        }
        
    return (
        <div className="container">
            <img src="images/curry3.jpg" alt="chicken-grill"/>
            <div className="caption1"> 
                <h4>Grilled Chicken</h4>
                <p className="price-display">Price: 17.5$</p>
            </div>
            <p>Grilled Chicken with seasoning</p>
            <p>Choose: {count} </p>
            <button className="button1" 
                onClick={callBoth1}                
                disabled={count === 10}>+1</button>

            <button className="button1" 
                onClick={callBoth2} 
                disabled={count === 0}>-1</button>

            <p>Price: {price3}$</p>
            <Price3Context.Provider value={price3}>
                
            </Price3Context.Provider>
        </div>
    
    );
}   

export default MyFood3