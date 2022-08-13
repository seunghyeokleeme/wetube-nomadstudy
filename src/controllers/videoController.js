export const trending = (req, res) => res.end("Home Page Videos");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit Video #${req.params.id}`);
};
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => {
  return res.send(`Remove Video #${req.params.id}`);
};
export const upload = (req, res) => res.send("upload");
export const comments = (req, res) => res.send("comments");
