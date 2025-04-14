
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const GenreResults = () => {
  // This would normally come from the analysis in Streamlit
  const genre = "jazz";
  const confidence = 86;

  // Genre characteristics would come from your Streamlit app
  const characteristics = {
    "description": "Jazz is characterized by swing notes, blue notes, call and response, polyrhythms, and improvisation.",
    "instruments": "Saxophone, trumpet, piano, bass, drums",
    "origin": "Late 19th and early 20th century, New Orleans, United States",
    "tempo": "Varies widely"
  };

  // Top genre predictions
  const predictions = [
    { genre: "Jazz", probability: 86 },
    { genre: "Blues", probability: 12 },
    { genre: "Classical", probability: 2 }
  ];

  // Sample recommendations that would come from Spotify API
  const recommendations = [
    {
      name: "Take Five",
      artist: "Dave Brubeck",
      album: "Time Out",
      image: "https://images.unsplash.com/photo-1610205296784-42cffef4463c?w=300&h=300&fit=crop&q=80",
      preview: ""
    },
    {
      name: "So What",
      artist: "Miles Davis",
      album: "Kind of Blue",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop&q=80",
      preview: ""
    },
    {
      name: "My Favorite Things",
      artist: "John Coltrane",
      album: "My Favorite Things",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop&q=80",
      preview: ""
    }
  ];

  const renderWaveformAnimation = () => {
    return (
      <div className="flex items-end justify-center h-32 gap-1">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 bg-primary rounded-full animate-wave"
            style={{ 
              height: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div 
        className="relative overflow-hidden rounded-xl p-6 text-center" 
        style={{ backgroundColor: "#3F51B5" }} // This would be dynamic based on genre
      >
        <div className="relative z-10">
          <h3 className="text-white text-3xl font-bold mb-2">
            {genre.toUpperCase()}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white">
            <span className="mr-2">Confidence:</span>
            <span className="font-bold">{confidence}%</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          {renderWaveformAnimation()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span>📊</span> Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="waveform">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="waveform">Waveform</TabsTrigger>
                <TabsTrigger value="spectrogram">Mel-Spec</TabsTrigger>
                <TabsTrigger value="chroma">Chroma</TabsTrigger>
              </TabsList>
              <TabsContent value="waveform" className="pt-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=400&fit=crop&q=80" 
                    alt="Waveform visualization"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="spectrogram" className="pt-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop&q=80" 
                    alt="Spectrogram visualization"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="chroma" className="pt-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1610205296784-42cffef4463c?w=600&h=400&fit=crop&q=80" 
                    alt="Chromagram visualization"
                    className="rounded-md w-full h-auto object-cover"
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 space-y-2">
              <div className="text-sm font-medium">Top Genre Predictions</div>
              <div className="space-y-2">
                {predictions.map((pred, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-20 font-medium">{pred.genre}</div>
                    <div className="flex-1">
                      <div className="w-full h-2 bg-secondary rounded-full">
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            width: `${pred.probability}%`, 
                            backgroundColor: index === 0 ? "#3F51B5" : "#9E9E9E" 
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm">{pred.probability}%</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span>🎼</span> Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Description</div>
              <div className="text-sm">{characteristics.description}</div>
            </div>
            
            <Separator />
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Common Instruments</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {characteristics.instruments.split(", ").map((instrument, i) => (
                  <Badge key={i} variant="outline">{instrument}</Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Origin</div>
              <div className="text-sm">{characteristics.origin}</div>
            </div>
            
            <Separator />
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Typical Tempo</div>
              <div className="text-sm">{characteristics.tempo}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span>🎧</span> Audio Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">10.2s</div>
                <div className="text-xs text-muted-foreground mt-1">Duration</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">22kHz</div>
                <div className="text-xs text-muted-foreground mt-1">Sample Rate</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">40</div>
                <div className="text-xs text-muted-foreground mt-1">MFCCs</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">5</div>
                <div className="text-xs text-muted-foreground mt-1">Models</div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-3 rounded-lg">
              <div className="text-sm font-medium mb-2">ML Models Used</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>RandomForest</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>SVM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>XGBoost</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Neural Network</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span>Perceptron</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span>🎵</span> Spotify Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((track, index) => (
              <div key={index} className="flex bg-muted/30 rounded-lg overflow-hidden hover-scale">
                <div className="w-20 h-20 flex-shrink-0">
                  <img src={track.image} alt={track.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 flex flex-col justify-between flex-1">
                  <div>
                    <div className="font-medium line-clamp-1">{track.name}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{track.artist}</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Button variant="secondary" size="sm" className="w-full text-xs">Preview</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenreResults;
