import { Fragment, } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  return (
    <div className="sm:h-[300px] sm:w-[100px]">
      {cart.length > 0 ? (
        <Fragment >
          <Dialog
            className="border-0 outline-0 "
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader className=" dark:bg-gray-900 h-full w-full  dark:text-white  ">your Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start  dark:bg-gray-900 h-full w-full"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col sm:flex-col-2 py-4">
                    <div className="grid grid-cols-2 py-2 sm:grid-col-2 ">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        ></img>
                        <div className="flex flex-col items-start mt-2">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2  dark:text-white">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2  dark:text-white sm:hidden md:block">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:w-1/3">
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2  dark:text-white">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2  dark:text-white">
                          Selected color:{" "}
                          <span
                            className="ml-2 rounded-full px-2 "
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2 dark:text-white">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2  dark:text-white">
                          Single Item Price:{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2  dark:text-white">
                          Total Item Prices:{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size={window.innerWidth < 640 ? "sm" : "lg"}
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                              <svg xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill="currentColor" 
                              class="w-6 h-6"
                              className="h-10px w-6 justify-between"
                              >
                         <path fill-rule="evenodd" 
                         d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                          </svg>

                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center dark:bg-gray-900 h-full w-full">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2  dark:text-white">
                Total Price :{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader className=" dark:bg-gray-900 h-full w-full dark:text-white">Shopping Bag</DialogHeader>
            <DialogBody divider
            className=" dark:bg-gray-900 h-full w-full">
              <div>
                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4  dark:text-white">
                  your bag is empty!
                </h1>
                <p className="text-black text-base font-inter tracking-normal leading-none   dark:text-white">
                  get 15% discount for your items
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
