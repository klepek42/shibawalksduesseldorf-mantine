import React, { useState } from 'react';
import { Anchor, Burger, Container, Group, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import classes from './Welcome.module.css';
import {FooterSocial} from '@/components/Footer/FooterSocial';
import {Features} from '@/components/Features/Features';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/dates', label: 'Termine' },
  { link: '/rules', label: 'Regeln' },
  { link: '/photos', label: 'Fotos' },
  { link: '/routes', label: 'Routen' },
  { link: '/dogs', label: 'Hunde' },
];

export function Welcome() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <MantineLogo size={28} />
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <ColorSchemeToggle />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <main>
        <Title className={classes.title} ta="center" mt={100}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Shibawalks
          </Text>{' '}
          Düsseldorf
        </Title>
        <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
          Monatliche Rassetreffen und gemeinsame Gassigänge mit unseren Shiba Inus
          im Umkreis von Düsseldorf.
        </Text>
        <Features />
      </main>
      <FooterSocial />
    </>
  );
}
