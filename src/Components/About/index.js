import React from 'react';
import {CreativSection , CreativeInfo, InfoDesc, InfoDescA , InfoJob, InfoTittle, InfoTittleSpan} from  './style.js';

const About = () =>{

    return(
        <CreativSection>
            <div class="container">
                <CreativeInfo>
                    <InfoTittle><InfoTittleSpan>This is</InfoTittleSpan> Me</InfoTittle>
                    <InfoJob>Creative Director</InfoJob>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescA href="#">explicabo</InfoDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativSection>
    )
}
export default About;