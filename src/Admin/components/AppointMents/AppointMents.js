
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ReactComponent as Session } from "../../../assets/sessions.svg";
import { useState } from 'react';

export default function AppointMents() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   
    <div className="MainDash">
 
    <div className="main">
      <b>AppointMents</b>
      <Box sx={{ width: '100%', typography: 'body1' }} className="tabs">
      <TabContext value={value} className='TabContext'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New" value="1" />
            <Tab label="Attend Sessions" value="2" />
            <Tab label="Cancelled Session" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" className='tabPanel'>

        <div className="sessions">
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
           Appointment 
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button >Attend</button>
              <button style={{ background: "var(--color-three)" }}>View</button>
              <button style={{ background: "#d00000" }}>Cancel</button>
            </div>
          </div>
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
           Appointment 
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button >Attend</button>
              <button style={{ background: "var(--color-three)" }}>View</button>
              <button style={{ background: "#d00000" }}>Cancel</button>
            </div>
          </div>
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
           Appointment 
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button >Attend</button>
              <button style={{ background: "var(--color-three)" }}>View</button>
              <button style={{ background: "#d00000" }}>Cancel</button>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value="2">  <div className="sessions">
          <div className="session ">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "green",
              }}
              >
              Session Attend
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
              Session Attend
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
             
              <button>View</button>
            </div>
          </div>
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
              Session Attend
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>
        </div></TabPanel>
        <TabPanel value="3">  <div className="sessions">
          <div className="session cancelled">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "red",
              }}
              >
              Session Cancelled
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
          
          </div>
          <div className="session cancelled">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "red",
              }}
              >
              Session Cancelled
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
          
          </div>
          <div className="session cancelled">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "red",
              }}
              >
              Session Cancelled
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
          
          </div>
        </div></TabPanel>
      </TabContext>
    </Box>
  
    </div>
  </div>
  )
}
