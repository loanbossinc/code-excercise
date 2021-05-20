import React from 'react';
import { Link} from "react-router-dom";

const OrganicLink = ({to, targetId, children, placeholder, ...other}) => {
  if(targetId === 'free')
    return null;
  return <Link to={to} {...other}>{children}</Link>  
}
export default OrganicLink;