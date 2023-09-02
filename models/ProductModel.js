const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        name:{type:String,required:true},
        description:{type:String,required:false},
        description:{type:String,required:false},
        price: {
            type: Number,
            required: true,
            min: 1,
           },
       stock:{
        type: Number,
        required: true,
        validate: {
          validator: function (value) {
            return value >= 0;
          },
          message: 'The number must be non-negative.',
        },
      },
      category:{type:String,required:true},
     imageURL:{type:String,required:false},

    },
    {timestamps:true,versionKey:false}
)
const ProductModel=mongoose.model('products',DataSchema);
module.exports=UserModel;