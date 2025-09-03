// "use client";

import React from "react";
import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu, Play } from "lucide-react";

/*
- how will user sign-in
- showing sign-in data on header
- how to fetch value from session  - using useSession
 */

const Header = () => {
  // const { data: session } = useSession();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut();
  //     //TODO - toaster
  //   } catch (error) {}
  // };

  return (
    // <div>
    //   <button onClick={handleSignOut}>SignOut</button>
    //   {session ? (
    //     <div>Welcome</div>
    //   ) : (
    //     <div>
    //       <Link href={"/login"}>login</Link>
    //     </div>
    //   )}
    // </div>

    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Play className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">ReelsView</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#explore"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Explore
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Get Started</Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
