import React from 'react';
import './footer.css';
import Card from './LinkPages';

function Footer (){
    return(
        <footer>
            <div className ="link-container">
                <div >
                    <Card />
                </div>
                <br></br>
                <div>
                    <p style={{ textAlign: 'center' }}>© 2021 Harikrishnan Venugopal</p>
                </div>
            </div>
            
        </footer>

    );
}

export default Footer;