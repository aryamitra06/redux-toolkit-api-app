import React from 'react';
import Card from "../components/Card";
export default function Cards({ data }) {

    const { posts, status } = data;

    return (
        <>
            {
                status === "loading" && (
                    <div className="mt-3">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            <div className="row mt-3">
                {
                    posts?.data?.map((e) => (
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <Card data = {e}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
