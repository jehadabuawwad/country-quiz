const withImages = require("next-images");
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  webpack(config, options) {
    return config;
  },
});
