import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import YouTube from 'react-youtube';
import TopNavBar from "../components/TopNavBar";
import Helmet from "react-helmet";
import "./Media.scss";
import media_bg from "../images/myheros.png";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;



class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        const opts = {
            height: '702',
            width: '1152',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return (
            <div id="Media">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How about some hero moments?</title>
                </Helmet>
                <TopNavBar/>
                <Preloader  style={{backgroundColor:"#000"}}>
                    <MDBView>
                        <img className="sizing_bg" src={media_bg}/>
                        <MDBMask className="dark_gradient_btm">

                        </MDBMask>

                    </MDBView>
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

                <br/>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <h1>
                                『僕のヒーローアカデミア』×米津玄師「ピースサイン」スペシャルミュージックビデオ
                            </h1>
                            <br/>
                            <YouTube
                                videoId="1oMxrHXzOsY"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </MDBCol>

                    </MDBRow>

                    <hr className="yellow_hr"/>
                    <hr className="red_hr"/>

                    <MDBRow>
                        <MDBCol>
                            <h1>
                                My Hero Academia: Two Heroes - Official Dubbed Trailer #2 (2018)
                            </h1>
                            <br/>
                            <YouTube
                                videoId="QFNwukuWJ4I"
                                opts={opts}
                                onPlay={this._onReady}
                            />
                        </MDBCol>

                    </MDBRow>

                    <hr className="yellow_hr"/>
                    <hr className="red_hr"/>




                </MDBContainer>

            </div>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Media;