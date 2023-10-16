import { toAuthor, toTasks } from "../routes";
import { StyledLi, StyledLink, StyledNav, StyledUl } from "./styled";

export default () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={toTasks()}>
                        Zadania
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={toAuthor()}>
                        O autorze
                    </StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
};

