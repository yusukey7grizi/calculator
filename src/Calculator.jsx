import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "7%",
    margin: "auto",
    width: "375px",
    textAlign: "center",
    height: "450px",
    backgroundColor: "#AFEEEE",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
  },
  result: {
    height: "45px",
    fontFamily: "'Righteous', cursive",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    width: "74%",
    textAlign: "right",
    margin: "auto",
    color: "black",
  },
  buttonContainer: { width: "90%", margin: "auto", marginTop: "-10px" },

  ClearEqual: {
    letterSpacing: "2px",
    margin: "5px",
    width: "138px",
    height: "50px",
  },
  numberButton: {
    margin: "5px",
    width: "50px",
    height: "50px",
  },
  calculation: {
    height: "50px",
    margin: "5px",
    width: "50px",
  },
}));
const Calculator = () => {
  const classes = useStyles();
  const [Result, setResult] = useState("");
  const ClearHandler = () => {
    setResult("");
  };
  const BackspaceHandler = () => {
    setResult(Result.slice(0, Result.length - 1));
  };
  const onClickHandler = (e) => {
    if ((Result === "Error") | (Result === "0")) {
      setResult(e.currentTarget.name);
    } else if (Result.length >= 14) {
      return false;
    } else {
      setResult(Result.concat(e.currentTarget.name));
    }
  };
  const Calculator = () => {
    try {
      const value = eval(Result).toString();

      setResult(value);
    } catch {
      setResult("Error");
    }
  };

  return (
    <Grid className={classes.wrapper}>
      {" "}
      <Typography
        style={{
          fontSize: Result.length > 14 ? "25px" : "30px",
        }}
        className={classes.result}
      >
        {Result ? Result : "0"}
      </Typography>
      <Grid className={classes.buttonContainer}>
        {" "}
        <Grid className={classes.rowDivider}>
          {" "}
          <Button
            className={classes.ClearEqual}
            onClick={ClearHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            Clear
          </Button>
          <Button
            className={classes.calculation}
            onClick={BackspaceHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            C
          </Button>
          <Button
            className={classes.calculation}
            name="/"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            ÷
          </Button>
        </Grid>{" "}
        <Grid className={classes.rowDivider}>
          {" "}
          <Button
            className={classes.numberButton}
            name="7"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            7
          </Button>
          <Button
            className={classes.numberButton}
            name="8"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            8
          </Button>
          <Button
            className={classes.numberButton}
            name="9"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            9
          </Button>
          <Button
            className={classes.calculation}
            name="*"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            ×
          </Button>
        </Grid>{" "}
        <Grid className={classes.rowDivider}>
          {" "}
          <Button
            className={classes.numberButton}
            name="4"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            4
          </Button>
          <Button
            className={classes.numberButton}
            name="5"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            5
          </Button>
          <Button
            className={classes.numberButton}
            name="6"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            6
          </Button>
          <Button
            className={classes.calculation}
            name="-"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            -
          </Button>
        </Grid>{" "}
        <Grid className={classes.rowDivider}>
          {" "}
          <Button
            className={classes.numberButton}
            name="3"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            3
          </Button>
          <Button
            className={classes.numberButton}
            name="2"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            2
          </Button>
          <Button
            className={classes.numberButton}
            name="1"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            1
          </Button>
          <Button
            className={classes.calculation}
            name="+"
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            +
          </Button>
        </Grid>{" "}
        <Grid className={classes.rowDivider}>
          {" "}
          <Button
            className={classes.numberButton}
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
            name="0"
          >
            0
          </Button>
          <Button
            className={classes.numberButton}
            name="."
            onClick={onClickHandler}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            .
          </Button>
          <Button
            className={classes.ClearEqual}
            onClick={Calculator}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
