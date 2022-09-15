import React from 'react'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import StadiumOutlinedIcon from '@mui/icons-material/StadiumOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

export const SidebarData = [
{
    title: "Teams",
    icon: <Groups2OutlinedIcon />,
    link: "/teams"
},
{
    title: "Games",
    icon: <SportsSoccerOutlinedIcon />,
    link: "/games"
},
{
    title: "Stadiums",
    icon: <StadiumOutlinedIcon />,
    link: "/stadiums"
},
{
    title: "Groups",
    icon: <Diversity3OutlinedIcon />,
    link: "/groups"
},
]

// icons imported from https://mui.com/material-ui/material-icons/?theme=Outlined&query=arena&selected=StadiumOutlined