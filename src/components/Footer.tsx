
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="container px-4 py-8 mx-auto">
      <Separator className="mb-6" />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">Made with ❤️ by Saumya Vani</p>
          <p className="text-xs text-muted-foreground">GTZAN Dataset | Ensemble Learning | Audio Processing</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">GitHub</Button>
          <Button variant="ghost" size="sm">Contact</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
