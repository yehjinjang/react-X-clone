import { auth } from "../routes/firebase";
import PostTweetForm from "../components/post-tweet-form";
import { styled } from "styled-components"

const Wrapper = styled.div``;

export default function Home() {
    return(
        <Wrapper>
         <PostTweetForm/>
        </Wrapper>
    );
    // const logOut = () => {
    //     auth.signOut();
    // }
    // return (<h1>
    //     <button onClick={logOut}>Log Out</button>
    // </h1>
// );
}