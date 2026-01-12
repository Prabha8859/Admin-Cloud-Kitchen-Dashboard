import React, { useState } from "react";
import StepPanel from "../register/StepPanel";
import Button from "../../components/ui/Button";
import InputField from "../ui/InputField";

const steps = [
  { title: "Restaurant information", description: "Name, location and contact number", icon: "🍽️" },
  { title: "Menu & operational details", description: "Service type, cuisines, and hours", icon: "📋" },
  { title: "Bank & GST details", description: "", icon: "🏦" },
  { title: "Finalize & publish", description: "", icon: "✅" },
];

const StepTwo = ({ next, back, update, currentStep }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    cuisines: '',
    avgPrice: '',
    openingTime: '',
    closingTime: '',
    foodType: 'veg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    update(formData);
    next();
  };

  const fillSampleData = () => {
    setFormData({
      serviceType: 'both',
      cuisines: 'North Indian, Chinese',
      avgPrice: '500',
      openingTime: '09:00',
      closingTime: '22:00',
      foodType: 'both',
    });
  };

  return (
    <div className="min-h-screen bg-light flex gap-10 px-10 py-10">
      {/* LEFT PANEL */}
      <StepPanel steps={steps} currentStep={currentStep} onContinue={submit} />

      {/* RIGHT FORM */}
      <form onSubmit={submit} className="w-2/3 space-y-10 pb-32">

        {/* Service & Menu */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-orange text-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Service & Menu details</h2>
            <Button type="button" variant="outline" onClick={fillSampleData}>
              Fill Sample Data
            </Button>
          </div>

          <div className="p-8 space-y-5">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="input-kitchen w-full"
              required
            >
              <option value="">Select service type*</option>
              <option value="both">Delivery & Dining</option>
              <option value="delivery">Delivery only</option>
              <option value="dining">Dining only</option>
            </select>

            <InputField
              className="input-kitchen"
              name="cuisines"
              value={formData.cuisines}
              onChange={handleChange}
              placeholder="Cuisines (e.g. North Indian, Chinese)*"
              required
            />

            <InputField
              className="input-kitchen"
              name="avgPrice"
              value={formData.avgPrice}
              onChange={handleChange}
              placeholder="Average price for two (₹)*"
              required
            />
          </div>
        </section>

        {/* Operational Hours */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-blue text-white">
            <h2 className="text-xl font-semibold">Operational Hours</h2>
          </div>

          <div className="p-8 space-y-5">
            <div className="flex gap-5">
              <InputField
                className="input-kitchen"
                type="time"
                name="openingTime"
                value={formData.openingTime}
                onChange={handleChange}
                required
              />
              <InputField
                className="input-kitchen"
                type="time"
                name="closingTime"
                value={formData.closingTime}
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="input-kitchen w-full"
            >
              <option value="veg">Veg only</option>
              <option value="nonveg">Non-veg</option>
              <option value="both">Veg & Non-veg</option>
            </select>
          </div>
        </section>

        {/* SUBMIT / BACK */}
        <div className="fixed bottom-0 left-0 right-0  px-10 py-4 flex justify-between z-50">
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

export default StepTwo;
