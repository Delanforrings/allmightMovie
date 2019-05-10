import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters_m.scss"
import Helmet from "react-helmet";
import character from "../../images/Iida_c.jpg";
import SideNav from "../../components/SideNav";


class Iida_m extends React.Component {
    render() {
        return (
            <div id="Characters_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Tenya Iida</title>
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
                                TENYA IIDA
                            </h1>
                            <strong>
                                Tenya Iida (飯いい田だ天てん哉や Īda Ten'ya?), also known as Ingenium, is the class representative of Class 1-A at U.A. High School, and is training there to become a Pro Hero. He is one of the protagonists of My Hero Academia.

                            </strong>
                            <br/>
                            <br/>
                            <h1>
                                個性
                            </h1>
                            <strong>
                                Engine (エンジン Enjin?): Tenya's Quirk manifests in the form of engines in his calves, giving him super speed. His engines have multiple gears, allowing him to switch between at least First, Second, or Third Gear (more are implied) depending on the situation. Much like a real engine, his Quirk requires that the exhaust pipes on the back of his legs remain clear of obstructions in order to function properly. Tenya also needs to pay attention to drink enough orange juice, as it serves as fuel for his engines.
                            </strong>
                        </p>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default Iida_m;