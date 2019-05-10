import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters_m.scss"
import Helmet from "react-helmet";
import character from "../../images/Shoto_c.jpg";
import SideNav from "../../components/SideNav";


class Shoto_m extends React.Component {
    render() {
        return (
            <div id="Characters_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Shoto Todoroki</title>
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

                    <br/>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p className="repos">
                            <h1>
                                SHOTO TODOROKI
                            </h1>
                            <strong>
                                Shoto Todoroki (轟とどろき焦しょう凍と Todoroki Shōto?) is a student in Class 1-A at U.A. High School, where he got in through official recommendations[2], and is training there to become a Pro Hero. He is the son of Endeavor and one of the main protagonists of the series.
                            </strong>

                            <br/>
                            <br/>
                            <h1>
                                個性
                            </h1>
                            <strong>
                                Half-Cold Half-Hot (半はん冷れい半はん燃ねん Hanrei Hannen?): Shoto's Quirk gives him dual pyrokinesis and cryokinesis, divided between his left and right sides, respectively. The appendages on his right side can drastically lower temperatures of anything they touch, enough so to create large waves of ice. The limbs on his left side generate heat and allow Shoto to create and shoot streams of fire. Until taken to his bodily limit, neither has any visible effect on his body.

                            </strong>
                        </p>

                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default Shoto_m;