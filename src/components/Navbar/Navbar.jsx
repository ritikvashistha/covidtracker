import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import styles from "./Navbar.module.css";
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Coronavirus Tracker App</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box>
          {/* <Typography> */}{" "}
          <div className={styles.sp}>
            <b>
              Protect yourself and others around you by knowing the facts and
              taking appropriate precautions. Follow advice provided by your
              local public health agency. To prevent the spread of COVID-19:
            </b>
          </div>
          <ul>
            <li>
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
            </li>
            <li>
              {" "}
              Maintain a safe distance from anyone who is coughing or sneezing.
              Don’t touch your eyes, nose or mouth.
            </li>
            <li>
              {" "}
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </li>
            <li> Stay home if you feel unwell.</li>
            <li>
              If you have a fever, a cough and difficulty breathing, seek
              medical attention. Call in advance.
            </li>
          </ul>
          Follow the directions of your local health authority. Avoiding
          unneeded visits to medical facilities allows healthcare systems to
          operate more effectively, therefore protecting you and others.
          {/* </Typography> */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
