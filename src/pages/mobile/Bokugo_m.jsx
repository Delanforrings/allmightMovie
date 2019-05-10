import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters_m.scss"
import Helmet from "react-helmet";
import TopNavBar from "../../components/TopNavBar";
import character from "../../images/bokugo_c.jpg";
import SideNav from "../../components/SideNav";


class Bokugo_m extends React.Component {
    render() {
        return (
            <div id="Characters_m">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Katsuki Bakugo</title>
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
                    </MDBCol>


                </MDBRow>
            </div>
        )
    }
}

export default Bokugo_m;