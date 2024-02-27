'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function RootLayout({ children }) {
  const path = usePathname();
  console.log(path)
  return (
    <div>
       <h1>GLobal layout</h1>
          {children}
    </div>
  );
}
