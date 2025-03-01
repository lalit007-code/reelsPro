import { Connection } from "mongoose";

declare global {
  var global: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

export {};
