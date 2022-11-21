import { Fragment } from 'react'
import PlatteContent from '../../components/plattes-detail/platteContent';


import { getFeaturedPlattes, getPlattesById } from '../../helpers/plattes-api'

export default function PlattesDetails(props) {
  const platte = props.selectedPlatte
 
  return (
    <Fragment>
    <PlatteContent title={platte.name} image={platte.image} resume={platte.resume} />
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const platteId = context.params.platteId;

  const platte = await getPlattesById(platteId);

  return {
    props: {
      selectedPlatte: platte,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const plattes = await getFeaturedPlattes();

  const paths = plattes.map((platte) => ({
    params: { platteId: platte.id },
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  }
}
