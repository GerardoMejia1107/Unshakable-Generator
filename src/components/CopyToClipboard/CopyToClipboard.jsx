import React from "react";
import "./styles.css";
import Swal from "sweetalert2";

const CopyToClipboardButton = ({ textToCopy }) => {
    const handleCopy = async () => {
        try {
            if (textToCopy.length === 0) {
                Swal.fire({
                    title: "Nothing to copy",
                    icon: "warning",
                    timer: 1500,
                    showConfirmButton: false,
                });
                return;
            }

            await navigator.clipboard.writeText(textToCopy);
            Swal.fire({
                title: "Copied to clipboard",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
            });
        } catch (err) {
            Swal.fire({
                title: "Failed to copy",
                icon: "error",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };

    return (
        <button className="button" onClick={handleCopy}>
            Copy
        </button>
    );
};

export default CopyToClipboardButton;
