import React from "react";
import StepPanel from "./StepPanel";

const steps = [
  { title: "Restaurant information", description: "Name, location and contact number", icon: "🍽️" },
  { title: "Menu & operational details", description: "Service type, cuisines, and hours", icon: "📋" },
  { title: "Bank & GST details", description: "Legal and bank information", icon: "🏦" },
  { title: "Finalize & publish", description: "Review & submit your registration", icon: "✅" },
  { title: "Wait for Admin Approval", description: "Your registration is under review", icon: "⏳" },
];

const WaitForAdminApprove = ({ currentStep }) => {
  return (
    <div className="min-h-screen bg-light flex gap-10 px-10 py-10">
      
      {/* LEFT PANEL */}
      <StepPanel steps={steps} currentStep={currentStep} />

      {/* RIGHT APPROVAL SECTION */}
      <div className="w-2/3 flex justify-center items-center">
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray p-12 text-center space-y-6">
          <div className="text-8xl animate-pulse">⏳</div>
          <h2 className="text-3xl font-semibold">Waiting for Admin Approval</h2>
          <p className="text-dark text-lg">
            Your registration has been submitted successfully. Our admin team will review your details and approve your account shortly.
          </p>
          <p className="text-gray text-sm">
            You will receive an email notification once your account is approved. This process usually takes 1-2 business days.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WaitForAdminApprove;
