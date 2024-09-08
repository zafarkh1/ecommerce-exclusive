import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import { useModalStore } from "../zustand/modalStore";
import "./modal.css";
import { useCallback, useEffect, useState } from "react";
import Message from "./Message";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

function MessageModal({ price }) {
  const { isOpen, closeModal } = useModalStore();
  const [isVisible, setIsVisible] = useState(false);
  const { sendMessage, loading } = Message();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      closeModal();
    }, 4000); // Close the modal after 1 second
  }, [closeModal]);

  const validateName = () => {
    if (!name) {
      setNameError(t("MsgModal.validation.nameRequired"));
      return false;
    }
    if (name.length < 3) {
      setNameError(t("MsgModal.validation.nameMinLength"));
      return false;
    }
    if (!isNaN(name)) {
      setNameError(t("MsgModal.validation.nameNotNumber"));
      return false;
    }
    setNameError("");
    return true;
  };

  const validateTel = () => {
    if (!tel) {
      setTelError(t("MsgModal.validation.telRequired"));
      return false;
    }
    setTelError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isTelValid = validateTel();

    if (isNameValid && isTelValid) {
      try {
        await sendMessage({ name, tel }); // Pass name and tel to sendMessage
        toast.success(t("MsgModal.successMessage"));
        setName(""); // Clear name input
        setTel(""); // Clear phone input
        setTimeout(() => {
          handleClose(); // Close the modal after a short delay
        }, 1000); // Adjust this delay if needed
      } catch (err) {
        toast.error(t("MsgModal.errorMessage"));
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={handleClose}
        ></div>

        <div className="relative bg-white lg:w-1/3 md:w-2/3 w-[90%] lg:px-10 sm:pt-10 sm:pb-6 pt-8 pb-4 px-8 rounded-lg shadow-lg z-10 transform transition-transform duration-300">
          <h3 className="lg:text-2xl text-xl font-medium text-center">
            {t("MsgModal.heading")}
          </h3>
          <p className="my-4 text-center lg:text-lg md:text-base text-sm">
            {t("MsgModal.text")}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                className="lg:px-4 lg:py-4 px-2 py-2 w-full rounded-md outline-none border-gray-200 border"
              />
              {nameError && (
                <p className="text-red-600 text-sm mt-2">{nameError}</p>
              )}
            </div>

            <div className="mb-4">
              <PhoneInput
                country={"uz"}
                value={tel}
                onChange={(phone) => setTel(phone)}
                inputProps={{ id: "tel", required: true, autoFocus: true }}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                  borderRadius: "0.4rem",
                  borderColor: "#e5e7eb",
                }}
                containerClass="input-container"
                inputClass="input"
              />
              {telError && (
                <p className="text-red-600 text-xl mt-0">{telError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full lg:py-4 py-2 lg:text-lg bg-rose-700 hover:bg-rose-600 transition-all duration-300 text-white rounded-md"
            >
              {loading ? t("MsgModal.loadingBtn") : t("MsgModal.btn")}
            </button>
          </form>
          {price && (
            <h5 className="lg:text-xl font-medium text-right mt-4">
              {t("cart.total")}
              {`: ${price} $`}
            </h5>
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default MessageModal;
