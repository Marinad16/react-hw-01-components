import React from "react";
import Profile from "./profile/Profile";
import Statistics from "./statictics/Statistics";
import Friends from "./friendslist/FriendsList";
import TransactionHistory from "./transaction/TransactionHistory";

import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />,
      <Friends friends={friends} />
      <Statistics title="Upload stats" stats={data} />,
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
