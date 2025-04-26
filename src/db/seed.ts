import mongoose from 'mongoose';
import Incident from '../models/Incident';
import dotenv from 'dotenv';

dotenv.config();

const sampleIncidents = [
  {
    title: "Unauthorized API Access",
    description: "AI system accessed restricted APIs without permission.",
    severity: "High",
  },
  {
    title: "Bias in Model Output",
    description: "Model displayed gender bias in hiring recommendations.",
    severity: "Medium",
  },
  {
    title: "Data Leakage",
    description: "Training data accidentally exposed sensitive user information.",
    severity: "High",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('Connected to MongoDB for seeding.');

    // Clear existing data (optional)
    await Incident.deleteMany({});
    console.log('Cleared existing incidents.');

    // Insert sample data
    await Incident.insertMany(sampleIncidents);
    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();