import React from "react";
import { useNavigate } from "react-router-dom";
import StepPanel from "../register/StepPanel";
import Button from "../../components/ui/Button";

const steps = [
  { title: "Restaurant information", description: "Name, location and contact number", icon: "🍽️" },
  { title: "Menu & operational details", description: "Service type, cuisines, and hours", icon: "📋" },
  { title: "Bank & GST details", description: "Legal and bank information", icon: "🏦" },
  { title: "Finalize & publish", description: "Review & submit your registration", icon: "✅" },
  { title: "Wait for Admin Approval", description: "Your registration is under review", icon: "⏳" },
];

const StepFour = ({ data, currentStep, next }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Backend submission logic can go here
    next();
  };

  return (
    <div className="min-h-screen bg-light flex gap-10 px-10 py-10">

      {/* LEFT PANEL */}
      <StepPanel steps={steps} currentStep={currentStep} onContinue={handleSubmit} />

      {/* RIGHT REVIEW SECTION */}
      <div className="w-2/3 space-y-10 pb-32">
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-kitchen text-white">
            <h2 className="text-xl font-semibold">Review & Submit</h2>
            <p className="text-sm opacity-90">Please verify all your details before submitting</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5 text-dark text-sm">
            <div className="space-y-2">
              <p><b>Service Type:</b> {data.serviceType}</p>
              <p><b>Owner:</b> {data.ownerName}</p>
              <p><b>Restaurant Name:</b> {data.kitchenName || data.restaurantName}</p>
              <p><b>City:</b> {data.city}</p>
              <p><b>Average Price:</b> {data.avgPrice}</p>
            </div>

            <div className="space-y-2">
              <p><b>Operational Hours:</b> {data.openingTime} - {data.closingTime}</p>
              <p><b>Food Type:</b> {data.foodType}</p>
              <p><b>PAN:</b> {data.pan}</p>
              <p><b>GST:</b> {data.gst}</p>
              <p><b>FSSAI:</b> {data.fssai}</p>
              <p><b>Bank Account:</b> {data.account}</p>
              <p><b>IFSC:</b> {data.ifsc}</p>
            </div>
          </div>

          <div className="flex justify-between mt-8 px-8 pb-8">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit Registration
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepFour;
