import React from 'react';
import Video from "./components/Video/Video";
import Content from "./components/Content/Content";

fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3f0371b1e5c837c3e5f88f93f9562a93")
    .then(res => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
    })

function App() {
    return (
        <div>
            <Video />
            <Content />
        </div>
);
}

export default App;
