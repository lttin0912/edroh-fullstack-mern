import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import NavBar from 'sences/navbar';
import AdvertWidget from 'sences/widgets/AdvertWidget';
import FriendListWidget from 'sences/widgets/FriendListWidget';
import MyPostWidget from 'sences/widgets/MyPostWidget';
import PostsWidget from 'sences/widgets/PostsWidget';
import UserWidget from 'sences/widgets/UserWidget';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 960px)');
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar />
      <Box
        width='100%'
        padding='2rem 6%'
        gap='0.5rem'
        display={isNonMobileScreens ? 'flex' : 'block'}
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis='26%'>
            <AdvertWidget />
            <Box m='2rem 0' />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
