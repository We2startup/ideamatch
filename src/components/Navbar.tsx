
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  return (
    <header className={`w-full ${transparent ? 'absolute top-0 z-10' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-idea">Idea<span className="text-investor">Match</span></span>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
