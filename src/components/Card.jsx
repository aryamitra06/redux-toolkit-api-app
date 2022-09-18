import React from 'react'

export default function Card({data}) {

    console.log(data);
    return (
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{data?.title}</h5>
                <p class="card-text">{data?.body}</p>
            </div>
        </div>
    )
}
