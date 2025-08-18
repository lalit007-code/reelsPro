"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

/*
- how will user sign-in
- showing sign-in data on header
- how to fetch value from session  - using useSession
 */

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      //TODO - toaster
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={handleSignOut}>SignOut</button>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
          <Link href={"/login"}>login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
