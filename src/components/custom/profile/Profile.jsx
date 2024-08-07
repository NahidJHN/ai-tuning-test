import { useRef } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { Outlet } from 'react-router';

// project import

import ProfileSideBar from './ProfileSideBar';

// ==============================|| PROFILE - USER ||============================== //

const Profile = ({ children }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12} md={3}>
        <ProfileSideBar />
      </Grid> */}
      <Grid item xs={12} md={9}>
        <Outlet context={inputRef} />
      </Grid>
    </Grid>
  );
};

export default Profile;
