import { Route, Redirect } from 'react-router-dom';

export default ({
  component: Component,
  isPrivate,
  ...rest
}) => {

  const loading = false;
  const signed = false;

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed && isPrivate){
    return <Redirect to="/login" />
  }
  
  if(signed && !isPrivate){
    return <Redirect to="/" />
  }

  return(
    <Route 
      {...rest}
      render={props => (
        <Component {...props}/>
      )}
    />
  )
}