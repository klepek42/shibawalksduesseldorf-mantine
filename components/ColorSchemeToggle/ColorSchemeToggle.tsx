import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import cx from 'clsx';
import classes from './ColorScheme.module.css';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
        onClick={() => toggleColorScheme()}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
    >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
