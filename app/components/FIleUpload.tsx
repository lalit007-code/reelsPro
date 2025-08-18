import { Loader2 } from "lucide-react";
import { IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { useState } from "react";

interface FileUploadProps {
  onSuccess: (res: IKUploadResponse) => void;
  onProgress?: (progress: number) => void;
  fileType?: "image" | "video";
}

export default function FileUpload({
  onSuccess,
  onProgress,
  fileType = "image",
}: FileUploadProps) {
  //   const iKUploadRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onError = (err: { message: string }) => {
    console.log("Error", err);
    setError(err.message);
    setUploading(false);
  };

  const handleSuccess = (response: IKUploadResponse) => {
    console.log("Success", response);
    setUploading(false);
    setError(null);
    onSuccess(response);
  };

  const handleProgress = (evt: ProgressEvent) => {
    if (evt.lengthComputable && onProgress) {
      const percentComplete = (evt.loaded / evt.total) * 100;
      onProgress(Math.round(percentComplete));
    }
  };

  const handleStartUpload = () => {
    setUploading(true);
    setError(null);
  };

  //validating file
  const validateFile = (file: File) => {
    //checkinig the type of file
    if (fileType === "video") {
      if (!file.type.startsWith("video/")) {
        setError("please upload a video file");
        return false;
      }
      //checking the   size format
      if (file.size > 100 * 1024 * 1024) {
        setError("Video must be less than 100mb");
        return false;
      }
    } else {
      const validImageType = ["image/jpeg", "image/png", "image/webp"];
      if (!validImageType.includes(file.type)) {
        setError("please uppload a valid image file(JPEG, PNG, webP)");
        return false;
      }
      //checking the   size format
      if (file.size > 5 * 1024 * 1024) {
        setError("image must be less than 5mb");
        return false;
      }
    }
    return false;
  };
  return (
    <div className="space-y-2">
      <IKUpload
        fileName={fileType === "video" ? "video" : "image"}
        useUniqueFileName={true}
        validateFile={validateFile}
        onError={onError}
        onSuccess={handleSuccess}
        onUploadProgress={handleProgress}
        onUploadStart={handleStartUpload}
        folder={fileType === "video" ? "/videos" : "/images"}
        className="file-input file-input-bordered w-full"
      >
        {uploading && (
          <div className="flex items-center gap-2 text-sm text-primary">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>uploading...</span>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-error text-sm">{error}</div>
        )}
      </IKUpload>
    </div>
  );
}
