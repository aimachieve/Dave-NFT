// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Grid } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LayersIcon from '@mui/icons-material/Layers';
// 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(8, 0),
  background: '#010101',
  color: '#ffffff'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingBlogs1() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
              <Typography sx={{
                fontSize: '40px',
              }}>Latest News</Typography>
              <Typography sx={{
                color: "#b9c6d8",
                textAlign: 'center'
              }}>
                NFT and Crypto New for your Website
              </Typography>
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Stack justifyContent={'center'} alignItems="center" spacing={2}>
              <img src="/assets/home/news.gif" alt="gif" style={{ width: '50%', height: '50%' }} />
              <Typography sx={{
                color: "#b9c6d8",
              }}>
                Placing an NFT and Crypto news feed on a Web page puts fresh content on your website without having to do any work beyond the original installation, and that doesn’t take much work. Even if you don’t write HTML code, plugins and built-in features for Web page templates and design programs are readily available online, often for free. The feed itself provides excerpts of news articles with links back to the original site.
                <br />
                <br />
                Our feed sources for NFT and Crypto are:
                <br />
                <br />

                <a href="https://www.livetradingnews.com/category/nft/feed" target={'_blank'}>
                  https://www.livetradingnews.com/category/nft/feed
                </a>
                <br />
                <a href="https://www.livetradingnews.com/category/crypto/feed" target={'_blank'}>
                  https://www.livetradingnews.com/category/crypto/feed
                </a>
                <br />
                <br />

                1. 
                Select a news feed plugin or extension that’s compatible with your site. If you’re using online page templates for content management systems for blogging such as WordPress, Joomla, Drupal or Google’s Blogger, or commercial systems such as Type Pad or Nucleus CMS, each of these systems offers plugins or have basic news-feed functions built into the templates. Extensions are also available for Web design programs. While many of the plugins are free, premium plugins offer more advanced features. Unless the premium features provide an extra function necessary for your site, however, the free or low-cost versions will likely be enough to get you started. You can always upgrade later.
                <br />
                <br />

                2.
                Install the plugin according to the provider’s specific instructions. While these can vary depending on the template CMS or design program you’re using, generally you click an install button within the CMS administration page or program menu to add the plugin. In other instances, you download the plugin first to your computer, then use a File Transfer Protocol program to upload it to a specified folder in your website’s file structure. This only takes minutes, after which a control for the plugin will appear in your CMS or program menu.
                <br />
                <br />

                3.
                Determine where to place the news feed on your website. For templates, the plugin creates a widget that you can drag-and-drop into specific areas within the template, such as in sidebars that appear on one or every page of your site. Other plugins will generate lines of HTML code that you’ll copy and paste into the HTML view of your page. In the latter case, typing in a line of “zzzzzz” in the standard view can act as a placeholder that you can easily find later in the HTML view and replace with the generated code.
                <br />
                <br />

                4.
                Find an Internet news source that offers a feed through RSS, now commonly standing for Real Simple Syndication, but it has also been called Rich Site Summary and other names. Another syndication format, Atom, is also widely used on news sites. Sites can indicate their availability by displaying an RSS or Atom link, or the standard feed icon of broadcast waves in an orange square.
                <br />
                <br />

                5.
                Copy the address of the news site offering the feed and place it in the URL slot of your plugin menu. The address is normally for a page that lists headlines and excerpts of articles that the source regularly updates.
                <br />
                <br />

                6.
                Enter your choice for options the plugin offers, such as a header for the news feed and the number of article excerpts to include on your page. Since the news source limits the size of the excerpt you can display, each news item includes a link to the full article posted on the source site. Select the option to open the article in a new window or tab so as not to take the viewer away from your website. Additional options may affect how the feed is displayed, such as creating a sidebar box on your page or adding background color and other design features.
                <br />
                <br />

                7.
                Save the changes. If you’re placing a widget on a template, the news feed will appear on your page, changing whenever the source does. If the plugin only provides the HTML coding, copy the lines of code and using the HTML view of your page replace the placeholder you set earlier with the new code, then save the page. Returning to normal view shows the news feed in place.
              </Typography>
            </Stack>
          </MotionInView>
          {/* <MotionInView variants={varFadeInUp} style={{ marginTop: '50px' }}>
            <Grid
              container
            >
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="NFT"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/01.jpg"
                  />
                  <CardContent>
                    <Stack direction="row">
                      <EventNoteIcon />
                      <Typography sx={{
                        color: "#b9c6d8",
                        mr: 2
                      }}>
                        20th January, 2022
                      </Typography>
                      <ScheduleIcon />
                      <Typography sx={{
                        color: "#b9c6d8"
                      }}>
                        5 min read
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      Mindfulness Activities for Kids & Toddlers with NFT
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" justifyContent="space-between" spacing={18}>
                      <Button size="small" endIcon={<ArrowForwardIcon />} variant="text" href="#">Read More</Button>
                      <Button size="small" variant="text" href="#">by@callyjoe</Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="NFT"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/02.jpg"
                  />
                  <CardContent>
                    <Stack direction="row">
                      <EventNoteIcon />
                      <Typography sx={{
                        color: "#b9c6d8",
                        mr: 2
                      }}>
                        20th January, 2022
                      </Typography>
                      <ScheduleIcon />
                      <Typography sx={{
                        color: "#b9c6d8"
                      }}>
                        5 min read
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      Mindfulness Activities for Kids & Toddlers with NFT
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" justifyContent="space-between" spacing={18}>
                      <Button size="small" endIcon={<ArrowForwardIcon />} variant="text" href="#">Read More</Button>
                      <Button size="small" variant="text" href="#">by@callyjoe</Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
                  <CardMedia
                    component="img"
                    alt="NFT"
                    height="auto"
                    image="https://shreethemes.in/superex/layouts/images/blog/03.jpg"
                  />
                  <CardContent>
                    <Stack direction="row">
                      <EventNoteIcon />
                      <Typography sx={{
                        color: "#b9c6d8",
                        mr: 2
                      }}>
                        20th January, 2022
                      </Typography>
                      <ScheduleIcon />
                      <Typography sx={{
                        color: "#b9c6d8"
                      }}>
                        5 min read
                      </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div">
                      Mindfulness Activities for Kids & Toddlers with NFT
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" justifyContent="space-between" spacing={18}>
                      <Button size="small" endIcon={<ArrowForwardIcon />} variant="text" href="#">Read More</Button>
                      <Button size="small" variant="text" href="#">by@callyjoe</Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </MotionInView> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
