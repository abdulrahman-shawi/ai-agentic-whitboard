"use client";
import React, { use, useEffect } from "react";
import axios from "axios";
import { UserDetailContent } from "@/context/userDetaisContent";

function Provider({ children }: { children: React.ReactNode }) {

  const [userDetails, setUserDetails] = React.useState<any>(null);

  useEffect(() => {
    CreatNewUser();
  }, []);
  const CreatNewUser = async () => {
    const result = await axios.post("/api/users");
    setUserDetails(result.data);
  };

  return (
    <UserDetailContent.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>
    </UserDetailContent.Provider>
  );
}
export default Provider;
