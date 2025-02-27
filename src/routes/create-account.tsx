import { styled } from "styled-components";
import React, { useState } from 'react';

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

export default function CreateAccount(){
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        console.log(name, email, password);
    };
    return <Wrapper>
        <Form onSubmit = {onSubmit}>
            <Input onChange = {onChange} name= "name" value = {name} placeholder = "Name" type="text"required/>
            <Input onChange = {onChange} name= "email" placeholder = "Email" type="email" required/>
            <Input onChange = {onChange} name="password" placeholder="Password" type = "password" required/>
    
            <Input type = "submit" value = "Create Account"/>
        </Form>
    </Wrapper>
}

