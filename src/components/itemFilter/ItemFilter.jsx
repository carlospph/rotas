import React from 'react';
import styles from '../../pages/GlobalPage.module.css';

export function ItemFilter({name, id, label, value }) {

    return (
        <div className={styles.dflex}>
                <input type="checkbox" id={id} name={name} value={value} />
                <label htmlFor={id}>{label}</label>
        </div>
    );
}