import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from "../redux/postbyid";

export default function DetailView() {

    const params = useParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPostById(params.id))
    }, [dispatch, params.id])

    const postbyid = useSelector((state) => state.postbyid)


    const { post, status } = postbyid;

    console.log(post?.data);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        {
                            status === "loading" || status === "idle" ? (
                                <div class="card">
                                    <div class="card-body">
                                        <p className="placeholder-glow">
                                            <span class="placeholder placeholder-lg col-4"></span>
                                        </p>
                                        <p className="placeholder-glow">
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{post?.data?.title}</h5>
                                        <p class="card-text">{post?.data?.body}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}