export type UserRole = 'candidate' | 'company' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface CandidateProfile {
  id: string;
  userId: string;
  fullName: string;
  cpf: string;
  birthDate: Date;
  phone: string;
  email: string;
  cep: string;
  state: string;
  city: string;
  address: string;
  number: string;
  neighborhood: string;
  complement?: string;
  disabilityType: string;
  cidCode?: string;
  workplaceNeeds: string[];
  education: string;
  fieldOfStudy: string;
  experience: string;
  professionalSummary?: string;
  resumeUrl?: string;
  photoUrl?: string;
}

export interface CompanyProfile {
  id: string;
  userId: string;
  businessName: string;
  tradeName: string;
  cnpj: string;
  stateRegistration?: string;
  companySize: string;
  sector: string;
  description: string;
  website?: string;
  cep: string;
  state: string;
  city: string;
  address: string;
  number: string;
  neighborhood: string;
  complement?: string;
  responsibleName: string;
  responsibleRole: string;
  responsibleCpf: string;
  responsiblePhone: string;
  responsibleEmail: string;
  logoUrl?: string;
}

export interface Job {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  city: string;
  state: string;
  workMode: 'presential' | 'hybrid' | 'remote';
  contractType: 'CLT' | 'PJ' | 'Temporary' | 'Internship';
  salaryRange: {
    min: number;
    max: number;
  };
  benefits?: string[];
  isActive: boolean;
  publishedAt: Date;
  expiresAt?: Date;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  appliedAt: Date;
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted';
  compatibilityScore: number;
  coverLetter?: string;
}

export interface ApplicationWithDetails extends Application {
  job: Job;
  candidate: CandidateProfile;
}
