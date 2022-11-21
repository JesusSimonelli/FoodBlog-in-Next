import React from 'react'
import SportList from '../../components/sports/sportList'
import { getAllSports } from '../../helpers/exercises-api'

export default function Sports(props) {
  return (
    <SportList sports={props.sports} />
  )
}

export async function getStaticProps(){
  const sports = await getAllSports()

  return{
    props:{
      sports: sports
    }
  }
}
