import "./style.scss";
import PropTypes from "prop-types";
const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropTypes.any,
};

export default ContentWrapper;
