import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ChatInputForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        onSubmit(name);
        setName('');
        event.preventDefault();
    }

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
            <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{ margin: '0 10px', }}>
                <div>
                    <TextField
                        style={{ margin: '10px 0', }}
                        label="Введите имя чата:"
                        value={name}
                        onChange={handleChangeName}
                        variant="outlined"
                        size="small"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '20px', }}>
                    Добавить
                </Button>
            </form>
        </>
    );
}
