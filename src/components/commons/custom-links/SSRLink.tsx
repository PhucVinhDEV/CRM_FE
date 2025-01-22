import React, { HTMLProps } from "react";
import { headers } from "next/headers";
import Link, { LinkProps } from "next/link";
import { HEADER_CURR_LANG_KEY } from "@/constants/common";

const SSRLink = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>) => {
  const headerReqLangKey = headers().get(HEADER_CURR_LANG_KEY);
  const defaultLng = headerReqLangKey?.slice(1, 3);
  const parseHref = process.env.NEXT_PUBLIC_STATIC_URL
    ? `${process.env.NEXT_PUBLIC_STATIC_URL}/${defaultLng}${href}`
    : "";

  return (
    <Link href={parseHref} {...props}>
      {children}
    </Link>
  );
};

export default SSRLink;
