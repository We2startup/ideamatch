
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  ShieldAlert,
  Users,
  Lightbulb,
  Briefcase,
  Code,
  AlertTriangle,
  Filter
} from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button>Back to App</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Users</p>
                <h3 className="text-2xl font-bold">2,458</h3>
              </div>
              <div className="p-3 bg-indigo-100 rounded-full">
                <Users className="h-6 w-6 text-idea" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Idea Creators</p>
                <h3 className="text-2xl font-bold">847</h3>
              </div>
              <div className="p-3 bg-indigo-100 rounded-full">
                <Lightbulb className="h-6 w-6 text-idea" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Investors</p>
                <h3 className="text-2xl font-bold">384</h3>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Briefcase className="h-6 w-6 text-investor" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Developers</p>
                <h3 className="text-2xl font-bold">1,227</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Code className="h-6 w-6 text-developer" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="content">Content Moderation</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex flex-col sm:flex-row gap-4 items-center justify-between">
              <h2 className="text-xl font-semibold">User Management</h2>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search users" className="pl-9 w-full sm:w-64" />
                </div>
                
                <Button variant="outline" size="icon">
                  <Filter className="h-5 w-5" />
                </Button>
                
                <Button>Add User</Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1649972904349-6e44c42644a7' : '1488590528505-98d2b5aba04b'}`}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{i % 2 === 0 ? 'Sarah Johnson' : 'Alex Morgan'}</span>
                        </div>
                      </TableCell>
                      <TableCell>{i % 2 === 0 ? 'sarah.j@example.com' : 'alex.m@example.com'}</TableCell>
                      <TableCell>
                        <Badge className={`
                          ${i % 3 === 0 ? 'bg-idea' : i % 3 === 1 ? 'bg-investor' : 'bg-developer'}
                        `}>
                          {i % 3 === 0 ? 'Idea Creator' : i % 3 === 1 ? 'Investor' : 'Developer'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`
                          ${i % 4 === 0 ? 'border-green-500 text-green-600' : 
                            i % 4 === 1 ? 'border-yellow-500 text-yellow-600' : 
                            i % 4 === 2 ? 'border-red-500 text-red-600' :
                            'border-gray-500 text-gray-600'}
                        `}>
                          {i % 4 === 0 ? 'Active' : 
                           i % 4 === 1 ? 'Pending' : 
                           i % 4 === 2 ? 'Suspended' :
                           'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>{['Jan 12, 2025', 'Feb 25, 2025', 'Mar 03, 2025', 'Apr 18, 2025', 'May 21, 2025'][i]}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Eye className="h-4 w-4" /> View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Edit className="h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              {i % 4 === 2 ? (
                                <>
                                  <UserCheck className="h-4 w-4" /> Activate
                                </>
                              ) : (
                                <>
                                  <UserX className="h-4 w-4" /> Suspend
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                              <Trash2 className="h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">Showing 1-5 of 2,458 users</div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Reports</h2>
              <div className="flex gap-2">
                <Button variant="outline">Export</Button>
                <Button variant="destructive">Clear All</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">
                            {
                              i === 0 ? 'Inappropriate content in profile' :
                              i === 1 ? 'Fake profile/scam attempt' : 
                              'Harassment in chat'
                            }
                          </h3>
                          <Badge variant="outline" className="border-red-500 text-red-600">
                            {
                              i === 0 ? 'Content' :
                              i === 1 ? 'Security' : 
                              'Abuse'
                            }
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {
                            i === 0 ? 'User profile contains inappropriate or misleading information.' :
                            i === 1 ? 'This profile appears to be fake and is attempting to scam users.' : 
                            'User is sending harassing messages to multiple matches.'
                          }
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            Reported by: {i === 0 ? 'Sarah Johnson' : i === 1 ? 'Alex Morgan' : 'Michael Chen'}
                          </div>
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {['Apr 2, 2025', 'Apr 1, 2025', 'Mar 30, 2025'][i]}
                          </div>
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {i === 0 ? '2 reports' : i === 1 ? '5 reports' : '1 report'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Dismiss</Button>
                      <Button variant="destructive" size="sm">Take Action</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Content Moderation</h2>
            
            <div className="space-y-4">
              <div className="p-8 text-center">
                <ShieldAlert className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">AI Moderation Active</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-4">
                  Our AI system is automatically moderating content based on your settings. Review flagged content below.
                </p>
                <Button>View Moderation Settings</Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-3">Recently Flagged Content</h3>
                <p className="text-gray-500 text-center py-6">No recently flagged content to review</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
            <p className="text-gray-500 mb-4">Configure system-wide settings for IdeaMatch</p>
            
            <div className="space-y-6">
              {/* Admin Settings UI would go here */}
              <p className="text-gray-500 text-center py-12">Settings configuration interface will be available in a future update</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
