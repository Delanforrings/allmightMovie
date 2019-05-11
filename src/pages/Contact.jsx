import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import "./Contact.scss";
import banner from "../images/contact.jpg";
import me from "../images/me.jpg";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div id="Contact">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How about some hero moments?</title>
                </Helmet>
                <TopNavBar/>
                <Preloader  style={{backgroundColor:"#000"}}>
                    <MDBView>
                        <img className="sizing_bg" src={banner}/>
                        <MDBMask className="dark_gradient_btm">

                        </MDBMask>

                    </MDBView>
                    <Placeholder>
                        <div className='sweet-loading'>
                            <PacmanLoader

                                css={override}
                                sizeUnit={"px"}
                                size={50}
                                color={'#F2DC43'}
                                loading={this.state.loading}
                            />
                        </div>
                    </Placeholder>

                </Preloader>



                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="6">
                            <br/>
                            <h1>
                                Dekko Shi
                            </h1>
                            <h5>
                                Developer & Designer
                            </h5>
                            <hr className="hr_me"/>
                            <p>
                                <br/>
                                <strong>
                                    Dekko is a Front-end website designer. He is in his first year of his Master degree in the University of Melbourne major in Human-Computer Interaction. He is proactively seeking for a web designer position to apply his sense of design and solid development skills to the role.
                                </strong>
                                <br/>
                                <br/>
                                <strong>
                                    This website is developed by Dekko in May 2019. This website is only performed as a portfolio. It will never be implemented online for commercial use.
                                </strong>
                                <br/>
                                <strong>
                                    Email: <a href="mailto:dekko_shi@outlook.com">dekko_shi@outlook.com</a>
                                </strong>
                                <br/>
                                <strong>
                                    Phone: 0452281027
                                </strong>
                            </p>
                        </MDBCol>
                        <MDBCol size="6">
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/>

            </div>
        )
    }
}

export default Contact;