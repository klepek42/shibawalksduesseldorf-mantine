import {Card, Text} from '@mantine/core';

interface DateEntry {
    title: string,
    date: string,
    city: string,
    location: string,
    parking: string,
    maps: string
}

interface Props {
    date: DateEntry
}

export const DateEntry = ({date}:Props) => {
    const today = new Date();
    const entryDate = new Date('06.01.2025')
    const dateExpired = entryDate < today

    return <div>
        <Card
            shadow="sm"
            padding="xl"
            component="a"
            radius="md"
            withBorder
        >
            <Text fw={500} size="lg" mt="md" color={`${dateExpired ? 'grey' : 'black'}`}>
                {date.title} am {date.date} in {date.city}
            </Text>
        </Card>
    </div>
}