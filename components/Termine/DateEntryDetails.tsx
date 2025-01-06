import { Card } from '@mantine/core';
import {ImagesSection} from '@/components/Termine/ImagesSection';

interface DateEntry {
  title: string;
  date: string;
  city: string;
  location: string;
  parking: string;
  maps: string;
}

interface Props {
  date: DateEntry;
}

export const DateEntryDetails = ({ date }: Props) => {
  return (
    <div>
      <Card shadow="sm" padding="xl" component="a">
        {date.title}
        <p>{date.date}</p>
        <p>{date.location} ({date.city})</p>
        <p>Parkplatz: {date.parking}</p>
        <a className='text-blue-600' href={date.maps}>Standort</a>
        <ImagesSection images={['0125_01.jpg', '0125_02.jpg']} />
      </Card>
    </div>
  );
};
