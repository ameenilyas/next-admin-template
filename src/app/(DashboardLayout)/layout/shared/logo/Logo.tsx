import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled className="flex items-center" href="/">
      <Image
        src="/images/logos/KHAIRYAT.png"
        alt="logo"
        height={70}
        width={70}
        priority
      />
      <span className="text-xl font-bold">KHAIRIAT</span>
    </LinkStyled>
  );
};

export default Logo;
