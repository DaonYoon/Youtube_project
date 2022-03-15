import Video from "../models/Video";



export const home = async (req,res) => { 
    try {
    const videos = await Video.find({});
    res.render("home", {pageTitle : "Home", videos});
    } catch {
        return res.render("server-error");
    }  
};
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const search = (req, res) => res.send("Search");