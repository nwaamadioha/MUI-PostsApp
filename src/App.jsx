import React from "react";
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"
import {PhotoCamera} from "@material-ui/icons"
import useStyles from "./styles";


function App() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const classes = useStyles();

    return (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon} />
                <Typography variant = "h6">
                     Photo Album
                </Typography>
            </Toolbar>
          </AppBar>
          <main>
              <div className={ classes.container }>

                  <Container maxWidth="sm">
                      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                         Photo Album
                      </Typography>
                      <Typography variant="h5" align="center" color="textSecondary" paragraph>
                          Hello, this entire website frontend UI was designed using Material-UI. It's a framework i enjoy using when working with React. Here nothing too fancy but just the basics and a little more, Пока!
                      </Typography>
                      <div className={classes.button}>
                          <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                              <Button variant="contained" color="primary">
                                See my Photos
                              </Button>
                            </Grid>
                            <Grid item>
                              <Button variant="outlined" color="primary">
                                Secondary
                              </Button>
                            </Grid>
                          </Grid>
                      </div>
                  </Container>
                  
                  <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                            <CardMedia 
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title= 'image title'
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5">
                                  Heading
                                </Typography>
                                <Typography >
                                    This is a media card that can be used to describe the content of your media
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View </Button>
                                <Button size="small" color="primary">Edit </Button>
                            </CardActions>
                          </Card>
                      </Grid>
                    ))}
                    </Grid>
                  </Container>

              </div>
          </main>
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary"> Udokwu Ugochukwu </Typography>
          </footer>
        </>
    )
}


export default App;