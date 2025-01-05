import classes from '@/components/Welcome/Welcome.module.css';
import {Burger, Container, Group} from '@mantine/core';
import {MantineLogo} from '@mantinex/mantine-logo';
import {ColorSchemeToggle} from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import React, {useState} from 'react';
import {useDisclosure} from '@mantine/hooks';
import {useRouter} from 'next/router';

const links = [
    { link: '/', label: 'Home' },
    { link: '/termine', label: 'Termine' },
    { link: '/regeln', label: 'Regeln' },
    { link: '/fotos', label: 'Fotos' },
    { link: '/routen', label: 'Routen' },
    { link: '/hunde', label: 'Hunde' },
];

export const NavigationBar = () => {const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const router = useRouter()

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                router.push(link.link)
            }}
        >
            {link.label}
        </a>
    ));

    return (<header className={classes.header}>
        <Container size="md" className={classes.inner}>
            <MantineLogo size={28} />
            <Group gap={5} visibleFrom="xs">
                {items}
            </Group>
            <ColorSchemeToggle />

            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
    </header>)
}