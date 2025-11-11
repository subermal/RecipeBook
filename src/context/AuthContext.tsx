import { onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

type Ctx = { user: User|null; booted: boolean; logout: () => Promise<void>; };
export const AuthContext = createContext<Ctx>({ user: null, booted: false, logout: async () => {} });

export default function AuthProvider({ children }: {children: React.ReactNode}) {
  const [user, setUser] = useState<User|null>(null);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => { setUser(u ?? null); setBooted(true); });
    return () => unsub();
  }, []);

  const logout = async () => { await signOut(auth); };

  return <AuthContext.Provider value={{ user, booted, logout }}>{children}</AuthContext.Provider>;
}
