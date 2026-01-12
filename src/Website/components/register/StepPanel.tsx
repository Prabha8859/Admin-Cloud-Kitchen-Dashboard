// src/Website/components/register/StepPanel.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../ui/Button";

// Remove interfaces, use PropTypes or nothing
const StepPanel = ({ steps, currentStep, onContinue }) => {
  return (
    <div className="hidden lg:block w-1/3 min-w-[340px] xl:min-w-[380px]">
      <div className="sticky top-12">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-orange-500/10 border border-orange-100/60 overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="px-8 pt-9 pb-7 border-b border-orange-50 bg-gradient-to-b from-orange-50/40 to-transparent">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
              Registration
            </h3>
            <p className="mt-1.5 text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </p>

            <div className="mt-6 h-1.5 bg-orange-100/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8B4A] transition-all duration-800 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="p-8">
            <div className="space-y-12">
              {steps.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;

                return (
                  <div
                    key={idx}
                    className={`relative pl-14 group transition-all duration-400 ${idx > currentStep ? "opacity-50" : "opacity-100"}`}
                  >
                    <div className="absolute left-0 top-1 flex flex-col items-center">
                      <div
                        className={`
                          relative z-10 w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-400 shadow-sm
                          ${isCompleted
                            ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white scale-100 shadow-md"
                            : isActive
                            ? "bg-gradient-to-br from-[#FF6B35] to-[#FF8B4A] text-white scale-110 shadow-lg shadow-orange-500/30 ring-4 ring-orange-400/20"
                            : "bg-white border-2 border-orange-200 text-gray-400"}
                        `}
                      >
                        {isCompleted ? <FaCheck className="text-base" /> : step.icon}
                      </div>

                      {idx !== steps.length - 1 && (
                        <div className="absolute top-[44px] bottom-[-28px] left-1/2 w-0.5 -translate-x-1/2 bg-orange-100 rounded-full overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-b from-[#FF6B35] to-[#FF8B4A] transition-all duration-700 ease-in-out ${currentStep > idx ? "translate-y-0" : "-translate-y-full"}`}
                          />
                        </div>
                      )}
                    </div>

                    <div className="pt-1.5">
                      <p
                        className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-[#FF6B35]"
                            : isCompleted
                            ? "text-emerald-700"
                            : "text-gray-800 group-hover:text-gray-900"
                        }`}
                      >
                        {step.title}
                      </p>

                      {step.description && (
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed pr-4">
                          {step.description}
                        </p>
                      )}

                      {isActive && (
                        <Button
                          variant="primary"
                          className="mt-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8B4A] hover:from-[#E55A2E] hover:to-[#FF6B35] shadow-lg shadow-orange-500/25 text-white font-medium tracking-wide px-7 py-3 text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                          onClick={onContinue}
                        >
                          Continue →
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPanel;