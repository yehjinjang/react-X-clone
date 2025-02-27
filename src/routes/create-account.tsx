import { styled } from "styled-components";
import React, { useState } from 'react';
import { setLogLevel } from "firebase/app";

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
font_size: 42px;`;

export default function CreateAccount(){
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
        try{
        /// create account
        // set the name of the user. 
        // redirect to the home page

        }catch(e){
            //setError
        }
        finally{
            setIsLoading(false);
        }
        console.log(name, email, password);
    };
    return <Wrapper>
        <Title>Log into 𝕏</Title>
        <Form onSubmit = {onSubmit}>
            <Input onChange = {onChange} name= "name" value = {name} placeholder = "Name" type="text"required/>
            <Input onChange = {onChange} name= "email" placeholder = "Email" type="email" required/>
            <Input onChange = {onChange} name="password" placeholder="Password" type = "password" required/>
    
            <Input 
            type = "submit"
            value = {isLoading? "Loading..." : "Create Account"}
            />
        </Form>
    </Wrapper>
}

