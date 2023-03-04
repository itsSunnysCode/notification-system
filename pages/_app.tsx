/*components */
import dynamic from "next/dynamic";

/*types */
import type { AppProps } from "next/app";
import "~/styles/global.css";
/*contexts */
import { UserProvider } from "~/globals/UserContext";


const Header = dynamic(() => import("~/components/Header"), {
  ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  );
}
