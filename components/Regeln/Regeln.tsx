import {Container, Text} from '@mantine/core';
import React from 'react';

export const Regeln = () => {
  return (
    <>
      <Container my="md">
        <h1>Regeln</h1>
          <Text color="dimmed" size="lg" mx="auto" mt="xl" mb="xl">
              Einige Grundregeln für ein entspanntes Miteinander
          </Text>
          <Text size="lg">1. Kein ungefragter Hundekontakt</Text>
          <Text size="lg">2. Immer freundlich und respektvoll den anderen gegenüber agieren</Text>
          <Text size="lg">3. Es wird niemand ausgeschlossen, auch wenn ein Hund unverträglich ist</Text>
          <Text size="lg">4. Freilauf nur nach Rücksprache</Text>
          <Text size="lg">5. Bei Problemen oder Unstimmigkeiten bitte an die Organisatoren werden</Text>
          <Text size="lg">6. Einen fremden Hund nicht einfach anfassen oder füttern</Text>
          <Text size="lg">7. Falls doch etwas passiert, bitte Ruhe bewahren, Hunde trennen und weitermachen</Text>
          <Text size="lg">8. Falls jemand nicht fotografiert/gepostet werden will, bitte sofort Bescheid geben</Text>
          <Text size="lg">9. Spaß haben</Text>
      </Container>
    </>
  );
};
