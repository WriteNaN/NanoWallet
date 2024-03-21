import { type ReactNode } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const intervalMS = 10 * 1000;

export default function Layout({ children }: { children: ReactNode }) {
  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          console.log("checking for new version...");
          r.update();
        }, intervalMS);
    },
  });
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
