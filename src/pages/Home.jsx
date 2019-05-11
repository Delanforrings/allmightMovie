import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn,MDBIcon} from 'mdbreact';
import Home_bg from "../images/backs.jpg";
import "./Home.scss";
import home_bg_video from "../videos/『僕のヒーローアカデミア』×米津玄師「ピースサイン」スペシャルミュージックビデオ.mp4"
import allmight_icon from "../images/allmight_icon.png";
import Splash from "./Splash";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div id="Home">
                <Splash/>
                <MDBView>
                    <Preloader  style={{backgroundColor:"#000"}}>
                        <video className="video-intro vbg" playsInline
                               autoPlay muted="" loop>
                            <source src={home_bg_video} type="video/mp4" />
                        </video>
                        <Placeholder>
                            <div className='sweet-loading'>
                                <PacmanLoader

                                    css={override}
                                    sizeUnit={"px"}
                                    size={50}
                                    color={'#F2DC43'}
                                    loading={this.state.loading}
                                />
                            </div>
                        </Placeholder>

                    </Preloader>

                    <MDBMask className="flex-center" pattern={4} overlay="red-strong" >

                        <MDBAnimation type="fadeInUp" delay="1s">
                            <div className="underLn repos">
                                <h1 >
                                    <a href="/MyHeroAcademia" className="repos boxshadow">私が<span className="colourChange">来た!!!</span>
                                        <img className="Adjust_icon" src={allmight_icon} />
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