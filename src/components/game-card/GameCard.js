import { useEffect, useState } from 'react'
import './gameCard.css'

import { useNavigate } from 'react-router-dom';



function GameCard(props) {

    let navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
    }, [props.data])

    function handleClick(e) {
        navigate(`/game-details/${e.target.id}`);
    }

    return (
        <>
            {data &&
                <li className='game-card' onClick={e => handleClick(e)}>
                    <div className='game-card-main'>
                        <div className='game-card-overlay' id={data.id}>
                            <div style={{height: '70%'}} id={data.id}></div>
                            <div className='game-card-title-holder' id={data.id}>
                                <p id={data.id}>{data.title}</p>
                            </div>
                        </div>
                        <img className='game-card-img' alt='game card' src={data.thumbnail} />
                    </div>
                </li>
            }
        </>
    )
}

export default GameCard