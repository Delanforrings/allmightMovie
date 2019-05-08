import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.css"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import character from "../images/bokugo_c.jpg";


class Bokugo extends React.Component {
    render() {
        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Katsuki Bakugo</title>
                </Helmet>
                <div id="Bokugo" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour_bokugo">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour_bokugo">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour_bokugo">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour_bokugo">Contact Us</a>
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
                                    KATSUKI BOKUGO
                                </h1>
                                <strong>
                                    Katsuki Bakugo (爆ばく豪ごう勝かつ己き Bakugō Katsuki?), also known as Kacchan (かっちゃん?) by his childhood friends,[1] is a student in Class 1-A at U.A. High School, training to become a Pro Hero. He is the deuteragonist of My Hero Academia.
                                </strong>

                                <br/>
                                <br/>
                                <h1>
                                    個性
                                </h1>
                                <strong>
                                    Explosion (爆ばく破は Bakuha?): Katsuki's Quirk allows him to secrete nitroglycerin-like sweat from his palms and detonate it at will to create explosions. The more Katsuki sweats, the stronger his explosions become. As stated by Best Jeanist, Katsuki has a strong grasp on the applications of his Quirk.
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

export default Bokugo;