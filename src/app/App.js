import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const Blog = lazy(() => import("../pages/Blog"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Suspense fallback={null}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/resume" component={Resume} />
                <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    );
};
