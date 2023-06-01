import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from '@mui/material';
import react from 'react';

import {addCoffee} from '../service/api.js';

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`;

const defaultValue ={
    name: '',
    price: '',
    category: '',
    colour: ''
}
const AddCoffee = () =>{

    const [coffee, setCoffee] = useState(defaultValue);

    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setCoffee({...coffee, [e.target.name]: e.target.value});
        console.log(coffee);
    }

    const addCoffeeDetails = async () =>{
        await addCoffee(coffee);
    }

    return(
        <Container>
            <Typography variant="h4"> Add Coffee Machine</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="price"/>
            </FormControl>
            <FormControl>
                <InputLabel>category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="category"/>
            </FormControl>
            <FormControl>
                <InputLabel>colour</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="colour"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() =>addCoffeeDetails()}>Add Coffee Machine</Button>
                {/* <button variant="contained"> Add Coffee Machine</button> */}
            </FormControl>
        </Container>
    )
}

export default AddCoffee;