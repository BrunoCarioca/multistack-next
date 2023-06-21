import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps, ButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import Router from 'next/router';

export interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
    Component?: React.ElementType;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
    children,
    href,
    mui,
    next,
    Component = MuiLink,
    ...props
}) => {
    const isNextEnv = Boolean(Router.router);

    return isNextEnv ? (
        <NextLink href={href} passHref {...next}>
            <Component {...mui} {...props}>
                {children}
            </Component>
        </NextLink>)
        : (
            <Component href={href} {...mui} {...props}>
                {children}
            </Component>
        );

};

export default Link;