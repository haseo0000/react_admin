import "./Loading-styled.css";
import PuffLoader from "react-spinners/PuffLoader";
import PropTypes from "prop-types";

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function Loading({ loading }) {
  return (
    <div className="loadingContainer">
      <PuffLoader
        size={200}
        color={"#9696dd"}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
