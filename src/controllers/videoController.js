import Video from "../models/Video";
import  User  from "../models/User";



export const watch = async(req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id).populate("owner");

    if(!video) {
      return res.render("404" ,{pageTitle:"Video Not Found."});
    }
    return res.render("watch", {pageTitle: video.title, video});
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const { user: {_id}
    } = req.session;
    const video = await Video.findById(id)
    if(!video) {
    return res.render("404" ,{pageTitle:"Video Not Found."});
    }
    if(String(video.owner) !== String(_id)) {
        return res.status(403).redirect("/");
    }
    return res.render("edit", {pageTitle: `Edit`, video});
};

export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { user: {_id}
} = req.session;
    const video = await Video.exists({_id: id });
    const { title, description, hashtags} = req.body;
    if(!video) {
        return res.status(400).render("404" ,{pageTitle:"Video Not Found."});
    }
    if(String(video.owner) !== String(_id)) {
        req.flash("error", "Your not Onwer")
        return res.status(403).redirect("/");
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
    })
    req.flash("success", "Changes Saved.")
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: `Upload Video`})
};


export const postUpload = async (req,res) => {
    const { user: { _id } } = req.session;
    const file = req.file;
    const { title, description, hashtags} = req.body;
    try{
        const newVideo = await Video.create({
            title,
            description,
            fileUrl: file.path,
            owner:_id,
            hashtags: Video.formatHashtags(hashtags),

       });
       const user = await User.findById(_id);
       user.videos.push(newVideo._id);
       user.save();
       return res.redirect("/")
    } catch(error) {
        return res.status(400).render("upload", {pageTitle: `Upload Video`, errorMessage: error._message,})
    }
}
export const deleteVideo = async (req, res) => {
    const { id }= req.params;
    const { user: {_id}
} = req.session;
    const video = await Video.findById(id);
    if(!video) {
        return res.status(400).render("404" ,{pageTitle:"Video Not Found."});
}
    if(String(video.owner) !== String(_id)) {
        return res.status(403).redirect("/");
}
    await Video.findByIdAndDelete(id);
  
    return res.redirect("/")
}

export const registerView = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res.sendStatus(404);
    }
    video.meta.views = video.meta.views + 1;
    await video.save();
    return res.sendStatus(200);
  };