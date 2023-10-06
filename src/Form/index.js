import { useRef, useState } from "react";
import { FormSection, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");

    };
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <FormSection onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
            />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </FormSection>
    );
};

export default Form;
