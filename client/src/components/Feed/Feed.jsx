import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";
import PostForm from "../PostForm/PostForm";

import axios from "axios";



const Feed = (props) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [allPost, setAllpost] = useState([]);

    // GET ALL USER AND USER'S FREINDS POST
    const getUserAndFreindPost = async () => {
        
        const response = await axios.post("/.netlify/functions/getcookie");
        console.log({message:"Get cookies response", response:response})
        // console.log(response.data.decodedToken.payload.user_metadata.id)
        // console.log(response.data.decodedToken.payload.user_metadata.username)
        const CookieId = response.data.decodedToken.payload.user_metadata.id;
        console.log({message:"user cookiess", CookieId:CookieId} )
        
        axios.get(`${process.env.REACT_APP_API_LINK}/api/post/findallfreindpost/${CookieId}`, {withCredentials:true} )
            .then(res => {
                console.log({message: "All user posts and freind posts", result: res})
                // setAllpost(res.data.results) // all post
                setAllpost(res.data.results.sort((p1,p2) =>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt); //sorting all post by most recent
                }));
            })
            .catch(err => {
                console.log({message:"Error when getting user posts and freind posts ", error: err})
            })
    }

    useEffect(() => {
        getUserAndFreindPost()
    }, []);

    
    return (
        <div>
            {/* =========== TOP FEED =============== */}
            <div className="top-feed">
                <div className="stories">
                    <div className="story">
                        <div >
                            <img className="profile-pic" src="https://res.cloudinary.com/dvocilaus/image/upload/v1648493911/my-social-media-uploads/njrz9sele5sss7pdest5.jpg" alt="profile photo" />
                        </div>
                        <p className="name">Isabela Wheitch</p>
                    </div>

                    <div className="story">
                        <div >
                            <img className="profile-pic" src="https://res.cloudinary.com/dvocilaus/image/upload/v1648493899/my-social-media-uploads/mbprhbithww6baz9fvi4.png" alt="profile photo" />
                        </div>
                        <p className="name">Lara Thomson</p>
                    </div>

                    <div className="story">
                        <div >
                            <img className="profile-pic" src="https://res.cloudinary.com/dvocilaus/image/upload/v1647553962/my-social-media-uploads/bgxilyzmlywsbkliofdj.png" alt="profile photo" />
                        </div>
                        <p className="name">Veronica Payler</p>
                    </div>

                    <div className="story">
                        <div>
                            <img className="profile-pic" src="https://res.cloudinary.com/dvocilaus/image/upload/v1647552601/my-social-media-uploads/w8ompqwtgmnuskk3yugq.jpg" alt="profile photo" />
                        </div>
                        <p className="name">Jhenne Dilan</p>
                    </div>
                </div>
                <PostForm/>
            </div>
            {/* ================ FEED POST =================== */}
            <div className="feed-post">
                {/* ======== Fist post =============*/}
                {/* {PostsS.map(p => (
                        <Post key={p.id} post={p} />
                    ))} */}
                {allPost.map(p => (
                        <Post key={p._id} post={p} />
                    ))}
            </div>
        </div>
    )
}

export default Feed;