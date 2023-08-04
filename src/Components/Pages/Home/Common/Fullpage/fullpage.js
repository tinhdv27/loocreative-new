export const scroll = () =>
  // eslint-disable-next-line no-undef
  new fullpage("#fullpage", {
    navigation: true,
    responsiveWidth: 700,
    anchors: [
      "firstPage",
      "secondPage",
      "thirdPage",
      "fourthPage",
      "fifthPage",
    ],
    parallax: true,
    onLeave: function (origin, destination, direction) {
      console.log("Leaving section" + origin.index);
    },
  });
