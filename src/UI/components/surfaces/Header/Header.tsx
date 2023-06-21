import { Container, Divider, IconButton, MenuItem, MenuList, Toolbar } from "@mui/material";
import { HeaderAppBar, HeaderLogo, ButtonsContainer, HeaderDrawer } from "./Header.styled";
import Link from "UI/components/navigation/Link/Link";
import RoundedButtonStyled from "UI/components/inputs/RoundedButton/RoundedButton";
import { useState } from "react";
import useIsMobile from "data/hooks/useIsMobile";

const Header: React.FC = () => {
    const isMobile = useIsMobile();
    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}

export default Header;

const HeaderDesktop: React.FC = () => {
    return <HeaderAppBar>
        <Toolbar component={Container}>
            <Link href="/">
                <HeaderLogo src={"/img/logos/logo.svg"} alt="e-diaristas" />
            </Link>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <ButtonsContainer>
                <Link
                    Component={RoundedButtonStyled}
                    mui={{ color: "primary", variant: "contained" }}
                    href="/cadastro/diarista"
                >
                    Seja um(a) diarista
                </Link>
                <Link href="/login" Component={RoundedButtonStyled}>Login</Link>
            </ButtonsContainer>
        </Toolbar>
    </HeaderAppBar>
};

const HeaderMobile: React.FC = () => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
    return <HeaderAppBar>
        <Toolbar>
            <IconButton
                edge={"start"}
                color="inherit"
                onClick={() => SetIsDrawerOpen(true)}
            >
                <i className="twf-bars" />
            </IconButton>
            <Link href="/">
                <HeaderLogo src={"/img/logos/logo.svg"} alt="e-diaristas" />
            </Link>
            <HeaderDrawer
                open={isDrawerOpen}
                onClose={() => SetIsDrawerOpen(false)}
                onClick={() => SetIsDrawerOpen(false)}
            >
                <MenuList>
                    <Link href="/login" Component={MenuItem}>Login</Link>
                    <Divider />
                    <Link href="/login" Component={MenuItem}>Seja um(a) diarista</Link>
                </MenuList>
            </HeaderDrawer>
        </Toolbar>
    </HeaderAppBar>
}