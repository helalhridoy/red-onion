import React, { Component } from 'react'
import Icon204 from '../images/icons/Group 204.png'
import Icon245 from '../images/icons/Group 245.png'
import Icon1133 from '../images/icons/Group 1133.png'
import { BsArrowRightCircleFill } from "react-icons/bs";
import CardImg1 from '../images/adult-blur-blurred-background-687824.png'
import CardImg2 from '../images/chef-cook-food-33614.png'
export class Cards extends Component {
    render() {
        return (

            <div className='pl-[100px] pr-[100px]'>
                <h1 className='text-left text-4xl font-semibold pt-[70px]'>Why you choose us</h1>
                <p className='text-left w-[400px] mt-3 mb-3'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dash</p>

                <div className="dcard-container">
                    <div className="dcard">
                        <img className='h-[450px] w-[450px] hover:h-[490px]' src={CardImg1} alt="" />
                        <h3 className="text-left mt-2 text-xl font-semibold"> <img className='inline-flex ' src={Icon204} alt="" /> Fast Delivery</h3>
                        <p className='' >Keep your systems in sync with automated web hook
                            based notifications each time link is paid and how we
                            dream about our future_</p>
                        <button className='text-blue-400 font-semibold'>See more! </button>
                    </div>
                    <div className="dcard">
                        <img className='h-[450px] w-[450px] hover:h-[490px]' src={CardImg2} alt="" />
                        <h3 className="text-left mt-2 text-xl font-semibold"> <img className='inline-flex ' src={Icon1133} alt="" /> A Good Auto Responder</h3>
                        <p className='' >Keep your systems in sync with automated web hook
                            based notifications each time link is paid and how we
                            dream about our future_</p>
                        <button className='text-blue-400 font-semibold'>See more! </button>
                    </div>
                    <div className="dcard">
                        <img className='h-[450px] w-[450px] hover:h-[490px]' src={CardImg1} alt="" />
                        <h3 className="text-left mt-2 text-xl font-semibold"> <img className='inline-flex ' src={Icon245} alt="" /> Fast Delivery</h3>
                        <p className='' >Keep your systems in sync with automated web hook
                            based notifications each time link is paid and how we
                            dream about our future_</p>
                        <button className='text-blue-400 font-semibold'>See more! </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
