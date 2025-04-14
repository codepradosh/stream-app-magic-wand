
import { useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AudioUploader from "@/components/AudioUploader";
import GenreResults from "@/components/GenreResults";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [hasResults, setHasResults] = useState(false);
  
  // This is just for the demo - in your Streamlit app, you'd have actual results
  setTimeout(() => {
    setHasResults(true);
  }, 2000);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Separator />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={30} className="hidden md:block">
            <Sidebar />
          </ResizablePanel>
          
          <ResizablePanel defaultSize={75}>
            <div className="p-6 h-full overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-6">Music Genre Analysis</h2>
              
              <div className="space-y-8">
                <AudioUploader />
                
                {hasResults && (
                  <GenreResults />
                )}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
