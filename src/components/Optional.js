import React, { useContext } from "react";
import { UserInputData } from "./Content";
import { useForm, Controller } from "react-hook-form";
import { Grid, TextField, Button, Tooltip } from '@mui/material';

function Optional(props) {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      multilineText: "",
    },
  });
  const { currentState, setCurrentState } = useContext(UserInputData);
  const onSubmit = (action) => {
    if(action === 'back') {
      props.handleBack();
    } else {
      props.handleNext();
    }
    const data = getValues();
    setCurrentState({...currentState, "Optional": data });
  };
  return (
    <Grid container>
      <Grid sm={2}/>
      <Grid lg={8} sm={8} spacing={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="multilineText"
            render={({ field }) => (
              <Tooltip title="お問合せ内容をご記入ください" placement="top-start" arrow>
                <TextField
                  {...field}
                  label="Details"
                  fullWidth
                  margin="normal"
                  rows={4}
                  multiline
                  variant="outlined"
                  placeholder="Please enter your inquiry"
                  required
                />
              </Tooltip>
            )}
          />
          <Button variant="contained" color="primary" onClick={() => onSubmit("back")}>戻る</Button>
          <Button variant="contained" color="primary" type="submit">次へ</Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Optional
