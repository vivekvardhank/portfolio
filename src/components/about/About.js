import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { Margin } from '@mui/icons-material';


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p style={{color:'rgb(246, 243, 118)'}}><span style={{color: 'white'}}>PS C:\Users\{firstName}{info.lastName.toLowerCase()} {'>'}</span> cat
                about{firstName} </p>
            <p>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color:'rgb(246, 243, 118)'}}><span style={{color: 'white'}}>PS C:\Users\{firstName}{info.lastName.toLowerCase()} {'>'}</span> cd skills
            </p>
            <p style={{color:'rgb(246, 243, 118)'}}><span style={{color: 'white'}}>PS C:\Users\{firstName}{info.lastName.toLowerCase()}\skills {'>'}</span> ls</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => (
                 <li key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '0px' }}>
                    {proficiency.icon} 
                 <span style={{ marginLeft: '10px' }}>{proficiency.name}</span> 
                 </li>
                ))}
            </ul>
            
        </>;
    }

    function miscText() {
        return <>
            <p style={{color:'rgb(246, 243, 118)'}}><span style={{color: 'white'}}>PS C:\Users\{firstName}{info.lastName.toLowerCase()} {'>'}</span> cd
                hobbies\interests</p>
            <p style={{color:'rgb(246, 243, 118)'}}><span style={{color: 'white'}}>PS C:\Users\{firstName}{info.lastName.toLowerCase()}\hobbies\interests  {'>'}</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'} >
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}