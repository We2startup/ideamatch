
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";
import { 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  ArrowLeft,
  Image as ImageIcon,
  Paperclip,
  Smile,
  Mic
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Mock data for the chat
const mockMessages = [
  {
    id: 1,
    sender: "other",
    text: "Hi Sarah, I saw your profile and I'm impressed with your skills! I have a fintech startup idea that I think you'd be perfect for.",
    time: "10:30 AM",
    read: true
  },
  {
    id: 2,
    sender: "me",
    text: "Thanks! I'd love to hear more about your idea. What problem are you trying to solve?",
    time: "10:35 AM",
    read: true
  },
  {
    id: 3,
    sender: "other",
    text: "We're building a platform that helps small businesses manage their cash flow using AI predictions. We already have a basic prototype and some early traction.",
    time: "10:38 AM",
    read: true
  },
  {
    id: 4,
    sender: "me",
    text: "That sounds interesting! I've worked on something similar in my previous role. Have you secured any funding yet?",
    time: "10:42 AM",
    read: true
  },
  {
    id: 5,
    sender: "other",
    text: "We have some angel investment and are preparing for a seed round. Would you be interested in joining as a technical co-founder? We can discuss equity.",
    time: "10:45 AM",
    read: false
  }
];

const MessageBubble = ({ message }: { message: typeof mockMessages[0] }) => {
  const isMe = message.sender === "me";
  
  return (
    <div className={cn(
      "flex mb-4",
      isMe ? "justify-end" : "justify-start"
    )}>
      {!isMe && (
        <Avatar className="mr-2 mt-1">
          <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[75%] px-4 py-2 rounded-2xl",
        isMe 
          ? "bg-idea text-white rounded-tr-none" 
          : "bg-gray-100 text-gray-800 rounded-tl-none"
      )}>
        <p>{message.text}</p>
        <div className={cn(
          "text-xs mt-1 flex justify-end items-center gap-1",
          isMe ? "text-idea-foreground/70" : "text-gray-500"
        )}>
          {message.time}
          {isMe && (
            <span className={cn(
              message.read ? "text-blue-400" : "text-gray-400"
            )}>
              ✓✓
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Chat Header */}
      <div className="sticky top-0 bg-white z-20 border-b">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-medium">Alex Morgan</h3>
              <p className="text-xs text-gray-500">Online • Typing...</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-center my-4">
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-500">
            Today
          </span>
        </div>
        
        {mockMessages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      
      {/* Message Input */}
      <div className="bg-white border-t p-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 relative">
            <Input 
              placeholder="Type a message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="pr-24"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button size="icon" className="bg-idea hover:bg-idea/90 rounded-full h-10 w-10">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <BottomNav activeTab="chat" />
    </div>
  );
};

export default Chat;
