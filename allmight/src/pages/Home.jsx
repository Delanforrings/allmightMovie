import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn,MDBIcon} from 'mdbreact';
import Home_bg from "../images/backs.jpg";
import "./Home.scss";
import home_bg_video from "../videos/『僕のヒーローアカデミア』×米津玄師「ピースサイン」スペシャルミュージックビデオ.mp4"
import allmight_icon from "../images/All_Might_icon.png";


class Home extends React.Component {
    render() {
        return (
            <div id="Home">
                <MDBView>
                    <video className="video-intro vbg" playsInline
                           autoPlay muted="" loop>
                        <source src={home_bg_video} type="video/mp4" />
                    </video>
                    <MDBMask className="flex-center" pattern={4} overlay="red-strong" >

                        <MDBAnimation type="fadeInUp" delay="1s">
                            <div className="underLn repos">
                                <h1 >
                                    <a href="/MyHeroAcademia" className="repos boxshadow">私が<span className="colourChange">来た!!!</span>
                                        <img className="Adjust" src={allmight_icon} />
                                    </a>
                                </h1>
                            </div>

                        </MDBAnimation>
                    </MDBMask>

                </MDBView>
            </div>
        )
    }
}

export default Home;