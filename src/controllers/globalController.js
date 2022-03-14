


export const home = (req,res) => {
    const videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt: "2 min ago",
            views:59,
            id: 1,
        },
        {
            title: "Second Video",
            rating:5,
            comments:2,
            createdAt: "6 min ago",
            views:59,
            id: 1,
        },
        {
            title: "Third Video",
            rating:5,
            comments:2,
            createdAt: "15 min ago",
            views:59,
            id: 1,
        },
     
    ]
    
    
    
    res.render("home", {pageTitle : "Home", videos})
}
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const search = (req, res) => res.send("Search");