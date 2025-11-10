import React from 'react';
import MetricsCard from './MetricsCard';

const Dashboard = ({ data }) => {
return (
<div className="dashboard">
<h1>Monitoring Dashboard</h1>
<div className="metrics-container">
{data.map((item) => (
<MetricsCard key={item.key} metric={item} />
))}
</div>
</div>
);
};

export default Dashboard;