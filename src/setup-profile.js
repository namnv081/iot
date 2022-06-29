import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroller";
import markdownit from "markdown-it";
import { FormattedMessage } from "react-intl";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import Store from "./storage/store";
import { AuthContextProvider } from "./react-components/auth/AuthContext";

const store = new Store();
window.APP = { store };

import registerTelemetry from "./telemetry";
import "./react-components/styles/global.scss";
import "./assets/stylesheets/whats-new.scss";
import { PageContainer } from "./react-components/layout/PageContainer";
import { Spinner } from "./react-components/misc/Spinner";
import { ThemeProvider } from "./react-components/styles/theme";
import SetupProfile from "./react-components/SetupProfile";
registerTelemetry("/setup-profile", "Hubs Setup Profile");

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(
    <WrappedIntlProvider>
      <ThemeProvider store={store}>
        <AuthContextProvider store={store}>
          {/* <WhatsNew />
           */}
          {/* 123 */}
          <SetupProfile />
        </AuthContextProvider>
      </ThemeProvider>
    </WrappedIntlProvider>,
    document.getElementById("ui-root")
  );
});
