import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ChatInputFormTestIds = {
    submit: 'ChatInputForm-submit',
    titleField: 'ChatInputForm-titleField',
}

export const ChatInputForm = ({ error, handleSubmit, getFieldValue, handleChangeName }) => {
    return (
        <>
            <Typography component="h3"
                style={{ padding: '10px 20px', }}
                variant="h6"
                color="inherit"
                noWrap
                className=""
            >
                Новый чат:
            </Typography>
            <form onSubmit={ handleSubmit } noValidate autoComplete="off" style={{ margin: '0 10px', }}>
                <div>
                    <TextField
                        data-testid={ ChatInputFormTestIds.titleField }
                        style={{ margin: '10px 0', }}
                        label="Введите имя чата:"
                        value={ getFieldValue('title') }
                        name='title'
                        onChange={ handleChangeName }
                        variant="outlined"
                        size="small"
                    />
                </div>
                <div>
                    { error && <p>{ error.toString() }</p> }
                    <Button
                            data-testid={ ChatInputFormTestIds.submit }
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginBottom: '20px', }}>
                        Добавить
                    </Button>
                </div>
            </form>
        </>
    );
}