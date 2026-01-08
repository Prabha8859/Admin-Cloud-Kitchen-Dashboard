import React, { useState } from "react";
import StepPanel from "../register/StepPanel";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";

const steps = [
  { title: "Restaurant information", description: "Name, location and contact number", icon: "🍽️" },
  { title: "Menu & operational details", description: "Service type, cuisines, and hours", icon: "📋" },
  { title: "Bank & GST details", description: "Legal and bank information", icon: "🏦" },
  { title: "Finalize & publish", description: "", icon: "✅" },
];

const StepThree = ({ next, back, update, currentStep }) => {
  const [formData, setFormData] = useState({
    pan: '',
    gst: '',
    fssai: '',
    account: '',
    ifsc: '',
  });

  const submit = (e) => {
    e.preventDefault();
    update(formData);
    next();
  };

  return (
    <div className="min-h-screen bg-light flex gap-10 px-10 py-10">
      {/* LEFT PANEL */}
      <StepPanel steps={steps} currentStep={currentStep} onContinue={submit} />

      {/* RIGHT FORM */}
      <form onSubmit={submit} className="w-2/3 space-y-10 pb-32">

        {/* Legal Documents */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-orange text-white">
            <h2 className="text-xl font-semibold">Legal documents</h2>
          </div>

          <div className="p-8 space-y-4">
            <InputField
              className="input-kitchen"
              name="pan"
              placeholder="PAN number*"
              value={formData.pan}
              onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
              required
            />

            <InputField
              className="input-kitchen"
              name="gst"
              placeholder="GST number (optional)"
              value={formData.gst}
              onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
            />

            <InputField
              className="input-kitchen"
              name="fssai"
              placeholder="FSSAI license number*"
              value={formData.fssai}
              onChange={(e) => setFormData({ ...formData, fssai: e.target.value })}
              required
            />
          </div>
        </section>

        {/* Bank Details */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-blue text-white">
            <h2 className="text-xl font-semibold">Bank details</h2>
          </div>

          <div className="p-8 space-y-4">
            <InputField
              className="input-kitchen"
              name="account"
              placeholder="Account number*"
              value={formData.account}
              onChange={(e) => setFormData({ ...formData, account: e.target.value })}
              required
            />

            <InputField
              className="input-kitchen"
              name="ifsc"
              placeholder="IFSC code*"
              value={formData.ifsc}
              onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
              required
            />

            <div className="h-24 border-dashed border-2 rounded-xl flex items-center justify-center mt-4 bg-primary-light text-gray-500 font-medium">
              Upload cancelled cheque
            </div>
          </div>
        </section>

        {/* SUBMIT / BACK */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-light-gray px-10 py-4 flex justify-between z-50">
          <Button type="button" variant="secondary" onClick={back}>
            Back
          </Button>
          <Button type="submit" variant="primary">
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
