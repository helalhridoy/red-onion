import React, { Component } from 'react'
import { Lunch1, Lunch2, Lunch3, Lunch4, Lunch5, Lunch6 } from '../images/lunch'
export class Lunch extends Component {
    render() {
        return (
            <div>
                <div className="card-container">
                    <div className="card">
                        <img src={Lunch1} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={Lunch2} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={Lunch3} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={Lunch4} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={Lunch5} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={Lunch6} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lunch
