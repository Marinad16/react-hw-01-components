import React from "react";
import FriendsListItem from "./FriendListItem";
import styles from "./FriendsList.module.css"

const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((element) => (
        <FriendsListItem key={element.id} {...element} />
      ))}
    </ul>
  );
};

export default Friends;
