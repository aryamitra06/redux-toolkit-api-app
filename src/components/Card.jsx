import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({data}) {

    const navigate = useNavigate();

    const navigateToDetailPage = () => {
        navigate( `/post/${data?.id}`)
    }

    console.log(data);
    return (
        <div class="card mb-3" onClick={navigateToDetailPage} style={{cursor: 'pointer'}}>
            <div class="card-body">
                <h5 class="card-title">{data?.title}</h5>
                <p class="card-text">{data?.body}</p>
            </div>
        </div>
    )
}
