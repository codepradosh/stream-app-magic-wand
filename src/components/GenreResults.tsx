
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChartLine, AudioLines, Grid } from "lucide-react";

const GenreResults = () => {
  // Simulated data from machine learning analysis
  const genre = "Country";
  const confidence = 86;
  const color = "#FF9800"; // Country genre color

  const characteristics = {
    description: "Country music often features ballads and dance tunes with simple forms, folk lyrics, and harmonies often accompanied by string instruments.",
    instruments: "Guitar, fiddle, banjo, harmonica, drums",
    origin: "1920s, Southern United States",
    tempo: "Moderate to fast"
  };

  const predictions = [
    { genre: "Country", probability: 86 },
    { genre: "Blues", probability: 12 },
    { genre: "Classical", probability: 2 }
  ];

  // Mock visualization data
  const visualizations = [
    { name: "Waveform", icon: AudioLines, image: "/public/lovable-uploads/11f3a0fe-7e9c-45ba-937a-f8d1e91f8a81.png" },
    { name: "Mel Spectrogram", icon: Grid, image: "/public/lovable-uploads/8888b3ae-0786-4b91-a6aa-500fbb97e933.png" },
    { name: "Chromagram", icon: ChartLine, image: "/public/lovable-uploads/8b8274c6-1694-417e-98a2-b3d79c9a06e2.png" }
  ];

  return (
    <div className="space-y-6">
      {/* Genre Prediction Header */}
      <div 
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6 flex items-center justify-between shadow-lg"
        style={{ backgroundColor: color }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">{genre}</h2>
          <div className="text-lg">Confidence: {confidence}%</div>
        </div>
        <div className="text-6xl opacity-20">🎸</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Analysis Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartLine className="w-5 h-5" />
              Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="waveform">
              <TabsList className="grid grid-cols-3 mb-4">
                {visualizations.map((viz, index) => (
                  <TabsTrigger key={index} value={viz.name.toLowerCase().replace(/\s/g, '')}>
                    <viz.icon className="mr-2 h-4 w-4" />
                    {viz.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {visualizations.map((viz, index) => (
                <TabsContent 
                  key={index} 
                  value={viz.name.toLowerCase().replace(/\s/g, '')} 
                  className="aspect-video"
                >
                  <img 
                    src={viz.image} 
                    alt={viz.name} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                </TabsContent>
              ))}
            </Tabs>

            {/* Genre Predictions */}
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold">Top Genre Predictions</h4>
              {predictions.map((pred, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20 text-sm">{pred.genre}</div>
                  <div className="flex-1 bg-secondary rounded-full h-2">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${pred.probability}%`, 
                        backgroundColor: index === 0 ? color : '#9E9E9E' 
                      }}
                    />
                  </div>
                  <div className="w-12 text-right text-xs">{pred.probability}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Genre Characteristics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AudioLines className="w-5 h-5" />
              Genre Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Description</div>
              <p className="text-sm">{characteristics.description}</p>
            </div>
            
            <Separator />
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Instruments</div>
              <div className="flex flex-wrap gap-2">
                {characteristics.instruments.split(", ").map((instrument, i) => (
                  <Badge key={i} variant="outline">{instrument}</Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Origin</div>
                <div className="text-sm">{characteristics.origin}</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">Tempo</div>
                <div className="text-sm">{characteristics.tempo}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GenreResults;
