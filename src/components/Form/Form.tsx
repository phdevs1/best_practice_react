import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppForm = ({ children }: Props) => {
  return (
    <form className="app-form">
      {children}
    </form>
  );
}