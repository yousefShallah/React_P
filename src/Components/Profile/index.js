import React from 'react';
import axios from 'axios';
import { Continer , Parent, ProfileItem, ProfileList, ProfileSection, ProfileSkills, PItemSpan,SkillsDesc,
     SkillsSection, SkillsTittle, SpanSpan2, SpanSpan3, ParentSpan, Bar, Perc,TittlePAS, Web, SpanSpan1 } from './style.js';

class Profile extends React.Component {

    state = {
        skills : []
    }

    componentDidMount() {
        axios.get('js/Data.json').then(res => {this.setState({skills : res.data.Profile})});
    }

    render(){
   
        const {skills} = this.state;
        const allSkills = skills.map(skillItem => {
            return(
                    <Bar key={skillItem.id} >
                        <SkillsTittle> {skillItem.tittle}</SkillsTittle>
                        <Perc>{skillItem.presint}</Perc>
                        <Parent>
                            <ParentSpan></ParentSpan>
                        </Parent>
                    </Bar>
            )
        })

    return(
        <Continer> 
        <ProfileSkills>
            
                <ProfileSection>
                    <TittlePAS> My Profile</TittlePAS>
                    <ProfileList>
                        <ProfileItem>
                            <PItemSpan>Name: </PItemSpan>
                            Yousef shallah
                        </ProfileItem>
                        <ProfileItem>
                            <PItemSpan>Birthday: </PItemSpan>
                            20/8/1999
                        </ProfileItem>
                        <ProfileItem>
                            <PItemSpan>Address: </PItemSpan>
                            Gaza
                        </ProfileItem>
                        <ProfileItem>
                            <PItemSpan>Phone: </PItemSpan>
                            +972598336147
                        </ProfileItem>
                        <ProfileItem>
                            <PItemSpan>Email: </PItemSpan>
                            yousefmohshallah33@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <PItemSpan>Website: </PItemSpan>
                            <Web>www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <TittlePAS >Some skills</TittlePAS>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {allSkills}
                </SkillsSection>
                
        </ProfileSkills>
        </Continer>
    )
}
}
export default Profile;