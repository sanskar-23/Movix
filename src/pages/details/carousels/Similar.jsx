import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import PropTypes from "prop-types";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};
Similar.propTypes = {
  mediaType: PropTypes.any,
  id: PropTypes.any,
};

export default Similar;
