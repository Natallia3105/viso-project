import { PropsWithChildren } from 'react';
import Header from "./Header.tsx";

const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col h-full pt-7">{props.children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
