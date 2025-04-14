
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Mic, Library } from "lucide-react";

const AudioUploader = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  
  const handleRecordClick = () => {
    if (isRecording) {
      // Stop recording logic would go here
      setIsRecording(false);
      setRecordingProgress(0);
    } else {
      // Start recording logic would go here
      setIsRecording(true);
      simulateRecording();
    }
  };
  
  const simulateRecording = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setRecordingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsRecording(false);
      }
    }, 300); // 30 seconds total
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="upload">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload size={16} />
            <span>Upload</span>
          </TabsTrigger>
          <TabsTrigger value="record" className="flex items-center gap-2">
            <Mic size={16} />
            <span>Record</span>
          </TabsTrigger>
          <TabsTrigger value="library" className="flex items-center gap-2">
            <Library size={16} />
            <span>Library</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Upload className="h-10 w-10 text-muted-foreground" />
              <div>
                <p className="font-medium mb-1">Drop your audio file here</p>
                <p className="text-sm text-muted-foreground mb-4">Supports WAV, MP3, OGG formats</p>
              </div>
              <Input id="audio-upload" type="file" className="hidden" />
              <label htmlFor="audio-upload">
                <Button className="cursor-pointer">Select File</Button>
              </label>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="record" className="space-y-6">
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="relative">
              <div className={`w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center ${isRecording ? 'animate-pulse' : ''}`}>
                <div className={`absolute inset-0 rounded-full border-4 border-primary ${isRecording ? 'animate-pulse-ring' : ''}`}></div>
                <Button 
                  variant={isRecording ? "destructive" : "default"} 
                  size="icon" 
                  className="h-16 w-16 rounded-full"
                  onClick={handleRecordClick}
                >
                  <Mic size={24} />
                </Button>
              </div>
            </div>
            
            <div className="w-full space-y-2">
              {isRecording && (
                <>
                  <div className="flex justify-between text-sm">
                    <span>Recording...</span>
                    <span>{Math.floor(recordingProgress * 0.3)} sec</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${recordingProgress}%` }}
                    ></div>
                  </div>
                </>
              )}
              <p className="text-center text-sm text-muted-foreground">
                {isRecording ? "Recording in progress..." : "Click to start recording (max 30s)"}
              </p>
            </div>
          </div>
          
          {!isRecording && recordingProgress === 100 && (
            <div className="mt-4">
              <Button className="w-full">Analyze Recording</Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="library" className="min-h-[200px]">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Select a sample from our pre-loaded library:</p>
            
            {[
              { name: "Blues Sample", duration: "15s" },
              { name: "Classical Piano", duration: "12s" },
              { name: "Jazz Quartet", duration: "18s" },
              { name: "Rock Guitar", duration: "10s" },
              { name: "Hip Hop Beat", duration: "20s" }
            ].map((sample, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center">
                    <span>🎵</span>
                  </div>
                  <span>{sample.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{sample.duration}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end mt-6">
        <Button className="w-40">Analyze Audio</Button>
      </div>
    </Card>
  );
};

export default AudioUploader;
