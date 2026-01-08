import { useNavigate } from "react-router-dom";

const ServiceSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Select the service you want to register for
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-xl text-gray hover:text-dark"
          >
            ✕
          </button>
        </div>

        {/* ONLY ONE OPTION */}
        <div
          onClick={() => navigate("/register/start")}
          className="flex items-center justify-between p-6 rounded-xl border border-[var(--border-light)]
                     hover:shadow-md cursor-pointer transition bg-[var(--primary-light)]"
        >
          <div>
            <h3 className="text-lg font-semibold">
              Cloud Kitchen Services
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              List your kitchen for delivery-only operations
            </p>
            <span className="text-sm text-[var(--primary-color)] font-medium mt-3 inline-block">
              Register now
            </span>
          </div>

          {/* Icon */}
          <div className="text-5xl">🍽️</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelect;
