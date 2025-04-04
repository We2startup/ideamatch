
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";
import { 
  Github, 
  Linkedin,
  Edit2, 
  MapPin, 
  Mail, 
  Link as LinkIcon
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <div className="min-h-screen pb-16">
      <div className="bg-gradient-to-r from-idea to-developer h-32"></div>
      
      <div className="px-4 -mt-16 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              <Badge className="absolute bottom-0 right-0 bg-idea">Developer</Badge>
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Sarah Johnson</h1>
              <p className="text-gray-600 flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4" /> San Francisco, CA
              </p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button className="gap-2">
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Bio</h2>
          <p className="text-gray-700">
            Full-stack developer with 5 years of experience in React, Node.js, and cloud 
            infrastructure. Passionate about joining early-stage startups with innovative ideas.
            Previously worked at two successful fintech startups that raised Series A funding.
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">React</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">TypeScript</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">Node.js</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">AWS</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">Firebase</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">MongoDB</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">GraphQL</Badge>
            <Badge className="bg-indigo-100 text-idea hover:bg-indigo-200">DevOps</Badge>
          </div>
        </div>
        
        {/* Interests Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Interested In</h2>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-orange-100 text-investor hover:bg-orange-200">Fintech</Badge>
            <Badge className="bg-orange-100 text-investor hover:bg-orange-200">AI/ML</Badge>
            <Badge className="bg-orange-100 text-investor hover:bg-orange-200">EdTech</Badge>
            <Badge className="bg-orange-100 text-investor hover:bg-orange-200">SaaS</Badge>
            <Badge className="bg-orange-100 text-investor hover:bg-orange-200">Blockchain</Badge>
          </div>
        </div>
        
        {/* Looking For Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Looking For</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="mt-1 min-w-4">•</div>
              <div>Early-stage startups with innovative ideas in tech</div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 min-w-4">•</div>
              <div>Remote-friendly roles with equity compensation</div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 min-w-4">•</div>
              <div>Opportunity to build products from the ground up</div>
            </li>
          </ul>
        </div>
      </div>
      
      <BottomNav activeTab="profile" />
    </div>
  );
};

export default Profile;
