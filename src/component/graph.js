import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width="100%" height={250} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis datekey="price" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
