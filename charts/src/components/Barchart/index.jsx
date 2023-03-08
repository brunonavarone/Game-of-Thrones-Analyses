import ApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Barchart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/aparicoes')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })


  const series = [{
    data: post?.map((e)=>{
      return e.media_aparicoes_por_ano
    })
  }]

  const options = {
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    xaxis: {
      categories: post?.map((e) => {
        return e.personagens
      }),
    }
  }

  return(
    <ApexChart options={options} series={series} type="bar" height={480}/>
  )
}

export default Barchart;