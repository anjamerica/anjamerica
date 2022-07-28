const ConfirmAlert = ({
    content,
    handleConfirm,
    handleCancel,
}) => {
    return (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto `}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">
            <div className="fixed flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-opacity-25 bg-white"
                    aria-hidden="true"
                />
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">
                    &#8203;
                </span>

                <div className="fixed top-[50%] left-[50%] inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" style={{ transform: "translate(-50%, -50%)" }}>
                    <div className="p-10 bg-secondry-gray w-full  my-auto gap-4">

                        <p className="text-xl text-[#333333]">{content}</p>
                        <div className="col-span-12  mt-10 flex gap-2 justify-end">
                            <button
                                onClick={handleCancel}
                                className="bg-primary-gray px-4 py-1 font-semibold text-white rounded-md "
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="bg-primary-red hover:bg-primary-red font-semibold text-white px-4 py-1 rounded-md "
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmAlert;