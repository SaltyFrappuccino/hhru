// @ts-nocheck
import {Container, Typography} from "@mui/material";
import {Input, Option, Select, Stack, Table, Textarea} from "@mui/joy";
import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import {SelectValue} from "@mui/base/useSelect";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const description = {
    1: "Описание 1",
    2: "Описание 2"
}
function App() {
    const [descriptionFlag, setDescriptionFlag] = useState(false)

    const [FIO, setFIO] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nik, setNik] = useState('')
    const [desc, setDesc] = useState('Junior Java Developer со знаниями jUnit, Gradle, servlet, теоретическими знаниями в области ООП и парадигм.')


    const onDescChange = ()=>{
        setDescriptionFlag(!descriptionFlag)
        setDesc(descriptionFlag? description[1]: description[2])
    }
    const onClick = () => {
        fetch("https://gigachat-hr.onrender.com/userbot", {
            method: "POST",
            headers:{"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify({
                fio: FIO,
                phone: phoneNumber,
                telegram: nik,
                content: desc
            })})
    }
    return (
    <Container maxWidth="lg" sx={{marginTop: "20px"}}>
         <Container className={'container'} maxWidth="lg" sx={{marginTop: "20px"}}>
                <Box className={'firstBox'} maxWidth={'1000px'} height={'700px'}>
                    <Box className={'secondBox'}>
                        <h1>Junior java developer</h1>
                        <p className={'description'} style={{fontWeight: 600}}>Быстрое резюме:</p>
                    </Box>
                    <Stack className={'stack'} spacing={2} maxWidth={'1000px'} >
                        <Input onChange={(e)=>setFIO(e.target.value)} value={FIO} placeholder={"ФИО"}></Input>
                        <Input onChange={(e)=> {
                            setPhoneNumber(e.target.value)
                        }} value={phoneNumber} placeholder={"Телефон"}></Input>
                        <Input onChange={(e)=>setNik(e.target.value)} value={nik} placeholder={"Ник в телеграмм (начиная с @)"}></Input>
                        <Textarea disabled value={'Junior Java Developer со знаниями jUnit, Gradle, servlet, теоретическими знаниями в области ООП и парадигм.'}  minRows={10}></Textarea>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Button
                                onClick={onClick}
                                disabled={!(FIO && phoneNumber && nik && desc)}
                                style={{width: '210px', height: '40px'}}
                                variant="contained">Откликнуться</Button>

                        </Stack>

                    </Stack>
                </Box>
            </Container>
    </Container>
  )
}

export default App
