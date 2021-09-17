import React from 'react';
import PropTypes from 'prop-types';

export const Message = (props) => {
    return (
        <div className={ props.classes.msgItem } id={ `msgitem-${props.id}` }>
            <p className={ props.classes.msgItemTop }>
                <span className={ props.classes.msgItemDat }>{ props.dat }</span>
                <span className={ props.classes.msgItemAuthor }>{ props.author }</span>
            </p>
            <p className={ props.classes.msgItemText }>
                { props.text }
            </p>
        </div>
    );
}

Message.propTypes = {
    id: PropTypes.string.isRequired,
    dat: PropTypes.string.isRequired,
    author: PropTypes.string,
    text: PropTypes.string
}