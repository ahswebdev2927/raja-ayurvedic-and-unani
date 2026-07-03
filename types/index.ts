export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  customerImage: string;
  rating: number;
  review: string;
  role?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  iconName: string; // The Lucide icon name to render dynamically
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}
