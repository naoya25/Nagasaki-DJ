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
                                <MenuItem value="大学1年">大学1年</MenuItem>
                                <MenuItem value="大学2年">大学2年</MenuItem>
                                <MenuItem value="大学3年">大学3年</MenuItem>
                                <MenuItem value="大学4年">大学4年</MenuItem>
                                <MenuItem value="その他、長崎大学ではない">その他、長崎大学ではない</MenuItem>
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
                                <MenuItem value="多文化社会学部">多文化社会学部</MenuItem>
                                <MenuItem value="教育学部">教育学部</MenuItem>
                                <MenuItem value="経済学部">経済学部</MenuItem>
                                <MenuItem value="医学部">医学部</MenuItem>
                                <MenuItem value="保健学科">保健学科</MenuItem>
                                <MenuItem value="歯学部">歯学部</MenuItem>
                                <MenuItem value="薬学部">薬学部</MenuItem>
                                <MenuItem value="情報データ科学部">情報データ科学部</MenuItem>
                                <MenuItem value="工学部">工学部</MenuItem>
                                <MenuItem value="環境科学部">環境科学部</MenuItem>
                                <MenuItem value="水産学部">水産学部</MenuItem>
                                <MenuItem value="その他">その他</MenuItem>
                            </TextField>
                        )}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        次へ
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Basic
