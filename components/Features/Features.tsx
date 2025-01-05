import {
    IconBook,
    IconCamera, IconChecklist,
    IconDog,
    IconWalk
} from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Features.module.css';

export const MOCKDATA = [
    {
        icon: IconWalk,
        title: 'Gemeinsame Spaziergänge',
        description:
            'Entdecke neue Routen mit unseren Walks und freu dich auf gesprächige Spaziergänge.',
    },
    {
        icon: IconDog,
        title: 'Spiel und Spaß',
        description:
            'Je nach Route gibt es auch die Möglichkeit unsere Hunde im Freilauf toben zu lassen. Achtet nur bitte darauf, dass nur freundliche Hunde von der Leine gelassen werden.',
    },
    {
        icon: IconBook,
        title: 'Austausch und Erfahrungen',
        description:
            'Egal ob zur Erziehung, Gesundheit, Produkten, Dienstleistungen oder schönen Gassirouten. Es ist unglaublich wertvoll sich zu Erfahrungen und Tipps von anderen Hundebesitzern auszutauschen.',
    },
    {
        icon: IconCamera,
        title: 'Fotos',
        description:
            'Jeder ist eingeladen Fotos zu machen. Darüber hinaus gibt es auch Teilnehmer mit professionellem Equipment die gerne Bilder von uns und unseren Hunden machen und teilen. Es werden regelmäßig Gruppen- und Einzelbilder jeglicher Hunde gemacht.',
    },
    {
        icon: IconChecklist,
        title: 'Regeln',
        description:
            'Damit alles glatt läuft, haben wir ein minimales Set an Grundregeln aufgestellt. Bitte haltet euch an diese Regeln.',
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size={18} stroke={1.5} />
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function Features() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>Wieso solltest du vorbeikommen?</Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    Wir sind eine Gruppe von Shiba Inu Liebhabern und haben Spaß unsere Hunde miteinander interagieren zu lassen und uns über jegliche Themen zu unseren Hunden auszutauschen!
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}