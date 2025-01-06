import { Anchor, Container } from '@mantine/core';

export const Routen = () => {
  return (
    <>
      <Container my="md">
        <h1>Routen</h1>
        <div>
          <h3>Parkplatz Grafenberger Wald</h3>
          <iframe
            title="parking grafenberg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.8819621832997!2d6.83661092578634!3d51.25532034521988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c91580fbe9fb%3A0xfbf69b7545e9b28f!2sParkplatz%2C%2040472%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1736152430117!5m2!1sde!2sde"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <Anchor href="https://maps.app.goo.gl/c1ttwpe4eVkwcBUT9">
            <h3>Route Grafenberger Wald</h3>
          </Anchor>
        </div>
      </Container>
    </>
  );
};
