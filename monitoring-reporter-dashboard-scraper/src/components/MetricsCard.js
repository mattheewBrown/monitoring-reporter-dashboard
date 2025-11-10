import React from 'react';

const MetricsCard = ({ metric }) => {
return (
<div className="metrics-card">
<h2>{metric.key}</h2>
<p>Value: {metric.value}</p>
<p>Timestamp: {new Date(metric.timestamp).toLocaleString()}</p>
</div>
);
};

export default MetricsCard;