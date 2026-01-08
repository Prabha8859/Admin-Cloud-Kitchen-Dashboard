import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import OtpVerification from "../../components/register/OtpVerification";
import Services from "../../components/register/Services";
import StepOne from "../../components/register/StepOne";
import StepTwo from "../../components/register/StepTwo";
import StepThree from "../../components/register/StepThree";
import StepFour from "../../components/register/StepFour";
import WaitForAdminApprove from "../../components/register/WaitForAdminApprove";

const Register = () => {
  const location = useLocation();
  const isKitchenRegistration = location.pathname === "/register-kitchen";

  const [step, setStep] = useState(isKitchenRegistration ? 1 : 0);
  const [formData, setFormData] = useState({
    serviceType: "",
    fullName: "",
    emailOrPhone: "",
  });

  useEffect(() => {
    setStep(isKitchenRegistration ? 1 : 0);
  }, [isKitchenRegistration]);

  const nextStep = () => setStep((prev) => prev + 1);
  const updateData = (data) => setFormData((prev) => ({ ...prev, ...data }));

  switch (step) {
    case 0:
      return <StepOne next={nextStep} update={updateData} />;
    case 1:
      return <Services next={nextStep} update={updateData} />;
    case 2:
      return <StepOne next={nextStep} update={updateData} />;
    case 3:
      return <StepTwo next={nextStep} update={updateData} />;
    case 4:
      return <StepThree next={nextStep} update={updateData} />;
    case 5:
      return <StepFour data={formData} currentStep={5} next={nextStep} />;
    case 6:
      return <WaitForAdminApprove currentStep={6} />;
    default:
      return null;
  }
};

export default Register;
