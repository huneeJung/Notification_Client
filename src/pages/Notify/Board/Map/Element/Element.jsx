import { useState } from 'react';
import { format } from 'date-fns';

function Element({notification}){
    const [expandedNotificationId, setExpandedNotificationId] = useState(null);
    const handleExpandClick = (notificationId) => {
        setExpandedNotificationId(notificationId === expandedNotificationId ? null : notificationId);
    };
    return (
        <>
            <tr key={notification.id} className={notification.topNotice ? 'top-notice-row' : ''}>
                <td>{notification.id}</td>
                <td>{notification.categoryName}</td>
                <td>{format(new Date(notification.createdAt), 'yyyy-MM-dd')}</td>
                <td className="notification-cell">
                    {notification.title}
                    <button
                        className="expand-button"
                        onClick={() => handleExpandClick(notification.id)}                    >
                        ▼
                    </button>
                </td>
            </tr>
            {expandedNotificationId === notification.id && (
                <tr key={`content-${notification.id}`}>
                    <td colSpan="4">{notification.content}</td>
                </tr>
            )}
        </>
    );
}

export default Element;