import React from 'react'
import '../css/Cart.css'

function Cart() {
    return (
        <div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>YOUR CART DETAILS</div><hr /><br />
            <div>
                <div style={{ textAlign: "left", fontStyle: "italic", color: "gray" }}>Your cart is empty right now. Please add courses in the cart from the list</div><hr /><br />
            </div>

            <div className='cartItems'>
                
            </div><hr />

            <div className="checkout">
                <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    <label style={{ fontSize: "10px" }}>TOTAL CART VALUE</label><br />
                    <label style={{ fontSize: "20px" }}>Rs 0/-</label>
                </div>
                <div className="goToCheckout">
                    GO TO CHECKOUT
                </div>
            </div>

        </div>

    )
}

export default Cart