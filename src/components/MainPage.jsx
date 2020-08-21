import React from "react";
import '../scss/mainPage.scss';
import phone from '../images/section_1_phone.png';
import { Button } from 'semantic-ui-react';


const MainPage = (props) => {
    return (
        <div className={'mainPageContent'}>
            <h1 className={'generalTitle'}>What happens tomorrow?</h1>
            <h6 className={'headerParagraph'}>The sight of the tumblers restored Bob Sawyer
                to a degree of equanimity which he had not possessed
                since his interview with his landlady. His face
                brightened up, and he began to feel quite convivial.</h6>
            <Button content='► Watch video' basic />
            <img className={'phoneImage'} src={phone} alt={phone}/>
        </div>
    )
}

export default MainPage;