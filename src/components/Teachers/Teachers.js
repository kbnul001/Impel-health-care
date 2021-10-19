import React from 'react';
import imgkamil from '../../images/doctors/kamil.jpeg'
import imgMahib from '../../images/doctors/siam.jpeg'
import imgReshad from '../../images/doctors/reshad.jpeg'
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-16 mt-8 mb-16">
            <Teacher name="Mahib Mahmud" img={imgMahib}></Teacher>
            <Teacher name="Reshad Mollik" img={imgReshad}></Teacher>
            <Teacher name="Kamil Hassan" img={imgkamil}></Teacher>
        </div>
    );
};

export default Teachers;