import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    const [show, setShow] = useState(isOpen);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            timeoutRef.current = setTimeout(() => setShow(false), 200); // match transition duration
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isOpen]);

    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative transform transition-all duration-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={e => e.stopPropagation()}
            >
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;