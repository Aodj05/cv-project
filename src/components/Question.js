import React, { useEffect, useContext } from "react";
import { Button, TextField, LinearProgress, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Question from "./Question";
import AppContext from "../AppCOntext";
import Resume form "./Resume";
import { ArrowRight } from "material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
    },
    progressBar: {
        margin: "1rem",
    },
    question: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
    },
    question: {},
    buttonContainer: {
        display: "block",
        marginTop: "1rem",
    },
    button: {
        background: "white",
    },
}));

function LinearProgressWithLabel(props) {
    return(
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" {...props} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">
        {`${Math.round(
              props.value
            )}%`}</Typography>
        </Box>
    </Box>
    );
}

function Questions() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    const value = useContext(AppContext);
    let { questionAnswer } = value.state;
    console.log(answers.length, questions.length);

    let { handleChangeInput, nextQuestion } = value.function;

    useEffect(() => {
        setProgress(
              (answers.length / questions.length) * 100
                ? (answers.length / questions/length) * 100
                : 0
            );
    }, [answers]);
    return(
          <div>
          {questions.length !== answers.length ? (
              <LinearProgressWithLabel
                value={progress}
                className={classes.progressBar}
            />
            ) : null}
            <div className={classes.root}>
              {questions.length === answers.length ? (
                  <Resume />
                ) : (
                  <div className={classes.question}>
                    <Question question={questionAnswer.question} />
                  </div>
                )}
            </div>
            <form noValidate autoComplete="on" onSubmit={nextQuestion}>
              <TextField
                id="standard-basic"
                label={questionAnswer.question}
                name={questionAnswer.resumeFeildId}
                value={questionAnswer.answer ? questionAnswer.answer : ""}
                onChange={handleChangeInput}
                />
                <div className={classes.buttonContainer}>
                  <Button
                    <type="submit"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<ArrowRight />}
                    >
                      Next
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Questions;