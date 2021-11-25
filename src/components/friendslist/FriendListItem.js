import React from "react";
import styles from "./FriendsList.module.css";

const FriendsListItem = ({ isOnline, avatar, name }) => {
  const online = isOnline ? styles.online : styles.notOnline;
  return (
    <li className={styles.item}>
      <span className={online}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;
