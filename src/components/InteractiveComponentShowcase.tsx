import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface InteractiveComponentShowcaseProps {
  /** The title of the component being showcased. */
  title: string;
  /** A brief description of the component's purpose. */
  description: string;
  /** The live component instance to be displayed in the showcase area. */
  children: React.ReactNode;
  /** The interactive controls (e.g., Switches, Selects) used to manipulate the component's props. */
  controls: React.ReactNode;
}

/**
 * A wrapper component for the ComponentsPage that displays a UI element
 * and includes a section for controls to dynamically change its props.
 */
const InteractiveComponentShowcase: React.FC<InteractiveComponentShowcaseProps> = ({
  title,
  description,
  children,
  controls,
}) => {
  console.log(`InteractiveComponentShowcase loaded for: ${title}`);

  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-lg border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-xl font-bold text-gray-50">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex min-h-[200px] items-center justify-center p-6 lg:p-10">
        {/* This is where the live component will be rendered */}
        {children}
      </CardContent>
      
      <CardFooter className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 border-t border-gray-800 bg-gray-900/50 p-4">
        {/* This is where the interactive controls will be rendered */}
        {controls}
      </CardFooter>
    </Card>
  );
};

export default InteractiveComponentShowcase;