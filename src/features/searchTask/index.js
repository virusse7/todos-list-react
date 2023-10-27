import { Wrapper } from "./styled";
import { Input } from "../tasks/TasksPage/Form/styled";
import { useReplaceQueryParameter, useQueryParameter } from "../queryParameters";

export const SearchContainer = () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "szukaj",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};