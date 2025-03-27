
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CareerPath } from "@/data/career-paths";
import { CareerIconComponent } from "@/components/career-icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface CareerDetailDialogProps {
  career: CareerPath | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CareerDetailDialog: React.FC<CareerDetailDialogProps> = ({
  career,
  isOpen,
  onClose
}) => {
  if (!career) return null;

  // Function to determine the color of the job outlook badge
  const getOutlookBadgeColor = (outlook: string) => {
    switch (outlook) {
      case 'excellent':
        return "bg-green-500 hover:bg-green-600";
      case 'good':
        return "bg-blue-500 hover:bg-blue-600";
      case 'fair':
        return "bg-amber-500 hover:bg-amber-600";
      case 'limited':
        return "bg-rose-500 hover:bg-rose-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl h-[80vh] max-h-[80vh] flex flex-col">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CareerIconComponent name={career.icon as any} className="text-primary" size={20} />
            </div>
            <DialogTitle className="text-2xl">{career.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">{career.description}</DialogDescription>
          
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge className={getOutlookBadgeColor(career.jobOutlook)}>
              {career.jobOutlook.charAt(0).toUpperCase() + career.jobOutlook.slice(1)} Job Outlook
            </Badge>
            <Badge variant="outline">Market Demand: {career.marketDemand}/10</Badge>
            <Badge variant="secondary">{career.category}</Badge>
          </div>
        </DialogHeader>
        
        <ScrollArea className="flex-1 pr-4">
          <Tabs defaultValue="subjects" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="subjects">Subject Combinations</TabsTrigger>
              <TabsTrigger value="skills">Required Skills</TabsTrigger>
              <TabsTrigger value="outlook">Job Outlook</TabsTrigger>
            </TabsList>
            
            <TabsContent value="subjects" className="space-y-4 pt-4">
              {career.subjectCombinations.map((combination) => (
                <Card key={combination.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{combination.name}</CardTitle>
                    <CardDescription>{combination.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {combination.subjects.map((subject, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-sm text-muted-foreground mt-4">
                These subject combinations are recommended for students interested in pursuing a career in {career.title.toLowerCase()}.
                The combinations are aligned with university entry requirements and provide the necessary foundation for further studies.
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="pt-4">
              <div className="space-y-3">
                <div className="text-muted-foreground mb-4">
                  Developing these key skills will help you succeed in a {career.title.toLowerCase()} career path:
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {career.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg border bg-card">
                      <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                      <div>
                        <div className="font-medium">{skill}</div>
                        <div className="text-sm text-muted-foreground">
                          Essential for success in {career.title.toLowerCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-sm text-muted-foreground mt-4">
                  These skills can be developed through academic studies, extracurricular activities, and personal projects.
                  Focus on both technical skills and soft skills to become a well-rounded professional.
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="outlook" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Job Market Overview</CardTitle>
                  <CardDescription>Current trends and future prospects for {career.title.toLowerCase()} in Rwanda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium mb-1">Job Outlook</div>
                    <p className="text-sm text-muted-foreground">
                      The job outlook for {career.title.toLowerCase()} in Rwanda is currently rated as <span className="font-medium">{career.jobOutlook}</span>. 
                      This means graduates in this field can expect {
                        career.jobOutlook === 'excellent' ? 'abundant opportunities and strong demand for their skills' :
                        career.jobOutlook === 'good' ? 'solid job prospects with steady demand' :
                        career.jobOutlook === 'fair' ? 'moderate job opportunities with some competition' :
                        'limited positions with high competition'
                      }.
                    </p>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">Market Demand</div>
                    <p className="text-sm text-muted-foreground">
                      With a market demand rating of {career.marketDemand}/10, this career path is {
                        career.marketDemand >= 8 ? 'highly sought after by employers in Rwanda and the wider East African region' :
                        career.marketDemand >= 6 ? 'in good demand, especially in urban areas and growing sectors' :
                        'experiencing moderate demand, with opportunities in specific niches'
                      }.
                    </p>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">Growth Areas</div>
                    <p className="text-sm text-muted-foreground">
                      The fastest-growing sectors for {career.title.toLowerCase()} professionals in Rwanda include:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      {career.category === 'STEM' && (
                        <>
                          <li>Information technology and digital services</li>
                          <li>Infrastructure development</li>
                          <li>Renewable energy</li>
                        </>
                      )}
                      {career.category === 'HSW' && (
                        <>
                          <li>Public health initiatives</li>
                          <li>Private healthcare facilities</li>
                          <li>Medical research</li>
                        </>
                      )}
                      {career.category === 'CBA' && (
                        <>
                          <li>Financial services</li>
                          <li>Entrepreneurship and startups</li>
                          <li>International trade</li>
                        </>
                      )}
                      {career.category === 'HMS' && (
                        <>
                          <li>Education sector reforms</li>
                          <li>Policy development</li>
                          <li>International organizations</li>
                        </>
                      )}
                      {career.category === 'CAS' && (
                        <>
                          <li>Digital media and content creation</li>
                          <li>Tourism and hospitality</li>
                          <li>Creative industries</li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
