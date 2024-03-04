import {RiDeleteBinLine} from "react-icons/ri";
import {PiNewspaperClippingLight} from "react-icons/pi";
import {GoChevronRight} from "react-icons/go";
import { Link} from 'react-router-dom';

const Cart = () => {

    return (<>
        <div className="max-w-[1200px] grid grid-cols-12 gap-2 mx-auto" style={{marginTop:'30px'}}>
            <h1 className="col-span-12 font-bold text-2xl">My Cart <span className="font-normal">(2 Products)</span></h1>
            <div className="bg-white col-span-8 rounded-lg shadow-lg max-h-[430px] overflow-y-scroll no-scrollbar">


                <div className="border-b-[2px] border-gray-200 flex gap-4 p-3 mb-3">
                    <img
                        src={require('../../images/Burger/6.jpg')}
                        alt="" className="w-[86px] h-[86px] object-cover"/>

                    <div className="w-full flex flex-col justify-between">
                        <p className="block"  style={{ fontSize: '20px', fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>BBQ Pull Pork Burger</p>
                        <p className="block flex"> 
                            <p style={{marginRight:'15px', textDecoration: 'line-through', fontFamily: '"Inter", sans-serif',fontSize: '17px', fontWeight: '400', color:'#707070' }}>$99.00</p>
                            <span style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600'}}>$94.05</span>
                        </p>
                        <p style={{ fontFamily: '"Inter", sans-serif',fontSize: '15px', fontWeight: '400', color:'#707070' }}>You saved 4.95 USD</p>
                        <form className="w-full mx-auto flex justify-between">
                            <div className="flex items-center">
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input type="text" id="counter-input" dataInputCounter
                                       className="flex-shrink-0 text-gray-900 active:border-none bg-transparent text-sm font-normal max-w-[2.5rem] text-center "
                                       required/>
                                <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                    className="bg-gray-100 h-7 px-3 rounded flex items-center hover:text-white hover:bg-red-500 mr-4">
                                <RiDeleteBinLine className="mr-2"/>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>


                <div className="border-b-[2px] border-gray-200 flex gap-4 p-3 mb-3">
                    <img
                        src={require('../../images/Burger/2.jpg')}
                        alt="product" className="w-[86px] h-[86px] object-cover"/>

                    <div className="w-full flex flex-col justify-between">
                        <p className="block " style={{ fontSize: '20px', fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>French Fries With Classic Seasoning</p>
                         <p style={{marginRight:'15px', textDecoration: 'line-through', fontFamily: '"Inter", sans-serif',fontSize: '17px', fontWeight: '400', color:'#707070' }}>$40.00</p>
                            <span style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600'}}>$38.00</span>
                        <p style={{ fontFamily: '"Inter", sans-serif',fontSize: '15px', fontWeight: '400', color:'#707070' }}>You saved 2.00 USD</p>
                        <form className="w-full mx-auto flex justify-between">
                            <div className="flex items-center">
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input type="text" id="counter-input" dataInputCounter
                                       className="flex-shrink-0 text-gray-900 active:border-none bg-transparent text-sm font-normal max-w-[2.5rem] text-center "
                                       required/>
                                <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                    className="bg-gray-100 h-7 px-3 rounded flex items-center hover:text-white hover:bg-red-500 mr-4">
                                <RiDeleteBinLine className="mr-2"/>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-b-[2px] border-gray-200 flex gap-4 p-3 mb-3">
                    <img
                        src={require('../../images/Burger/14.jpg')}
                        alt="product" className="w-[86px] h-[86px] object-cover"/>

                    <div className="w-full flex flex-col justify-between">
                        <p className="block" style={{ fontSize: '20px', fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>Chicken Club Sandwich</p>
                         <p style={{marginRight:'15px', textDecoration: 'line-through', fontFamily: '"Inter", sans-serif',fontSize: '17px', fontWeight: '400', color:'#707070' }}>$99.00</p>
                            <span style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600'}}>$84.15</span>
                        <p style={{ fontFamily: '"Inter", sans-serif',fontSize: '15px', fontWeight: '400', color:'#707070' }}>You saved 14.85 USD</p>
                        <form className="w-full mx-auto flex justify-between">
                            <div className="flex items-center">
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input type="text" id="counter-input" dataInputCounter
                                       className="flex-shrink-0 text-gray-900 active:border-none bg-transparent text-sm font-normal max-w-[2.5rem] text-center "
                                       required/>
                                <button type="button" id="increment-button" data-input-counter-increment="counter-input"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                    className="bg-gray-100 h-7 px-3 rounded flex items-center hover:text-white hover:bg-red-500 mr-4">
                                <RiDeleteBinLine className="mr-2"/>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex gap-4 p-3 mb-3">
                    <img
                        src={require('../../images/Burger/28.jpg')}
                        alt="product" className="w-[86px] h-[86px] object-cover"/>

                    <div className="w-full flex flex-col justify-between">
                        <p className="block " style={{ fontSize: '20px', fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>Watermelon Juice</p>
                         <p style={{marginRight:'15px', textDecoration: 'line-through', fontFamily: '"Inter", sans-serif',fontSize: '17px', fontWeight: '400', color:'#707070' }}>$40.00</p>
                            <span style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600'}}>$34.00</span>
                        <p style={{ fontFamily: '"Inter", sans-serif',fontSize: '15px', fontWeight: '400', color:'#707070' }}>You saved 6.00 USD</p>
                        <form className="w-full mx-auto flex justify-between">
                            <div className="flex items-center">
                                <button type="button"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input type="text"
                                       className="flex-shrink-0 text-gray-900 active:border-none bg-transparent text-sm font-normal max-w-[2.5rem] text-center "
                                       required/>
                                <button type="button"
                                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-7 w-7 ">
                                    <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input"
                                    className="bg-gray-100 h-7 px-3 rounded flex items-center hover:text-white hover:bg-red-500 mr-4">
                                <RiDeleteBinLine className="mr-2"/>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-white col-span-4 flex-grow">
                <div className="w-full flex justify-between gap-2 ">
                        <button type="button"
                            className="w-full text-center bg-white border py-3 px-4 rounded font-bold hover:opacity-90 mr-3" style={{ fontSize: '20px'}}>
                                <Link to='/combo' > Add Other</Link>
                    </button>
                   
                    <button type="button"
                            className="w-full text-center bg-[#4B4949] text-white font-bold py-3 px-4 rounded hover:text-white" style={{ fontSize: '20px'}}>
                        Payment
                    </button>
                </div>
                <div className="w-full mt-4 bg-white rounded-lg shadow-md px-3 pb-3 ">
                    <p className="flex items-center py-3 text-lg"><PiNewspaperClippingLight
                        className="pr-4 text-black" style={{ fontSize: '20px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}/>Voucher
                    </p>
                    <button
                        className="w-full flex items-center justify-between text-gray-300  text-left py-2 px-3 border-[1px] rounded-lg border-gray-400 mb-2">Code
                        Discount <GoChevronRight className="text-xl"/>
                    </button>
                    <p className="p-3 bg-gray-200 text-black rounded-lg border-[0.5px] border-gray-300">Receive a $20 gift for orders over $500 at Lixibox (EXP: 30/06/2024).</p>
                </div>
                <div className="w-full mt-4 bg-white rounded-lg shadow-md px-3 mb-2">
                    <div className="mx-3 mb-3 flex justify-between items-center border-b-[1px] border-gray-300">
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>Price </p>
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>12$ </p>
                    </div>
                    <div className="mx-3 mb-3 flex justify-between items-center border-b-[1px] border-gray-300">
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>Discount </p>
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>20% </p>
                    </div>
                    <div className="mx-3 mb-3 flex justify-between items-center text-[#FF9FA0]">
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>Total </p>
                        <p className="py-2 " style={{fontSize: '17px',fontWeight: '600', fontFamily: '"Inter", sans-serif'}}>8$ </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Cart;