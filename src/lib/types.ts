// 🐾 Hey, Vet! - Type Definitions

export type PetType = 'dog' | 'cat';
export type PetSize = 'small' | 'medium' | 'large' | 'giant';
export type PetSex = 'male' | 'female';
export type UserRole = 'tutor' | 'vet';
export type PlanType = 'free' | 'premium' | 'trial';

// User & Authentication
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  role: UserRole;
  plan: PlanType;
  trialEndsAt?: Date;
  createdAt: Date;
}

// Pet Profile
export interface Pet {
  id: string;
  tutorId: string;
  name: string;
  type: PetType;
  breed: string;
  age: number; // em meses
  size: PetSize;
  weight: number; // em kg
  sex: PetSex;
  photo?: string;
  allergies: string[];
  medicalHistory: string;
  createdAt: Date;
}

// Vaccination Module
export interface Vaccine {
  id: string;
  name: string;
  description: string;
  petType: PetType[];
  ageRecommendation: string; // "2 meses", "3-4 meses"
  isRequired: boolean;
  boosterSchedule?: string; // "anual", "a cada 3 anos"
  protectsAgainst: string[];
}

export interface VaccinationRecord {
  id: string;
  petId: string;
  vaccineId: string;
  applicationDate: Date;
  nextDueDate?: Date;
  veterinarianName: string;
  clinicName: string;
  batchNumber?: string;
  notes?: string;
}

export interface VaccinationLocation {
  id: string;
  name: string;
  type: 'clinic' | 'petshop' | 'hospital';
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
  availableVaccines: string[]; // vaccine IDs
  prices: Record<string, number>; // vaccineId -> price
  rating: number;
  distance?: number; // em km
}

// Food & Nutrition Module
export interface FoodRecommendation {
  id: string;
  petType: PetType;
  ageRange: string;
  size: PetSize;
  brand: string;
  productName: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  allergyWarnings: string[];
}

export interface FoodStore {
  id: string;
  name: string;
  type: 'physical' | 'online';
  city?: string;
  address?: string;
  url?: string;
  phone?: string;
  products: {
    productId: string;
    price: number;
    inStock: boolean;
  }[];
}

// Health & Symptoms Module
export interface Disease {
  id: string;
  name: string;
  category: 'traditional' | 'modern' | 'behavioral';
  petType: PetType[];
  description: string;
  symptoms: string[];
  causes: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  firstAidActions: string[];
  whenToSeeVet: string;
  treatments: string[];
  prevention: string[];
  videoUrl?: string;
}

export interface Symptom {
  id: string;
  name: string;
  description: string;
  category: 'physical' | 'behavioral' | 'emotional';
  relatedDiseases: string[]; // disease IDs
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
}

// Pet Communication Module
export interface PetSound {
  id: string;
  petType: PetType;
  soundType: string; // "latido curto", "miado longo", "rosnado"
  audioUrl: string;
  emotion: string; // "medo", "alegria", "estresse"
  meaning: string;
  tutorRecommendations: string[];
}

// Veterinarian Module
export interface Veterinarian {
  id: string;
  userId: string;
  fullName: string;
  crmv: string;
  specialties: string[];
  clinicName: string;
  clinicAddress: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  services: string[];
  prices: Record<string, number>; // service -> price
  availability: {
    dayOfWeek: number; // 0-6
    startTime: string;
    endTime: string;
  }[];
  rating: number;
  reviewCount: number;
  profilePhoto?: string;
  verified: boolean;
}

export interface VetCampaign {
  id: string;
  vetId: string;
  title: string;
  description: string;
  type: 'vaccination' | 'treatment' | 'promotion' | 'health';
  startDate: Date;
  endDate: Date;
  discount?: number;
  targetPetType?: PetType;
}

// Plans & Payments
export interface Plan {
  id: string;
  name: string;
  type: PlanType;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: {
    maxPets: number;
    vaccinationModule: 'basic' | 'full';
    foodModule: 'basic' | 'full';
    healthModule: 'limited' | 'full';
    communicationModule: boolean;
    clinicLocator: boolean;
    priceComparison: boolean;
    reports: boolean;
  };
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
}

// Dashboard & Alerts
export interface Alert {
  id: string;
  petId: string;
  type: 'vaccination' | 'health' | 'food' | 'appointment';
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  isRead: boolean;
  createdAt: Date;
}

export interface DashboardStats {
  totalPets: number;
  upcomingVaccinations: number;
  healthAlerts: number;
  lastCheckup?: Date;
}
