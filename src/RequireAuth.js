import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './Pages/Loading/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation();

  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
  //   return (
  //     < div >
  //       <h2 className='text-denger'>Your Email is Not varified</h2>
  //       <h5 className='text-success'>Please Varifiy Your Email</h5>
  //       <button
  //         onClick={async () => {
  //           await sendEmailVerification();
  //           alert('Sent email');
  //         }}
  //       >
  //         Verify email
  //       </button>
  //     </div >
  //   )
  // }
  return children;
};

export default RequireAuth;