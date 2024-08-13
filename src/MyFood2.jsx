import React,{useState, createContext} from 'react';
export const Price2Context = createContext();


    function MyFood2(){
        const [count, setCount] = useState (0);
        const [price2, setPrice2] = useState (0);
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
            setPrice2(count * 20 + 20);
        }
        function priceMinus(){
            setPrice2(count * 20 - 20);
        }
        
    return (
        <div className="container">
            <img src="images/curry2.jpg" alt="beef-steak"/>
            <div className="caption1"> 
                <h4>Beef Steak</h4>
                <p className="price-display">Price: 20$</p>
            </div>
            <p>Japan Beef with seasoning powders</p>
            <input type="radio" name="beefCook" />
            <label>Rare</label>
            <input type="radio" name="beefCook" />
            <label>Medium Rare</label>
            <input type="radio" name="beefCook"/>
            <label>Medium</label>
            <input type="radio" name="beefCook"/>
            <label>Medium Well</label>
            <input type="radio" name="beefCook"/>
            <label>Well Done</label>
            <p>Choose: {count} </p>
            <button className="button1" 
                onClick={callBoth1}                
                disabled={count === 10}>+1</button>

            <button className="button1" 
                onClick={callBoth2} 
                disabled={count === 0}>-1</button>

            <p>Price: {price2}$</p>
            <Price2Context.Provider value={price2}>
                
            </Price2Context.Provider>
        </div>
    
    );
}   

export default MyFood2