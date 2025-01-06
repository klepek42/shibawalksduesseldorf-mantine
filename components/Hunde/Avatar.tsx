import { IconBrandInstagram } from '@tabler/icons-react';
import { Avatar, Text } from '@mantine/core';

interface Props {
  image: string;
  dogName: string;
  dogCity: string;
  instagramTag: string;
}

export const AvatarItem = ({ image, dogName, dogCity, instagramTag }: Props) => {
  return (
    <>
      <Avatar src={image} radius='xl' />
      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          {dogName} aus {dogCity}
        </Text>
        <Text c="dimmed" size="xs">
          <IconBrandInstagram size={16} stroke={1.5} />
          {instagramTag}
        </Text>
      </div>
    </>
  );
};
