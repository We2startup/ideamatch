
import { Home, Search, Heart, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <div className={cn(
    "flex flex-col items-center gap-1", 
    active ? "text-idea" : "text-gray-500"
  )}>
    <div>{icon}</div>
    <span className="text-xs font-medium">{label}</span>
  </div>
);

interface BottomNavProps {
  activeTab?: 'explore' | 'matches' | 'chat' | 'profile';
}

const BottomNav = ({ activeTab = 'explore' }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-10">
      <div className="flex justify-around items-center">
        <NavItem 
          icon={<Search className="h-5 w-5" />} 
          label="Explore" 
          active={activeTab === 'explore'} 
        />
        <NavItem 
          icon={<Heart className="h-5 w-5" />} 
          label="Matches" 
          active={activeTab === 'matches'} 
        />
        <NavItem 
          icon={<MessageSquare className="h-5 w-5" />} 
          label="Chat" 
          active={activeTab === 'chat'} 
        />
        <NavItem 
          icon={<User className="h-5 w-5" />} 
          label="Profile" 
          active={activeTab === 'profile'} 
        />
      </div>
    </div>
  );
};

export default BottomNav;
