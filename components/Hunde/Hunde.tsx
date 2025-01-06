import {Container} from '@mantine/core';
import {AvatarGroup} from './AvatarGroup'

const DUMMY_DOGS = [
  {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    dogName: 'Momo',
    dogCity: 'Erkrath',
    instagramTag: 'kudamono_no_hanabi',
  },
  {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    dogName: 'Yuzu',
    dogCity: 'Erkrath',
    instagramTag: 'kudamono_no_hanabi',
  },
  {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    dogName: 'Hanabi',
    dogCity: 'Erkrath',
    instagramTag: 'kudamono_no_hanabi',
  },
];

export const Hunde = () => {
  return (
    <>
      <Container my="md">
        <h1>Unsere Hunde ({DUMMY_DOGS.length})</h1>
        <AvatarGroup dogs={DUMMY_DOGS} />
      </Container>
    </>
  );
};
