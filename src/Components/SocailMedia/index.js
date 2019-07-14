import React from 'react';
import {SocialMediaSection, Socail, SocailP, SocailPSpan,SocialMediaPin,SocialMediaTwitter,Icon, Info2} from  './style.js';
const SocailMedia = () =>{

    return(
        <SocialMediaSection>
            
            <Socail>
                <Icon className="icon fa fa-facebook fa-lg"></Icon>
                <SocailP>
                    <SocailPSpan>Follow Me on</SocailPSpan>
                    <Info2>Social Facebook</Info2>
                </SocailP>
            </Socail>
            
            <SocialMediaTwitter>
                <Icon className="icon fa fa-twitter fa-lg"></Icon>
                <SocailP>
                    <SocailPSpan>Tweet Me on</SocailPSpan>
                    <Info2>Social twitter</Info2>
                </SocailP>
            </SocialMediaTwitter>
            
            <SocialMediaPin>
                <Icon className="icon fa fa-pinterest fa-lg"></Icon>
                <SocailP>
                    <SocailPSpan>Pin Me on</SocailPSpan>
                    <Info2>Social Pinterest</Info2>
                </SocailP>
            </SocialMediaPin>
        </SocialMediaSection>
        

        
    )
}
export default SocailMedia;