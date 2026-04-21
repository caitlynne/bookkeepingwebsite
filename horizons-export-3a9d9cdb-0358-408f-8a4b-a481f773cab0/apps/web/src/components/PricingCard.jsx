
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingCard = ({ title, price, description, features, recommended, buttonText = 'Choose Plan' }) => {
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 ${
      recommended 
        ? 'scale-105 ring-2 ring-primary shadow-xl' 
        : 'hover:shadow-lg'
    }`}>
      <CardHeader>
        {recommended && (
          <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Recommended</Badge>
        )}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          className={`w-full transition-all duration-200 active:scale-[0.98] ${
            recommended 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : ''
          }`}
          variant={recommended ? 'default' : 'outline'}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
