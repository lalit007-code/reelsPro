import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  ArrowLeft,
  Upload,
  Video,
  ImageIcon,
  Clock,
  Eye,
  Users,
  Plus,
  FileVideo,
  X,
} from "lucide-react";
import Link from "next/link";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/reels" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Reels</span>
          </Link>

          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Play className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ReelsView</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto p-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Your Reel</h1>
          <p className="text-muted-foreground">
            Share your creativity with the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Drag & Drop Zone */}
            <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Drop your video here
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      or click to browse from your device
                    </p>
                    <Button className="mb-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary">MP4</Badge>
                      <Badge variant="secondary">MOV</Badge>
                      <Badge variant="secondary">AVI</Badge>
                      <Badge variant="secondary">Max 100MB</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Preview */}
            <Card className="hidden" id="file-preview">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                    <FileVideo className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium truncate">
                        my-awesome-reel.mp4
                      </h4>
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      15.2 MB • 00:30
                    </p>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Uploading... 75%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reel Details Form */}
            <Card>
              <CardHeader>
                <CardTitle>Reel Details</CardTitle>
                <CardDescription>
                  Add information about your reel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Give your reel an engaging title..."
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell viewers what your reel is about..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Add tags separated by commas (e.g., dance, music, fun)"
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Tags help people discover your content
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="">Select category</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="education">Education</option>
                      <option value="music">Music</option>
                      <option value="dance">Dance</option>
                      <option value="comedy">Comedy</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="sports">Sports</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <select
                      id="visibility"
                      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="public">Public</option>
                      <option value="unlisted">Unlisted</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Thumbnail</CardTitle>
                <CardDescription>
                  Select the perfect frame to represent your reel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          0:{i * 10}s
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Custom Thumbnail
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upload Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Video Quality</p>
                    <p className="text-xs text-muted-foreground">
                      Upload in 1080p or higher for best results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-xs text-muted-foreground">
                      Keep it between 15-60 seconds for maximum engagement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Engagement</p>
                    <p className="text-xs text-muted-foreground">
                      Add trending hashtags to reach more viewers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publishing Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Schedule for later</p>
                    <p className="text-xs text-muted-foreground">
                      Publish at optimal time
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Allow comments</p>
                    <p className="text-xs text-muted-foreground">
                      Let viewers engage
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    defaultChecked
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Allow downloads</p>
                    <p className="text-xs text-muted-foreground">
                      Let others save your reel
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full h-11" size="lg">
                <Upload className="h-4 w-4 mr-2" />
                Publish Reel
              </Button>
              <Button
                variant="outline"
                className="w-full h-11 bg-transparent"
                size="lg"
              >
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
