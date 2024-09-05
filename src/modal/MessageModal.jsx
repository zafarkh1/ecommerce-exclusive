import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import { useModalStore } from "../zustand/modalStore";

function MessageModal(props) {
  const { isOpen, closeModal } = useModalStore();

  if (!isOpen) return null;
  console.log(isOpen);

  return (
    <>
      <div className="fixed inset-0 z50 flex items-center justify-center">
        {/*         Overlay        */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        ></div>

        {/*           Content         */}
        <div className="bg-white relative z-10 p-8 rounded shadow-lg  lg:w-1/3">
          <h3 className="lg:text-2xl text-lg font-medium text-center">
            O'z ma'lumotlaringizni qoldiring
          </h3>
          <p className="my-4 text-center">
            Ushbu mahsulotlarni telegram botimizga yuboring va tez orada
            yetkaizb beramiz!
          </p>
          <form className="">
            <input
              type="text"
              placeholder="Name"
              className="lg:px-4 lg:py-4 w-full rounded-lg outline-none border border-gray-200 lg:text-xl"
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
                marginBlock: "1rem",
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "0.5rem",
                paddingBlock: "2rem",
                paddingInline: "3rem",
                fontSize: "1.25rem",
                borderColor: "#e5e7eb",
              }}
            />
            <button
              className="w-full py-4 text-lg bg-rose-700 hover:bg-rose-600 transition-all 
                   duration-300 text-white  rounded"
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
