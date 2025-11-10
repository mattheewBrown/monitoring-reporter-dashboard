import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { fetchData } from './services/dataService';

const App = () => {
const [data, setData] = useState([]);

useEffect(() => {
const getData = async () => {
const result = await fetchData();
setData(result);
};
getData();
}, []);

return (
<div className="App">
<Dashboard data={data} />
</div>
);
};

export default App;