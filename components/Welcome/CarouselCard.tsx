import {Paper} from '@mantine/core';
import classes from './CarouselCard.module.css';

interface CardProps {
    image: string;
    title: string;
}

export function CarouselCard({ image }: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        />
    );
}