import React from "react";
import { SongRowContainer, SongInfo } from "./styles";

const SongRow = ({ track }) => {
  return (
    <SongRowContainer>
      <img src={track.album.images[0].url} alt="album" />
      <SongInfo>
        <h4>{track.name}</h4>
        <p>
          {track.artists.map((artist) => artist.name)}
          {track.album.name}
        </p>
      </SongInfo>
    </SongRowContainer>
  );
};

export default SongRow;
