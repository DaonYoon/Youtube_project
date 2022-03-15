import Video from "../models/Video";



export const home = async (req,res) => { 
    try {
    const videos = await Video.find({}).sort({createdAt: "asc"});
    res.render("home", {pageTitle : "Home", videos});
    } catch {
        return res.render("server-error");
    }  
};
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

export const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) {
         videos = await Video.find({
            title: {
                $regex: new RegExp(keyword, "i"),
            }
        });
    }
    return res.render("search", {pageTitle: "Search", videos})
}