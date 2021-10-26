import React from "react";
import { Container } from "../container";
import { Section } from "../section";
import { ThemeContext } from '../theme';
import { headlineColorClasses } from './images';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';



export const Pricing = ({ data }) => {
  return (
    <Grid item xs={12} md={4} key={data.key}>
    <Box
      component={Card}
      height={1}
      display={'flex'}
      flexDirection={'column'}
      boxShadow={data.isHighlighted ? 4 : 0}
    >
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <Box
          marginBottom={4}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Typography variant={'h4'}>
            <Box component={'span'} fontWeight={600}>
              {data.title}
            </Box>
          </Typography>
          <Box display={'flex'} alignItems={'baseline'}>
            <Typography variant={'h4'} color={'primary'}>
              <Box component={'span'} fontWeight={600}>
                {data.price}
              </Box>
            </Typography>
            <Typography variant={'subtitle2'} color={'text.secondary'}>
              /mo
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={1}>
          {data.features.map((feature, j) => (
            <Grid item xs={12} key={j}>
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
              >
                <Box
                  component={ListItemAvatar}
                  minWidth={'auto !important'}
                  marginRight={2}
                >
                  <Box
                    component={Avatar}
                    //bgcolor={theme.palette.secondary.main}
                    width={20}
                    height={20}
                  >
                    <svg
                      width={12}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Box>
                <ListItemText primary={feature} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Box flexGrow={1} />
      <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
        <Button size={'large'} variant={'contained'}>
          Learn more
        </Button>
      </CardActions>
    </Box>
  </Grid>
  );
};

export const Pricings = ({ data }) => {
    return (
        <Section color={data.color}>
        <Container
            className={`max-w-8xl prose prose-lg ${
            data.color === "primary" ? `prose-primary` : `dark:prose-dark`
            }`}
            size="large"
        >
        <Grid container spacing={4}>
       
        {data && data.pricing.map(function (block, i) {
          return <Pricing key={i} data={block} />;
        })} 
      </Grid>
        </Container>
        </Section>
    );
};
