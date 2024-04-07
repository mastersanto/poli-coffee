import { ReactNode } from "react";

import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
