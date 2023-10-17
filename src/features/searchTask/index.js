
import { StyledInput, Div } from "./styled";
import { useReplaceQueryParameter, useQueryParameter } from "../queryParameters";



export const SearchContainer = () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();


    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "szukaj",
            value: target.value.trim() !== "" ? target.value : undefined,
        })
    };

    return (
        <Div>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Div>
    )
}