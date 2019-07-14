import React from 'react';
import axios from 'axios';
import { WorkSection , WorkTittle , DescPart , PartTittle, Part , Icon , Line , WTittleSpan , Continer} from './style.js';

class Work extends React.Component{

    state = {
        works : []
    }

    componentDidMount() {
        axios.get('js/Data.json').then(res => {this.setState({works : res.data.works})});
    }

    render(){

        const {works} = this.state;
        const workList = works.map( (workItem) => {
            return(
                <Part first={workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTittle>{workItem.title}</PartTittle>
                        <Line />
                        <DescPart>
                            {workItem.body}
                        </DescPart>
                    </Part>
            )
        })

        return(
            <WorkSection>
                <Continer>
                    <WorkTittle ><WTittleSpan>My</WTittleSpan> Work</WorkTittle>
                        {workList}
                    </Continer>
                    </WorkSection>
                    
        )
    }
    
}
export default Work;