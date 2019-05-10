import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.scss"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideNav";
import character from "../images/Iida_c.jpg";


class Iida extends React.Component {
    render() {
        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Tenya Iida</title>
                </Helmet>
                <div id="Iida" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour_iida">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour_iida">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour_iida">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour_iida">Contact Us</a>
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

                        </MDBMask>
                    </MDBView>
                    <br/>
                </MDBRow>
            </div>
        )
    }
}

export default Iida;