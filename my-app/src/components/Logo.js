import avatar from "/home/mercury/project/front-end/project/my-app/src/github-mark.png";

// const image_desc = "github logo";

const Logo = (props) => {
  const userPic = <img src={avatar} alt={props.desc} />;
  return userPic;
};

export default Logo;
