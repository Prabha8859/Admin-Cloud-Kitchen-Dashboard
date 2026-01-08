import React, { useState } from "react";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/InputField";
import StepPanel from "../register/StepPanel";
import { FaMapMarkerAlt } from "react-icons/fa";

const steps = [
  { title: "Restaurant information", description: "Name, location and contact number", icon: "🍽️" },
  { title: "Menu & operational details", description: "", icon: "📋" },
  { title: "Bank & GST details", description: "", icon: "🏦" },
  { title: "Finalize & publish", description: "", icon: "✅" },
];

const StepOne = ({ next, update, currentStep }) => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    locality: "",
    city: "",
    landmark: "",
    societyName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    update(formData);
    next();
  };

  return (
    <div className="min-h-screen bg-light flex gap-10 px-10 py-10">

      {/* LEFT */}
      <StepPanel
        steps={steps}
        currentStep={currentStep}
        onContinue={handleSubmit}
      />

      {/* RIGHT */}
      <form onSubmit={handleSubmit} className="w-2/3 space-y-10 pb-32">

        {/* SECTION CARD */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray overflow-hidden">
          <div className="px-8 py-5 gradient-orange text-white">
            <h2 className="text-xl font-semibold">Restaurant information</h2>
            <p className="text-sm opacity-90">
              Visible to customers on Kitchen Cloud
            </p>
          </div>

          <div className="p-8 space-y-4">
            <label className="text-sm font-medium text-dark">
              Restaurant name*
            </label>

            <InputField
              className="input-kitchen"
              placeholder="Eg. Padoshi Kitchen"
              value={formData.restaurantName}
              onChange={(e) =>
                setFormData({ ...formData, restaurantName: e.target.value })
              }
              required
            />
          </div>
        </section>

        {/* OWNER */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray p-8">
          <h2 className="text-lg font-semibold text-dark mb-1">
            Owner details
          </h2>
          <p className="text-sm text-gray mb-6">
            Used for official communication
          </p>

          <div className="grid grid-cols-2 gap-5">
            <InputField
              className="input-kitchen"
              placeholder="Owner full name*"
              value={formData.ownerName}
              onChange={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
              required
            />

            <InputField
              type="email"
              className="input-kitchen"
              placeholder="Email address*"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="flex gap-3 mt-5">
            <span className="px-4 py-3 rounded-xl bg-light text-dark text-sm font-medium">
              +91
            </span>
            <InputField
              className="input-kitchen"
              placeholder="Phone number*"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
        </section>

        {/* LOCATION */}
        <section className="bg-white rounded-3xl shadow-sm border border-light-gray p-8">
          <h2 className="text-lg font-semibold text-dark mb-4">
            Restaurant location
          </h2>

          {/* MAP CARD */}
          <div className="rounded-2xl border border-dashed border-light-gray bg-primary-light p-6 flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-medium text-dark">Map location</p>
                <p className="text-sm text-gray">
                  You can update this later
                </p>
              </div>
            </div>

            <button type="button" className="btn-outline">
              Add location
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <InputField
              className="input-kitchen"
              placeholder="Society name (optional)"
              value={formData.societyName}
              onChange={(e) =>
                setFormData({ ...formData, societyName: e.target.value })
              }
            />

            <InputField
              className="input-kitchen"
              placeholder="Shop / Building no."
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <InputField
              className="input-kitchen"
              placeholder="Area / Locality*"
              value={formData.locality}
              onChange={(e) =>
                setFormData({ ...formData, locality: e.target.value })
              }
              required
            />

            <InputField
              className="input-kitchen"
              placeholder="City*"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
          </div>

          <InputField
            className="input-kitchen mt-5"
            placeholder="Nearby landmark (optional)"
            value={formData.landmark}
            onChange={(e) =>
              setFormData({ ...formData, landmark: e.target.value })
            }
          />
        </section>

        {/* ACTION BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-light-gray px-10 py-4 flex justify-end z-50">
          <button type="submit" className="btn-primary px-12">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
