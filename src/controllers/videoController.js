
export const deleteVideo = (req, res) => res.send("Delete Video");

export const upload =(req, res) => res.send("Upload")

export const watch = (req, res) => {
    return res.render("watch", {pageTitle: "Watch"})
}

export const edit = (req, res) => {
    return res.render("edit", {pageTitle: "Edit"})

}
