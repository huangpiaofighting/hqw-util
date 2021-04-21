import { each } from "lodash-es";

function getSunColor() {
  const defaultColor = "0123456789abcdef";
  let randomMath = "";
  function randomIndex(num) {
    if (num > defaultColor.length) {
      throw new Error("长度大于预定值");
    }
    return Math.floor(Math.random() * num);
  }
  function getColorNum() {
    const defalutcolor = "000000";
    let color = "";
    each(defalutcolor, (item, index) => {
      if (index === 0 || index === 1) {
        color += defaultColor[randomIndex(14)];
      } else {
        color += defaultColor[randomIndex(16)];
      }
    });
    return color;
  }
  randomMath = getColorNum();
  return `#${randomMath}`;
}
function getRandomColor(num) {
  const maxOx = parseInt("0xffffff", 16).toString(10);
  let randomMath = Math.floor(Math.random() * parseInt(maxOx, 10)).toString(16);
  function randomNum(flag) {
    const stringColor = ["5678956789defdef", "0123401234abcabc"];
    const index = flag ? 0 : 1;
    return stringColor[index][Math.floor(Math.random() * 16)];
  }
  function getColorNum(flag) {
    const defalutcolor = "000000";
    let color = "";
    each(defalutcolor, () => {
      color += randomNum(flag);
    });
    return color;
  }
  if (num === 1) {
    randomMath = getColorNum(true);
  } else if (num === 2) {
    randomMath = getColorNum();
  }
  return `#${randomMath}`;
}

export { getSunColor, getRandomColor };
