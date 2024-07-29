"use client"
import styles from './chart.module.css'
import { ResponsiveContainer,LineChart, CartesianGrid,XAxis, YAxis,Tooltip,Legend,Line } from 'recharts'


const data = [
    {
      name: 'Sunday',
      visits: 4000,
      click: 2400,
    },
    {
      name: 'Monday',
      visits: 3000,
      clicks: 1398,
    },
    {
      name: 'Tuesday',
      visits: 2000,
      clicks: 9800,
    },
    {
      name: 'Wednesday',
      visits: 2780,
      clicks: 3908,
    },
    {
      name: 'Thursday',
      visits: 1890,
      clicks: 4800,
    },
    {
      name: 'Friday',
      visits: 2390,
      clicks: 3800,
    },
    {
      name: 'Saturday',
      visits: 3490,
      clicks: 4300,
    },
  ];
const Charts = ()=> {
    return(
        <div className={styles.container}>
            <h2>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c"}} />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="clicks" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}

export default Charts