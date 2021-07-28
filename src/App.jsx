import React from 'react';
import Card from './Card'
import data from './SData'

const App = ()=>(
  <>
    <h1 className="heading_style">Top Trending Series Of this Season</h1>
    {data.map((val)=>{
      return (
      <Card  key={val.id} imgscr={val.imgscr} title={val.title} sname={val.sname}
      link={val.link}
    />
    );

    })}
  </>
);

export default App;