import React from "react";
import { Box, Span } from "../../../../styles";
import Applications from "../../../Modal/Applications";

const Card = ({ post }) => {
  const [open, setOpen] = React.useState(false);
  const [job, setJob] = React.useState();

  const openHandler = (post) => {
    setJob(post);
    setOpen(true);
  };
  return (
    <Box type="card">
      <Span type="cardTitle">{post.title}</Span>
      <Span type="cardDesc" className="description">
        {post.api_url}
      </Span>
      <Span>{post.environment}</Span>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", null, "1fr 2fr "]}
        gridGap={[0]}
      >
        <Box>
          <Span> {post.code}</Span>
        </Box>
        <Box type="view" onClick={() => openHandler(post)}>
          View JSON
        </Box>
      </Box>
      <Applications open={open} setOpen={setOpen} id={post.id} post={job} />
    </Box>
  );
};

export default Card;
