import React from 'react';
import { HomeSection , Information , InfoData , DescData, DescDataSpan , TittleData, BtnHome} from './style.js';

const Home = () =>{

    return(
        <HomeSection>
            <div className="container">
                <Information>
                    <TittleData className="home-title margin-bottom">Yousef shallah</TittleData>
                    <InfoData className="home-info">Web & Android Developer</InfoData>
                    <DescData className="home-desc">
                        Iam a professional <DescDataSpan>Android Developer</DescDataSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </DescData>
                    <BtnHome className="home-btn">Let's Begin</BtnHome>
                </Information>
            </div>
        </HomeSection>
    )
}
export default Home;