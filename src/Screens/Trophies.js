import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Trophies = () => {
  const [user, setUser] = useState();
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data() })));
      //  console.log("Data",user.name)
    };
    getUsers();
  }, []);

  return (
    <div>
      {user?.map((item, index) => {
        return (
          <div>
            {item.name}
            {item.email}
            {item.skill1}
            {item.skill2}
            {item.skill3}
          </div>
        );
      })}
    </div>
  );
};

export default Trophies;
