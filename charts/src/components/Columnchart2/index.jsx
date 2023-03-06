import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/melhoresEp')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  console.log(post);

  

  const series = [{
    name: 'Servings',
    data: post?.map((e) => {
      return e.Rating;
    })
  }]

  const options = {
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: post?.map((e) => {
        return `${e.season}.${e.episode}`
      }),
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Quantidade de casas',
      },
      tooltip: {
        enabled: true
      },
    }
  }

  return(
    <ApexChart options={options} series={series} type="bar" width={640} height={480}/>
  )
}

export default Columnchart;