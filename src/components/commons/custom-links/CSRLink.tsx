"use client";

import React, { HTMLProps } from "react";
import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";

const CSRLink = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>) => {
  const { lng } = useParams();
  const parseHref = process.env.NEXT_PUBLIC_STATIC_URL
    ? `${process.env.NEXT_PUBLIC_STATIC_URL}/${lng}${href}`
    : "";

  return (
    <Link href={parseHref} {...props}>
      {children}
    </Link>
  );
};

export default CSRLink;
