import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters_m.scss"
import Helmet from "react-helmet";
import SideNav from "../../components/SideNav";
import character from "../../images/deku_c.jpg";


class Deku_m extends React.Component {
    render() {
        return (
            <div id="Characters_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Izuku Midoriya</title>
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
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
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
                    </MDBCol>


                    <br/>
                </MDBRow>

            </div>
        )
    }
}

export default Deku_m;