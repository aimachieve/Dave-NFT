// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid, Avatar, Button, Fab } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(8, 0),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
  }
}));
// ----------------------------------------------------------------------

export default function List() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          {/* Title */}
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Stake. Farm. Play with Daves NFTs
          </Typography>

          {/* List */}
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <img src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/615df50c598d6f4eaa112b1e_Dex.png" style={{width: '100px'}} alt="coming soon" />
                  <Typography sx={{ fontSize: '22px' }}>Coming Soon</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start earning with Daves NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <img src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/615df50c598d6f4eaa112b1e_Dex.png" style={{width: '100px'}} alt="coming soon" />
                  <Typography sx={{ fontSize: '22px' }}>Coming Soon</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start earning with Daves NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack alignItems={'center'} spacing={3}>
                  <img src="https://uploads-ssl.webflow.com/60098c5b239e4890fa5ee1aa/615df50c598d6f4eaa112b1e_Dex.png" style={{width: '100px'}} alt="coming soon" />
                  <Typography sx={{ fontSize: '22px' }}>Coming Soon</Typography>
                  <Typography sx={{
                    color: "#b9c6d8",
                    textAlign: 'center'
                  }}>
                    Start earning with Daves NFTs that can provide everything
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
