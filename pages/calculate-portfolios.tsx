import Head from 'next/head';
import * as React from 'react';
import { Container, useTheme } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function СalculatePortfolios() {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>Lintu</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* закладка - убрал component="main" */}
      <MainBox>
        <Container
          sx={{ maxWidth: theme.breakpoints.values.containersMd }}
          maxWidth={false}
        >
          {/* закладка - убрал component="main" */}
          {/* <InfoPageContent
            imgSrc={'/calculate-portfolios.png'}
            imgAlt={'our analytic is calculates the best portfolios'}
            titleText={'Сalculate the best portfolios'}
            mainText={"Wait a few minutes. It's worth it"}
          /> */}
          <InfoPageContent
            imgSrc={'/calculate-portfolios.png'}
            imgAlt={'our analytic is calculates the best portfolios'}
            titleText={'Сalculate the best portfolios'}
            mainText={`Wait a few minutes. It's worth it`}
            buttonText={'OK'}
            buttonLink={'/portfolio'}
          />
        </Container>
      </MainBox>
    </Layout>
  );
}
