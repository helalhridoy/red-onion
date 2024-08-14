import React, { Component } from 'react'
import { dinner1, dinner2, dinner3, dinner4, dinner5, dinner6 } from '../images/dinner'

export class Dinner extends Component {
    render() {
        return (
            <div>
                <div className="card-container">
                    <div className="card">
                        <img src={dinner1} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={dinner2} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={dinner3} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={dinner4} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={dinner5} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={dinner6} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dinner
