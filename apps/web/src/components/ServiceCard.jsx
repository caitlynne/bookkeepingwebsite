
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Card className="group flex flex-col h-full min-h-[320px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="text-base mb-6 flex-grow leading-relaxed text-muted-foreground line-clamp-4">
          {description}
        </CardDescription>
        <div className="mt-auto pt-4 border-t border-border/50">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 hover:gap-3"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
