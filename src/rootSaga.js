import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/task/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}