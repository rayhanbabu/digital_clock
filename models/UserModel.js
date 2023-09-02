const mongoose =require('mongoose');
const DataSchema=mongoose.Schema({
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,lowercase:true,required:true,unique:true},
        password:{type:String,required:true},
        address:{type:String,required:false},
        phoneNumber:{type:String,required:false},
       
    },
    {timestamps:true,versionKey:false}
)


// Reference to CartItem and Order models
userSchema.virtual('cartItems', {
    ref: 'CartItem',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
  });
  
  userSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
  });
  
  // Cascade delete middleware
  userSchema.pre('remove', async function (next) {
    await this.model('CartItem').deleteMany({ user: this._id });
    await this.model('Order').deleteMany({ user: this._id });
    next();
  });
  
const UserModel=mongoose.model('users',DataSchema);
module.exports=UserModel;