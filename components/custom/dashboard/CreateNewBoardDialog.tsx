import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function CreateNewBoardDailog() {

  const [WORKSPACE_NAME, SETWORKSPACENAME] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [dailog, setDialog] = React.useState(false);


  const router = useRouter();
  const projectId = crypto.randomUUID();
  const handleCreateWorkSpace = async () => {
    setIsLoading(true);
    if(WORKSPACE_NAME.trim() === "" || WORKSPACE_NAME?.length>30){
      toast.add(
        {
          type: "error",
          title: "Invalid Workspace Name",
          description: "Please enter a valid workspace name (1-30 characters)."
        }
      );
      setIsLoading(false);
      return;
    }

    const result = await axios.post("/api/projects", {
      projectId: projectId,
      projectName: WORKSPACE_NAME,
    })
    if(result.status === 200){
      toast.add(
        {
          type: "success",
          title: "Workspace Created",
          description: "Your workspace has been created successfully."
        }
      );
      SETWORKSPACENAME("");
    }
    setIsLoading(false);
    setDialog(false);
    router.push(`/projects/${projectId}`);
  }
  return (
      <Dialog open={dailog} onOpenChange={setDialog}>
        <DialogTrigger >
          <button className="bg-blue-500 w-full  text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
            <Plus /> Create New Board
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              WhiteeBoard Workspace Name
            </DialogTitle>
          </DialogHeader>
          <div>
            <label
              htmlFor="workspace-name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Workspace Name
            </label>
            <Input 
              id="workspace-name"
              placeholder="Enter workspace name"
              value={WORKSPACE_NAME}
              onChange={(e) => SETWORKSPACENAME(e.target.value)}
            />
          </div>
          <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button type="button">Close</Button>} />
          <Button
          disabled ={WORKSPACE_NAME?.length<3}
          onClick={handleCreateWorkSpace}
          >{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
             Create Workspace</Button>
        </DialogFooter>
        </DialogContent>
        
      </Dialog>
  
  );
}

export default CreateNewBoardDailog;
