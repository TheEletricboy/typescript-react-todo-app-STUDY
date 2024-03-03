import { type FC, type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      {children}
      <img {...image} />
    </header>
  );
};

export default Header;
