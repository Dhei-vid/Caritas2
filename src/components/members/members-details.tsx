"use client";

import { FC } from "react";
import { IMembers } from "@/common/types";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IMembersDetails {
  data?: IMembers;
}

const MembersDetails: FC<IMembersDetails> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button
            variant={"default"}
            className={
              "bg-white w-12 h-12 rounded-full shadow-2xl absolute top-5 cursor-pointer transition-all ease-in-out hover:scale-125 duration-300 right-5"
            }
          >
            <Plus className={"text-primary-500"} size={30} strokeWidth={3} />
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-accent-100">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className={"flex flex-col gap-4"}>
            <p className={"text-base md:text-xl text-gray-800"}>{data?.name}</p>
            <p className={"text-base md:text-xl text-gray-800"}>
              Joined in {data?.yearJoined}
            </p>
            <p className={"text-base md:text-xl text-gray-800"}>
              {data?.profession} by Profession
            </p>
            <p className={"text-base md:text-xl text-gray-800"}>
              Home Parish is {data?.homeParish}
            </p>
            <p className={"text-base md:text-xl text-gray-800"}>
              Domiciliary Parish is {data?.domParish}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembersDetails;
