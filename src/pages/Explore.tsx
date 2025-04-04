
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BottomNav from "@/components/BottomNav";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Star, 
  Filter, 
  Briefcase, 
  Code, 
  Lightbulb,
  X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SwipeCard = () => {
  return (
    <div className="swipe-card w-full max-w-sm mx-auto aspect-[3/4] select-none">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
        alt="Startup idea"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-bold">Smart AI Analytics</h2>
          <Badge className="bg-idea">Idea</Badge>
        </div>
        <p className="text-sm mb-4 opacity-90">A platform that uses AI to analyze business data and provide actionable insights for small businesses.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-white bg-white/10 border-white/20">AI</Badge>
          <Badge variant="outline" className="text-white bg-white/10 border-white/20">Analytics</Badge>
          <Badge variant="outline" className="text-white bg-white/10 border-white/20">Business</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-75">
          <Briefcase className="h-4 w-4" />
          <span>Seeking: $250k investment & developers</span>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Filter Bar */}
      <div className="sticky top-0 bg-white z-20 border-b">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Filter className="h-5 w-5" />
            </Button>
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="ideas">
                  <div className="flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-idea" />
                    Ideas
                  </div>
                </SelectItem>
                <SelectItem value="investors">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-investor" />
                    Investors
                  </div>
                </SelectItem>
                <SelectItem value="developers">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-developer" />
                    Developers
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Swipe Area */}
      <div className="max-w-md mx-auto py-8 px-4">
        <SwipeCard />

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="outline" size="lg" className="rounded-full h-16 w-16">
            <X className="h-8 w-8 text-red-500" />
          </Button>
          <Button size="lg" className="rounded-full h-16 w-16 bg-idea hover:bg-idea/90">
            <Star className="h-8 w-8" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full h-16 w-16">
            <ThumbsUp className="h-8 w-8 text-green-500" />
          </Button>
        </div>
      </div>

      <BottomNav activeTab="explore" />
    </div>
  );
};

export default Explore;
