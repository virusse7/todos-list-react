import { toAuthor, toTasks } from "../routes";
import { StyledLi, StyledLink, StyledNav, StyledUl } from "./styled";

export default () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={"/zadania"}>
                        Zadania
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={"/autor"}>
                        O autorze
                    </StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
};

