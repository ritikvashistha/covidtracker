import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  //StylesProvider
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected, styles.containers)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19{" "}
            </Typography>
            <CardContent className={styles.overlay}>
              <Typography variant="body2" className={styles.text}>
                StayHome
              </Typography>
            </CardContent>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered, styles.containers)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries cases of COVID-19{" "}
            </Typography>
            <CardContent className={styles.overlay}>
              <Typography variant="body2" className={styles.text}>
                Immunity wins
              </Typography>
            </CardContent>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths, styles.containers)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19{" "}
            </Typography>
            <CardContent className={styles.overlay}>
              <Typography variant="body2" className={styles.text}>
                StaySafe
              </Typography>
            </CardContent>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
