import React from 'react';
import axios from 'axios';
import { ProtTittleSpan , ProtfolioSection, BoxProt, ProtItem , ProtList , ProtTittle , OverlaySpan , Overlay , Box , Image } from './style.js';

class Portfolio extends React.Component{

    state = {
        portfolio : []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({portfolio : res.data.portfolio})})
    }

    render(){

        const {portfolio} = this.state;
        const allPortfolio = portfolio.map((portItem) => {
            return(
                    <BoxProt key={portItem.id}>
                        <Image src={portItem.image} alt="" />
                    
                    </BoxProt>
            )
        })
        return(
        
            <ProtfolioSection>
                <ProtTittle><ProtTittleSpan>My</ProtTittleSpan> Portfolio</ProtTittle>
                <ProtList>
                    <ProtItem active="active">All</ProtItem>
                    <ProtItem >HTML</ProtItem>
                    <ProtItem >Photoshop</ProtItem>
                    <ProtItem >Wordpress</ProtItem>
                    <ProtItem >Mobile</ProtItem>
                </ProtList>
                
                {allPortfolio}
                </ProtfolioSection>           
        )
    }
    
}
export default Portfolio;