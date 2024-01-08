import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLODINARY_SECRET,
});

const uploadOnCloudnary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const uploadedFile = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file has been uploaded on cloudinary ", uploadedFile.url);
    fs.unlinkSync(localFilePath); //remove the temporarly saved files from the public folder synchronously as the files get uploaded to cloudinary
    return uploadedFile;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporarly file as the upload operation got failed
    console.log("Error in uploading image to Cloudinary", error);
  }
};

const deleteFromCloudinary = async (prevURL) => {
  try{
     const deleteFile = await cloudinary.uploader
    .destroy(prevURL)
    .then((result) => console.log(result));
    console.log("File has been deleted")
    return deleteFile
  }
  catch(error){
    console.log('Delete Error', error);
  }
};

export { uploadOnCloudnary , deleteFromCloudinary};