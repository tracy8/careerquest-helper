
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  role,
  avatar,
  rating
}) => (
  <Card className="transition-all duration-300 hover:shadow-md border-none bg-white relative h-full shadow-sm">
    <CardHeader className="pt-8">
      <div className="flex justify-between items-start mb-2">
        <Avatar className="h-10 w-10 border-2 border-primary/10">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              size={16}
              className={cn(
                "text-amber-400",
                i >= rating && "text-gray-200"
              )}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      <CardTitle className="text-base font-medium">{author}</CardTitle>
      <div className="text-sm text-muted-foreground">{role}</div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground italic">{content}</p>
    </CardContent>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "CareerQuest helped me discover my passion for engineering. The assessment accurately matched my interests with career options, and I'm now pursuing the right subjects for my goals.",
      author: "Jean Claude",
      role: "O-Level Student, GS Kigali",
      rating: 5
    },
    {
      content: "As a teacher, I've seen a significant improvement in student engagement since introducing CareerQuest. Students are more focused on their studies because they understand how their subjects connect to their future careers.",
      author: "Marie Uwase",
      role: "Career Counselor, Lycée de Kigali",
      rating: 5
    },
    {
      content: "The platform gave my daughter clarity about her career path. The detailed insights about different professions and required subject combinations were invaluable for our family discussions.",
      author: "Emmanuel Mugisha",
      role: "Parent",
      rating: 4
    },
    {
      content: "I was undecided about which subjects to take for A-Level until I used CareerQuest. Now I'm confident in my choice to pursue science subjects as they align with my dream of becoming a doctor.",
      author: "Diane Ishimwe",
      role: "O-Level Student, FAWE Girls School",
      rating: 5
    },
    {
      content: "CareerQuest provides accurate information about the job market, which helps students make realistic career plans. The subject recommendations are well-aligned with both student interests and market demands.",
      author: "Patrick Ndayisaba",
      role: "School Principal, Green Hills Academy",
      rating: 4
    },
    {
      content: "I appreciate the holistic approach of CareerQuest. It doesn't just focus on academic performance but considers my personality and values when suggesting career paths.",
      author: "Samuel Nkusi",
      role: "O-Level Student, College Saint André",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            See how CareerQuest is helping students across Rwanda find their perfect career path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
