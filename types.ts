// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image / file metafield structure
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon?: string;
    summary?: string;
    description?: string;
    featured_image?: CosmicImage;
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    photo?: CosmicImage;
    bio?: string;
    email?: string;
  };
}

// Case Studies
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    featured_image?: CosmicImage;
    overview?: string;
    details?: string;
    related_service?: Service;
    team?: TeamMember[];
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    role?: string;
    company?: string;
    photo?: CosmicImage;
  };
}

// API response wrapper
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}