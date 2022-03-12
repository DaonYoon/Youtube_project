
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload =(req, res) => res.send("Upload")
export const watch = (req, res) => res.send("Watch Video");
export const edit = (req, res) => {
    res.send("Edit Video");
console.log(req.params);
}
