import React from 'react';
import Element from './Element/Element';

const Map = ({notifications}) => {
    return (
        <tbody>
            {
                notifications.map(notification =>{
                    return (
                        <Element key={notification.id} notification={notification} />
                    )
                })
            }
        </tbody>
    );
};

export default Map;