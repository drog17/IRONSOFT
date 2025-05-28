import styles from './stack.module.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from 'react';
import Figma from './img/design/figma.png'
import pS from './img/design/photoshop.png'
import AI from './img/design/AI.png'
import illustrator from './img/design/id.png'
import XD from './img/design/XD.png'




interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Stack = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={styles.stack}>
      <div className={styles.cintainer}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Design" {...a11yProps(0)} />
              <Tab label="Frond-end" {...a11yProps(1)} />
              <Tab label="Mobile" {...a11yProps(2)} />
              <Tab label="Back-end" {...a11yProps(3)} />
              <Tab label="Seo" {...a11yProps(4)} />
              <Tab label="PPc" {...a11yProps(5)} />

            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={illustrator} alt="" />
            <img src={XD} alt="" />
            <img src={AI} alt="" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={XD} alt="" />
            <img src={AI} alt="" />          
            </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={AI} alt="" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={illustrator} alt="" />
            <img src={XD} alt="" />
            <img src={AI} alt="" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={illustrator} alt="" />
            <img src={XD} alt="" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <img src={Figma} alt="" />
            <img src={pS} alt="" />
            <img src={illustrator} alt="" />
            <img src={AI} alt="" />
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
export default Stack

