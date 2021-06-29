import React from 'react'
import { Container } from 'react-bootstrap'
import investing from '../../assets/img/investing.jpeg'

export default function Guide() {
    return (
        <Container className="guide">
            <div style={{marginBottom:40}} className="logo text-center">Guide to Investing</div>
            <p>
                When you start to think about investing in Real Estate, it 
                can be overwhelming and time consuming with all the research and 
                the stress of the unknown. Whether you are reading the right information or 
                not. There is so many different types of Real Estate in investment, so its no 
                wonder sometimes we don’t know how to begin
            </p>
            <div className="imageContainer">
                <img src={investing} alt="" />
            </div>
            <p>
                To simply things for you we have put together something very simple to help our readers know what I call ‘’Where to start’’ 
            </p>
            <p>
                First you need to ask yourself some very important questions 
            </p>
            <ul>
                <li>
                    <p>Is this a long term or short term investment ?</p>
                </li>
                <li>
                    <p>How much can I afford comfortably every month ?</p>
                </li>
                <li>
                    <p>How much can I really afford if I push myself ? ( This will include, reducing your shopping trips, your holidays, and many expensive habits. )</p>
                </li>
                <li>
                    <p>Is it a cash or mortgage purchase ?</p>
                </li>
                <li>
                    <p>Do I want to buy off plan or something ready ?</p>
                </li>
                <li>
                    <p>What is my purpose for investing ?</p>
                    <ol>
                        <li>
                            <p>To build a property portfolio</p>
                        </li>
                        <li>
                            <p>To gain rental income</p>
                        </li>
                        <li>
                            <p>To flip my money</p>
                        </li>
                        <li>
                            <p>To live in the property</p>
                        </li>
                    </ol>
                </li>
            </ul>
            <p style={{marginTop:40}}>
                Always remember to keep an open mind and expect the unexpected. This way you are prepared 
                for the worst if the worst was to arise. I am not saying it will happen, however remember 
                it can happen. So whatever your answers are NOW, it doesn’t mean they will not change in 
                the future, sometimes in the nearer future than you can imagine. Buying a property is a big 
                step, always ensure you are protecting your investment by keeping in mind if your answers 
                change you are still winning.
            </p>
        </Container>
    )
}
