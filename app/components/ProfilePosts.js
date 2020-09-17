import React, { useEffect , useState } from "react";
import { useParams , Link } from 'react-router-dom';
import Axios from "axios";

//Components
import Page from "./Page";
import LoadingDotsIcon from './LoadingDotsIcon';
import Post from "./Post";





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
  }, [username]);

  if(isLoading) return (
    <Page>
      <LoadingDotsIcon />
    </Page>
  );

  return (

      <div className="list-group">
        {posts.map(post => {
            return <Post noAuthor={true} post={post} key={post._id}/>

        })}
      </div>

  );
}

export default ProfilePosts;