const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
/*const movies=[
    {id:1,name:"I",Genre:"Thriller",Release_Yr:"2015",Director:"S.Shankar"},
    {id:2,name:"Bajirao Mastani",Genre:"History",Release_Yr:"2015",Director:"Sanjay Leela Bansali"},
    {id:3,name:"Smile",Genre:"Horror",Release_Yr:"2022",Director:"Parker Finn"},
    {id:4,name:"Laila Majnu",Genre:"Romance",Release_Yr:"2018",Director:"Sajid Ali"},
    {id:5,name:"Rockstar",Genre:"Musical Romantic",Release_Yr:"2011",Director:"Imtiaz Ali"},
    {id:6,name:"Little Women",Genre:"Drama",Release_Yr:"2019",Director:"Greta Girwig"},
    {id:7,name:"Interstellar",Genre:"Sci-Fi",Release_Yr:"2014",Director:"Christopher Nolan"},
    {id:8,name:"Wake Up Sid",Genre:"Rom-Com",Release_Yr:"2009",Director:"Ayan Mukherji"},
    {id:9,name:"Forest Gump",Genre:"Rom-Com",Release_Yr:"1994",Director:"Robert Zemeckis"},
    {id:10,name:"Spirited Away",Genre:"Fantasy",Release_Yr:"2001",Director:"Hayao Miyazaki"}
]*/
const getMovies = asyncHandler(async(req,res) => {
    const movies = await Movie.find({});
    res.json(movies);
    res.status(200).json({message:"get all movies"});
});

const getMovie = asyncHandler (async(req,res) => {
    const id = (req.params.id);
    try{
        const movie = await Movie.findById(id);
        if(!movie) {
            return res.status(404).json({message:"Movie not found"});
        }
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    //const movie = movies.find(m => m.id === parseInt(req.params.id));
    //res.json(movie);
    //res.status(200).json(movies[movie]);
});

// const createMovie = asyncHandler (async (req,res) => {
//     console.log("the request body is:",req.body);
//     res.status(200).json({message:"add a movie"});
// });

const createMovie = asyncHandler(async(req,res) => {
    console.log("The request body is:",req.body);
    const {id,name,Genre,Release_Yr,Director}= req.body;
    if (!id || !name || !Genre || !Release_Yr || !Director) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const movie = await Movie.create({
        id,
        name,
        Genre,
        Release_Yr,
        Director
    });
    res.status(201).json(movie);
});

const updateMovie = asyncHandler(async (req,res) => {
    const movie=await Movie.findById(req.params.id);
    if(!movie){
        res.status(404);
        throw new Error("Movie not found");
    }
    const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
   res.status(200).json(updatedMovie);
});


const deleteMovie = asyncHandler(async (req,res) => {
    const movie = await Movie.findById(req.params.id);
    if(!movie){
        res.status(404);
        throw new Error("Movie not found");
    }
    await Movie.deleteOne({_id:req.params.id });
    res.status(200).json({message: "Movie deleted successfully",movie});
});

module.exports = {getMovies,getMovie,createMovie,updateMovie,deleteMovie};