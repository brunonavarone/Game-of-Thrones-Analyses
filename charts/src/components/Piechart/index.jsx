import ApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Piechart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/tempoep')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  console.log(post)

  let a = post?.map((e) => {
    return e.maior60;
  })

  let b = post?.map((e) => {
    return e.menor55;
  })

  let c = post?.map((e) => {
    return e.between5560;
  })

  let series = [parseInt(a),parseInt(b),parseInt(c)]

  console.log('series :' + a)

  const options = {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Maior que 60', 'Entre 55 e 60', 'Menor que 55'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
  }

  return(
    <ApexChart options={options} series={series} type="pie" width={640} height={480}/>
  )
}

export default Piechart;