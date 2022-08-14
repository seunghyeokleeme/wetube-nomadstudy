export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", potato: "tomato" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search");
export const deleteVideo = (req, res) => {
  return res.send(`Remove Video #${req.params.id}`);
};
export const upload = (req, res) => res.send("upload");
export const comments = (req, res) => res.send("comments");
