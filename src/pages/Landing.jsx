import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import Helmet from "react-helmet";
import "./Landing.scss";
import Landing_bg from "../images/introbg.png";
import landing_intro from "../images/banner3.png";
import plot from "../images/plot.jpeg";
import TopNavBar from "../components/TopNavBar";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (

            <div id="Landing">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Welcome To My Hero Academia</title>
                </Helmet>
                <TopNavBar/>
                <MDBView>
                    <Preloader  style={{backgroundColor:"#000"}}>
                        <img className="sizing_bg" src={landing_intro}/>
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
                </MDBView>
                <br/>
                <br/>
                <MDBContainer>
                    <br/>
                    <h1>
                        What is this movie about ?
                    </h1>
                    <hr className="yellow_hr"/>
                </MDBContainer>
                <br/>


                <MDBRow>

                    <MDBView >
                        <img className="sizing repos" src={Landing_bg}/>
                        <MDBMask pattern={4} overlay="black-strong" className="dark_gradient_btm">
                            <p>
                                <strong>
                                    <span className="weightBold">My Hero Academia: Two Heroes</span> (Japanese: <span className="weightBold">僕のヒーローアカデミア THE MOVIE ～２人の英雄ヒーロー～ </span>Hepburn: Boku no Hīrō Academia THE MOVIE: Futari no Hīrō) is a 2018 Japanese anime superhero film based on the manga My Hero Academia by Kōhei Horikoshi. Set between the second and third seasons of the anime series, the film was directed by Kenji Nagasaki and produced by Bones. Anime Expo hosted the film's world premiere on July 5, 2018, and it was later released to theaters in Japan on August 3, 2018.
                                </strong>
                                <br/>
                                <br/>
                                <strong>
                                    Reception from critics have been generally positive. The Los Angeles Times described the film as "a high-energy blend of heroism, comedy, friendship and take-no-prisoners battles", praising Briner's role as Deku, saying "Briner keeps the character likable and believable". Miranda Sanchez from IGN stated that "My Hero Academia: Two Heroes is fun but lacks interesting stakes", praising the film as enjoyable, though criticizing the lack of development within the world of My Hero Academia.
                                </strong>

                            </p>


                        </MDBMask>
                    </MDBView>

                </MDBRow>


            </div>
        )
    }
}

export default Landing;