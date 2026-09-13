export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  project: string;
  rating: number;
}

export const testimonials: Testimonial[] = [];
