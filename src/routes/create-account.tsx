import { styled } from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { setLogLevel } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
width: 420px;
padding: 50px 0px;`;

const Form = styled.form`
margin-top: 50px;
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
`;
const Input = styled.input`
padding: 10px 20px;
border-radius: 50px;
border: none;
width: 100%;
font-size: 16px;
&[type="submit"]{
cursor: pointer;
&:hover{
opacity: 0.8;
}
}
`;
const Title = styled.h1`
font-size: 42px;`;

const Error = styled.span`
font-weight:600;
color: tomato;
`;

export default function CreateAccount(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        if(name == "name"){
            setName(value);
        } else if (name == "email"){
            setEmail(value);
        }
        else if (name == "password"){ 
            setPassword(value);
        }
    }
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isLoading || name === "" || email === "" || password === "") return;
        try{
            setIsLoading(true);            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {displayName: name});
            navigate("/");
        }catch(e){
        //setError
        }
        finally{
            setIsLoading(false);
        }
        console.log(name, email, password);
    };
    return <Wrapper>
        <Title>Join 𝕏</Title>
        <Form onSubmit = {onSubmit}>
            <Input onChange = {onChange} name= "name" value = {name} placeholder = "Name" type="text"required/>
            <Input onChange = {onChange} name= "email" placeholder = "Email" type="email" required/>
            <Input onChange = {onChange} name="password" placeholder="Password" type = "password" required/>
    
            <Input 
            type = "submit"
            value = {isLoading? "Loading..." : "Create Account"}
            />
        </Form>
        {error !== "" ? <Error>{error}</Error>:null}
    </Wrapper>
}

