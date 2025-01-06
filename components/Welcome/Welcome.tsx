import React from 'react';
import { Text, Title } from '@mantine/core';
import { Features } from '@/components/Features/Features';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
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
          Monatliche Rassetreffen und gemeinsame Gassigänge mit unseren Shiba Inus im Umkreis von
          Düsseldorf.
        </Text>
        <Features />
      </main>
    </>
  );
}
