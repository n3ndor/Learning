import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Dashboard layout</h2>
      {children}
    </div>
  )
}