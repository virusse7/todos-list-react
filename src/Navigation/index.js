import { toAuthor, toTasks } from "../routes";
import { StyledLi, StyledNavLink, StyledNav, StyledUl } from "./styled";

export default () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to={toTasks()}>
                        Zadania
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to={toAuthor()}>
                        O autorze
                    </StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

