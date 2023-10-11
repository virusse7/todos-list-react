import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { FormSection, Button, Input } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    const trimmedNewTaskContent = newTaskContent.trim();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (trimmedNewTaskContent === "") {
            return;
        };

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormSection onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormSection>
    );
};

export default Form;
