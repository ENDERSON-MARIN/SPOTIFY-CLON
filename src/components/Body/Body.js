import React from "react";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/user/PlaylistSlice";
import Header from "./Header";
import { BodyContainer, Info, InfoText, Songs, Icons } from "./styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  // console.log(playlist?.images[0]?.url);

  return (
    <BodyContainer>
      <Header />
      <Info>
        <img src={playlist?.images[0]?.url} alt="" />
        <InfoText>
          <h4>PLAYLIST</h4>
          <h2>Discover Weekly</h2>
          <p>{playlist?.name}</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilledIcon fontSize="large"/>
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </Icons>
      </Songs>
      {playlist?.tracks?.items.map((item, index) => (
        <SongRow track={item.track} key={index} />
      ))}
      )
    </BodyContainer>
  );
};

export default Body;
