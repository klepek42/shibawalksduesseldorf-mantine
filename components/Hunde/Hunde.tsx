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
        <h1>Unsere Hunde</h1>
        <AvatarGroup dogs={DUMMY_DOGS} />


        {/*<Group>*/}
        {/*  <Avatar*/}
        {/*    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"*/}
        {/*    radius="xl"*/}
        {/*  />*/}
        {/*  <div style={{ flex: 1 }}>*/}
        {/*    <Text size="sm" fw={500}>*/}
        {/*      Momo aus Erkrath*/}
        {/*    </Text>*/}
        {/*    <Text c="dimmed" size="xs">*/}
        {/*      <IconBrandInstagram size={16} stroke={1.5} />*/}
        {/*      kudamono_no_hanabi*/}
        {/*    </Text>*/}
        {/*  </div>*/}
        {/*</Group>*/}
      </Container>
    </>
  );
};
