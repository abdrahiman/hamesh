import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import BLOG from "../BLOG.config";

const PostLoader = (props: any) => {
  return (
    <ContentLoader
      backgroundColor="#4d4d4d"
      backgroundOpacity={0.2}
      foregroundOpacity={0.2}
      viewBox="0 0 450 550"
      rtl
      {...props}
    >
      {/* Cover image */}
      <rect x="0" y="0" rx="10" ry="10" width="450" height="350" />
      {/* title */}
      <rect x="0" y="370" rx="10" ry="10" width="300" height="20" />
      {/* description */}
      <rect x="0" y="400" rx="10" ry="10" width="420" height="80" />
      <rect x="420" y="500" rx="10" ry="10" width="20" height="20" />
      <rect x="390" y="500" rx="10" ry="10" width="20" height="20" />
    </ContentLoader>
  );
};

const FullPostLoader = ({ ...rest }) => (
  <ContentLoader
    viewBox="0 0 261 431"
    backgroundColor="#4d4d4d"
    backgroundOpacity={0.2}
    foregroundOpacity={0.2}
    rtl
    {...rest}
  >
    {/* Title */}
    <rect x="0" y="0" rx="5" ry="5" width="250" height="10" />
    {/* Sub-info 1 */}
    <rect x="0" y="20" rx="2" ry="2" width="90" height="3" />
    {/* ser */}
    <rect x="0" y="27" rx="4" ry="4" width="200" height="19" />
    {/* image */}
    {/* <rect x="0" y="47" rx="2" ry="2" width="350" height="65" /> */}
    {/* Body */}
    <rect x="0" y="50" rx="4" ry="4" width="260" height="450" />
  </ContentLoader>
);

PostLoader.metadata = {
  name: BLOG.author, // My name
  github: BLOG.socialLink.github, // Github username
  description: "A simple loader for a post", // Little tagline
  filename: "loaders", // filename of your loader
};

FullPostLoader.metadata = {
  name: BLOG.author, // My name
  github: BLOG.socialLink.github, // Github username
  description: "A simple loader for a full post", // Little tagline
  filename: "loaders", // filename of your loader
};

export default PostLoader;
export { FullPostLoader };
