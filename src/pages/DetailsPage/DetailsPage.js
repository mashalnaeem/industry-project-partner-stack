import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import baseUrl from '../../consts'
import detaillogo from "../../assets/detailed img.svg"
import './DetailsPage.scss'

function DetailsPage() {
    const [podcasterData, setPodcasterData] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        async function getPodcaster(){
            try {
                const response = await axios.get(`${baseUrl}/podcasters/${id}`);
                console.log(response.data)
                setPodcasterData(response.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getPodcaster()

    }

        , [id])
        //podcasterData is an object now accessible
        if (!podcasterData) {
            return (
            <div>Loading...</div>
        )
        }

    return (
        <div className="details__container">
            <img src={detaillogo} alt="detail-logo"/>
        <div className="details__container-wrapper">
        <h2 className='details__container-title'>DetailsPage</h2>
        <p className='details__container-channel'>{podcasterData.channel}</p>
        <p className='details__container-channelviewcount'>{podcasterData.channelViewCount}</p>
        <p className='details__container-subscribercount'>{podcasterData.subscriberCount}</p>
        <p className='details__container-country'>{podcasterData.country}</p>
        </div>
        </div>
    
    )
}

    
export default DetailsPage;