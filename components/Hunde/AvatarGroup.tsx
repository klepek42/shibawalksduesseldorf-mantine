import { Group } from '@mantine/core';
import {AvatarItem} from '@/components/Hunde/Avatar';

interface Avatar {
  image: string;
  dogName: string;
  dogCity: string;
  instagramTag: string;
}

interface Props {
  dogs: Avatar[];
}

export const AvatarGroup = ({ dogs }: Props) => {
  return (
    <>
      <Group>
        {dogs.map((dog) => (
          <AvatarItem image={dog.image} dogName={dog.dogName} dogCity={dog.dogCity} instagramTag={dog.instagramTag} />
        ))}
      </Group>
    </>
  );
};
