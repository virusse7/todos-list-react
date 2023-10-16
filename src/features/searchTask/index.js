import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { StyledInput, Div } from "./styled";



export const SearchContainer = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
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