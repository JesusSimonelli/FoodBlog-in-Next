import { Fragment } from "react";
import PlattesList from "../../components/plattes/plattesList";
import {  getAllPlattes } from "../../helpers/plattes-api";

export default function Plattes(props) {
  const { plattes } = props;
  return (
    <Fragment>
      <PlattesList plattes={plattes} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const plattes = await getAllPlattes();

  return {
    props: {
      plattes: plattes,
    },
    revalidate: 60,
  };
}
