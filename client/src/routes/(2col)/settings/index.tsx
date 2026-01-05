import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google";
// Removed duplicate import
import Avatar from "boring-avatars";
import { EditProfilePictureModal } from "@/components/ui/edit-profile-picture-modal";
import { PreviewProfilePictureModal } from "@/components/ui/preview-profile-picture-modal";
import { PricingCard } from "@/components/ui/pricing-card";
import { BillingHistory } from "@/components/ui/billing-history";
import { IconTrash, IconPencil, IconUpload, IconBrandFacebookFilled, IconBrandAppleFilled, IconBrandChrome, IconUser, IconLock, IconCrown, IconBell, IconUsers, IconMail, IconLink, IconCalendar, IconChevronDown } from "@tabler/icons-react";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/_2col-layout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [active, setActive] = useState("profile");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setShowUploadModal(false);
        setShowPreviewModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreviewCancel = () => {
    setShowPreviewModal(false);
    setShowUploadModal(true);
  };

  const handlePreviewSubmit = () => {
    // TODO: Save the image to the server/state
    setShowPreviewModal(false);
    setPreviewImage(null);
  };

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: <IconUser className="size-5" />,
      content: (
        <div
          className="mt-6 md:mt-8 text-sm rounded-xl md:rounded-2xl bg-white overflow-hidden w-full"
          style={{ border: "var(--border-secondary)" }}
        >
          {/* Header Section with Banner and Profile */}
          <div className="relative">
            {/* Banner Image - 541 X 84 */}
            <div 
              className="relative bg-gradient-to-r from-[#89CFF0] via-[#3FA2F6] to-[#0F67B1] overflow-hidden w-full h-[140px] md:h-[160px]"
            >
              {/* Abstract flowing design - swirling ribbon effect */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" fillOpacity="0.1" />
                    <path d="M0 100 C 50 0 80 0 100 0 V 100 Z" fill="url(#grad2)" />
                     <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0.4 }} />
                        </linearGradient>
                    </defs>
                 </svg>
              </div>
              
              {/* Cover size text - top right */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-lg text-xs text-white font-medium">
                Cover size 541 X 84
              </div>
              
              {/* Edit button - bottom right */}
              <button
                type="button"
                className="absolute bottom-4 right-4 size-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition text-white border border-white/20"
              >
                <IconPencil className="size-4.5" />
              </button>
            </div>

            {/* Profile Section */}
            <div className="px-6 md:px-10 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-[3.25rem]">
                {/* Profile Picture */}
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => setShowUploadModal(true)}
                >
                  <Avatar
                    name="Muhammad Shyed"
                    variant="beam"
                    className="size-28 md:size-[130px] rounded-full border-[6px] border-white shadow-sm group-hover:opacity-90 transition object-cover bg-white"
                  />
                </div>
                {/* Name and Role */}
                <div className="flex flex-col gap-0.5 text-center sm:text-left pb-2">
                  <h2 className="text-xl font-bold text-[#1A1D1F]">Muhammad Shyed</h2>
                  <p className="text-sm font-medium text-[#6F767E]">Designer</p>
                </div>
              </div>
            </div>
          </div>

          <form
            action=""
            method="post"
            className="w-full p-6 md:p-10 flex flex-col gap-6 pt-0"
          >
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="name" className="font-bold text-sm text-[#1A1D1F]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Type Name"
                  className="w-full px-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                />
              </div>
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="email" className="font-bold text-sm text-[#1A1D1F]">
                  Email
                </label>
                <div className="relative w-full">
                    <input
                    type="email"
                    placeholder="Type Email"
                    className="w-full pl-11 pr-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                    />
                    <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1D1F] size-5 stroke-[1.5]" />
                </div>
              </div>
            </div>

            {/* Role & Country */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="role" className="font-bold text-sm text-[#1A1D1F]">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Type Role"
                  className="w-full px-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                />
              </div>
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="country" className="font-bold text-sm text-[#1A1D1F]">
                  Country
                </label>
                <div className="relative w-full"> 
                   {/* Mock Select */}
                    <div className="w-full px-4 py-3.5 bg-[#F4F4F4] rounded-xl text-sm font-medium flex items-center justify-between cursor-pointer text-[#1A1D1F]">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#EA4335] border border-black/5 flex items-center justify-center overflow-hidden">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></div> 
                            </div>
                            <span>Country Select</span>
                        </div>
                        <IconChevronDown className="size-5 text-[#1A1D1F]" />
                    </div>
                </div>
              </div>
            </div>

            {/* Website & Birth Date */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="website" className="font-bold text-sm text-[#1A1D1F]">
                  Website
                </label>
                 <div className="relative w-full">
                    <input
                    type="text"
                    placeholder="Type Website link"
                    className="w-full pl-11 pr-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                    />
                    <IconLink className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1D1F] size-5 stroke-[1.5]" />
                </div>
              </div>
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                 <label htmlFor="birth" className="font-bold text-sm text-[#1A1D1F]">
                  Birth Date
                </label>
                 <div className="relative w-full"> 
                   {/* Mock Date Select */}
                    <div className="w-full pl-11 pr-4 py-3.5 bg-[#F4F4F4] rounded-xl text-sm font-medium flex items-center justify-between cursor-pointer text-[#1A1D1F]">
                         <div className="flex items-center gap-3">
                             <IconCalendar className="text-[#1A1D1F] size-5 stroke-[1.5]" />
                             <span>Select Birthday</span>
                         </div>
                        <IconChevronDown className="size-5 text-[#1A1D1F]" />
                    </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="bio" className="font-bold text-sm text-[#1A1D1F]">
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                placeholder="Type Bio"
                className="w-full p-4 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] h-40 resize-none text-[#1A1D1F]"
              ></textarea>
            </div>

            {/* Buttons */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                <button className="flex items-center justify-center gap-2 w-full md:w-[320px] py-3.5 text-[#1A1D1F] font-bold text-sm hover:bg-gray-50 rounded-xl border border-[#EFEFEF] transition-colors">
                   <IconTrash className="size-5 stroke-[1.5]" />
                   <span>Delete Account</span>
                </button>

                <button className="bg-[#000000] text-white w-full md:w-[320px] py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-sm">
                    Save
                </button>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "password",
      label: "Password",
      icon: <IconLock className="size-5" />,
      content: (
        <div
          className="mt-6 md:mt-8 text-sm rounded-xl md:rounded-2xl w-full bg-white p-4 md:p-8"
          style={{ border: "var(--border-secondary)" }}
        >
            <div className="mb-6">
              <h1 className="font-bold text-xl mb-1">Password</h1>
              <p className="font-normal text-[#6A6A6A] text-sm">
                Set a password to protect your account
              </p>
            </div>

            {/* Password Form */}
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="current" className="font-bold text-sm">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Type Current Password"
                    className="w-full px-4 py-3 outline-none bg-[#FAFAFA] rounded-xl text-sm border-none placeholder:text-gray-400"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="new" className="font-bold text-sm">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Type New Password"
                    className="w-full px-4 py-3 outline-none bg-[#FAFAFA] rounded-xl text-sm border-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-end gap-5">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="confirm" className="font-bold text-sm">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Type Confirm new Password"
                    className="w-full px-4 py-3 outline-none bg-[#FAFAFA] rounded-xl text-sm border-none placeholder:text-gray-400"
                  />
                </div>
                <div className="w-full">
                   <button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-3 font-medium transition-colors">
                      Save
                   </button>
                </div>
              </div>
            </div>

            {/* Two-Step Verification */}
            <div className="mb-8">
               <h2 className="font-bold text-lg mb-1">Two-Step Verification</h2>
               <div className="flex items-center justify-between">
                  <p className="font-normal text-[#6A6A6A] text-sm max-w-md">
                    We Recommend requiring a verification code in addition to your password
                  </p>
                  <Switch defaultChecked />
               </div>
            </div>

            {/* Connect with this account */}
            <div className="mb-8">
               <h2 className="font-bold text-lg mb-1">Connect with this account</h2>
               <p className="font-normal text-[#6A6A6A] text-sm mb-4">
                 If you connect with this account you easily login this platform.
               </p>
               
               <div className="flex flex-col md:flex-row gap-4">
                  {/* Google Connect */}
                  <div className="w-full flex items-center justify-between bg-[#FAFAFA] p-4 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <GoogleIcon className="size-6" />
                        <span className="font-bold text-sm">Connect Gmail</span>
                     </div>
                     <Switch defaultChecked />
                  </div>

                  {/* Facebook Connect */}
                  <div className="w-full flex items-center justify-between bg-[#FAFAFA] p-4 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <IconBrandFacebookFilled className="size-6 text-[#1877F2]" />
                        <span className="font-bold text-sm">Connect Facebook</span>
                     </div>
                     <Switch />
                  </div>
               </div>
            </div>

             {/* Browse and device */}
            <div>
               <h2 className="font-bold text-lg mb-1">Browse and device</h2>
               <p className="font-normal text-[#6A6A6A] text-sm mb-6">
                 These Browser and device are currently signed in to your account. remove any update any unauthorised device.
               </p>

               <div className="flex flex-col gap-4">
                  {/* Device 1 */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                     <div className="flex items-center gap-4">
                        <IconBrandAppleFilled className="size-6" />
                        <span className="font-bold text-sm">Shyed MacBook pro</span>
                     </div>
                     <div className="flex items-center gap-6 md:gap-12">
                        <div className="flex items-center gap-2">
                           <div className="size-3 rounded-full bg-red-500"></div>
                           <span className="text-[#6A6A6A] text-xs">Chittagong, Bangladesh</span>
                        </div>
                         <span className="text-[#6A6A6A] text-xs hidden md:block">Current Session</span>
                         <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <IconTrash className="size-5" />
                         </button>
                     </div>
                  </div>

                  {/* Device 2 */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                     <div className="flex items-center gap-4">
                        <IconBrandChrome className="size-6 text-yellow-500" /> {/* Using generic or specific chrome icon */}
                        <span className="font-bold text-sm">Chrome on iPhone 16 Pro Max</span>
                     </div>
                     <div className="flex items-center gap-6 md:gap-12">
                        <div className="flex items-center gap-2">
                           <div className="size-3 rounded-full bg-red-500"></div>
                           <span className="text-[#6A6A6A] text-xs">Chittagong, Bangladesh</span>
                        </div>
                         <span className="text-[#6A6A6A] text-xs hidden md:block">Current Session</span>
                         <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <IconTrash className="size-5" />
                         </button>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      ),
    },
    {
      id: "subscription",
      label: "Subscription",
      icon: <IconCrown className="size-5" />,
      content: (
        <div className="w-full max-w-[1000px] mt-6 md:mt-8 bg-white rounded-xl md:rounded-[18px] shadow-sm p-4 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-6 md:mb-8">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Billing settings</h1>
              <p className="text-sm md:text-base text-gray-500 mt-1">Manage your plan and billing history here</p>
            </div>
            
            <div className="bg-[#F8F9FA] rounded-xl p-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-12 w-full lg:w-auto">
              <div>
                <h3 className="font-bold text-gray-900">Standard Plan / Monthly</h3>
                <p className="text-xs text-gray-400 mt-1">End Date Nov 29</p>
              </div>
              <div className="flex flex-col gap-2 text-sm font-medium underline decoration-1 underline-offset-2">
                <button className="text-[#3F6F62] hover:text-green-700 text-left flex items-center gap-1.5">
                   <IconUpload className="size-3.5" /> Update Subscription
                </button>
                <button className="text-[#3F6F62] hover:text-green-700 text-left flex items-center gap-1.5">
                   <IconTrash className="size-3.5" /> Cancel Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
            <PricingCard
              title="Free Forever"
              description="No minimum commitment pause or cancel anytime"
              price="0$"
              period="/Lifetime"
              theme="blue"
              features={[
                "Ads",
                "Unlimited Project",
                "100 Seat",
                "Management View",
                "Calendar View",
              ]}
              buttons={[{ text: "Register - it's Free", variant: "ghost" }]}
            />
            <PricingCard
              title="Monthly"
              description="No minimum commitment pause or cancel anytime"
              price="19$"
              period="/month"
              theme="green"
              features={[
                "Without Ads",
                "Unlimited Project",
                "Unlimited Seat",
                "Management View",
                "Calendar View",
                "Chat View",
              ]}
              buttons={[
                { text: "Get Started", variant: "primary" },
                { text: "Contact to sales", variant: "secondary" },
              ]}
            />
            <PricingCard
              title="Yearly"
              description="No minimum commitment pause or cancel anytime"
              price="199$"
              period="/yearly"
              theme="orange"
              features={[
                "Without Ads",
                "Unlimited Project",
                "Unlimited Seat",
                "Management View",
                "Calendar View",
                "Chat View",
              ]}
              buttons={[{ text: "Get Started", variant: "primary" }]}
            />
          </div>

          {/* Billing History */}
          <BillingHistory />
        </div>
      ),
    },
    {
      id: "notification",
      label: "Notification",
      icon: <IconBell className="size-5" />,
      content: (
        <div
          className="mt-6 md:mt-8 text-sm rounded-xl md:rounded-2xl w-full bg-white p-6 md:p-10"
          style={{ border: "var(--border-secondary)" }}
        >
          <div className="mb-8 md:mb-10">
            <h1 className="font-bold text-xl md:text-2xl text-[#1A1D1F]">Notification settings</h1>
            <p className="font-medium text-[#6F767E] mt-2">
              Select the kinds of notification you get about your activities
              and recommendations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-20">
            {/* Email Notification Column */}
            <div className="flex-1 w-full flex flex-col gap-8">
              <h2 className="font-bold text-lg text-[#1A1D1F]">Email notification</h2>
              
              {/* Item 1 */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5 max-w-[300px]">
                  <h3 className="font-bold text-[#1A1D1F]">Comments</h3>
                  <p className="text-xs font-medium text-[#9A9FA5] leading-relaxed">
                    These are notifications for your posts and replies to your
                    comments.
                  </p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#34A853]" />
              </div>

              {/* Item 2 */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5 max-w-[300px]">
                  <h3 className="font-bold text-[#1A1D1F]">Tags / Mention</h3>
                  <p className="text-xs font-medium text-[#9A9FA5] leading-relaxed">
                    These are notifications for when some one tags you in a
                    comment for post or story.
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-[#34A853]" />
              </div>

              {/* Item 3 */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5 max-w-[300px]">
                  <h3 className="font-bold text-[#1A1D1F]">Calendars</h3>
                  <p className="text-xs font-medium text-[#9A9FA5] leading-relaxed">
                    These are notifications to remind you of updates you might
                    have missed
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-[#34A853]" />
              </div>
            </div>

            {/* Message Notification Column */}
            <div className="flex-1 w-full flex flex-col gap-8">
              <h2 className="font-bold text-lg text-[#1A1D1F]">Message notification</h2>
              
              {/* Item 1 */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5 max-w-[300px]">
                  <h3 className="font-bold text-[#1A1D1F]">Message Chat</h3>
                  <p className="text-xs font-medium text-[#9A9FA5] leading-relaxed">
                    These are notifications for your Chat and replies to your
                    Messages.
                  </p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#34A853]" />
              </div>

              {/* Item 2 */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5 max-w-[300px]">
                  <h3 className="font-bold text-[#1A1D1F]">Task Chat</h3>
                  <p className="text-xs font-medium text-[#9A9FA5] leading-relaxed">
                    These are notifications for your Chat and replies to your
                    Messages.
                  </p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#34A853]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "community",
      label: "Community",
      icon: <IconUsers className="size-5" />,
      content: (
        <div
          className="mt-6 md:mt-8 text-sm rounded-xl md:rounded-2xl bg-white overflow-hidden w-full"
          style={{ border: "var(--border-secondary)" }}
        >
          {/* Header Section with Banner and Profile */}
          <div className="relative">
            {/* Banner Image */}
            <div 
              className="relative bg-gradient-to-r from-[#89CFF0] via-[#3FA2F6] to-[#0F67B1] overflow-hidden w-full h-[140px] md:h-[160px]"
            >
              {/* Abstract flowing design */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" fillOpacity="0.1" />
                    <path d="M0 100 C 50 0 80 0 100 0 V 100 Z" fill="url(#grad3)" />
                     <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0.4 }} />
                        </linearGradient>
                    </defs>
                 </svg>
              </div>
              
              {/* Cover size text */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-lg text-xs text-white font-medium">
                Cover size 541 X 84
              </div>
              
              {/* Edit button */}
              <button
                type="button"
                className="absolute bottom-4 right-4 size-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition text-white border border-white/20"
              >
                <IconPencil className="size-4.5" />
              </button>
            </div>

            {/* Profile/Community Info Section */}
            <div className="px-6 md:px-10 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-[3.25rem]">
                {/* Community Logo/Avatar */}
                <div 
                  className="relative cursor-pointer group"
                >
                  <div className="size-28 md:size-[130px] rounded-full border-[6px] border-white shadow-sm bg-black flex items-center justify-center group-hover:opacity-90 transition">
                     <span className="text-white font-bold text-4xl">M</span> {/* Placeholder Logo */}
                  </div>
                </div>
                {/* Name and Role */}
                <div className="flex flex-col gap-0.5 text-center sm:text-left pb-2">
                  <h2 className="text-xl font-bold text-[#1A1D1F]">MSH Studio Agency</h2>
                  <p className="text-sm font-medium text-[#6F767E]">UI/UX Studio</p>
                </div>
              </div>
            </div>
          </div>

          <form
            action=""
            method="post"
            className="w-full p-6 md:p-10 flex flex-col gap-6 pt-0"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="name" className="font-bold text-sm text-[#1A1D1F]">
                  Community Name
                </label>
                <input
                  type="text"
                  placeholder="Type Community Name"
                  className="w-full px-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                />
              </div>
              <div className="w-full md:w-[320px] flex flex-col gap-2.5">
                <label htmlFor="title" className="font-bold text-sm text-[#1A1D1F]">
                  Community Title
                </label>
                <input
                  type="text"
                  placeholder="Type Community Title"
                  className="w-full px-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <label htmlFor="website" className="font-bold text-sm text-[#1A1D1F]">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Type Bio"
                className="w-full p-4 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] h-40 resize-none text-[#1A1D1F]"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
              <button className="flex items-center justify-center gap-2 w-full md:w-[320px] py-3.5 text-[#1A1D1F] font-bold text-sm hover:bg-gray-50 rounded-xl border border-[#EFEFEF] transition-colors">
                 <IconTrash className="size-5 stroke-[1.5]" />
                 <span>Delete Community</span>
              </button>
              <button className="bg-[#000000] text-white w-full md:w-[320px] py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-sm">
                  Save
              </button>
            </div>
          </form>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 font-lufga px-4 md:px-0">
      {/* Tabs */}
      <div
        className="bg-white rounded-lg flex items-center overflow-x-auto scrollbar-hide w-fit max-w-full mx-auto"
        style={{ border: "var(--border-default)" }}
      >
        <div className="flex items-center min-w-max">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 m-1.5 rounded-md cursor-pointer whitespace-nowrap text-sm md:text-base font-medium transition-colors ${
                active === tab.id ? "bg-[#F4F4F4]" : "hover:bg-[#F4F4F4]"
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Active content */}
      <div>{tabs.find((tab) => tab.id === active)?.content}</div>

      {/* Upload Modal */}
      <EditProfilePictureModal
        isOpen={showUploadModal}
        onOpenChange={setShowUploadModal}
        onFileSelect={handleFileSelect}
      />

      {/* Preview Modal */}
      <PreviewProfilePictureModal
        isOpen={showPreviewModal}
        onOpenChange={setShowPreviewModal}
        previewImage={previewImage}
        onCancel={handlePreviewCancel}
        onSubmit={handlePreviewSubmit}
      />
    </div>
  );
}

