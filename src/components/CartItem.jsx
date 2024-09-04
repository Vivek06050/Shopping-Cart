
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className className="max-w-[600px]">

      <div className="flex gap-20 border-cyan-800  p-10 rounded-xl  border-[2px]">

        <div>
          <img src={item.image} className="h-[180px] w-[200px]" />
        </div>
        <div>
          <h1 className="text-blue-800 font-bold">{item.title}</h1>
          <h1 className="mt-[10px]">{item.description.split(" ").slice(0,17).join(" ") + "...."}</h1>
          <div className="flex justify-between mt-[20px]">
            <p className=" text-green-900 font-bold">${item.price}</p>
            <div
            onClick={removeFromCart} className="cursor-pointer translate-x-[-70px] p-[8px]  rounded-full bg-red-600">
              <MdDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
