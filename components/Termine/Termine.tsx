import {DateList} from '@/components/Termine/DateList';

const DUMMY_DATES = [
    {title: 'Shiba Walk 02/25', date: '10.02.2025', city: 'Düsseldorf', location: 'Grafenberger Wald', parking: 'Wanderparkplatz XY', maps: 'https://maps.app.goo.gl/x7NVSFsWA384zT5B9'},
    {title: 'Shiba Walk 01/25', date: '06.01.2025', city: 'Düsseldorf', location: 'Grafenberger Wald', parking: 'Wanderparkplatz XY', maps: 'https://maps.app.goo.gl/x7NVSFsWA384zT5B9'},
    {title: 'Shiba Walk 12/24', date: '12.12.2024', city: 'Hilden', location: 'Hildener Stadtwald', parking: 'Wanderparkplatz XY', maps: 'https://maps.app.goo.gl/x7NVSFsWA384zT5B9'},
    {title: 'Shiba Walk 11/24', date: '01.11.2024', city: 'Düsseldorf', location: 'Grafenberger Wald', parking: 'Wanderparkplatz XY', maps: 'https://maps.app.goo.gl/x7NVSFsWA384zT5B9'}
];

export const Termine = () => {
    return <>
        <h1>Termine</h1>
        <DateList dates={DUMMY_DATES} />
    </>
}