import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import { useState } from 'react';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function TabBar() {
    const [value, setValue] = useState(0);
    const routes = useRouter()
    const handleChange = (event, newValue) => {
        setValue(newValue);
        const link=''
        if(value=="Home"){
            link = '/'
        }else{
            link='/chat'
        }
        routes.push(link)
    };
    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
        >
            <StyledTab label="Home" />
            <StyledTab label="Adventure" />
        </StyledTabs>
    )
}

export default TabBar
