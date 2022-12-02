import Grid from '@mui/material/Grid';
import React, { useContext, useState } from "react";
import { UserInputData } from "./Content";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { useTheme } from '@mui/material/styles';

var item = {
    'nameBox': '名前',
    'emailBox': 'メールアドレス',
    'uniSelect': '学年',
    'Course': '学部',
    'multilineText': 'お問合せ内容'
}

function Confirm(props) {
    const { currentState } = useContext(UserInputData);
    const [dialogTitle,setDialogTitle] = useState("")
    const [dialogText,setDialogText] = useState("")
    const onSubmit = () => {
        const template_param = {
            to_name: currentState.Basic.nameBox,
            to_email: currentState.Basic.emailBox,
            message: currentState.Optional.multilineText,
            grade: currentState.Basic.uniSelect,
            course: currentState.Basic.Course
        };
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLETE_ID, template_param, process.env.REACT_APP_MY_KEY).then((result) => {
            console.log(result.text);
            setDialogTitle("お問合せ内容を受け付けました。登録したメールアドレスをご確認ください。")
            handleClickOpen()
        }, (error) => {
            console.log(error.text);
            setDialogTitle("エラーが発生しました。内容をが確認ください。")
            setDialogText(error.text)
            handleClickOpen()
        });
    };
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const inputDataLists = [];
    var id = 0;
    for ( var k in currentState) {
        for ( var v in currentState[k]) {
            var value = ''
            if (currentState[k][v] === '') {
                value = '未入力';
            } else {
                value = currentState[k][v];
            }
            inputDataLists.push(
                {
                    "id": id,
                    "name": item[v],
                    "value": value
                }
            );
            id++;
        }
    }
    return (
        <>
            <Grid container>
                <TableContainer component={Paper}>
                    <Table aria-label="a dense table">
                        <TableBody>
                            {
                                inputDataLists.map(function(elem) {
                                    return (
                                        <TableRow key={elem.id}>
                                            <TableCell align="center">{elem.name}</TableCell>
                                            { elem.value ? <TableCell align="center">{elem.value}</TableCell> : <TableCell>None</TableCell> }
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" color="primary" onClick={props.handleBack}>
                    戻る
                </Button>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    送信
                </Button>
            </Grid>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>{dialogText}</p><br />
                        <p>名前: {currentState.Basic.nameBox}</p>
                        <p>メールアドレス: {currentState.Basic.emailBox}</p>
                        <p>お問合せ内容: {currentState.Optional.multilineText}</p>
                        <p>学年: {currentState.Basic.uniSelect}</p>
                        <p>学科: {currentState.Basic.Course}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Confirm
