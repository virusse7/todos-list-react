import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/task/tasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ])
}