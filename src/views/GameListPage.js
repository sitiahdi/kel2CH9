import { useState, useEffect } from 'react'
import '../css/gameListPage.css'

import firebaseApp from '../services/firebase'

import Carousel from '../components/carousel/Carousel'
import GameCard from '../components/game-card/GameCard'

const db = firebaseApp.firestore();

function GameListPage() {

    const [data, setData] = useState(null);

    const [carouselData, setCarouselData] = useState(null);
    const [recommendationData, setRecommendationData] = useState(null);
    const [strategyData, setStrategyData] = useState(null);
    const [shooterData, setShooterData] = useState(null);


    useEffect(() => {
        getData();
    }, [])

    function getData() {

        db.collection('game_list').get().then(querySnapShot => {

            if (!querySnapShot) {
                throw Error('failed to get data');
            }

            const allData = [];
            querySnapShot.forEach(e => {
                const theData = {
                    id: e.id,
                    carousel: e.data().carousel,
                    description: e.data().description,
                    developer: e.data().developer,
                    genre: e.data().genre,
                    release_date: e.data().release_date,
                    thumbnail: e.data().thumbnail,
                    title: e.data().title
                }
                allData.push(theData);
            });

            if (allData.length === 0) {
                throw Error('failed to get data');

            } else {
                setData(allData);
            }

        }).catch(err => {
            setData('err');
            console.log(err);
        });
    }

    function getSectionData(data) {

        const carouselArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].carousel) {
                carouselArr.push(data[i]);
            }
        }
        setCarouselData(carouselArr);

        const recommendationArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === "OW024DEfpwplQXf2zyIG") {
                recommendationArr.push(data[i]);
            }
        }
        setRecommendationData(recommendationArr);

        const strategyArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].genre === "Strategy") {
                strategyArr.push(data[i]);
            }
        }
        setStrategyData(strategyArr);

        const shooterArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].genre === "Shooter") {
                shooterArr.push(data[i]);
            }
        }
        setShooterData(shooterArr);

    }

    useEffect(() => {
        if (data) {
            getSectionData(data)
        }
    }, [data])

    if (!data) {
        return (
            <section className="game-list-page">
                <h1 style={{textAlign: 'center', color: 'white'}}>Loading ...</h1>
            </section>
        )
    }

    return (
        <section className="game-list-page">
            {data !== 'err' ?
                <>
                    <div className='game-list-page-main'>
                        {carouselData && <Carousel data = {carouselData} />}
                        <div className='section-holder'>
                            <div className='section-header'>
                                <h1>Recommendation</h1>
                            </div>
                            <ul className='game-card-holder'>
                                {recommendationData && recommendationData.map((e, i) => {
                                    return <GameCard data={e} key={i} />
                                })}
                            </ul>
                        </div>
                        <div className='section-holder'>
                            <div className='section-header'>
                                <h1>Strategy Games</h1>
                            </div>
                            <ul className='game-card-holder'>
                                {strategyData && strategyData.map((e, i) => {
                                    return <GameCard data={e} key={i} />
                                })}
                            </ul>
                        </div>
                        <div className='section-holder'>
                            <div className='section-header'>
                                <h1>Shooter Games</h1>
                            </div>
                            <ul className='game-card-holder'>
                                {shooterData && shooterData.map((e, i) => {
                                    return <GameCard data={e} key={i} />
                                })}
                            </ul>
                        </div>

                        <div className='section-holder'>
                            <div className='section-header'>
                                <h1>Other Games</h1>
                            </div><ul className='game-card-holder-all'>
                                {data.map((e, i) => {
                                    return <GameCard data={e} key={i} />
                                })}
                            </ul>
                        </div>
                    </div>
                </> : <>
                    <h1 style={{textAlign: 'center', color: 'white'}}>Try Again ...</h1>
                </>
            }
        </section>
    )
}

export default GameListPage