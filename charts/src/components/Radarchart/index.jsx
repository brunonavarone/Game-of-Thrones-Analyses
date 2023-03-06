import ApexChart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Radarchart(){
  const [post,setPost] = useState();

  useEffect(() => {
    axios.get('http://localhost:8800/epseason')
    .then((res) => setPost(res.data))
    .catch((err) => console.log(err))
  });

  const series = [{
    name: 'Series 1',
    data: post?.map((e) => {
      return e.Quantidade_de_ep;
    }),
  }]

  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart'
    },
    xaxis: {
      categories: post?.map((e) => {
        return e.season;
      })
    }
  }

  return(
    <ApexChart options={options} series={series} type="radar" width={640} height={480}/>
  )
}

export default Radarchart;