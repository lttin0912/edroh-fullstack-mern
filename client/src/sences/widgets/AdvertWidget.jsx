import { Typography } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const { useTheme } = require('@emotion/react');

const AdvertWidget = () => {
  const { palette } = useTheme();
  const { dark, main, medium } = palette.neutral;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>Created Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='http://localhost:3001/assets/info4.jpeg'
        style={{
          borderRadius: '0.75rem',
          margin: '0.75rem 0',
        }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Your pathway to stunning and immaculate beauty and make sure your skin
        is exfoliating and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};
export default AdvertWidget;
