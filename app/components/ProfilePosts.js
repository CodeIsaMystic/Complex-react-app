import React, { useEffect , useState } from "react";
import { useParams , Link } from 'react-router-dom';
import Axios from "axios";

//Components
import Page from "./Page";
import LoadingDotsIcon from './LoadingDotsIcon';





function ProfilePosts() {

  const {username} =useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  // Send a request to the Backend with useEffect()
  useEffect(() => {
    
    const ourRequest = Axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, {cancelToken: ourRequest.token});
        //console.log(response.data);
        setPosts(response.data);
        setIsLoading(false);
      } catch(error) {
        console.log("There was a problem!!! or the request was cancelled...");
      }
    }
    fetchPosts();

    //Clean up function
    return () => {
      ourRequest.cancel();
    }
  }, []);

  if(isLoading) return (
    <Page>
      <LoadingDotsIcon />
    </Page>
  );

  return (

      <div className="list-group">
        {posts.map(post => {

          const date = new Date(post.createdDate);
          const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;


          return (
            <Link key={post._id} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={post.author.avatar} /> <strong>{post.title}</strong> {" "}
              <span className="text-muted small">on {dateFormatted} </span>
            </Link>
          )
        })}
      </div>

  );
}

export default ProfilePosts;