import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.scss"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import character from "../images/Uraraka_c.png";


class Uraraka extends React.Component {
    render() {
        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>What are the characters</title>
                </Helmet>
                <div id="Uraraka" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour_uraraka">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour_uraraka">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour_uraraka">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour_uraraka">Contact Us</a>
                            </MDBCol>
                        </MDBRow>
                    </MDBMask>
                </div>
                <MDBRow>
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

                        </MDBMask>
                    </MDBView>
                    <br/>
                </MDBRow>
            </div>
        )
    }
}

export default Uraraka;