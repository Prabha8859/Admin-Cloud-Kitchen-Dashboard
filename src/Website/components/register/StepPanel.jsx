import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../../components/ui/Button";

const StepPanel = ({ steps, currentStep, onContinue }) => {
  return (
    <div className="w-1/3 flex flex-col">
      <div className="sticky top-8 flex flex-col">
        <div className="bg-white rounded-3xl p-6 shadow-sm border flex flex-col">
          {/* HEADER */}
          <h3 className="text-lg font-semibold mb-1 text-dark">
            Complete your registration
          </h3>
          <p className="text-sm text-gray mb-6">
            Step {currentStep + 1} of {steps.length}
          </p>

          {/* STEPS */}
          <div className="flex-1 overflow-y-auto pr-2 -mr-2">
            <div className="space-y-8">
              {steps.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;

                return (
                  <div key={idx} className="flex gap-4 relative">
                    {/* ICON + LINE */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                          ${
                            isCompleted
                              ? "bg-green-500 text-white"
                              : isActive
                              ? "bg-primary text-white ring-4 ring-primary/20"
                              : "bg-white border-2 border-light-gray text-gray-400"
                          }
                        `}
                      >
                        {isCompleted ? <FaCheck className="text-sm" /> : step.icon}
                      </div>

                      {idx !== steps.length - 1 && (
                        <div className="w-0.5 flex-1 relative mt-2">
                          <div className="bg-light-gray w-full h-full rounded-full" />
                          <div
                            className="absolute inset-x-0 top-0 bg-primary transition-all duration-700 origin-top rounded-full"
                            style={{
                              height: currentStep > idx ? "100%" : "0%",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* TEXT */}
                    <div className={`pt-1 ${idx > currentStep ? "opacity-60" : ""}`}>
                      <p
                        className={`font-medium transition-colors
                          ${
                            isActive
                              ? "text-primary"
                              : isCompleted
                              ? "text-green-600"
                              : "text-gray-700"
                          }
                        `}
                      >
                        {step.title}
                      </p>

                      {step.description && (
                        <p className="text-sm text-gray mt-1">{step.description}</p>
                      )}

                      {isActive && (
                        <Button
                          className="mt-4 text-sm px-5 py-2"
                          variant="primary"
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
