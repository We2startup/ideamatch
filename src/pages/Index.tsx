
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SiteMap from "@/components/SiteMap";
import { Lightbulb, DollarSign, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <Navbar transparent />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Where <span className="text-idea">Ideas</span> Meet{" "}
            <span className="text-investor">Investment</span> &{" "}
            <span className="text-developer">Talent</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Connect with the perfect partners to bring your startup vision to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-float">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-idea" />
              </div>
              <h3 className="text-xl font-semibold mb-2">I have an idea</h3>
              <p className="text-gray-600 mb-4">Find investors and developers to make your startup vision a reality</p>
              <Button className="w-full bg-idea hover:bg-idea/90">Get Started</Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-investor" />
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm an investor</h3>
              <p className="text-gray-600 mb-4">Discover promising startup ideas and talented teams to invest in</p>
              <Button className="w-full bg-investor hover:bg-investor/90">Explore Opportunities</Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-developer" />
              </div>
              <h3 className="text-xl font-semibold mb-2">I'm a developer</h3>
              <p className="text-gray-600 mb-4">Join exciting startup projects and connect with innovative founders</p>
              <Button className="w-full bg-developer hover:bg-developer/90">Find Projects</Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-2">Already have an account?</p>
            <Button variant="outline" className="mx-auto">Sign In</Button>
          </div>
        </div>
      </main>
      
      <SiteMap />
    </div>
  );
};

export default Index;
