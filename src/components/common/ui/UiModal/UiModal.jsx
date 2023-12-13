import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import UiSpinning from '../UiSpinning/UiSpinning';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser, faX } from '@fortawesome/free-solid-svg-icons';



const ModalButton = ({
    title,
    className = '',
    onClick,
}) => {
    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <button
            onClick={handleButtonClick}
            className={clsx(className, 'h-10 w-[120px] px-4 py-[11px]')}
        >
            <p className="text-center">{title}</p>
        </button>
    );
};

const ModalWidthLookUp = {
    '560': 'w-[560px]',
    '640': 'w-[640px]',
    '720': 'w-[720px]',
    '1140': 'w-[1140px]',
    '1200': 'w-[1200px]',
    '1486': 'w-[1486px]',
};

const commonTransition = {
    type: 'spring',
    stiffness: 570,
    damping: 40,
};
const framerInital = 'closed';

const backdropModalVariants = {
    open: {
        opacity: 0.4,
        display: 'block',
    },
    closed: {
        opacity: 0,
        transitionEnd: {
            display: 'none',
        },
    },
};

const mainModalVariants = {
    open: {
        opacity: 1,
        y: '0',
    },
    closed: {
        opacity: 0,
        y: '-100vh',
    },
};

const UiModal = ({
    visible,
    headerTitle,
    onClose,
    onConfirm,
    onCancel,
    children,
    modalWidth = '560',
    containerClassName = '',
    headerClassName = '',
    bodyClassName = '',
    footerClassName = '',
    footerButtonWrapperClassName = 'justify-center',
    confirmTitle = 'Confirm',
    confirmClassName = '',
    cancelTitle = 'Cancel',
    cancelClassName = '',
    markClassName = '',
    mainClassName = '',
    isLoading = false,
}) => {

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    };
    const handleConfirmModal = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    const handleModalAreaClick = (
        e
    ) => {
        // prevent onClick from parent (prevent close modal when click on backdrop)
        e.stopPropagation();
    };

    const framerAnimate = visible ? 'open' : 'closed';

    return (
        <div>
            {/* mask */}
            <motion.div
                initial={framerInital}
                animate={framerAnimate}
                variants={backdropModalVariants}
                transition={commonTransition}
                className={clsx(
                    'fixed inset-0 z-[1000] h-full bg-black-primary',
                    markClassName
                )}
            />
            {/* main */}
            <motion.div
                initial={framerInital}
                animate={visible ? 'open' : 'closed'}
                variants={mainModalVariants}
                transition={commonTransition}
                onClick={handleCloseModal}
                tabIndex={-1}
                className={clsx('fixed inset-0 z-[1001] text-center', mainClassName)}
            >
                <div className="inline-block h-full align-middle" />
                <div
                    onClick={handleModalAreaClick}
                    role="dialog"
                    aria-modal="true"
                    className={clsx(
                        containerClassName,
                        ModalWidthLookUp[modalWidth],
                        'relative z-[1005] mx-auto inline-block max-w-[calc(100vw-32px)] bg-white text-start align-middle'
                    )}
                >
                    {/* content */}
                    <div className="flex h-full max-h-[calc(100vh-32px)] flex-col">
                        {/* header */}
                        <div
                            className={clsx(
                                headerClassName,
                                'flex items-center border-b border-gray-primary px-4 py-[13.5px]'
                            )}
                        >
                            <p className="flex-1 text-md font-bold text-black-primary">
                                {headerTitle}
                            </p>
                            <button onClick={onCancel} >
                                <FontAwesomeIcon icon={faX} width={18} height={18} className='' />

                            </button>
                        </div>
                        {/* body */}
                        <div className={clsx(bodyClassName, 'flex-1 p-8 pb-0')}>
                            {children}
                        </div>
                        {/* footer */}
                        <div className={clsx(footerClassName, 'p-8')}>
                            <div
                                className={clsx(footerButtonWrapperClassName, 'flex gap-x-4')}
                            >
                                {!isLoading && (
                                    <React.Fragment>
                                        <ModalButton
                                            onClick={onCancel ?? handleCloseModal}
                                            title={cancelTitle}
                                            className={clsx(
                                                cancelClassName,
                                                'bg-gray-300 text-black-primary'
                                            )}
                                        />
                                        <ModalButton
                                            onClick={handleConfirmModal}
                                            title={confirmTitle}
                                            className={clsx(
                                                confirmClassName,
                                                'bg-blue-primary text-white'
                                            )}
                                        />
                                    </React.Fragment>
                                )}
                            </div>
                            {isLoading && <UiSpinning></UiSpinning>}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default UiModal;
