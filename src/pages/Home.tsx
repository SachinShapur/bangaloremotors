import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import boss from '../images/appkeevBoss.jpg';
import bigboss from '../images/appkeevbigboss.jpg';
import power from '../images/appkeevpower.jpg';
import evfuture from '../images/ev.png'

const Home = () =>{
    return(
        <div>
            <Carousel showIndicators={false} showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <div>
                    <img src={evfuture} />
                </div>
                <div>
                    <img src={boss} />
                </div>
                <div>
                    <img src={bigboss} />
                </div>
                <div>
                    <img src={power} />
                </div>
            </Carousel>
        </div>
    )
}

export default Home;