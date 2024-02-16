import React from 'react'
import styles from './enrich.module.css';
import { Intranet, Moodle, Turnitin } from '@/assets/svg';
import Image from 'next/image';

const Enrich = () => {
    return (
        <div style={{ margin: '20px 0' }}>
            <div className={`${styles.enrichItem}`}>
                <h3 className={`${styles.itemHead}`}>Import Assignment and Feedback Data</h3>
                <div>
                    <div style={{ display: 'flex', gap:'15px' }}>
                        {syncArray1.map((item, index) => (
                            <SyncItem image={item.image} text={item.text} key={index} width={`${100 / syncArray.length}%`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enrich;

const SyncItem = ({ image, text, width }) => {
    return (
        <div className={`${styles.syncItem}`} style={{ width: width ? width : 'auto' }}>
            <Image src={image} alt="logo" />
            <p style={{fontSize:'14px', color:"#757575", fontWeight:500}}>{text}</p>
        </div>
    )
}

const UploadItem = ({ image, text, width }) => {
    return (
        <div className={`${styles.uploadItem}`} style={{ width: width ? width : 'auto' }}>
            <Image src={image} alt="logo" />
            <p style={{fontSize:'14px', color:"#757575", fontWeight:500}}>{text}</p>
        </div>
    )
}

const syncArray1 = [
    { image: Moodle, text: 'Sync with Moodle' },
    { image: Turnitin, text: 'Sync with Moodle' },
    { image: Intranet, text: 'Sync with Moodle' }
]

