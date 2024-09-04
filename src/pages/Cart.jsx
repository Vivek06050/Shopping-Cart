import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex max-w-[1500px] mx-auto gap-[20px] justify-evenly mt-20 mb-20">


      <div className="flex flex-col gap-10 mb-10">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between">

        <div>
          <div className=" text-[25px] text-green-700">YOUR CART</div>
          <div className="lg:text-[50px] text-[20px] text-green-700 font-bold">SUMMARY</div>
          <p>
            <span className="text-[25px] text-gray-700 font-bold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className=" text-[20px]  text-gray-700 font-bold">Total Amount: <span className="text-black"> ${totalAmount} </span></p>
          <button className="lg:w-[400px] w-[200px]  h-[55px] bg-green-500 border-green-600 border-[2px] transition-all duration-800 ease-linear font-bold text-[20px] mt-[20px] rounded-xl text-white hover:bg-white hover:text-green-600 mb-10">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-full h-screen flex flex-col gap-[20px] justify-center items-center ">
      <h1 className="text-[20px]  text-gray-700 font-bold">Your Cart is Empty!</h1>
      <Link to={"/"}>
        <button className="w-[200px] h-[55px] bg-green-500 border-green-600 border-[2px] transition-all duration-800 ease-linear font-bold text-[20px] mt-[20px] rounded-xl text-white hover:bg-white hover:text-green-600">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
