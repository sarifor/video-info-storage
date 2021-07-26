export const home = (req, res) =>
  res.render("home", { pageTitle: "home it is" }); //왜 안 나와?
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "trending it is" });
export const newStories = (req, res) =>
  res.render("newStories", { pageTitle: "newStories it is" });
export const seeStory = (req, res) =>
  res.render("seeStory", { pageTitle: "seeStory it is" });
export const editStory = (req, res) =>
  res.render("editStory", { pageTitle: "editStory it is" });
export const deleteStory = (req, res) =>
  res.render("deleteStory", { pageTitle: "deleleStory it is" });
