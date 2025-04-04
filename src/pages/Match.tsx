import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, Users, Sparkles } from "lucide-react";
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

const TripleMatchCard = ({ 
  idea, 
  investor, 
  developer, 
  projectName,
  isNew = false 
}: { 
  idea: { name: string; image: string };
  investor: { name: string; image: string };
  developer: { name: string; image: string };
  projectName: string;
  isNew?: boolean;
}) => {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{projectName}</h3>
          <Badge className="bg-gradient-to-r from-idea via-investor to-developer text-xs">Match Triplo</Badge>
          {isNew && <Badge className="bg-green-500 text-xs">Novo</Badge>}
        </div>
        
        <Button size="sm" className="gap-1">
          <MessageSquare className="h-4 w-4" />
          Chat em Grupo
        </Button>
      </div>
      
      <div className="flex items-center justify-around p-2 bg-gray-50 rounded-lg">
        <div className="flex flex-col items-center">
          <img 
            src={idea.image} 
            alt={idea.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-idea"
          />
          <span className="text-xs mt-1 font-medium">{idea.name}</span>
          <Badge variant="outline" className="text-idea mt-1 text-[10px]">Ideia</Badge>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={investor.image} 
            alt={investor.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-investor"
          />
          <span className="text-xs mt-1 font-medium">{investor.name}</span>
          <Badge variant="outline" className="text-investor mt-1 text-[10px]">Investidor</Badge>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={developer.image} 
            alt={developer.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-developer"
          />
          <span className="text-xs mt-1 font-medium">{developer.name}</span>
          <Badge variant="outline" className="text-developer mt-1 text-[10px]">Desenvolvedor</Badge>
        </div>
      </div>
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
  
  const tripleMatches = [
    {
      id: 1,
      projectName: "Smart AI Analytics",
      idea: {
        name: "Alex Morgan",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      investor: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      developer: {
        name: "Jessica Williams",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      isNew: true
    },
    {
      id: 2,
      projectName: "EcoTech Solutions",
      idea: {
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      investor: {
        name: "Laura Johnson",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      developer: {
        name: "Sophia Garcia",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      },
      isNew: false
    }
  ];
  
  return (
    <div className="min-h-screen pb-16">
      <div className="sticky top-0 bg-white z-20 border-b">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Seus Matches</h1>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Buscar matches" 
              className="pl-9"
            />
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="w-full">
              <TabsTrigger value="all" className="flex-1">Todos</TabsTrigger>
              <TabsTrigger value="triple" className="flex-1 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Triplos
              </TabsTrigger>
              <TabsTrigger value="ideas" className="flex-1">Ideias</TabsTrigger>
              <TabsTrigger value="investors" className="flex-1">Investidores</TabsTrigger>
              <TabsTrigger value="developers" className="flex-1">Desenvolvedores</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="divide-y">
                {matches.length === 0 ? (
                  <EmptyMatchState />
                ) : (
                  matches.map((match) => (
                    <MatchCard
                      key={match.id}
                      name={match.name}
                      image={match.image}
                      role={match.role}
                      lastActive={match.lastActive}
                      isNew={match.isNew}
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="triple">
              <div className="divide-y">
                {tripleMatches.length === 0 ? (
                  <EmptyTripleMatchState />
                ) : (
                  tripleMatches.map((match) => (
                    <TripleMatchCard
                      key={match.id}
                      idea={match.idea}
                      investor={match.investor}
                      developer={match.developer}
                      projectName={match.projectName}
                      isNew={match.isNew}
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="ideas">
              <div className="divide-y">
                {matches.filter(m => m.role === "idea").length === 0 ? (
                  <EmptyMatchState type="idea" />
                ) : (
                  matches.filter(m => m.role === "idea").map((match) => (
                    <MatchCard
                      key={match.id}
                      name={match.name}
                      image={match.image}
                      role={match.role}
                      lastActive={match.lastActive}
                      isNew={match.isNew}
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="investors">
              <div className="divide-y">
                {matches.filter(m => m.role === "investor").length === 0 ? (
                  <EmptyMatchState type="investor" />
                ) : (
                  matches.filter(m => m.role === "investor").map((match) => (
                    <MatchCard
                      key={match.id}
                      name={match.name}
                      image={match.image}
                      role={match.role}
                      lastActive={match.lastActive}
                      isNew={match.isNew}
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="developers">
              <div className="divide-y">
                {matches.filter(m => m.role === "developer").length === 0 ? (
                  <EmptyMatchState type="developer" />
                ) : (
                  matches.filter(m => m.role === "developer").map((match) => (
                    <MatchCard
                      key={match.id}
                      name={match.name}
                      image={match.image}
                      role={match.role}
                      lastActive={match.lastActive}
                      isNew={match.isNew}
                    />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <BottomNav activeTab="matches" />
    </div>
  );
};

const EmptyMatchState = ({ type }: { type?: "idea" | "investor" | "developer" }) => {
  const typeLabel = {
    idea: "criadores de ideias",
    investor: "investidores",
    developer: "desenvolvedores"
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Search className="h-10 w-10 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium mb-2">Nenhum match{type ? ` com ${typeLabel[type]}` : ""} ainda</h3>
      <p className="text-gray-500 mb-4">
        Comece a explorar para encontrar seus matches perfeitos!
      </p>
      <Button>Ir para Explorar</Button>
    </div>
  );
};

const EmptyTripleMatchState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <Users className="h-10 w-10 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium mb-2">Nenhum match triplo ainda</h3>
      <p className="text-gray-500 mb-4">
        Matches triplos ocorrem quando uma ideia, um investidor e um desenvolvedor se conectam!
      </p>
      <Button>Ir para Explorar</Button>
    </div>
  );
};

export default Match;
