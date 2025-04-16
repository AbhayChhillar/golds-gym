import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack
        sx={{ flexDirection: { lg: 'row', xs: 'column' }, gap: { lg: '110px', xs: '20px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => {
          const video = item.video;
          if (!video) return null;

          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img
                style={{ borderTopLeftRadius: '20px', maxWidth: '360px', width: '100%' }}
                src={video.thumbnails?.[0]?.url}
                alt={video.title}
              />
              <Box mt={2}>
                <Typography
                  sx={{ fontSize: { lg: '28px', xs: '18px' } }}
                  fontWeight={600}
                  color="#000"
                >
                  {video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
