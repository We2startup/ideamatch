
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatchCard = ({ 
  name, 
  image, 
  role, 
  lastActive, 
  isNew = false 
}: { 
  name: string;
  image: string;
  role: "idea" | "investor" | "developer";
  lastActive: string;
  isNew?: boolean;
}) => {
  const roleColor = {
    idea: "bg-idea",
    investor: "bg-investor",
    developer: "bg-developer"
  };
  
  const roleLabel = {
    idea: "Idea Creator",
    investor: "Investor",
    developer: "Developer"
  };
  
  return (
    <div className="flex items-center p-4 border-b">
      <div className="relative mr-4">
        <img 
          src={image} 
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        {isNew && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{name}</h3>
          <Badge className={`${roleColor[role]} text-xs`}>{roleLabel[role]}</Badge>
          {isNew && <Badge className="bg-green-500 text-xs">New</Badge>}
        </div>
        <p className="text-sm text-gray-500">Last active: {lastActive}</p>
      </div>
      
      <Button size="sm" className="gap-1">
        <MessageSquare className="h-4 w-4" />
        Chat
      </Button>
    </div>
  );
};

const Match = () => {
  const matches = [
    {
      id: 1,
      name: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      role: "idea" as const,
      lastActive: "Just now",
      isNew: true
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      role: "investor" as const,
      lastActive: "2 hours ago",
      isNew: true
    },
    {
      id: 3,
      name: "Jessica Williams",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      role: "developer" as const,
      lastActive: "Yesterday",
      isNew: false
    },
    {
      id: 4,
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      role: "idea" as const,
      lastActive: "2 days ago",
      isNew: false
    },
    {
      id: 5,
      name: "Sophia Garcia",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      role: "developer" as const,
      lastActive: "3 days ago",
      isNew: false
    }
  ];
  
  return (
    <div className="min-h-screen pb-16">
      <div className="sticky top-0 bg-white z-20 border-b">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Your Matches</h1>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search matches" 
              className="pl-9"
            />
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="ideas" className="flex-1">Ideas</TabsTrigger>
              <TabsTrigger value="investors" className="flex-1">Investors</TabsTrigger>
              <TabsTrigger value="developers" className="flex-1">Developers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="divide-y">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            name={match.name}
            image={match.image}
            role={match.role}
            lastActive={match.lastActive}
            isNew={match.isNew}
          />
        ))}
      </div>
      
      {matches.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No matches yet</h3>
          <p className="text-gray-500 mb-4">
            Start swiping to find your perfect matches!
          </p>
          <Button>Go to Explore</Button>
        </div>
      )}
      
      <BottomNav activeTab="matches" />
    </div>
  );
};

export default Match;
