


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function Notification() {
  const [feedback, setFeedback] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [newNotificationCount, setNewNotificationCount] = useState(0);

  useEffect(() => {
    socket.on('newNotification', (data) => {
      setFeedback((prevFeedback) => [{ id: Date.now(), data, seen: false }, ...prevFeedback]);
      setUnreadCount((prevCount) => prevCount + 1);
      setNewNotificationCount((prevCount) => prevCount + 1);
    });
    return () => {
      socket.off('newNotification');
    };
  }, []);

  const markAsSeen = (id) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((item) => {
        if (item.id === id) {
          return { ...item, seen: true };
        }
        return item;
      })
    );

    setUnreadCount((prevCount) => prevCount - 1);
  };

  const handleClear = () => {
    setFeedback([]);
    setUnreadCount(0);
  };

  const toggleNotifications = () => {
    setShowNotifications((prevValue) => !prevValue);
    setNewNotificationCount(0);
  };
  return (
    <div>
      <h1>Notification:</h1>
      {showNotifications ? (
        <div>
          <p>Unread notifications: {unreadCount}</p>
          {feedback.map((item) => (
            <div key={item.id}>
              <p>Feedback By: {item.data.feedbackBy}</p>
              <p>Feedback For: {item.data.feedbackFor}</p>
              <p>Feedback Message: {item.data.feedbackMessage}</p>
              <p>Date: {item.data.date}</p>
              <p>Rating: {item.data.rating}</p>
              {!item.seen && <button onClick={() => markAsSeen(item.id)}>Mark as seen</button>}
            </div>
          ))}

          <button onClick={handleClear}>Clear Feedback</button>
        </div>
      ) : (
        <button onClick={toggleNotifications}>
          <FontAwesomeIcon icon={faBell} />
          {newNotificationCount > 0 && `(${newNotificationCount})`}
        </button>
      )}
    </div>
  );
}

export default Notification;




