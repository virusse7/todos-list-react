import React from "react";
import TasksPage from './features/tasks';
import AuthorPage from "./features/author/AuthorPage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./Navigation";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTasks, toTask } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path={"/"}>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);
