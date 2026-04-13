import ImageKit from "imagekit";
import dotenv from "dotenv";

// Load env variables (make sure path correct hai)
dotenv.config({ path: "./.env.local" });

// Destructure variables (clean approach)
const {
  IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_URL_ENDPOINT,
} = process.env;

// Validate env variables
if (!IMAGEKIT_PUBLIC_KEY) {
  throw new Error("❌ Missing IMAGEKIT_PUBLIC_KEY in .env.local");
}

if (!IMAGEKIT_PRIVATE_KEY) {
  throw new Error("❌ Missing IMAGEKIT_PRIVATE_KEY in .env.local");
}

if (!IMAGEKIT_URL_ENDPOINT) {
  throw new Error("❌ Missing IMAGEKIT_URL_ENDPOINT in .env.local");
}

// Initialize ImageKit
const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
});

console.log("✅ ImageKit connected successfully!");

export default imagekit;