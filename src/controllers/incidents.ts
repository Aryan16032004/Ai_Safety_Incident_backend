import { Request, Response } from 'express';
import Incident from '../models/Incident';
import { Error as MongooseError } from 'mongoose';

export const getAllIncidents = async (req: Request, res: Response): Promise<void> => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, severity } = req.body;
    if (!title || !description || !severity) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const newIncident = await Incident.create({ title, description, severity });
    res.status(201).json(newIncident);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getIncidentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const incident = await Incident.findById(req.params.id);
      
      if (!incident) {
        res.status(404).json({ error: 'Incident not found' });
        return;
      }
      
      res.status(200).json(incident);
    } catch (err) {
      if (err instanceof MongooseError.CastError) {
        res.status(400).json({ error: 'Invalid incident ID format' });
      } else {
        res.status(500).json({ error: 'Failed to fetch incident' });
      }
    }
  };
  
  export const deleteIncident = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedIncident = await Incident.findByIdAndDelete(req.params.id);
  
      if (!deletedIncident) {
        res.status(404).json({ error: 'Incident not found' });
        return;
      }
  
      res.status(200).json({ message: 'Incident deleted successfully' });
    } catch (err) {
      if (err instanceof MongooseError.CastError) {
        res.status(400).json({ error: 'Invalid incident ID format' });
      } else {
        res.status(500).json({ error: 'Failed to delete incident' });
      }
    }
  };