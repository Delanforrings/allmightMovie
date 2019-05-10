import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import Helmet from "react-helmet";
import "./Contact_m.scss";
import banner from "../../images/contact.jpg";
import me from "../../images/me.jpg";
import SideNav from "../../components/SideNav";

class Contact_m extends React.Component {
    render() {
        return (
            <div id="Contact_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How about some hero moments?</title>
                </Helmet>
                <div style={{fontFamily:"Futura", color:"#fff"}}>
                    <SideNav/>
                </div>

                <MDBView>
                    <img className="sizing_bg" src={banner}/>
                    <MDBMask className="dark_gradient_btm">

                    </MDBMask>

                </MDBView>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
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

export default Contact_m;