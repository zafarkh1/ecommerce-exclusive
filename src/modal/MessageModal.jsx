import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import { useModalStore } from "../zustand/modalStore";
import "./modal.css";
import { useCallback, useEffect, useState } from "react";

function MessageModal(props) {
  const { isOpen, closeModal } = useModalStore();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when modal opens
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = "";
    }

    // Clean up in case modal is closed and scrolling was not re-enabled
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={handleClose}
        ></div>

        {/* Content */}
        <div
          className="relative bg-white lg:w-1/3 md:w-2/3 w-[90%] lg:px-10 sm:py-10 py-8 px-8 rounded-lg 
        shadow-lg z-10 transform transition-transform duration-300"
        >
          <h3 className="lg:text-2xl text-xl font-medium text-center">
            Complete Your Information
          </h3>
          <p className="my-4 text-center lg:text-lg md:text-base text-sm">
            Please provide your details to complete the purchase. We will
            process your order and deliver it as soon as possible.
          </p>

          <form className="">
            <input
              type="text"
              placeholder="Name"
              className="lg:px-4 lg:py-4 px-2 py-2 w-full rounded-md outline-none border-gray-200 
               border "
            />
            <PhoneInput
              country={"uz"}
              value={""}
              onChange={(x) => console.log(x)}
              inputProps={{
                id: "tel",
                required: true,
                autoFocus: true,
              }}
              containerStyle={{
                width: "100%",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "0.4rem",
                borderColor: "#e5e7eb",
              }}
              containerClass="input-container"
              inputClass="input"
            />

            <button
              className="w-full lg:py-4 py-2 lg:text-lg bg-rose-700 hover:bg-rose-600 transition-all 
                   duration-300 text-white rounded-md"
            >
              Buy now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MessageModal;
