import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import Helmet from "react-helmet";
import "./Landing.css";
import Landing_bg from "../images/introbg.png";
import landing_intro from "../images/banner3.png";
import plot from "../images/plot.jpeg";
import TopNavBar from "../components/TopNavBar";

class Landing extends React.Component {
    render() {
        return (

            <div id="Landing">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Welcome To My Hero Academia</title>
                </Helmet>
                <TopNavBar/>
                <MDBView>
                    <img className="sizing_bg" src={landing_intro}/>
                </MDBView>
                <MDBContainer>
                    <br/>
                    <h1>
                        What is My Hero Academia?
                    </h1>
                    <hr className="yellow_hr"/>
                </MDBContainer>
                <MDBRow>
                    <MDBCol size="6">

                    </MDBCol>
                    <MDBView >
                        <img className="sizing repos" src={Landing_bg}/>
                        <MDBMask pattern={4} overlay="black-strong" className="dark_gradient_btm">
                            <p>
                                <strong>
                                    My Hero Academia (Japanese: 僕のヒーローアカデミア Hepburn: Boku no Hīrō Akademia) is a superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, and, as of February 2019, 22 volumes have been collected in tankōbon format. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a hero himself. He is scouted by Japan's greatest hero, who shares his quirk with Izuku after recognizing his potential, and later enrolls him in a high school for heroes in training.
                                </strong>
                                <br/>
                                <strong>
                                    The manga was adapted into an anime television series by Bones. Its first season aired in Japan from April 3 to June 26, 2016, followed by a second season from April 1 to September 30, 2017, then a third season from April 7 to September 29, 2018, with a fourth season set to premiere in October, 2019. An animated film titled My Hero Academia: Two Heroes was released on August 3, 2018. A second animated film is in production and there are plans for a live-action film by Legendary Entertainment.
                                </strong>
                            </p>
                            <br/>


                        </MDBMask>
                    </MDBView>

                </MDBRow>
                <br/>
                <MDBContainer>
                    <h1>
                        Plot
                    </h1>
                    <hr className="red_hr"/>
                </MDBContainer>

                <MDBRow>
                    <MDBCol size="6">
                        <img className="sizing_plot" src={plot}/>
                    </MDBCol>
                    <MDBCol size="6">
                        <p>
                            In a world where people with superpowers (known as "Quirks" (個性 Kosei)) are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood friend Katsuki Bakugo from a villain, All Might, Japan's greatest Hero, bestows upon him his own Quirk "One For All". The story follows Izuku's entrance into U.A. High School (雄英高校 Yūei Kōkō), a school that cultivates the next generation of superheroes. As Izuku and his new friends try to balance their Hero training with ordinary school duties, they must face new challenges. One of these challenges includes the League of Villains, an evil organization established by All Might's archenemy All For One which has plans to destroy all Heroes and take control of society.
                        </p>
                    </MDBCol>
                </MDBRow>






            </div>
        )
    }
}

export default Landing;