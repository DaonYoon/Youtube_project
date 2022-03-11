import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`going to ${req.url}`);
    next();
}


const handleHome = (req, res) =>{
    return res.send("Hi!");
}

const handlelogin = (req, res) => {
    return res.send({ message: "Lgin Here"});
}

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privatea = (req, res, next) => {
    const url = req.url
    if(url === "/protected") {
        return res.send("not allow")
    }
    console.log("allow")
    next();
}


app.use(privatea)
app.use(logger)
app.get("/", gossipMiddleware, handleHome);
app.get("/login", gossipMiddleware, handlelogin);









const handleListening = () => console.log(`Server Listenning on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);
