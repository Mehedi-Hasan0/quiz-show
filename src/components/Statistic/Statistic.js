import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Navbar from '../Navbar/Navbar';

const data = [
    {
        name: 'React',
        uv: 8,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Javascript',
        uv: 9,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'CSS',
        uv: 8,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Git',
        uv: 11,
        pv: 2400,
        amt: 2400,
    },
]

const Statistic = () => {

    return (
        <div>
            <Navbar></Navbar>
            <ResponsiveContainer width='100%' aspect={4} className=' w-8/12 mx-auto my-5'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;