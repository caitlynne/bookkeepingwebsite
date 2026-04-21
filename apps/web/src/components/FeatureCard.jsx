
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureCard = ({ icon: Icon, title, description, number }) => {
  return (
    <Card className="h-full border-none bg-card shadow-sm">
      <CardHeader>
        <div className="flex items-start gap-4">
          {number && (
            <span className="text-6xl font-bold text-primary/10" style={{ letterSpacing: '-0.02em' }}>
              {number}
            </span>
          )}
          <div className="flex-1">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
