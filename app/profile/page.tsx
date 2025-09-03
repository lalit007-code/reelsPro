import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Share,
  MoreHorizontal,
  Grid3X3,
  Bookmark,
  Heart,
  Play,
} from "lucide-react";

const userStats = [
  { label: "Following", value: "248" },
  { label: "Followers", value: "12.5K" },
  { label: "Likes", value: "89.2K" },
];

const userReels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  thumbnail: `/placeholder.svg?height=300&width=200&query=user-reel-${i + 1}`,
  views: Math.floor(Math.random() * 100) + 10 + "K",
  likes: Math.floor(Math.random() * 50) + 5 + "K",
}));

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage src="/placeholder.svg?height=96&width=96" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">@johndoe</p>
            <p className="text-sm mt-2 max-w-md mx-auto">
              Content creator sharing daily life moments and creative ideas ✨
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8">
            {userStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-3">
            <Button className="flex-1 max-w-32">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="reels" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reels" className="flex items-center space-x-2">
              <Grid3X3 className="h-4 w-4" />
              <span>Reels</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center space-x-2">
              <Bookmark className="h-4 w-4" />
              <span>Saved</span>
            </TabsTrigger>
            <TabsTrigger value="liked" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Liked</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reels" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {userReels.map((reel) => (
                <Card
                  key={reel.id}
                  className="aspect-[9/16] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="relative h-full bg-gradient-to-b from-transparent to-black/60">
                    <img
                      src={reel.thumbnail || "/placeholder.svg"}
                      alt={`Reel ${reel.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between text-white text-xs">
                        <div className="flex items-center space-x-1">
                          <Play className="h-3 w-3" />
                          <span>{reel.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{reel.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No saved reels yet</h3>
              <p className="text-muted-foreground">
                Reels you save will appear here
              </p>
            </div>
          </TabsContent>

          <TabsContent value="liked" className="mt-6">
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No liked reels yet</h3>
              <p className="text-muted-foreground">
                Reels you like will appear here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
