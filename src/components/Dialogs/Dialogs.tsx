import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <div className={s.dialogs_item}>
                    Ivan
                </div>
                <div className={s.dialogs_item}>
                    Ivan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialogs_item}>
                    Hello!
                </div>
                <div className={s.dialogs_item}>
                    Buy!
                </div>
            </div>
        </div>
    );
};

export default Dialogs;