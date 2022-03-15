import Video from "../models/Video";


export const deleteVideo = (req, res) => res.send("Delete Video");


export const watch = (req, res) => {

    return res.render("watch", {pageTitle: `Watching ${video.title}`});
}

export const getEdit = (req, res) => {

    return res.render("edit", {pageTitle: `Edit:${video.title}`});
};

export const postEdit = (req, res) => {

    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: `Upload Video`})
};

export const postUpload =(req,res) => {

    return res.redirect("/")
}