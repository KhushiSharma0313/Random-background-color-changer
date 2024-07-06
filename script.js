const darkColorsArr = [
  "#2C3E50", // Dark Blue
  "#34495E", // Darker Blue
  "#2C2C2C", // Dark Gray
  "#616A6B", // Dark Slate Gray
  "#4A235A", // Dark Purple
  "#2F4F4F", // Dark Slate Gray
  "#0E4B5A", // Dark Cyan
  "#36454F", // Charcoal
  "#800020", // Maroon
  "#FF5733", // Orange
  "#33FF57", // Green
  "#3357FF", // Blue
  "#FF33A1", // Pink
  "#A133FF", // Purple
  "#33FFF2", // Teal
  "#FF8C33", // Coral
  "#8CFF33", // Lime
  "#FF3333", // Red
  "#3333FF", // Indigo
  "#FFFF33", // Yellow
  "#33FFCC", // Aqua
  "#FF33FF", // Magenta
  "#338AFF", // Light Blue
  "#33FF88", // Mint
  "#D32F2F", // Dark Red
  "#1976D2", // Dark Blue
  "#388E3C", // Dark Green
  "#FBC02D", // Dark Yellow
  "#7B1FA2", // Dark Purple
  "#5D4037", // Dark Brown
  "#00796B", // Teal
  "#C2185B", // Dark Pink
  "#0288D1", // Blue
  "#7C4DFF", // Purple
  "#512DA8", // Indigo
  "#FFA000", // Amber
  "#F57C00", // Orange
  "#E64A19", // Dark Orange
  "#455A64", // Blue Grey
  "#616161", // Grey
  "#3E2723", // Dark Brown
  "#212121", // Dark Grey
  "#D84315", // Rust
  "#4E342E", // Dark Chocolate
  "#1B5E20", // Dark Green
  "#33691E", // Olive
  "#004D40", // Dark Teal
  "#263238", // Charcoal
  "#B71C1C", // Dark Red
  "#880E4F", // Dark Magenta
  "#4A148C", // Deep Purple
  "#311B92", // Deep Indigo
  "#0D47A1", // Deep Blue
  "#1A237E", // Navy Blue
  "#01579B", // Deep Sky Blue
  "#006064", // Deep Teal
  "#004D40", // Deep Turquoise
  "#194D33", // Dark Forest Green
  "#BF360C", // Burnt Orange
  "#3E2723", // Dark Cocoa
  "#263238", // Deep Charcoal
  "#0D47A1", // Dark Navy Blue
  "#1B5E20", // Dark Olive Green
  "#F57F17", // Dark Yellow Orange
  "#880E4F", // Deep Pink
];

function getRandomIndex() {
  return Math.floor(Math.random() * darkColorsArr.length);
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  // Update background color
  body.style.backgroundColor = color;
  
  // Update hex code display and its text color
  bgHexCodeSpanElement.innerText = color;
  bgHexCodeSpanElement.style.color = getTextColorForBackground(color);

  // Determine text color based on background luminance
  const textColor = getTextColorForBackground(color);
  body.style.color = textColor;
}

function getTextColorForBackground(bgColor) {
  // Convert background color to RGB
  const rgb = hexToRgb(bgColor);
  
  // Calculate luminance (brightness) of the background color
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  // Return black or white based on luminance threshold
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function hexToRgb(hex) {
  // Remove '#' if present
  hex = hex.replace(/^#/, '');

  // Parse hex to RGB
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", changeBackgroundColor);
