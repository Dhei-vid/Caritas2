import { TeamToggle } from "@/common/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  membersDataList,
  welfareCommittee,
  financeCommittee,
  projectCommittee,
  managementTeam,
  TrusteesTeam,
} from "@/common/constant";
import MemberCard from "../members/member-card";
import Label from "@/components/ui/label";

export const ToggleMembers = () => {
  return (
    <Tabs className={"py-5"} defaultValue={TeamToggle.ALL}>
      <TabsList
        className={"text-primary-500 mb-8 border border-neutral-200 p-1"}
      >
        <TabsTrigger value={TeamToggle.ALL}>
          All Members ({membersDataList.length})
        </TabsTrigger>
        <TabsTrigger value={TeamToggle.MANAGEMENT}>
          Management ({managementTeam.length})
        </TabsTrigger>
        <TabsTrigger value={TeamToggle.TRUSTEE}>
          Trustees ({TrusteesTeam.length})
        </TabsTrigger>
        <TabsTrigger value={TeamToggle.PROJECT}>
          Project Committee ({projectCommittee.length})
        </TabsTrigger>
        <TabsTrigger value={TeamToggle.FINANCE}>
          Finance Committee ({financeCommittee.length})
        </TabsTrigger>
        <TabsTrigger value={TeamToggle.WELFARE}>
          Welfare Committee ({welfareCommittee.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value={TeamToggle.ALL}>
        <Label label={TeamToggle.ALL} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {membersDataList.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value={TeamToggle.MANAGEMENT}>
        <Label label={TeamToggle.MANAGEMENT} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {managementTeam.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value={TeamToggle.TRUSTEE}>
        <Label label={TeamToggle.TRUSTEE} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {TrusteesTeam.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value={TeamToggle.PROJECT}>
        <Label label={TeamToggle.PROJECT} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {projectCommittee.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value={TeamToggle.FINANCE}>
        <Label label={TeamToggle.FINANCE} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {financeCommittee.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value={TeamToggle.WELFARE}>
        <Label label={TeamToggle.WELFARE} />
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
          {welfareCommittee.map((member) => {
            return (
              <div key={member.id}>
                <MemberCard data={member} />
              </div>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
};
