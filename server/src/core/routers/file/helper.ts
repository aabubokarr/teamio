import { env } from "@/env";
import { getContext } from "hono/context-storage";
import { deleteCookie, getSignedCookie, setSignedCookie } from "hono/cookie";

export function setSecurityFileCookie({
  id,
  key,
}: {
  id: string;
  key: string;
}) {
  return setSignedCookie(getContext(), `file_${id}`, key, env.APP_SECRET);
}

export function getSecurityFileCookie({ id }: { id: string }) {
  return getSignedCookie(getContext(), `file_${id}`, env.APP_SECRET);
}

export function deleteSecurityFileCookie({ id }: { id: string }) {
  return deleteCookie(getContext(), `file_${id}`);
}

export function getFileUrl({ key }: { key: string }) {
  return new URL(key, env.R2_ACCESS_URL).toString();
}
