
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Sidebar = () => {
  const [sampleDuration, setSampleDuration] = useState(10);
  const [confidenceThreshold, setConfidenceThreshold] = useState(20);
  
  return (
    <div className="w-full h-full p-6 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
          <span className="text-lg">🎧</span>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Music Classifier</h2>
          <p className="text-xs text-muted-foreground">AI-powered genre detection</p>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="font-medium text-sm">Settings</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="duration">Sample Duration</Label>
            <span className="text-xs text-muted-foreground">{sampleDuration} sec</span>
          </div>
          <Slider
            id="duration"
            min={5}
            max={30}
            step={1}
            value={[sampleDuration]}
            onValueChange={(value) => setSampleDuration(value[0])}
            className="py-1"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="threshold">Confidence Threshold</Label>
            <span className="text-xs text-muted-foreground">{confidenceThreshold}%</span>
          </div>
          <Slider
            id="threshold"
            min={0}
            max={100}
            step={1}
            value={[confidenceThreshold]}
            onValueChange={(value) => setConfidenceThreshold(value[0])}
            className="py-1"
          />
        </div>
      </div>
      
      <Separator />
      
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="font-medium text-sm">Help</h3>
        <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-2">
          <p className="font-medium">Tips for best results:</p>
          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
            <li>Use clear audio without background noise</li>
            <li>Ensure sample has distinguishable musical elements</li>
            <li>Longer samples (10+ seconds) provide better results</li>
            <li>Try different segments of a song for accuracy</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-xs text-muted-foreground">
        <p>Made with ❤️ by Saumya Vani</p>
        <p>GTZAN Dataset | Ensemble Learning</p>
      </div>
    </div>
  );
};

export default Sidebar;
