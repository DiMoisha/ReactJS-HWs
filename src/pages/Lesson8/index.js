import React, { useCallback, useEffect } from "react";
import {CircularProgress} from "@material-ui/core";
import { gistsConnect } from "../../connects/gists";

export const Lesson8Render = ({gists, error, isloading, getAllGists}) => {
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
        return <CircularProgress/>;
    }

    if (error) {
        return (
            <div>
                <h3>Ошибка получения данных через API</h3>
                <button onClick={requestGists}>Получить заново</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Данные, полученные через API</h2>
            <div>
                <ul>{gists.map(renderGist)}</ul>
            </div>
        </div>
    );
}

export const Lesson8 = gistsConnect(Lesson8Render);