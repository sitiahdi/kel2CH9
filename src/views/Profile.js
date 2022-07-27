import { useEffect, useState } from 'react'
import '../css/profilePage.css'

import firebase from '../services/firebase'
import jwtDecode from 'jwt-decode';

import { useNavigate } from 'react-router-dom';



const db = firebase.firestore();

function Profile() {

    const [data, setData] = useState(null);

    let navigate = useNavigate();
    
    useEffect(() => {
        getData();
    }, []);
    
    function getData() {
        const decoded = jwtDecode(document.cookie);

        if (decoded === undefined || !decoded) {
            navigate('/login');
        }

        db.collection('users').get().then(querrySnapShot => {

            if (!querrySnapShot) {
                throw Error('failed to get data')
            }


            querrySnapShot.forEach(e => {

                if (e.data().userUid === decoded.user_id) {
                    const theData = {
                        username: e.data().username,
                        email: e.data().email,
                        score: e.data().score
                    }

                    setData(theData);
                }
            });

        }).catch(err => {

        });
    }

    if (!data) {
        return (
            <section className='profile-page'>
                <h1 style={{textAlign: 'center', color: 'white', fontSize: '4rem'}}>Loading ...</h1>
            </section>
        )
    }

    return (
        <>
            {data &&
                <section className='profile-page'>
                    <div className='left-side'>
        
                    </div>
                    <div className='right-side'>
                        <h1 className='username'>User : {data.username}</h1>
                        <p className='email-holder'>email : {data.email}</p>
                        <p>score : {data.score}</p>
                    </div>
                </section>
            }
        </>
    )
}

export default Profile