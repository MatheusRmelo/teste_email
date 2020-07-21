import React from 'react'
//import 'isomorphic-fetch'
import Link from 'next/link'

import axios from 'axios'

const Home = (props) =>(<div>
    {props.data.response}
  </div>
)

Home.getInitialProps = async function() {
    // fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
  const res = await axios.post('https://email-mt.herokuapp.com/send-email',{
      name: 'Teste',
      email: 'teste@gmail.com'
  })
  const data = await res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data: data
  }

}
export default Home;