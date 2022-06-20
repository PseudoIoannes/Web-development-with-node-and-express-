const fortunes = ["conquer your fears", "Do not fear", "Keep it simple"];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
};
