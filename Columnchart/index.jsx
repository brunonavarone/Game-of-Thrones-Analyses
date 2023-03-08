
import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/regiao')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  

  

  const series = [{
    name: 'Teste',
    data: post?.map((e) => {
      return e.Quantidade
    })
  }]

  const options = {
    colors: ['#000'],
    plotOptions: {
      bar:  {
        columnWidth: '45%',
        distributed: true,
      }
    },
    labels: {
      style: {
        colors: ['#000'],
        fontSize: '12px'
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: post?.map((e) => {
        return e.Regiao
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