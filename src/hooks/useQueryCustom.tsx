import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type HookType = [
  pushQueryFunc: (
    {
      name,
      value,
    }: {
      name: string;
      value?: string;
    },
    deleteArr?: Array<string>,
    scroll?: boolean,
    isChangedOnly?: boolean,
  ) => void,
  paramsObj: { [key: string]: string },
];

export const useQueryCustom = (): HookType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const paramsObject = useMemo(() => {
    return Object.fromEntries(searchParams.entries()) || {};
  }, [searchParams]);

  const pushQuery = useCallback(
    (
      { name, value }: { name: string; value?: string },
      deleteArr?: Array<string>,
      scroll?: boolean,
      isChangedOnly?: boolean,
    ) => {
      if (!name) return;
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value.toString());
      } else {
        params.delete(name);
      }
      if (Array.isArray(deleteArr)) {
        deleteArr.forEach((item) => {
          params.delete(item);
        });
      }
      if (isChangedOnly) {
        window.history.pushState({}, "", `${pathname}?${params.toString()}`);
      } else {
        replace(`${pathname}?${params.toString()}`, { scroll });
      }
    },
    [searchParams],
  );

  return [pushQuery, paramsObject];
};
