import mongoose from "mongoose";

// define the schema 
const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ratings: {type: Number, required: true, min: 1, max: 5},
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [
        {value: {type: String},
        publish: {type: Date, default: Date.now}}
    ],

});

// create model..create the table or collection
const MovieModel = mongoose.model("venkat", movieSchema)/// it is going to create the collection in the monogdb
const createData = async () => {
    try{
        // create the document

        const m1 = new MovieModel({
            name: "Return of Dragon",
            ratings: 4,
            genre: ["action", "comedy"],
            isActive: true,
            comments: [{value: "Hero acts like danush"}]
        }) 
        
        // save this document in mongodb
        const result = await m1.save();
        console.log(result)

    } catch(error){
        console.log(error)
    }
}
export {createData}

// const createData = async () => {
//     try{
//         // create the document
//         const m1 = new MovieModel({
//             name: "Return of Dragon1",
//             ratings: 4,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{value: "Hero acts like danush"}]
//         }) 

//         const m2 = new MovieModel({
//             name: "Return of Dragon2",
//             ratings: 4,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{value: "Hero acts like danush"}]
//         }) 

//         const m3 = new MovieModel({
//             name: "Return of Dragon3",
//             ratings: 4,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{value: "Hero acts like danush"}]
//         }) 

//         const m4 = new MovieModel({
//             name: "Return of Dragon4",
//             ratings: 4,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{value: "Hero acts like danush"}]
//         }) 

//         const m5 = new MovieModel({
//             name: "Return of Dragon5",
//             ratings: 4,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{value: "Hero acts like danush"}]
//         }) 
        
//         // save this document in mongodb
//         const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
//         console.log(result)

//     } catch(error){
//         console.log(error)
//     }
// }


// export { createData}

// const allDocs = async () => {
//     try {
//         //all the data
//         const result = await MovieModel.find();
//         result.forEach((item) => {
//             console.log(item.name)
//             console.log(item.ratings)
//             console.log(item.genre)
//         })

//         // console.log("All docs", result)
//     } catch(error){
//         console.log(error)
//     }
// }


// const allDocs = async () => {

//     try {
        //all the data
        // const result = await MovieModel.findById("67f3dbc65d7adaa0e44561ea");
        // const result = await MovieModel.findById("67f3dbc65d7adaa0e44561ea", "name");
        // const result = await MovieModel.find({name: "Return of Dragon1"})
        // console.log("here", result.name)
        // limit the docs

        // const result = await MovieModel.find().limit(3);
        // const result = await MovieModel.find().skip(3);
        // const result = await MovieModel.find().countDocuments()
        // const result = await MovieModel.find().sort({ratings: -1});

        // // movie active and rating 4
        // const result = await MovieModel.find({
        //     $and: [{isActive: true}, {ratings: 4}]
        // })


          // movie active and rating 4
        //   const result = await MovieModel.find({
        //     $or: [{isActive: true}, {ratings: 4}]
        // })

        // updateByid
        // const result = await MovieModel.findByIdAndUpdate(
        //     "67f3dbc65d7adaa0e44561ea",
        //     {
        //         name: "RRR",
        //         genre: ["Adventure", "Fiction"]
        //     }
        // );


        //    const result = await MovieModel.updateMany(
        //     {ratings: 4},
        //     {name: "venkat"}
           
        // );

        //deleteBYID
        // const result = await MovieModel.findByIdAndDelete(id);
        // console.log(result)
      
//         const result = await MovieModel.deleteMany({name: "venkat"})
        

//         console.log(result)
//     } catch(error){
//         console.log(error)
//     }
// }


// export {allDocs, createData}
