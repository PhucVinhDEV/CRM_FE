import { useParams, useRouter } from "next/navigation";

const useRouterWithLng = () => {
  const { lng } = useParams();
  const router = useRouter();

  const push = (
    link: string,
    query?: { [key: string]: string } | undefined,
    reload?: boolean,
    scroll?: boolean,
  ) => {
    const parseLink = process.env.NEXT_PUBLIC_STATIC_URL
      ? `${process.env.NEXT_PUBLIC_STATIC_URL}/${lng}${link}`
      : "";
    const queryString = query
      ? `?${new URLSearchParams(query).toString()}`
      : "";

    if (reload) {
      window.location.replace(`${parseLink}${queryString}`);
    } else {
      router.push(`${parseLink}${queryString}`, { scroll });
    }
  };

  return push;
};

export default useRouterWithLng;
