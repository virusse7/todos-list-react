import { useState } from "react";
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

    return (
        <FormSection onSubmit={onFormSubmit}>
            <Input
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
