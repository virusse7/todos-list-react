import React from "react";
import TasksPage from './features/tasks';
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./Navigation";
import TaskPage from "./features/tasks/TaskPage";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={"/zadania/:id"}>
                <TaskPage />
            </Route>
            <Route path={"/zadania"}>
                <TasksPage />
            </Route>
            <Route path={"/autor"}>
                <AuthorPage />
            </Route>
            <Route path={"/"}>
                <Redirect to={"/zadania"} />
            </Route>
        </Switch>
    </HashRouter>

)
