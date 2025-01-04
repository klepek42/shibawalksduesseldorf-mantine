import { IconBrandInstagram } from '@tabler/icons-react';
import {ActionIcon, Anchor, Container, Group} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <MantineLogo size={28} />
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                        <Anchor c="dimmed"
                                key='kudamono_no_hanabi'
                                href='https://www.instagram.com/kudamono_no_hanabi/?next=%2Fsecretmoonxo%2Ftagged%2F&locale=de&hl=am-et'
                                lh={1}
                                onClick={(event) => event.preventDefault()}
                                size="sm" />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}