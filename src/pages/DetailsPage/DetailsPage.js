import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import baseUrl from '../../consts'
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

    return (
        <div className='details'>
            DetailsPage

           <div><p> {podcasterData.channel}</p></div> 
        </div>
    )
}

export default DetailsPage;