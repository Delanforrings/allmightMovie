import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters_m.scss"
import Helmet from "react-helmet";
import character from "../../images/Uraraka_c.png";
import SideNav from "../../components/SideNav";


class Uraraka_m extends React.Component {
    render() {
        return (
            <div id="Characters_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>What are the characters</title>
                </Helmet>
                <div style={{fontFamily:"Futura", color:"#fff"}}>
                    <SideNav/>
                </div>
                <MDBRow>
                    <MDBCol>
                        <MDBView >
                            <img className="sizing" src={character}/>
                            <MDBMask className="dark_gradient_btm">
                                <div className="SideNavbar" style={{ display: "flex" }}>
                                    <ul style={{ listStyleType: "none", padding: 0 }}>
                                        <li>
                                            <a href="/Characters" className="SidebarText_Allmight">All Might</a>
                                        </li>
                                        <li>
                                            <a href="/Deku" className="SidebarText_Deku">Izuku Midoriya</a>
                                        </li>
                                        <li>
                                            <a href="/Bokugo" className="SidebarText_Bokugo">Katsuki Bakugo</a>
                                        </li>
                                        <li>
                                            <a href="/Shoto" className="SidebarText_Shoto">Shoto Todoroki</a>
                                        </li>
                                        <li>
                                            <a href="/Uraraka" className="SidebarText_Uraraka">Ochaco Uraraka</a>
                                        </li>
                                        <li>
                                            <a href="/Iida" className="SidebarText_Iida">Tenya Iida</a>
                                        </li>
                                    </ul>
                                </div>

                            </MDBMask>
                        </MDBView>
                        <br/>
                    </MDBCol>

                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p className="repos">
                            <h1>
                                OCHACO URARAKA
                            </h1>
                            <strong>
                                Ochaco Uraraka (麗うらら日かお茶ちゃ子こ Uraraka Ochako?), also known by her Hero name Uravity, is a student in Class 1-A at U.A. High School, training to become a Pro Hero. She is one of the protagonists of My Hero Academia.

                            </strong>
                            <br/>
                            <br/>
                            <h1>
                                個性
                            </h1>
                            <strong>
                                Zero Gravity (無重力ゼログラビティ Zero Gurabiti?): Ochaco's Quirk gives her the power to manipulate gravity upon touching solid things with the pads on her fingertips. The targets lose their gravitational pull, effectively making them object weightless. She is able to activate or cancel her Quirk's effects by closing her fingers together, and is shown to be careful with her hands in order to avoid accidental quirk activation.
                            </strong>
                        </p>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default Uraraka_m;