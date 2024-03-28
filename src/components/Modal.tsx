'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Basic from "~/components/form";

export default function ReuseableModal({Label,initialValue,fields ,submitFunc}:{Label:string,initialValue:any,fields:any[],submitFunc: (val: any) => void}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{Label}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                className={'flex justify-center items-center'}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Basic
                  initialValues={initialValue}
              fields={fields}
                  label={Label}
              submitFunc={submitFunc}
              />
            </Modal>
        </div>
    );
}
