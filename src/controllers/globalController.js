import Video from "../models/Video";
import User from "../models/User";




export const home = async (req,res) => { 
    try {
        const videos = await Video.find({})
        .sort({ createdAt: "desc" })
        .populate("owner");
    res.render("home", {pageTitle : "Home", videos});
    } catch {
        return res.render("server-error");
    }  
};


export const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) {
         videos = await Video.find({
            title: {
                $regex: new RegExp(keyword, "i"),
            },
        }).populate("owner");
    }
    return res.render("search", {pageTitle: "Search", videos})
}