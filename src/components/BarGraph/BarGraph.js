import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import PropTypes from 'prop-types';

const BarGraph = ({data}) => {
  const CustomLabel = ({x, y, payload}) => {
    const iconColor = "#99bbbb";

    switch (payload.value) {
      case 'square':
        return <rect x={x-9} y={y} width="20" height="20" fill={iconColor} />
      case 'circle':
        return <circle cx={x} cy={y+10} r="10" fill={iconColor} />
      case 'triangle':
        return <polygon points={`${x-10},${y+20} ${x+10},${y+20} ${x},${y}`} fill={iconColor}/>
      case 'plus':
        return [
          <rect x={x-9} y={y+7} width="20" height="6" fill={iconColor} key="h"/>,
          <rect x={x-1.5} y={y} width="6" height="20" fill={iconColor} key="v"/>
        ]
      default:
        return;
    }
  }

  return (
    <BarChart width={550} height={350} data={data}>
      <CartesianGrid vertical={false} horizontal={true}/>
      <XAxis dataKey="icon" tick={<CustomLabel />} tickLine={false} />
      <YAxis
        stroke="rgba(151, 151, 151)"
        label={{value: 'counts', angle: -90, position:'insideLeft', fill:'#99bbbb', fontSize:'1.25rem', fontWeight:'bold', letterSpacing:'.25rem'}}/>
      <Bar dataKey="count" fill="#419495" label={{fill:'#fafafa', fontSize:'16'}}/>
    </BarChart>
  );
}

export default BarGraph;

BarGraph.propTypes = {
  data: PropTypes.array
};
