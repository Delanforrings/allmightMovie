import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.css"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import character from "../images/deku_c.jpg";


class Deku extends React.Component {
    render() {
        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Izuku Midoriya</title>
                </Helmet>
                <div id="Deku" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour_deku">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour_deku">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour_deku">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour_deku">Contact Us</a>
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
                                </ul>
                            </div>
                            <p className="repos">
                                <h1>
                                    IZUKU MIDORIYA
                                </h1>
                                <strong>
                                    Izuku Midoriya (緑みどり谷や出いず久く Midoriya Izuku?), also known as Deku (デク?), is the main protagonist of My Hero Academia.
                                </strong>

                                <br/>
                                <br/>
                                <h1>
                                    個性
                                </h1>
                                <strong>
                                    One For All (ワン・フォー・オール Wan Fō Ōru?): Given to him from Toshinori Yagi, or, as he’s more commonly referred to as, All Might, Izuku's Quirk gives him access to stockpiled power, granting him superhuman strength and greatly enhanced agility and mobility by spreading his power through his body.

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

export default Deku;