import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const Nav = (props) => {
    const { history } = props;

    return (
        <React.Fragment>
            <button>

                onClick={() => history.push('/Fire')}
                >Go to Login
                
                
                
</button>


            <ul>
                <li>
                    <Link to="/Fire">Login</Link>
                </li>
                <li>
                    <Link to="/App">Muro</Link>
                </li>
            </ul>


        </React.Fragment>

    )
}

export default withRouter(Nav);