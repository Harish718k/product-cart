import { createContext, useState } from 'react'
import './component/product.css'
import { Product } from './component/Product'
import data from '../data.json'
import { Cart } from './component/Cart';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);
  return (
    <cartContext.Provider value={{cart, setCart}}>
      <section className="section">
        <h1>Dessert</h1>
        <div className="item-container">
          {products.map((product, index)=>(
            <div className="item-card" key={product.id}>
              <Product key={product.id} index={index} item={product}/>
            </div>
          ))}
        </div>
      </section>
      <Cart />
    </cartContext.Provider>
  )
}

export default App
