import { PropsWithChildren } from "react";
import Header from "./Header";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
