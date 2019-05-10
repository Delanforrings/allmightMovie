import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView} from 'mdbreact';
import Welcome from 'react-welcome-page';

class Splash extends React.Component {
    render() {
        return (
            <div style={{fontFamily:"Futura", fontSize:"2em"}}>
                <Welcome
                    loopDuration={3000}
                    data={[
                        {
                            image: require('../images/allmight_cute.jpg'),
                            text: 'Please turn on your volume for better experience',
                            imageAnimation: 'flipInX',
                            textAnimation: 'bounce',
                            backgroundColor: '#000',
                            textColor: '#fff'
                        }
                    ]}

                />
            </div>
        )
    }
}

export default Splash;