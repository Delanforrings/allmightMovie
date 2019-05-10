import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.scss"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideNav";
import character from "../images/Shoto_c.jpg";


class Shoto extends React.Component {
    render() {
        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Shoto Todoroki</title>
                </Helmet>
                <div id="Shoto" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour_shoto1">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour_shoto1">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour_shoto2">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour_shoto2">Contact Us</a>
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

                        </MDBMask>
                    </MDBView>
                    <br/>
                </MDBRow>
            </div>
        )
    }
}

export default Shoto;