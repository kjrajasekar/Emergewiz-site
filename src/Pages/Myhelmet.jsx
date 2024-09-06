import { Helmet } from "react-helmet";

function Myhelmet(props) {
  return (
    <Helmet>
      <title>{props.mymeta.title}</title>
      <meta name="title" content={props.mymeta.title} />
      <meta
        name="description"
        content={props.mymeta.describe}
      />
    </Helmet>
  );
}
export default Myhelmet;
