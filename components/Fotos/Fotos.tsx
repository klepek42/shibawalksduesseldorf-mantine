import { Container, Grid, SimpleGrid } from '@mantine/core';
import Image from 'next/image';

export const Fotos = () => {
  return (
    <>
      <Container my="md">
        <h1>Fotos</h1>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Grid gutter="md">
            <Grid.Col span={12}>
              <Image
                  className='mr-4'
                  src='/images/0125_01.JPG'
                  height={400}
                  width={600}
                  alt='Shiba'
              />
              <Image
                  className='mr-4'
                  src='/images/0125_02.JPG'
                  height={400}
                  width={600}
                  alt='Shiba'
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </>
  );
};
