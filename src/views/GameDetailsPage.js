import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import '../css/gameDetailsPage.css'

import firebaseApp from '../services/firebase'

const db = firebaseApp.firestore();



function GameDetailsPage() {

    const [data, setData] = useState(null);
    const [btnActive, setBtnActive] = useState(false);

    let navigate = useNavigate();
    let { userId } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {

    }, [])

    function getData() {

        db.collection('game_list').doc(userId).get().then(querySnapShot => {

            if (userId === 'OW024DEfpwplQXf2zyIG') {
                setBtnActive(true);
            }

            if (!querySnapShot) {
                throw Error('failed to get data');
            }
            console.log(querySnapShot.data());

            const theData = {
                id: querySnapShot.id,
                carousel: querySnapShot.data().carousel,
                description: querySnapShot.data().description,
                developer: querySnapShot.data().developer,
                genre: querySnapShot.data().genre,
                release_date: querySnapShot.data().release_date,
                thumbnail: querySnapShot.data().thumbnail,
                title: querySnapShot.data().title
            }

            if (!theData) {
                throw Error('failed to get data');

            } else {
                setData(theData);
            }

        }).catch(err => {
            navigate('*')
            console.log(err);
        });
    }



    if (!data) {
        return (
            <section className="game-details-page">
                <h1 style={{textAlign: 'center', color: 'white'}}>Loading ...</h1>
            </section>
        )
    }

    return (
        <>
            {data && 
                <section className='game-details-page'>
                    <div className='left-side'>
                        <div className='image-holder'>
                            <img className='game-image' src={data.thumbnail} alt='game-image' />
                        </div>
                        <div className='back-btn-holder'>
                            <button onClick={() => navigate('/game-list')} className='back-btn'>Back</button>
                        </div>
                    </div>

                    <div className='right-side'>
                        <div className='description-holder'>
                            <h1 className='game-title'>{data.title}</h1>
                            <p className='game-genre'>{data.genre}</p>
                            <p className='game-description'>{data.description}</p>

                            <div className='more-details-holder'>
                                <p className='game-dev'>{data.developer}</p>
                                <p className='game-release'>{data.release_date}</p>
                            </div>
                        </div>
                        <div className='play-btn-holder'>
                            {btnActive ?
                                <>
                                    <button className='play-now-btn'>PLAY NOW</button>
                                </> : <>
                                    <button className='play-now-btn-disabled'>PLAY NOW</button>
                                </>
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default GameDetailsPage