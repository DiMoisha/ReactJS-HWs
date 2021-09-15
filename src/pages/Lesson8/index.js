import React, { useCallback, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { gistsConnect } from "../../connects/gists";
import Box from "@material-ui/core/Box";

export const Lesson8Render = ({gists, error, isloading, classes,  getAllGists}) => {
    const requestGists = () => {
        getAllGists();
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (isloading) {
        return (
            <Box component="main" className={ classes.appContent } >
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return (
            <Box component="main" className={ classes.appContent } >
                <h3>Ошибка получения данных через API</h3>
                <button onClick={requestGists}>Получить заново</button>
            </Box>
        );
    }

    return (
        <Box component="main" className={ classes.appContent } >
            <h2>Данные, полученные через API</h2>
            <div>
                <ul>{gists.map(renderGist)}</ul>
            </div>
        </Box>
    );
}

export const Lesson8 = gistsConnect(Lesson8Render);