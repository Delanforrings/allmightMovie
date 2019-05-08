import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';
import "./TopNavBar.css";

class TopNavBar extends React.Component {
    render() {
        return (
            <div id="TopNavBar">
                <MDBMask >
                    <MDBRow>
                        <MDBCol size="3" className="col">
                            <a href="/MyHeroAcademia">Home</a>
                        </MDBCol>
                        <MDBCol size="3" className="col">
                            <a>Characters</a>
                        </MDBCol>
                        <MDBCol size="3" className="col">
                            <a>Media</a>
                        </MDBCol>
                        <MDBCol size="3" className="col">
                            <a>Contact Us</a>
                        </MDBCol>
                    </MDBRow>
                </MDBMask>


            </div>
        )
    }
}

export default TopNavBar;