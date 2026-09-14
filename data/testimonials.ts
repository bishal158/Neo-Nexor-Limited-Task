export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  project: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tariqul Islam",
    role: "Managing Director, Apex Venture Capital",
    project: "The Lakeside Penthouse, Gulshan",
    rating: 5,
    comment:
      "Neo Interior Studio transformed our chaotic duplex into an oasis of tactile calm. Their restraint with materials—pairing limewash with smoked oak—is unlike anything else in Dhaka's interior market. Every detail feels deliberate, honest, and timeless.",
  },
  {
    id: "2",
    name: "Dr. Farzana Rahman",
    role: "Private Homeowner",
    project: "Banani Garden Residence",
    rating: 5,
    comment:
      "Working with Neo was effortless. They respected our desire for natural greenery and light, weaving courtyards directly into our everyday living flow. Their execution team delivered on schedule with meticulous millwork craftsmanship.",
  },
  {
    id: "3",
    name: "Zubair Al-Mahmud",
    role: "COO, Nexor Technologies Ltd",
    project: "Apex Innovation Studio, Mohakhali DOHS",
    rating: 5,
    comment:
      "Our software engineers and executive team love the new headquarters. Neo managed to create acoustic serenity in an open-plan tech studio without resorting to generic corporate cubicles. It elevated our company culture instantly.",
  },
  {
    id: "4",
    name: "Nadia & Sean Chowdhury",
    role: "Founders, Verona Hospitality",
    project: "Verona Artisan Bistro & Lounge",
    rating: 5,
    comment:
      "From the first mood board to opening night, Neo understood our culinary brand vision. The warm lighting temperature, custom fluted walnut partitions, and saddle leather banquettes keep our tables booked weeks in advance.",
  },
  {
    id: "5",
    name: "Kazi Munir",
    role: "Diplomatic Resident",
    project: "The Aurora Sky Residence, Baridhara",
    rating: 5,
    comment:
      "The spatial grandeur of our double-height salon was handled with absolute mastery. The floating walnut staircase and bookmatched marble work represent the pinnacle of artisanal precision in Bangladesh.",
  },
];
