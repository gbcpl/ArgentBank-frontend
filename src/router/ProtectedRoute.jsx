import PropTypes from 'prop-types'; 
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute( { children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return (
      <Navigate to="/login" />
    )
  } 
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};


export default ProtectedRoute