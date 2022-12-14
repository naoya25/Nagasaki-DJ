import { UserInputData } from "./Content";
import { useForm, Controller } from "react-hook-form";
import { Grid, Button, TextField, MenuItem } from "@mui/material";
import React, { useContext } from "react";


function Basic(props) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            nameBox: "",
            emailBox: "",
            uniSelect: "",
            Course: "",
        },
    });
    const { currentState, setCurrentState } = useContext(UserInputData);
    const onSubmit = (data) => {
        props.handleNext();
        setCurrentState({...currentState, "Basic": data });
    };
    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="nameBox"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Name"
                                fullWidth
                                margin="normal"
                                placeholder="Enter your name"
                                required
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="emailBox"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                fullWidth
                                margin="normal"
                                placeholder='Enter your email'
                                required
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="uniSelect"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Grade"
                                fullWidth
                                margin="normal"
                                select
                                required
                            >
                                <MenuItem value="??????1???">??????1???</MenuItem>
                                <MenuItem value="??????2???">??????2???</MenuItem>
                                <MenuItem value="??????3???">??????3???</MenuItem>
                                <MenuItem value="??????4???">??????4???</MenuItem>
                                <MenuItem value="????????????????????????????????????">????????????????????????????????????</MenuItem>
                            </TextField>
                        )}
                    />
                    <Controller
                        control={control}
                        name="Course"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Course"
                                fullWidth
                                margin="normal"
                                select
                                required
                            >
                                <MenuItem value="?????????????????????">?????????????????????</MenuItem>
                                <MenuItem value="????????????">????????????</MenuItem>
                                <MenuItem value="????????????">????????????</MenuItem>
                                <MenuItem value="?????????">?????????</MenuItem>
                                <MenuItem value="????????????">????????????</MenuItem>
                                <MenuItem value="?????????">?????????</MenuItem>
                                <MenuItem value="?????????">?????????</MenuItem>
                                <MenuItem value="????????????????????????">????????????????????????</MenuItem>
                                <MenuItem value="?????????">?????????</MenuItem>
                                <MenuItem value="???????????????">???????????????</MenuItem>
                                <MenuItem value="????????????">????????????</MenuItem>
                                <MenuItem value="?????????">?????????</MenuItem>
                            </TextField>
                        )}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        ??????
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Basic
