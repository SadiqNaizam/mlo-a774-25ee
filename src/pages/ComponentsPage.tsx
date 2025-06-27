import React, { useState } from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveComponentShowcase from '@/components/InteractiveComponentShowcase';

// ShadCN UI Components to showcase
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";
type AlertVariant = "default" | "destructive";

const ComponentsPage = () => {
  console.log('ComponentsPage loaded');

  // State for Button showcase
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>('default');
  const [buttonSize, setButtonSize] = useState<ButtonSize>('default');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // State for Input showcase
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  
  // State for Checkbox showcase
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);

  // State for Switch showcase
  const [isSwitchDisabled, setIsSwitchDisabled] = useState(false);

  // State for Alert showcase
  const [alertVariant, setAlertVariant] = useState<AlertVariant>('default');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">Component Library</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore, interact with, and test the building blocks of Dynamic UI.
            </p>
          </div>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            {/* Buttons Tab */}
            <TabsContent value="buttons">
              <InteractiveComponentShowcase
                title="Button"
                description="A versatile button component with multiple styles and states."
                controls={
                  <>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="btn-variant">Variant</Label>
                      <Select value={buttonVariant} onValueChange={(v) => setButtonVariant(v as ButtonVariant)}>
                        <SelectTrigger id="btn-variant" className="w-[120px]">
                          <SelectValue placeholder="Variant" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="destructive">Destructive</SelectItem>
                          <SelectItem value="outline">Outline</SelectItem>
                          <SelectItem value="secondary">Secondary</SelectItem>
                          <SelectItem value="ghost">Ghost</SelectItem>
                          <SelectItem value="link">Link</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                     <div className="flex items-center gap-2">
                      <Label htmlFor="btn-size">Size</Label>
                      <Select value={buttonSize} onValueChange={(v) => setButtonSize(v as ButtonSize)}>
                        <SelectTrigger id="btn-size" className="w-[120px]">
                          <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="sm">Small</SelectItem>
                          <SelectItem value="lg">Large</SelectItem>
                          <SelectItem value="icon">Icon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="btn-disabled" checked={isButtonDisabled} onCheckedChange={setIsButtonDisabled} />
                      <Label htmlFor="btn-disabled">Disabled</Label>
                    </div>
                  </>
                }
              >
                <Button variant={buttonVariant} size={buttonSize} disabled={isButtonDisabled}>
                  {buttonSize === 'icon' ? 'G' : 'Click Me'}
                </Button>
              </InteractiveComponentShowcase>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-8">
              <InteractiveComponentShowcase
                title="Input"
                description="A standard text input field for forms."
                controls={
                  <div className="flex items-center space-x-2">
                    <Switch id="input-disabled" checked={isInputDisabled} onCheckedChange={setIsInputDisabled} />
                    <Label htmlFor="input-disabled">Disabled</Label>
                  </div>
                }
              >
                <Input type="email" placeholder="email@example.com" disabled={isInputDisabled} className="max-w-sm" />
              </InteractiveComponentShowcase>
              
              <InteractiveComponentShowcase
                title="Checkbox"
                description="A control that allows the user to select one or more options."
                controls={
                   <div className="flex items-center space-x-2">
                    <Switch id="check-disabled" checked={isCheckboxDisabled} onCheckedChange={setIsCheckboxDisabled} />
                    <Label htmlFor="check-disabled">Disabled</Label>
                  </div>
                }
              >
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" disabled={isCheckboxDisabled} />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </InteractiveComponentShowcase>

              <InteractiveComponentShowcase
                title="Switch"
                description="A control to toggle between two states, typically on or off."
                 controls={
                   <div className="flex items-center space-x-2">
                    <Switch id="switch-disabled" checked={isSwitchDisabled} onCheckedChange={setIsSwitchDisabled} />
                    <Label htmlFor="switch-disabled">Disabled</Label>
                  </div>
                }
              >
                 <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" disabled={isSwitchDisabled} />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
              </InteractiveComponentShowcase>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-8">
                 <InteractiveComponentShowcase
                    title="Card"
                    description="Cards are used to group related content and actions."
                    controls={<p className="text-sm text-muted-foreground">No interactive props for this example.</p>}
                 >
                    <Card className="w-full max-w-sm bg-background/50">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>A brief description of the card content.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the main content area of the card component.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline">Action</Button>
                        </CardFooter>
                    </Card>
                 </InteractiveComponentShowcase>
                 <InteractiveComponentShowcase
                    title="Alert"
                    description="Displays a callout for user attention."
                    controls={
                        <div className="flex items-center gap-2">
                            <Label htmlFor="alert-variant">Variant</Label>
                            <Select value={alertVariant} onValueChange={(v) => setAlertVariant(v as AlertVariant)}>
                                <SelectTrigger id="alert-variant" className="w-[120px]">
                                <SelectValue placeholder="Variant" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="destructive">Destructive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    }
                 >
                    <Alert variant={alertVariant} className="max-w-md">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            This is an alert component to convey important information.
                        </AlertDescription>
                    </Alert>
                 </InteractiveComponentShowcase>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComponentsPage;