
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex items-center mb-4 space-x-2">
          <span className="text-4xl">🎵</span>
          <h1 className="text-4xl font-bold text-gradient">Music Genre Classifier</h1>
        </div>
        <p className="text-lg text-muted-foreground text-center max-w-3xl">
          Analyze audio samples to identify their musical genre using advanced machine learning models
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["Blues", "Classical", "Country", "Disco", "Hip Hop", "Jazz", "Metal", "Pop", "Reggae", "Rock"].map((genre) => (
          <Badge 
            key={genre} 
            variant="outline" 
            className="py-2 px-4 text-sm font-medium capitalize hover-scale"
          >
            {genre}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Header;
