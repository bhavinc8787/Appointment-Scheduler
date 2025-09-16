import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dtjh3dzal/image/upload/v1758009002/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396_hcs49a.jpg"
  },
  phone: { type: String, default: "000000000" },
  password: { type: String, required: true }
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
