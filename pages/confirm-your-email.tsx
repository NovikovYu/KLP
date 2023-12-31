import Head from 'next/head';
import { Container, useTheme } from '@mui/material';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function ConfirmYourEmail() {
  const theme = useTheme();

  return (
    <MainBox>
      <Head>
        <title>Lintu - сonfirm Email page</title>
      </Head>

      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/checking-info.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'Confirm your email'}
          mainText={`We sent an email to ${'mymailverylongnameforexample@mail.com'}
              Until you confirm the email, you will not be able to use some of the functionality of the platform`}
          buttonText={"OK, I'll confirm"}
          buttonLink={'/portfolios'}
        />
      </Container>
    </MainBox>
  );
}
