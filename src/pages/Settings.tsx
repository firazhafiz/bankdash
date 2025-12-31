import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Select } from "../components/ui/select";
import { Pencil } from "lucide-react";

export default function Settings() {
  return (
    <div className="bg-white rounded-[25px] p-[30px] min-h-[600px]">
      <Tabs defaultValue="edit-profile">
        <TabsList className="flex w-full border-b border-[#F4F5F7] md:justify-start md:gap-[50px]">
          <TabsTrigger
            value="edit-profile"
            className="flex-1 md:flex-none pb-4 text-[13px] sm:text-[16px]"
          >
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="preference"
            className="flex-1 md:flex-none pb-4 text-[13px] sm:text-[16px]"
          >
            <span className="md:hidden">Preference</span>
            <span className="hidden md:inline">Preferences</span>
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="flex-1 md:flex-none pb-4 text-[13px] sm:text-[16px]"
          >
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="edit-profile">
          <div className="flex flex-col md:flex-row gap-[50px] mt-[40px]">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="h-[130px] w-[130px] rounded-full object-cover"
                />
                <button className="absolute bottom-1 right-1 bg-[#1814F3] h-[30px] w-[30px] rounded-full flex items-center justify-center text-white">
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
            </div>

            <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-5">
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Your Name
                </label>
                <Input
                  placeholder="Charlene Reed"
                  defaultValue="Charlene Reed"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  User Name
                </label>
                <Input
                  placeholder="Charlene Reed"
                  defaultValue="Charlene Reed"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Email
                </label>
                <Input
                  placeholder="charlenereed@gmail.com"
                  defaultValue="charlenereed@gmail.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Password
                </label>
                <Input placeholder="**********" type="password" />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Date of Birth
                </label>
                <Select
                  options={[{ value: "25 Jan 1990", label: "25 January 1990" }]}
                  placeholder="25 January 1990"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Present Address
                </label>
                <Input
                  placeholder="San Jose, California, USA"
                  defaultValue="San Jose, California, USA"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Permanent Address
                </label>
                <Input
                  placeholder="San Jose, California, USA"
                  defaultValue="San Jose, California, USA"
                />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  City
                </label>
                <Input placeholder="San Jose" defaultValue="San Jose" />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Postal Code
                </label>
                <Input placeholder="45962" defaultValue="45962" />
              </div>
              <div className="space-y-3">
                <label className="text-base font-medium text-[#232323]">
                  Country
                </label>
                <Input placeholder="USA" defaultValue="USA" />
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <Button type="submit" className="w-[190px]  text-lg rounded-xl">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="preference">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-6 mt-8">
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Currency
              </label>
              <Select
                options={[{ value: "usd", label: "USD" }]}
                placeholder="USD"
              />
            </div>
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Time Zone
              </label>
              <Select
                options={[
                  {
                    value: "pst",
                    label: "(GMT-12:00) International Date Line West",
                  },
                ]}
                placeholder="(GMT-12:00) International Date Line West"
              />
            </div>

            <div className="md:col-span-2 space-y-4 mt-2">
              <h3 className="text-base font-medium text-[#343C6A] mb-4">
                Notification
              </h3>

              <div className="flex items-center gap-4">
                <Switch
                  defaultChecked
                  className="data-[state=checked]:bg-[#16DBCC]"
                />
                <div>
                  <p className="text-base text-[#232323] font-normal">
                    I send or receive digita currency
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Switch className="data-[state=checked]:bg-[#16DBCC]" />
                <div>
                  <p className="text-base text-[#232323] font-normal">
                    I receive merchant order
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Switch
                  defaultChecked
                  className="data-[state=checked]:bg-[#16DBCC]"
                />
                <div>
                  <p className="text-base text-[#232323] font-normal">
                    There are recommendation for my account
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <Button
                type="submit"
                className="w-[190px] h-[50px] text-[18px] rounded-[15px]"
              >
                Save
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="mt-8 space-y-8">
            <h3 className="text-[18px] font-medium text-[#343C6A]">
              Two-factor Authentication
            </h3>
            <div className="flex items-center gap-6">
              <Switch defaultChecked />
              <p className="text-base text-[#232323]">
                Enable or disable two factor authentication
              </p>
            </div>

            <h3 className="text-[18px] font-medium text-[#343C6A]">
              Change Password
            </h3>
            <form className="space-y-5">
              <div className="space-y-3 max-w-md">
                <label className="text-base font-medium text-[#232323]">
                  Current Password
                </label>
                <Input placeholder="**********" type="password" />
              </div>
              <div className="space-y-3 max-w-md">
                <label className="text-base font-medium text-[#232323]">
                  New Password
                </label>
                <Input placeholder="**********" type="password" />
              </div>
              <div className="flex justify-end mt-6">
                <Button type="submit" className="w-[190px]  text-lg rounded-xl">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
