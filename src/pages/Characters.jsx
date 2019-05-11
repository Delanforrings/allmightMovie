import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./Characters.scss"
import Helmet from "react-helmet";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideNav";
import allmight_c from "../images/allmight_c_bg.png";
import { Preloader, Placeholder } from 'react-preloading-screen';
import { PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {

        return (
            <div id="Characters">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>All Might</title>
                </Helmet>

                <div id="Allmight" >
                    <MDBMask >
                        <MDBRow >
                            <MDBCol size="3" className="col">
                                <a href="/MyHeroAcademia" className="font_colour">Home</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="/Characters" className="font_colour">Characters</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Media" className="font_colour">Media</a>
                            </MDBCol>
                            <MDBCol size="3" className="col">
                                <a href="Contact" className="font_colour">Contact Us</a>
                            </MDBCol>
                        </MDBRow>
                    </MDBMask>
                </div>
                <Preloader  style={{backgroundColor:"#000"}}>
                    <MDBRow>
                        <MDBView >
                            <img className="sizing" src={allmight_c}/>
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
                                        ALL MIGHT
                                    </h1>
                                    <strong>
                                        Toshinori Yagi, more often known as his alias All Might, is a superhero who appears in the manga and anime series My Hero Academia and is considered the #1 hero in the world.
                                    </strong>
                                    <br/>
                                    <br/>
                                    <h1>
                                        個性
                                    </h1>
                                    <strong>
                                        One For All (ワン・フォー・オール Wan Fō Ōru?): Inherited from Nana Shimura, All Might's Quirk gave him access to nearly unlimited, stockpiled power. By channeling this power through his body, All Might had superhuman strength, speed, agility as well as invulnerability. All Might was so proficient with One For All that he was widely known as the world's most powerful person.
                                    </strong>
                                </p>

                            </MDBMask>
                        </MDBView>
                        <br/>
                    </MDBRow>
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

            </div>
        )
    }
}

export default Characters;