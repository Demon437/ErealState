import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { Admin } from '../models/userModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from backend/.env
dotenv.config({ path: path.join(__dirname, '../.env') });

// Optional: if you also use .env.local, use this instead
// dotenv.config({ path: path.join(__dirname, '../.env.local') });

const createAdminUser = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is missing in .env');
    }

    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const admin = new Admin({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Email:', process.env.ADMIN_EMAIL);
    console.log('Password has been hashed and stored securely');

  } catch (error) {
    console.error('Error creating admin user:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

createAdminUser();