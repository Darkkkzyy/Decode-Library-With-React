import { type AppType } from "next/dist/shared/lib/utils";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
};

export default MyApp;
