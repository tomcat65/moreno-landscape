export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  service?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maria G.",
    location: "Cinco Ranch",
    text: "Finally found a landscaper who actually calls back! My lawn has never looked better. They're reliable, professional, and the pricing is fair.",
    rating: 5,
    service: "Lawn Maintenance",
    featured: true,
  },
  {
    id: "t2",
    name: "Robert T.",
    location: "Richmond",
    text: "Reliable, fair prices, and they actually listen. Using them for monthly maintenance for over a year now. My neighbors keep asking who does my lawn!",
    rating: 5,
    service: "Mow, Edge & Blow",
    featured: true,
  },
  {
    id: "t3",
    name: "Jennifer L.",
    location: "Fulshear",
    text: "Fixed drainage issues other companies couldn't figure out. Professional work and they cleaned up everything when done. Highly recommend!",
    rating: 5,
    service: "Fences & Drains",
    featured: true,
  },
  {
    id: "t4",
    name: "David M.",
    location: "Katy",
    text: "Christmas lights were the talk of the neighborhood! Already booked for next year. Great communication and very careful with our home.",
    rating: 5,
    service: "Christmas Lights",
    featured: true,
  },
  {
    id: "t5",
    name: "Sandra P.",
    location: "Pecan Grove",
    text: "They transformed my backyard! The flower beds look amazing and they gave great advice on what plants work best in our Texas heat.",
    rating: 5,
    service: "Flower Bed Cleaning",
    featured: true,
  },
  {
    id: "t6",
    name: "Carlos R.",
    location: "Katy",
    text: "Es un placer trabajar con ellos. Muy profesionales y hablan espanol perfectamente. Recomendado 100%!",
    rating: 5,
    service: "Garden Maintenance",
    featured: false,
  },
  {
    id: "t7",
    name: "Michelle W.",
    location: "Sugar Land",
    text: "Our sprinkler system was a mess after the freeze. They fixed everything quickly and even helped us set up a better watering schedule.",
    rating: 5,
    service: "Sprinkler Systems",
    featured: false,
  },
  {
    id: "t8",
    name: "James H.",
    location: "Cinco Ranch",
    text: "Had several dead trees after the storm. They came out quickly, gave a fair quote, and did excellent work. Very happy with the results.",
    rating: 5,
    service: "Tree Trimming",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
