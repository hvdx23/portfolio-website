import React from 'react';
import './footer.css';
import Card from './LinkPages';

function Footer (){
    return(
        <footer>
            <div>
                <p style={{ textAlign: 'center' }}>© 2021 Harikrishnan Venugopal</p>
            </div>
            <div>
                <Card />
            </div>
        </footer>

    );
}

export default Footer;