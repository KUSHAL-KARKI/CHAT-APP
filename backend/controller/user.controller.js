import User from "../model/user.model.js";

export const getUserSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filtersUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json(filtersUsers);
  } catch (error) {
    console.log("error in getusersidebar", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
