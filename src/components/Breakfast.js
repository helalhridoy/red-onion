import React, { Component } from 'react'
import { breakfast1, breakfast2, breakfast3, breakfast4, breakfast5, breakfast6 } from '.././images/breakfast';

export class Breakfast extends Component {
    render() {
        return (
            <div>
                <div className="card-container">
                    <div className="card">
                        <img src={breakfast1} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={breakfast2} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={breakfast3} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={breakfast4} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={breakfast5} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                    <div className="card">
                        <img src={breakfast6} alt="" />
                        <h3 className="text-center text-xl font-semibold">Light Breakfast</h3>
                        <p className="text-center">How we dream about our future</p>
                        <h2 className="text-center font-bold">$9.99</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breakfast
