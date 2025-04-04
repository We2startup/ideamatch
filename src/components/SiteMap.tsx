
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Search, 
  Heart, 
  MessageSquare, 
  User, 
  ShieldCheck 
} from "lucide-react";

const SiteMap = () => {
  const links = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Explore", path: "/explore", icon: <Search className="h-4 w-4" /> },
    { name: "Matches", path: "/match", icon: <Heart className="h-4 w-4" /> },
    { name: "Chat", path: "/chat", icon: <MessageSquare className="h-4 w-4" /> },
    { name: "Profile", path: "/profile", icon: <User className="h-4 w-4" /> },
    { name: "Admin", path: "/admin", icon: <ShieldCheck className="h-4 w-4" /> },
  ];

  return (
    <footer className="w-full py-6 bg-gray-50 text-gray-600 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Map</h3>
          <Separator className="mx-auto max-w-xs" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="mb-2">{link.icon}</div>
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© 2025 IdeaMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteMap;
