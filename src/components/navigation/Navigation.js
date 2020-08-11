import React from 'react';
import {
    Route,
    Link,
    useParams
} from 'react-router-dom';


function Child(props) {
    let { name } = useParams();
    return (
        <div>
            <h3>ID:{name} </h3>
        </div>
    );
}

function Navigation(props) {
    return (

        <div className='Navigation'>
            <ul>
                <li><Link to='/welcome/:name'>Home</Link></li>
                <li><Link to='/clock'>Clock</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

            </ul>


            <Route path='/' children={<Child name={props.name} />} />



        </div>


    );
}




export default Navigation;